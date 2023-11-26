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
import ProgressLoader from "../loader/progress-loader";

interface PaidOrderCardProps {
  order: Order;
}

const PaidOrderCard: React.FC<PaidOrderCardProps> = ({ order }) => {
  const { mutate } = useSWRConfig();
  const { data: coffeeData, isLoading } = useCoffee(order.coffeeId);
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
            <p>orderId : {order.id}</p>
            <div className="flex flex-row items-center flex-1 w-full pr-10 mt-auto mb-2">
              <div className="relative w-10 h-10">
                <Image
                  alt="cafe"
                  src={"/images/decoration/cafe.png"}
                  fill
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col flex-1">
                <div className="relative w-10 h-10">
                  <Image alt="car" src={"/images/decoration/car.png"} fill />
                </div>
                <div className="w-full h-[2px] bg-white rounded-full relative">
                  <div
                    className={`h-[2px] w-[${order.profileId}%] absolute bg-yellow-500`}
                  />
                </div>
                <p className="w-full text-center">{order.progress}%</p>
              </div>
              <div className="relative w-10 h-10">
                <Image alt="home" src={"/images/decoration/home.png"} fill />
              </div>
            </div>
          </div>
        </>
      );
    }
  }, [coffeeData, isLoading]);
  return <div className="flex flex-row gap-x-5">{body}</div>;
};

export default PaidOrderCard;
