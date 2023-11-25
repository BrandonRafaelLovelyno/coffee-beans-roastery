"use client";

import useModal from "@/hooks/useModal";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  const modal = useModal();
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      {sessionStatus == "authenticated" ? (
        <div>{session.user.email}</div>
      ) : (
        <div>unauthenticated</div>
      )}
      <button className="mt-5 tracking-wide" onClick={() => signIn("google")}>
        logen google
      </button>
      <button className="mt-5" onClick={() => modal.onOpen("register")}>
        register email
      </button>
      <button className="mt-5" onClick={() => modal.onOpen("login")}>
        login email
      </button>
      <button onClick={() => router.push("/coffee")}>coffee page</button>
      <Image
        alt="img"
        src={
          "https://utfs.io/f/9fa3b9d9-456b-488e-be43-58ced75b30c6-8l80ia.png"
        }
        width={100}
        height={100}
      />
    </main>
  );
}
