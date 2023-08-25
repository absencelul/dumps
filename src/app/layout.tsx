import type { Metadata } from "next";
import Nav from "@/app/components/Nav";

import "./globals.css";

export const metadata: Metadata = {
  title: "dumps.io",
  description: "Game dumps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 dark:bg-gray-900 font-sans antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
