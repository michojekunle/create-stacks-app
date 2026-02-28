import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/header";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Stacks App | Premium Bitcoin Scaffold",
  description:
    "Built with Create Stacks App — The elite full-stack Stacks blockchain application scaffold.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} font-outfit antialiased bg-brand-bg text-white`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-white/[0.03] py-12 text-center bg-black/20">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                Made for the Stacks ecosystem by
                <a
                  href="https://github.com/michojekunle/create-stacks-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-hiro-orange transition-colors font-semibold"
                >
                  Create Stacks App
                </a>
              </p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
