import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./NavBar";
import TanstackProvider from "./providers/TanstackProvider";
import AuthProvider from "./auth/Provider";

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
        <AuthProvider>
          <TanstackProvider>
            <NavBar />
            <main className="px-4">{children}</main>
          </TanstackProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
