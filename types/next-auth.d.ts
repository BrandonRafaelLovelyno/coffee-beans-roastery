import { DefaultSession, Token } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      profileId: string;
      username: string;
      name: string;
      createdAt: Date;
      imageUrl: String?;
    } & DefaultSession["user"];
  }
}

declare module "next-auth" {
  interface Token {
    createdAt: Date;
    username: string;
    name: string;
    email: string;
    imageUrl: String?;
    profileId: String;
  }
}
