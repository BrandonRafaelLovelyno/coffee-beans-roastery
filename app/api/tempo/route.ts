import prismadb from "@/lib/orm/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { cupLink, packLink, cName } = await req.json();
    if (
      !cupLink ||
      cupLink == "" ||
      packLink == "" ||
      !packLink ||
      !cName ||
      cName == ""
    ) {
      throw new Error("link ga masuk ");
    }
    const updatedCoffee = await prismadb.coffee.update({
      where: {
        name: cName,
      },
      data: {
        cupImageUrl: cupLink,
        packImageUrl: packLink,
      },
    });
    if (!updatedCoffee) {
      throw new Error("Salah nama woi");
    }
    return NextResponse.json({
      data: updatedCoffee,
      message: "",
      success: true,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: (err as Error).message,
      data: {},
    });
  }
}
