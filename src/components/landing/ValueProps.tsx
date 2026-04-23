import { Check } from "lucide-react";

const values = [
  { title: "Reduce syllabus delays", body: "Catch slippages weeks earlier with automated detection." },
  { title: "Save hours weekly", body: "Eliminate manual reporting and Excel-based reconciliation." },
  { title: "Improve teacher accountability", body: "Clear ownership, transparent progress, fair benchmarks." },
  { title: "Data-driven decisions", body: "Move from gut-feel reviews to evidence-based academic strategy." },
];

export const ValueProps = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl reveal">
          <span className="inline-block px-4 py-1.5 rounded-full glass-button text-xs font-bold uppercase tracking-widest text-primary mb-6">
            Measured Outcomes
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight">
            Built to deliver <span className="text-primary italic">measurable impact</span>.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-8">
          {values.map((v) => (
            <div key={v.title} className="glass-card p-10 flex gap-6 reveal hover:bg-white transition-all duration-500 rounded-[3rem] group">
              <span className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl glass-button border-black/5 bg-black/5 text-primary group-hover:scale-110 transition-transform shadow-[0_10px_15px_rgba(240,185,11,0.05)]">
                <Check className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-2xl font-black text-foreground tracking-tight">{v.title}</h3>
                <p className="mt-3 text-lg text-muted-foreground leading-relaxed font-medium">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

