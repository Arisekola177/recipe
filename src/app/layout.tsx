import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe",
  description: "recipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
   <body className='w-8/12 mx-auto bg-slate-700' >
   <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
           {children}
          </div>
          
           <div>Footer</div>
    </div>
      </body>
     
      
    </html>
  );
}
