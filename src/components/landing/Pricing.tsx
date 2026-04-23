import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "@/hooks/use-demo-modal";

const tiers = [
  {
    name: "Foundation",
    price: "Custom",
    description: "For standalone schools looking to digitize their syllabus tracking.",
    features: [
      "CBSE/ICSE syllabus tracking",
      "Term-wise reporting",
      "Up to 20 teachers",
      "Priority support",
    ],
    cta: "Start My Trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "Custom",
    description: "Full suite for expanding schools and local chains.",
    features: [
      "Everything in Foundation",
      "Automated pacing alerts",
      "Timetable generator",
      "Board exam analytics",
      "Up to 50 teachers",
      "Priority support",
    ],
    cta: "Get My Custom Quote",
    highlight: true,
  },
  {
    name: "Group",
    price: "Custom",
    description: "Tailored solutions for major school groups and chains.",
    features: [
      "Everything in Growth",
      "Multi-campus management",
      "Centralized analytics",
      "Dedicated relationship manager",
      "Unlimited teachers",
      "ERP integrations",
    ],
    cta: "Contact My Team",
    highlight: false,
  },
];

export const Pricing = () => {
  const { open: openDemo } = useDemoModal();

  return (
    <section id="pricing" className="relative py-16 md:py-24 overflow-hidden bg-black/5">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
            Plans for every <span className="text-primary italic">academic</span> scale
          </h2>
          <p className="text-base text-muted-foreground font-medium">
            Whether you're a single prep school or a regional district, we have a plan built for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`glass-card p-10 rounded-[2.5rem] reveal flex flex-col h-full relative group transition-all duration-500 hover:scale-[1.03] ${
                tier.highlight ? "border-primary/40 shadow-2xl scale-105 z-10" : "border-white/40"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-xl">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black text-foreground mb-2">{tier.name}</h3>
                <div className="text-4xl font-black text-primary italic mb-4">{tier.price}</div>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" strokeWidth={4} />
                    </div>
                    <span className="text-foreground/80 font-bold text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={openDemo}
                variant={tier.highlight ? "default" : "outline"}
                className={`pill w-full h-14 text-lg font-bold transition-all ${
                  tier.highlight 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_20px_rgba(240,185,11,0.2)]" 
                    : "glass-button border-black/5 text-foreground hover:bg-black/10"
                }`}
              >
                {tier.cta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-card p-10 rounded-[2.5rem] reveal flex flex-col md:flex-row items-center justify-between gap-8 border-primary/20 bg-primary/5">
          <div>
            <h4 className="text-xl md:text-2xl font-black text-foreground mb-2">Need a custom demonstration for your board?</h4>
            <p className="text-muted-foreground font-medium">We offer tailored walkthroughs for administrative committees.</p>
          </div>
          <Button
            onClick={openDemo}
            className="pill bg-foreground text-background hover:bg-foreground/90 font-black h-14 px-10 text-lg transition-transform hover:scale-105"
          >
            Request Private Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
