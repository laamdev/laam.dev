import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="sm:hidden p-2" aria-label="Toggle menu">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:hidden p-6">
        <nav className="flex flex-col gap-6 mt-12">
          <a
            href="/#work"
            onClick={() => setOpen(false)}
            className="text-xl font-serif uppercase text-foreground-muted transition-colors duration-300 ease-out hover:text-white tracking-wider font-medium px-4 py-2 hover:bg-background-muted rounded-md"
          >
            Work
          </a>
          <a
            href="/services"
            onClick={() => setOpen(false)}
            className="text-xl font-serif uppercase text-foreground-muted transition-colors duration-300 ease-out hover:text-white tracking-wider font-medium px-4 py-2 hover:bg-background-muted rounded-md"
          >
            Services
          </a>
          <a
            href="/technologies"
            onClick={() => setOpen(false)}
            className="text-xl font-serif uppercase tracking-wider text-foreground-muted transition-colors duration-300 ease-out hover:text-white font-medium px-4 py-2 hover:bg-background-muted rounded-md"
          >
            Technologies
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
