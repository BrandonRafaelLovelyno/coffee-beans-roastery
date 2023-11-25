import { createUploadthing, type FileRouter } from "uploadthing/next";
import prismadb from "@/lib/orm/prismadb";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import nextAuthOptions from "@/lib/auth/next-auth-option";

const f = createUploadthing();

const auth = async () => {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    throw new Error("Unauthorized");
  }
  const profile = await prismadb.user.findUnique({
    where: {
      id: session.user.profileId,
    },
  });
  if (!profile) {
    throw new Error("Unauthorized");
  }
  return profile;
};

const ourFileRouter = {
  userImage: f({ image: { maxFileSize: "8MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      //const profile = await auth();
      return { name: "ya" };
    })
    .onUploadComplete(({ metadata }) => {
      console.log("upload by", metadata.name, "success");
    }),
} satisfies FileRouter;

export default ourFileRouter;

export type OurFileRouter = typeof ourFileRouter;
