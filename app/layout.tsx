import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D Sports Lab | Triathlon Club — Gozo, Malta",
  description:
    "D Sports Lab is a triathlon and multisport club based in Gozo, Malta. Our qualified coaches help every athlete reach their full potential through swimming, cycling, and running.",
  keywords: ["triathlon", "sports club", "Gozo", "Malta", "swimming", "cycling", "running", "D Sports Lab"],
  openGraph: {
    title: "D Sports Lab | Triathlon Club — Gozo, Malta",
    description:
      "Our qualified coaches are there to help each and every athlete reach his/her full potential, as every athlete matters.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
