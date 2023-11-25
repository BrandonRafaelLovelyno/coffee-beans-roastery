"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import NavbarLogo from "../navbar-logo";

interface NavLinks {
  title: string;
  href: string;
}

const navLinks: NavLinks[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "COFFEE",
    href: "/coffee",
  },
  {
    title: "CART",
    href: "/cart",
  },
];

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="relative flex items-center justify-between px-8 py-5 bg-opacity-50 bg-orange-950">
      <NavbarLogo />
      <div className="flex flex-row self-center gap-x-5">
        {navLinks.map((link) => (
          <div
            className={twMerge(
              "text-lg font-semibold tracking-widest text-gray-300 duration-300 hover:cursor-pointer hover:text-yellow-700",
              pathName == link.href && "underline text-yellow-700"
            )}
            onClick={() => router.push(link.href)}
          >
            {link.title}
          </div>
        ))}
      </div>
      <div>logen</div>
    </div>
  );
};

export default Navbar;
