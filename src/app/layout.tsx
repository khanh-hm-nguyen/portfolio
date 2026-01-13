import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import "./globals.css";

import { ReduxProvider } from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khanh Nguyen - Java Developer",
  description: "Portfolio of a Backend Java Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
  
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300`}
      >
        <ReduxProvider>
          <Navbar />
          {/* Use flex-grow to ensure footer pushes to bottom if content is short */}
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}