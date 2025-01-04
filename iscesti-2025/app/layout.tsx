import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/Menubar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISCESIT-2025",
  description: "International Conference on Innovations and Sustainability in Civil Engineering: Shaping Tomorrow's Infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="h-16 fixed w-full shadow-md bg-zinc-700 z-20">
          <Menubar />
        </div>
        <div className="relative top-16 z-10">
          {children}
          <div className="">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
