import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DINFLUENCE | Unforgettable Experiences Hosted by Influencers",
  description:
    "Create ever-lasting memories and learn new skills with your favorite creators and influencers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
