"use client";

import React, { useState, useEffect } from "react";
import LoginModal from "../modal/login-modal";
import RegisterModal from "../modal/register-modal";
import BuyModal from "../modal/buy-modal";
import LogOutModal from "../modal/logout-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  });
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <LogOutModal />
      <BuyModal />
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default ModalProvider;
