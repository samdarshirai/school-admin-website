import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useDemoModal } from "@/hooks/use-demo-modal";

const links = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Success Stories" },
  { href: "#pricing", label: "Pricing" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { open: openDemo } = useDemoModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 py-4",
        scrolled ? "translate-y-0" : "translate-y-2",
      )}
    >
      <div
        className={cn(
          "container mx-auto flex h-20 items-center justify-between px-6 rounded-[2rem] transition-all duration-500",
          scrolled
            ? "glass-card bg-white/70 border-white/40 shadow-xl"
            : "bg-transparent border-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-3 font-black text-xl tracking-tighter group">
          <div className="h-10 w-10 rounded-xl glass-button flex items-center justify-center border-black/5 bg-black/5 group-hover:scale-110 transition-transform">
            <img src="/logo-icon.png" alt="Ace Planner" className="h-6 w-6 object-contain" />
          </div>
          <span className="text-foreground hidden sm:inline-block">
            Ace <span className="text-primary italic">Planner</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all hover:scale-105"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Button
            onClick={openDemo}
            className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all font-bold h-12 px-8 shadow-[0_10px_15px_rgba(240,185,11,0.2)]"
          >
            Book My Demo
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden glass-button rounded-xl border-black/5" aria-label="Open menu">
              <Menu className="text-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 glass-card border-l border-white/40 p-8">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-12">
                <img src="/logo-icon.png" alt="Ace Planner" className="h-8 w-8 object-contain" />
                <span className="text-xl font-black text-foreground">Ace Planner</span>
              </div>
              <nav className="flex flex-col gap-6">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="text-lg font-bold text-foreground/70 hover:text-primary transition-colors">
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-4">
                <Button onClick={openDemo} className="pill bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-14 text-lg">
                  Book a Demo
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
