import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css"
import "@uploadthing/react/styles.css";

import { ClerkProvider } from '@clerk/nextjs'
import { TopNav } from "./_components/topnav";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery App",
  description: "Gallery App",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.className} flex flex-col gap-4 `} >
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
