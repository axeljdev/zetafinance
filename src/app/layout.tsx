import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeta Finance",
  description: "Zeta Finance",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <html lang="fr" className={lato.className}>
      <head>
        <SpeedInsights />
        {gaTrackingId ? (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}');
              `}
            </Script>
          </>
        ) : null}
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
