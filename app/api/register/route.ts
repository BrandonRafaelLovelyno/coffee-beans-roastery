import prismadb from "@/lib/orm/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();
    if (!email || !password || !name) {
      throw new Error("Missing fields");
    }
    if (!validateEmail(email)) {
      throw new Error("Invalid email");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prismadb.user.create({
      data: {
        email,
        isGoogle: false,
        name,
      },
    });
    const newProfile = await prismadb.profile.create({
      data: {
        userId: newUser.id,
        email: email,
        hashedPassword,
        name,
      },
    });
    return NextResponse.json({
      success: true,
      message: "",
      data: newProfile,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: (err as Error).message,
      data: {},
    });
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
