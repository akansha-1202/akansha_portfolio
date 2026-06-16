import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akansha Verma | Full Stack Web Developer",
  description:
    "Full Stack Web Developer at Unibots specializing in ad-tech dashboards, AdX/AdSense integration, header bidding, and MERN stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
