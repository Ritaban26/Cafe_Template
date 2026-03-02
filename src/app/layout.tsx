import type { Metadata } from "next";
import { Questrial, Petrona } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const questrial = Questrial({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const petrona = Petrona({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Quiet Mug – Specialty Coffee & More",
  description:
    "Brewed with care, served with heart. Order ahead or come enjoy the vibe in person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${questrial.variable} ${petrona.variable} bg-background text-text antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
