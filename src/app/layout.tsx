import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anuja Rahul",
  description: "Welcome to my portfolio/blog site.",
  authors: [{ name: "Anuja Rahul" }],
  creator: "Anuja Rahul",
  openGraph: {
    description:
      "Hello 👋, I'm a Web developer/ Software developer/ CS Undergraduate from Sri Lanka.",
  },
  icons: {
    icon: "./favicon.png", //public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
