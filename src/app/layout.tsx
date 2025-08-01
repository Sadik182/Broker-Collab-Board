import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import App from "next/app";
import AppLayout from "@/components/AppLayout/Layout";

export const metadata: Metadata = {
  title: "Broker Collaboration Board",
  description: "Manage clients and tasks with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppLayout>
          <main>{children}</main>
        </AppLayout>
      </body>
    </html>
  );
}
