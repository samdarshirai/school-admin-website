import { Check } from "lucide-react";

const values = [
  { title: "Reduce syllabus delays", body: "Catch slippages weeks earlier with automated detection." },
  { title: "Save hours weekly", body: "Eliminate manual reporting and Excel-based reconciliation." },
  { title: "Improve teacher accountability", body: "Clear ownership, transparent progress, fair benchmarks." },
  { title: "Data-driven decisions", body: "Move from gut-feel reviews to evidence-based academic strategy." },
];

export const ValueProps = () => {
  return (
    <section className="bg-background">
      <div className="container py-20 md:py-28">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Outcomes</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground">
            Built to deliver measurable impact.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {values.map((v) => (
            <div key={v.title} className="card-soft p-6 flex gap-4 reveal">
              <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
