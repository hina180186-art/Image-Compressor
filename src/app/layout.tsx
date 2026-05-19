import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SupabaseProvider } from "@/components/providers/supabase-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "AI Image Toolkit - Professional Image Processing Tools",
    template: "%s | AI Image Toolkit",
  },
  description: "Your images stay private and secure. Most processing happens in your browser. Professional AI-powered image tools for everyone.",
  keywords: ["image processing", "AI tools", "image compression", "background removal", "privacy-first", "browser-based"],
  authors: [{ name: "AI Image Toolkit" }],
  creator: "AI Image Toolkit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiimagetoolkit.com",
    siteName: "AI Image Toolkit",
    title: "AI Image Toolkit - Professional Image Processing Tools",
    description: "Your images stay private and secure. Most processing happens in your browser.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Image Toolkit",
    description: "Your images stay private and secure. Most processing happens in your browser.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SupabaseProvider>
          {children}
          <Toaster richColors position="top-right" />
        </SupabaseProvider>
      </body>
    </html>
  );
}
