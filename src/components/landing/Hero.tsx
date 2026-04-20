import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrowserFrame } from "./BrowserFrame";
import { BookDemoDialog } from "./BookDemoDialog";
import classOverview from "@/assets/class-overview.png";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="container py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Built for school leaders
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
              Run Your School Like a{" "}
              <span className="text-foreground">High-Performance</span>{" "}
              <span className="relative inline-block">
                System
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-primary/80 -z-10" aria-hidden />
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Track syllabus completion, detect delays early, and manage your entire academic workflow on one
              data-driven platform.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="pill bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 text-base font-semibold">
                <a href="#contact">
                  Book a Demo <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="pill h-12 px-7 text-base font-semibold border-border bg-background hover:bg-secondary"
              >
                <a href="#features">See Platform</a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> No credit card required
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Setup in under a week
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-3xl blur-2xl" aria-hidden />
              <BrowserFrame src={classOverview} alt="Academic Planner AI — Class Overview dashboard" tilt />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
