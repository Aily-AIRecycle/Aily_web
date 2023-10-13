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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
