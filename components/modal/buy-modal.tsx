"use client";

import useModal from "@/hooks/useModal";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MotionDivUp from "../motion-div/motion-div-up";
import CoffeeImage from "../coffee/coffee-image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axios from "axios";
import { ApiRes } from "@/lib/types/api-response";
import { Button } from "../ui/button";
import { useSWRConfig } from "swr";

const BuyModal = () => {
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sum, setSum] = useState<number>(1);
  const modal = useModal();
  const onMinus = () => {
    if (sum > 1) {
      setSum(sum - 1);
    }
  };
  const onPlus = () => {
    if (sum < (modal.coffee?.stock || 100)) {
      setSum(sum + 1);
    }
  };
  const onAdd = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post<ApiRes>("/api/order", {
        coffeeId: modal.coffee?.id,
        sum,
      });
      if (!res.data.success) {
        throw new Error(res.data.message);
      }
      toast.success("Added to the cart");
      modal.onClose();
      setSum(1);
      mutate("/api/coffee");
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog
      open={modal.isOpen && modal.type == "buy"}
      onOpenChange={() => {
        modal.onClose();
      }}
    >
      <DialogContent className="py-0 min-w-fit">
        <div className="flex flex-row w-full">
          <div className="w-[30%] mt-4 h-full flex flex-col items-center justify-center">
            <CoffeeImage
              size={80}
              cupImageUrl={modal.coffee?.cupImageUrl || ""}
              packImageUrl={modal.coffee?.packImageUrl || ""}
              key={modal.coffee?.name}
            />
          </div>
          <div className="flex-1 px-5 py-3">
            <MotionDivUp delay={0.3} duration={0.3} key="login-modal">
              <DialogHeader className="text-lg tracking-widest">
                Add Product
              </DialogHeader>
              <DialogDescription className="mb-5">
                Add to shopping cart
              </DialogDescription>
              <div>
                <p className="tracking-wide text-yellow-500">
                  {modal.coffee?.name}
                </p>
                <p className="tracking-widest">
                  Total : {modal.coffee?.price ? sum * modal.coffee.price : 0}
                </p>
                <p className="tracking-widest">
                  Stock : {(modal.coffee?.stock || 100) - sum}
                </p>
              </div>
              <div className="flex flex-row justify-between w-full mt-5">
                <p>Sum : </p>
                <div className="flex flex-row mr-3 gap-x-2">
                  <button onClick={onMinus} disabled={isLoading}>
                    <FaMinus size={20} />
                  </button>
                  <span>{sum}</span>
                  <button onClick={onPlus} disabled={isLoading}>
                    <FaPlus size={20} />
                  </button>
                </div>
              </div>
              <div className="w-full mt-8">
                <Button
                  onClick={onAdd}
                  className="w-full font-bold tracking-widest text-white bg-yellow-500 hover:bg-yellow-900"
                  disabled={isLoading}
                >
                  Add to cart
                </Button>
              </div>
            </MotionDivUp>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BuyModal;
