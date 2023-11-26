"use client";

import MotionDivUp from "@/components/motion-div/motion-div-up";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-screen px-5 pt-32">{children}</div>;
};

export default Layout;
