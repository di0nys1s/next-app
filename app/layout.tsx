import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./NavBar";
import TanstackProvider from "./providers/TanstackProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body>
        <TanstackProvider>
          <NavBar />
          <main className="px-4">{children}</main>
        </TanstackProvider>
      </body>
    </html>
  );
}
