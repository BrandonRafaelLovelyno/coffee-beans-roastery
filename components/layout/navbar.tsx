"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import NavbarLogo from "../navbar-logo";
import ProfileAvatar from "../profile-avatar";
import { signIn, useSession } from "next-auth/react";
import useModal from "@/hooks/useModal";

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
  {
    title: "ORDERED",
    href: "/ordered",
  },
];

const Navbar = () => {
  const modal = useModal();
  const router = useRouter();
  const pathName = usePathname();
  const { data: session, status } = useSession();
  return (
    <div className="absolute top-0 w-full z-[100]">
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
        <div
          onClick={() => {
            modal.onOpen("login", {});
          }}
          className="cursor-pointer"
        >
          <ProfileAvatar
            imageUrl={
              status == "unauthenticated" ||
              status == "loading" ||
              !session?.user.imageUrl
                ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                : session.user.imageUrl
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
