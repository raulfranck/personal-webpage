import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-zinc-950`}>
        <Header></Header>
        <section className="container">{children}</section>
      </body>
    </html>
  );
}
