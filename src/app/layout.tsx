import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BuddyAssistWidget from "@/components/BuddyAssistWidget";

export const metadata: Metadata = {
  title: "CareerMentor - Interview, Mentoring & Coaching Platform",
  description: "Professional platform for interviews, mentoring, coaching, and premium tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BuddyAssistWidget />
      </body>
    </html>
  );
}
