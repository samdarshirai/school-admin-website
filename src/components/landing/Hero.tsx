import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrowserFrame } from "./BrowserFrame";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { useVideoModal } from "@/hooks/use-video-modal";
import classOverview from "@/assets/class-overview.png";

export const Hero = () => {
  const { open: openDemo } = useDemoModal();
  const { open: openTour } = useVideoModal();

  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="glass-card p-8 md:p-12 rounded-[2.5rem]">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/5 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Built for school leaders
              </span>

              <h1 className="mt-8 text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] text-foreground">
                Run Your School Like a{" "}
                <span className="text-primary italic">High-Performance</span>{" "}
                System
              </h1>

              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
                Track syllabus completion, detect delays early, and manage my entire academic workflow on one
                sophisticated, data-driven platform.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  onClick={openDemo}
                  className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all h-14 px-8 text-lg font-bold shadow-[0_10px_20px_rgba(240,185,11,0.2)]"
                >
                  Book My Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={openTour}
                  variant="outline"
                  className="pill glass-button h-14 px-8 text-lg font-bold border-black/5 text-foreground hover:bg-black/10 group"
                >
                  <Play className="mr-2 h-5 w-5 text-primary group-hover:scale-110 transition-transform" /> Watch 90s Tour
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-4 rounded-full bg-primary/40" /> Setup in under a week
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-4 rounded-full bg-primary/40" /> Trusted by 500+ schools
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 reveal lg:translate-x-12">
            <div className="relative group">
              <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden />
              <div className="relative glass-card p-2 rounded-2xl overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <BrowserFrame src={classOverview} alt="Ace Planner Dashboard — Comprehensive class overview and syllabus tracking for school administrators" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

