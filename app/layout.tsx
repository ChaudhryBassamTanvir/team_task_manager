
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Task Manager",
  description: "Manage tasks efficiently with your team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
