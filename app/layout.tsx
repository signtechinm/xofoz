import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = "https://xofoz.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "XOFOZ | Managed IT Support In Abu Dhabi",
    template: "%s | XOFOZ",
  },
  description:
    "XOFOZ provides managed IT support, office IT setup, cybersecurity, cabling, Microsoft 365, and on-call technology services for businesses in Abu Dhabi and across the UAE.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "XOFOZ",
    title: "XOFOZ | Managed IT Support In Abu Dhabi",
    description:
      "Fast, reliable IT support, setup, security, and infrastructure services for UAE businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistSans.variable} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
