import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import nextAuthOptions from "@/lib/auth/next-auth-option";
import SessionProvider from "@/components/provider/session-provider";
import AnimatePresence from "@/components/provider/animate-pressence";
import { Toaster } from "react-hot-toast";
import ModalProvider from "@/components/provider/modal-provider";
import ThemeProvider from "@/components/provider/theme-provider";
import Navbar from "@/components/layout/navbar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={raleway.className}>
          <ThemeProvider
            defaultTheme="dark"
            enableSystem={false}
            attribute="class"
          >
            <AnimatePresence>
              <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                  className: "",
                  duration: 5000,
                  style: {
                    background: "#363636",
                    color: "#fff",
                  },
                }}
              />
              <ModalProvider />
              <div className="flex flex-col w-full h-fit select-none">
                <Navbar />
                {children}
              </div>
            </AnimatePresence>
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
