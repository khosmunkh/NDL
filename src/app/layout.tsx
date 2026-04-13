import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageAnimatePresence from "@/components/PageAnimatePresence";
import SmoothScroll from "@/components/SmoothScroll";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NDL RECORDS | The Future of Sound",
  description: "Official website of NDL Label - Music, Visuals, and Culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="bg-black text-white min-h-full flex flex-col">
        <SmoothScroll>
          {/* Бүх хуудас дээр харагдах Navbar */}
          <Navbar />
          
          {/* Хуудас хоорондын шилжилтийн эффект */}
          <PageAnimatePresence>
            <main className="flex-grow">
              {children}
            </main>
          </PageAnimatePresence>
        </SmoothScroll>
      </body>
    </html>
  );
}
