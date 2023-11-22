"use client";

import useModal from "@/hooks/useModal";
import { useSession, signIn } from "next-auth/react";

export default function Home() {
  const { data: session, status: sessionStatus } = useSession();
  const modal = useModal();
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      {sessionStatus == "authenticated" ? (
        <div>{session.user.email}</div>
      ) : (
        <div>unauthenticated</div>
      )}
      <button className="mt-5" onClick={() => signIn("google")}>
        logen google
      </button>
      <button className="mt-5" onClick={() => modal.onOpen("register")}>
        register email
      </button>
      <button className="mt-5" onClick={() => modal.onOpen("login")}>
        login email
      </button>
    </main>
  );
}
