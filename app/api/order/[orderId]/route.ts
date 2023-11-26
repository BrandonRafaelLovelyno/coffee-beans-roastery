import nextAuthOptions from "@/lib/auth/next-auth-option";
import prismadb from "@/lib/orm/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    if (!params.orderId) {
      throw new Error("Missing fields");
    }
    const session = await getServerSession(nextAuthOptions);
    if (!session) {
      throw new Error("Unauthorized");
    }
    const updatedOrder = await prismadb.order.update({
      where: {
        id: params.orderId,
        profileId: session.user.profileId,
      },
      data: {
        hasPaid: true,
      },
    });
    if (!updatedOrder) {
      throw new Error("Invalid orderid");
    }
    return NextResponse.json({
      success: true,
      message: "",
      data: {},
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: (err as Error).message,
      data: {},
    });
  }
}
