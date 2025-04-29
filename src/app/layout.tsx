import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "./footer";

const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--cinzel",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hollow Knight",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${cinzel.variable}`}>
      <body
        className={`${montserrat.className} antialiased text-[#F5F5F5]`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
