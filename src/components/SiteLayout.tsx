import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ActionLink } from "@/components/ui/action";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <ActionLink to="/contact" variant="solid" className="w-full">
          Start a Project
        </ActionLink>
      </div>
      <div className="h-16 sm:hidden" aria-hidden />
    </div>
  );
}
