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
    <section id="pillars" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl reveal">
          <span className="inline-block px-4 py-1.5 rounded-full glass-button text-xs font-bold uppercase tracking-widest text-primary mb-6">
            The Platform
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight tracking-tight">
            Academic Intelligence for{" "}
            <span className="text-primary italic">Modern Schools</span>
          </h2>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
            Three core principles that turn fragmented academic operations into a high-performance system.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="glass-card p-10 rounded-[3rem] hover:scale-105 hover:bg-white transition-all duration-500 reveal group"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl glass-button border-black/5 bg-black/5 text-primary group-hover:scale-110 transition-transform shadow-[0_10px_15px_rgba(240,185,11,0.1)]">
                <p.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-8 text-2xl font-black text-foreground tracking-tight">{p.title}</h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-medium">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
