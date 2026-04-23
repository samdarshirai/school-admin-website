const steps = [
  { n: "01", title: "Setup school structure", body: "Add classes, sections, subjects, and teachers in minutes." },
  { n: "02", title: "Plan the academic year", body: "Map curriculum to a term-wise calendar with clear deadlines." },
  { n: "03", title: "Track daily completion", body: "Teachers log progress; leaders see live syllabus status." },
  { n: "04", title: "Get alerts & insights", body: "Automatic warnings, weekly digests, and performance reports." },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="relative py-16 md:py-24">
      <div className="container relative z-10">
        <div className="max-w-3xl reveal text-center mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-button text-xs font-bold uppercase tracking-widest text-primary mb-6">
            Implementation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            Four steps from <span className="text-primary italic">chaos</span> to clarity.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((s, idx) => (
            <div key={s.n} className="reveal relative group">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-primary/20 to-transparent -z-10" />
              )}
              <div className="glass-card p-10 rounded-[3rem] h-full hover:bg-white transition-all duration-500 border-white/40 group-hover:border-primary/20">
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl glass-button border-black/5 bg-black/5 text-primary font-black text-2xl shadow-[0_10px_15px_rgba(240,185,11,0.1)]">
                  {s.n}
                </div>
                <h3 className="mt-8 text-2xl font-black text-foreground tracking-tight">{s.title}</h3>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed font-medium">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
