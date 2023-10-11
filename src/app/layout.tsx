"use client";
import { RecoilRoot } from "recoil";
import "./globals.css";

export const metadata = {
  title: "Aily",
  description: "AI Recycler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body>{children}</body>
      </html>
    </RecoilRoot>
  );
}
