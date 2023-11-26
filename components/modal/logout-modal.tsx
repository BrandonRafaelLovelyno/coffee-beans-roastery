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

const LogOutModal = () => {
  const modal = useModal();
  return <Dialog open={modal.isOpen && modal.type == "logout"}></Dialog>;
};

export default LogOutModal;
