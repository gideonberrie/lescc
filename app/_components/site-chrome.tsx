"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    if (!isHome) return;
    // The homepage owns scrolling via its own inner container so the
    // header (outside that container) always stays put. Embedded iframes
    // (e.g. the story map) can still nudge the *window* itself into
    // scrolling via the browser's "scroll focused element into view"
    // behavior when something inside them gains focus — and plain
    // `overflow: hidden` doesn't reliably block that particular path.
    // Pinning body with `position: fixed` does, since a fixed element
    // isn't part of the document's scrolling flow at all.
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };
    body.style.position = "fixed";
    body.style.top = "0";
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
    };
  }, [isHome]);

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
