import { EyeOff, TrendingDown, FileSpreadsheet, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: EyeOff,
    title: "No visibility into syllabus progress",
    body: "Leaders fly blind until exam season — by then it's too late to course-correct.",
  },
  {
    icon: TrendingDown,
    title: "Teachers fall behind unnoticed",
    body: "Delays compound silently across sections, with no early-warning system in place.",
  },
  {
    icon: FileSpreadsheet,
    title: "Manual tracking in Excel",
    body: "Stale spreadsheets, duplicated data, and hours wasted reconciling weekly reports.",
  },
  {
    icon: ShieldAlert,
    title: "No accountability system",
    body: "Without an audit trail, ownership is fuzzy and follow-through is inconsistent.",
  },
];

export const Problems = () => {
  return (
    <section className="bg-background">
      <div className="container py-20 md:py-28">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">The Problem</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground">
            Schools run on guesswork — not data.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Most schools still manage academics with fragmented tools, leading to invisible delays and missed outcomes.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p) => (
            <div key={p.title} className="card-soft p-6 reveal">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
