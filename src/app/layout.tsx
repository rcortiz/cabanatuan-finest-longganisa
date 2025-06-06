import type { Metadata } from "next";
import { Inter, Playfair_Display, Quicksand, Imprima } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Banner from "@/components/ui/banner-notif";

const imprima = Imprima({
  variable: "--font-imprima",
  subsets: ["latin"],
  weight: ["400"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cabanatuan Finest Longganisa",
  description: "Official website for Cabanatuan Finest Longganisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${imprima.variable} ${quicksand.variable} font-inte antialiased`}
      >
        <div className="bg-background grid min-h-[100dvh] grid-rows-[auto_1fr_auto] overflow-y-auto">
          <Banner />
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
