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
      "Welcome to my corner of the web! 🚀 As a passionate junior frontend web developer and Python enthusiast, I bring a blend of creativity and technical prowess to every project. Specializing in crafting delightful user experiences with Next.js and Tailwind CSS, I thrive on bringing ideas to life on the digital canvas. 🐍 Python is not just a language for me; it's a playground where I explore everything from web scraping to cryptography, pushing the boundaries of what's possible. 🎓 I'm Currently pursuing my degree in computer science, So I am constantly absorbing new knowledge like a sponge, diving deep into algorithms, databases, and software engineering principles. Whether it's brainstorming a cool project, tackling a challenging problem, or simply discussing the latest tech trends, I'm all ears. Let's collaborate and build something truly awesome together!",
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
