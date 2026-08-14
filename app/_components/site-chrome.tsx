"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <div className="flex h-dvh flex-col overflow-hidden">
        <Header />
        {children}
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
