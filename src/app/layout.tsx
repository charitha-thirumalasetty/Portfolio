import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Charitha Rayalu Thirumalasetty - Full Stack Developer",
  description: "Full Stack Developer specializing in React, Node.js, and AI-powered web applications. Student at Apollo University building scalable web solutions.",
  keywords: "Full Stack Developer, React, Node.js, MongoDB, Python, Java, Web Development, AI",
  authors: [{ name: "Charitha Rayalu Thirumalasetty" }],
  creator: "Charitha Rayalu Thirumalasetty",
  openGraph: {
    title: "Charitha Rayalu Thirumalasetty - Full Stack Developer",
    description: "Full Stack Developer building scalable web apps and AI-powered products",
    url: "https://charitha-portfolio.vercel.app",
    siteName: "Charitha Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charitha Rayalu Thirumalasetty - Full Stack Developer",
    description: "Full Stack Developer building scalable web apps and AI-powered products",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
