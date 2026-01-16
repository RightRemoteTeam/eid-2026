import type { Metadata } from "next";
import { ParallaxProvider } from "@/components/parallax";
import "./globals.css";

export const metadata: Metadata = {
  title: "فعاليات العيد 2026 | Eid Events 2026",
  description: "عيدكم مبارك - Celebrate Eid 2026 with us",
  keywords: ["Eid", "عيد", "2026", "celebration", "فعاليات"],
  openGraph: {
    title: "فعاليات العيد 2026",
    description: "عيدكم مبارك - Celebrate Eid 2026 with us",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}
