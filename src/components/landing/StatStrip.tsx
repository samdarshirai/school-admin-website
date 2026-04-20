const stats = [
  { value: "10", label: "Classes Managed" },
  { value: "18", label: "Sections Tracked" },
  { value: "32.8", label: "Avg Students" },
  { value: "0", label: "Missed Deadlines (Target)" },
];

export const StatStrip = () => {
  return (
    <section className="surface-dark border-y border-[hsl(var(--surface-dark-border))]">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="reveal text-center md:text-left">
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tabular-nums tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-[hsl(var(--surface-dark-muted))] uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
