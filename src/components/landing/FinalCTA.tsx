import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "@/hooks/use-demo-modal";

export const FinalCTA = () => {
  const { open: openDemo } = useDemoModal();

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="glass-card-yellow p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden reveal border-primary/20 bg-primary/5 shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] -z-10" />
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight tracking-tight">
              Start Running Your School <br />
              <span className="text-primary italic">Like a High-Performance System</span>
            </h2>
            <p className="mt-10 text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Join forward-thinking schools using Ace Planner to plan, track, and execute with precision.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Button
                onClick={openDemo}
                className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all h-16 px-12 text-xl font-bold shadow-[0_10px_25px_rgba(240,185,11,0.3)]"
              >
                Book a Demo <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="pill glass-button h-16 px-12 text-xl font-bold border-black/5 text-foreground hover:bg-black/10"
              >
                <a href="#features">Explore Platform</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
