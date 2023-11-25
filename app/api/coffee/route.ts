import prismadb from "@/lib/orm/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const coffees = await prismadb.coffee.findMany({});
    console.log(coffees);
    return NextResponse.json({
      data: coffees,
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
