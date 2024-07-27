import { AppProvider } from "@/context/AppContext";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Head from 'next/head'; 
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "900", "600", "800"],
});

export const metadata: Metadata = {
  title: "RetainIQ",
  description: "RetainIQ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="RetainIQ" />
        </Head>
        <body className={figtree.className}>
          {children}

          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </AppProvider>
    </html>
  );
}
