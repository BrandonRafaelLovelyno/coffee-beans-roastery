import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prismadb from "@/lib/orm/prismadb";
import { Profile } from "@prisma/client";
import bcrypt from "bcrypt";

const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismadb),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "email", type: "password" },
      },
      async authorize(credentials): Promise<Profile> {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Missing fields");
        }
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) {
          throw new Error("Invalid credentials");
        }
        if (user.isGoogle) {
          throw new Error("Email has been registered with google");
        }
        const profile = await prismadb.profile.findUnique({
          where: {
            userId: user.id,
          },
        });
        if (!profile) {
          throw new Error("Invalid credentials");
        }
        const isPassValid = await bcrypt.compare(
          credentials.password,
          profile.hashedPassword!
        );
        if (!isPassValid) {
          throw new Error("Invalid credentials");
        }
        return profile;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      const user = await prismadb.user.findUnique({
        where: {
          email: token.email!,
        },
      });
      if (!user) {
        throw new Error("Invalid credentials");
      }
      const profile = await prismadb.profile.findUnique({
        where: {
          userId: user.id,
        },
      });
      token.imageUrl = profile?.imageUrl;
      token.profileId = profile?.id || "";
      return token;
    },
    async session({ session, token, user }) {
      console.log("\n", "session callback", token, user, session);
      session.user.imageUrl = token.imageUrl as string;
      session.user.name = token.name as string;
      session.user.profileId = token.profileId as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== "production",
};

export default nextAuthOptions;
