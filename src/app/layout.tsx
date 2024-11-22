import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Zeta Finance",
  description: "Zeta Finance",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="preload"
          href="/_next/static/css/79f796cdfeef24e5.css"
          as="style"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
