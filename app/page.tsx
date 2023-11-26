"use client";

import useModal from "@/hooks/useModal";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Hero from "@/components/main/Hero";
import Story from "@/components/main/Story";
import Values from "@/components/main/Values";
import Products from "@/components/main/Products";

export default function Home() {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  const modal = useModal();
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Hero />
      <Story />
      <Values />
      <Products />
    </main>
  );
}
