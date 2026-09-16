import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Maryam Khan | Journalist & Digital Storyteller",
    template: "%s | Maryam Khan",
  },
  description:
    "Maryam Khan is a journalist and digital storyteller reporting on community, culture, and public policy.",
  keywords: [
    "Maryam Khan",
    "journalist",
    "digital storyteller",
    "Ottawa journalist",
    "communications",
  ],
  authors: [{ name: "Maryam Khan" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maryam Khan | Journalist & Digital Storyteller",
    description:
      "Journalism and digital content by Maryam Khan, covering community, culture, and public policy.",
    type: "website",
    locale: "en_CA",
    siteName: "Maryam Khan",
    images: [
      {
        url: "/headshot.jpeg",
        width: 1024,
        height: 1280,
        alt: "Portrait of Maryam Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maryam Khan | Journalist & Digital Storyteller",
    description:
      "Journalism and digital content by Maryam Khan, covering community, culture, and public policy.",
    images: ["/headshot.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
