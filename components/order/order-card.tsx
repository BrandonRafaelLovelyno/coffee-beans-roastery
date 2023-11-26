"use client";

import { Order } from "@prisma/client";
import React, { useMemo, useState } from "react";
import CoffeeImage from "../coffee/coffee-image";
import useCoffee from "@/hooks/useCoffee";
import { ApiRes, CoffeeRes } from "@/lib/types/api-response";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSWRConfig } from "swr";
import ProgressLoader from "../loader/progress-loader";

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const { mutate } = useSWRConfig();
  const { data: coffeeData, isLoading } = useCoffee(order.coffeeId);
  const onBuy = async () => {
    try {
      const res = await axios.patch<ApiRes>(`/api/order/${order.id}`);
      if (!res.data.success) {
        throw new Error(res.data.message);
      }
      toast.success("Product bought");
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      mutate("/api/order");
    }
  };
  const body = useMemo(() => {
    if (isLoading || !coffeeData?.data) {
      return (
        <div className="flex items-center justify-center w-full h-full">
          <ProgressLoader />
        </div>
      );
    } else {
      const finalCoffee = (coffeeData as CoffeeRes).data;
      return (
        <>
          <div className="w-[20%] pt-5">
            <CoffeeImage
              cupImageUrl={finalCoffee.cupImageUrl}
              packImageUrl={finalCoffee.packImageUrl}
              size={80}
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="tracking-widest text-yellow-500">
              {finalCoffee.name}
            </p>
            <p>sum : {order.sum}</p>
            <p>total : ${order.sum * finalCoffee.price}</p>
            <Button
              className="w-[40%] mt-auto bg-yellow-500 text-bold font-white tracking-widest hover:bg-yellow-800"
              onClick={onBuy}
            >
              Buy now
            </Button>
          </div>
        </>
      );
    }
  }, [coffeeData, isLoading]);
  return <div className="flex flex-row gap-x-5">{body}</div>;
};

export default OrderCard;
