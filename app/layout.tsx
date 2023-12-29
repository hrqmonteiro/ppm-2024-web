import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molecules/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPM",
  description: "PPM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // style={{ backgroundColor: "#00bbd6" }}
        className={montserrat.className}
      >
        <main>
          <Navbar />
          <div className="flex flex-wrap md:flex-nowrap flex-col min-h-screen">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
