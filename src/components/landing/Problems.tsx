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
    <section className="relative py-16 md:py-24">
      <div className="container relative z-10">
        <div className="max-w-3xl reveal">
          <span className="inline-block px-4 py-1.5 rounded-full glass-button text-xs font-bold uppercase tracking-widest text-primary mb-6">
            The Current Challenge
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
            Schools run on <span className="text-primary italic">guesswork</span> — not data.
          </h2>
          <p className="mt-6 text-muted-foreground text-xl font-medium max-w-2xl leading-relaxed">
            Most schools still manage academics with fragmented tools, leading to invisible delays and missed outcomes.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="glass-card p-8 rounded-[2.5rem] hover:scale-105 transition-all duration-500 reveal group">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl glass-button text-primary border-black/5 bg-black/5 group-hover:scale-110 transition-transform">
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-8 text-xl font-bold text-foreground tracking-tight">{p.title}</h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed font-medium">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
