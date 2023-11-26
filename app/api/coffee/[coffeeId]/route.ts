import prismadb from "@/lib/orm/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { coffeeId: string } }
) {
  try {
    if (!params.coffeeId) {
      throw new Error("Missing fields");
    }
    const coffee = await prismadb.coffee.findUnique({
      where: {
        id: params.coffeeId,
      },
    });
    return NextResponse.json({
      data: coffee,
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
