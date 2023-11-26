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
import Image from "next/image";

interface PaidOrderCardProps {
  order: Order;
}

const PaidOrderCard: React.FC<PaidOrderCardProps> = ({ order }) => {
  const { mutate } = useSWRConfig();
  const { data: coffeeData, isLoading } = useCoffee(order.coffeeId);
  const body = useMemo(() => {
    if (isLoading || !coffeeData?.data) {
      return <div>sabar bg</div>;
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
            <p>orderId : {order.id}</p>
            <div className="flex flex-row flex-1 w-full mt-auto mb-2">
              <Image
                alt="cafe"
                src={"/images/decoration/cafe.png"}
                height={20}
                width={20}
              />
              <Image
                alt="car"
                src={"/images/decoration/car.png"}
                height={20}
                width={20}
              />
              <Image
                alt="home"
                src={"/images/decoration/home.png"}
                height={20}
                width={20}
              />
            </div>
          </div>
        </>
      );
    }
  }, [coffeeData, isLoading]);
  return <div className="flex flex-row gap-x-5">{body}</div>;
};

export default PaidOrderCard;
