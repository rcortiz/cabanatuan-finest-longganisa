import type { Metadata } from "next";
import {
  Quicksand,
  Imprima,
  Oswald,
  Yellowtail,
  Barlow,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header/header";
import Footer from "@/components/sections/footer";
import Banner from "@/components/ui/banner";

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

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: ["400"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400"],
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
        className={`${imprima.variable} ${quicksand.variable} ${oswald.variable} ${yellowtail.variable} ${barlow.variable} antialiased`}
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
