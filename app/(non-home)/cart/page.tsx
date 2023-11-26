"use client";
import MotionDivUp from "@/components/motion-div/motion-div-up";
import OrderCard from "@/components/order/order-card";
import useOrder from "@/hooks/useOrder";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

const page = () => {
  const { data: orderData, isLoading } = useOrder();
  const body = useMemo(() => {
    if (isLoading || !orderData?.data) {
      return <div>sabar bg</div>;
    } else {
      const unPaidOrder = orderData.data.filter((o) => !o.hasPaid);
      if (unPaidOrder.length == 0) {
        return <div>You havent made any order</div>;
      }
      return unPaidOrder.map((o) => {
        if (!o.hasPaid) {
          return <OrderCard order={o} />;
        }
      });
    }
  }, [isLoading, orderData?.data]);
  return (
    <MotionDivUp duration={0.2} delay={0.2}>
      <main>
        <h1 className="text-3xl font-bold tracking-widest">Your Cart</h1>
        <div
          className={twMerge(
            isLoading && " flex flex-col justify-center items-center",
            "w-full h-full",
            !isLoading && "grid grid-cols-2 pt-10"
          )}
        >
          {body}
        </div>
      </main>
    </MotionDivUp>
  );
};

export default page;
