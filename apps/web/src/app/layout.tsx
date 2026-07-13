import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heart of the Matter School of Music",
  description:
    "Heart-centered music lessons for students growing confidence, creativity, and a lifelong love of music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
