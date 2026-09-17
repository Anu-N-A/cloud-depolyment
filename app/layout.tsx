import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Roobert-style neo-grotesque geometric sans (closest free match:
// Inter Tight — clean geometric shapes, tight tracking)
const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Coherence — Easy-mode for Cloud Deployment",
  description:
    "Coherence automates preview environments, CI/CD pipelines, and production deployments in your AWS or GCP account.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0A10] text-white">{children}</body>
    </html>
  );
}
