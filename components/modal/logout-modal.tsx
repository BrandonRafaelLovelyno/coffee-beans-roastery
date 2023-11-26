"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useModal from "@/hooks/useModal";
import { signOut } from "next-auth/react";

const LogOutModal = () => {
  const modal = useModal();
  return (
    <Dialog open={modal.isOpen && modal.type == "logout"}>
      <DialogContent>
        <DialogHeader className="text-lg tracking-widest">Logout</DialogHeader>
        <DialogDescription className="mb-5">
          Delete user session
        </DialogDescription>
        <div className="flex items-center justify-center w-full h-full">
          <button onClick={() => signOut()}>logout</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LogOutModal;
