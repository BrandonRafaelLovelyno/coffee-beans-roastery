"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavbarLogo = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center cursor-pointer gap-x-3"
      onClick={() => router.push("/")}
    >
      <Image alt="logo" src="/images/Logo.png" height={70} width={70} />
      <div className="flex flex-col items-start justify-center gap-y-1">
        <Image alt="Bean" src="/images/Bean.png" height={80} width={80} />
        <Image
          alt="Masters"
          src="/images/Masters.png"
          height={120}
          width={120}
        />
      </div>
    </div>
  );
};

export default NavbarLogo;
