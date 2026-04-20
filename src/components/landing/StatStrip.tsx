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
    <section className="surface-dark border-y border-[hsl(var(--surface-dark-border))]">
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl mb-12 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Designed for real school workflows
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {items.map((item, i) => (
            <div key={i} className="reveal flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <item.icon size={22} />
              </div>
              <p className="text-sm md:text-base text-[hsl(var(--surface-dark-muted))] leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

