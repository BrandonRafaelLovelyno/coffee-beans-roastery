import nextAuthOptions from "@/lib/auth/next-auth-option";
import prismadb from "@/lib/orm/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(nextAuthOptions);
    if (!session) {
      throw new Error("Unauthorized");
    }
    const orders = await prismadb.order.findMany({
      where: {
        profileId: session.user.profileId,
      },
    });
    return NextResponse.json({
      success: true,
      message: "",
      data: orders,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: (err as Error).message,
      data: {},
    });
  }
}

export async function POST(req: Request) {
  try {
    const { sum, coffeeId } = await req.json();
    if (!sum || !coffeeId) {
      throw new Error("Missing fields");
    }
    const session = await getServerSession(nextAuthOptions);
    if (!session) {
      throw new Error("Unauthorized");
    }
    const newOrder = await prismadb.order.create({
      data: {
        coffeeId,
        hasPaid: false,
        progress: 0,
        profileId: session.user.profileId,
        sum,
      },
    });
    const updatedCoffee = await prismadb.coffee.update({
      where: {
        id: coffeeId,
      },
      data: {
        stock: {
          decrement: sum,
        },
      },
    });
    if (!newOrder || !updatedCoffee) {
      throw new Error("Error on creating the order");
    }
    return NextResponse.json({
      success: true,
      message: "",
      data: newOrder,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: (err as Error).message,
      data: {},
    });
  }
}
