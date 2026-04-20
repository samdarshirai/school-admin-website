import { Eye, ShieldCheck, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "Visibility",
    body: "Real-time syllabus status across every class, section, and teacher — one source of truth.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    body: "Immutable audit trails and role-based ownership turn intent into measurable execution.",
  },
  {
    icon: Workflow,
    title: "Automation",
    body: "Alerts, timetables, and reports run themselves — freeing leaders for high-leverage work.",
  },
];

export const Pillars = () => {
  return (
    <section id="pillars" className="surface-dark">
      <div className="container py-20 md:py-28">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">The Platform</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[hsl(var(--surface-dark-foreground))] leading-tight">
            Academic Intelligence for{" "}
            <span className="text-primary">Modern Schools</span>
          </h2>
          <p className="mt-5 text-lg text-[hsl(var(--surface-dark-muted))] max-w-2xl">
            Three pillars that turn fragmented academic operations into a high-performance system.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="reveal rounded-xl border border-[hsl(var(--surface-dark-border))] bg-[hsl(240_4%_16%)] p-7 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[hsl(var(--surface-dark-foreground))]">{p.title}</h3>
              <p className="mt-2 text-sm text-[hsl(var(--surface-dark-muted))] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
