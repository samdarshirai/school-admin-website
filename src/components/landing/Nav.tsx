import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useDemoModal } from "@/hooks/use-demo-modal";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pillars", label: "Platform" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { open: openDemo } = useDemoModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-background border-b border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <img src="/logo-icon.png" alt="Academic Planner" className="h-8 w-8 object-contain" />
          <span className="text-foreground">Academic Planner</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Sign in
          </a>
          <Button onClick={openDemo} className="pill bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-10 px-5">
            Book a Demo
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <nav className="mt-8 flex flex-col gap-5">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-base font-medium text-foreground">
                  {l.label}
                </a>
              ))}
              <Button onClick={openDemo} className="pill mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Book a Demo
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
