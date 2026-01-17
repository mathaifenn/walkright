import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Page",
  description: "Programs, events, and learning journeys by Mathai Fenn",
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

