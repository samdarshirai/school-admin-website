import { Layers, Activity, Bell, Calendar } from "lucide-react";

const items = [
  {
    icon: Layers,
    text: "Class → Section → Subject → Chapter → Lesson hierarchy",
  },
  {
    icon: Activity,
    text: "Real-time progress tracking across academic year",
  },
  {
    icon: Bell,
    text: "Automated alerts for delays and missed deadlines",
  },
  {
    icon: Calendar,
    text: "Timetable generation with 100% conflict resolution",
  },
];

export const StatStrip = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="glass-card p-10 md:p-16 rounded-[3rem] border-white/40 shadow-xl">
          <div className="max-w-3xl mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
              Designed for <span className="text-primary italic">real</span> school workflows
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {items.map((item, i) => (
              <div key={i} className="reveal flex flex-col gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-button flex items-center justify-center text-primary border-black/5 bg-black/5 group-hover:scale-110 transition-transform shadow-[0_10px_15px_rgba(240,185,11,0.05)]">
                  <item.icon size={28} />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed font-bold tracking-tight group-hover:text-foreground transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

