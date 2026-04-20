import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section id="contact" className="surface-dark relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-primary/60" aria-hidden />
      <div className="container py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[hsl(var(--surface-dark-foreground))] leading-tight">
            Start Running Your School{" "}
            <span className="text-primary">Like a System</span>
          </h2>
          <p className="mt-5 text-lg text-[hsl(var(--surface-dark-muted))]">
            Join forward-thinking schools using Academic Planner AI to plan, track, and execute with precision.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="pill bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base font-semibold">
              <a href="#contact">
                Book a Demo <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="pill h-12 px-8 text-base font-semibold border-[hsl(var(--surface-dark-border))] bg-transparent text-[hsl(var(--surface-dark-foreground))] hover:bg-[hsl(240_4%_18%)] hover:text-[hsl(var(--surface-dark-foreground))]"
            >
              <a href="#features">Explore Platform</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
