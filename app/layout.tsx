import type { Metadata } from "next";
import { Lato } from "next/font/google";
import SiteChrome from "@/app/_components/site-chrome";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LESCC",
  description: "LESCC — mission, press releases, and ways to get involved.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
