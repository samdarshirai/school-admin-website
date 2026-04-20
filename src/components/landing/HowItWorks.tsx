const steps = [
  { n: "01", title: "Setup school structure", body: "Add classes, sections, subjects, and teachers in minutes." },
  { n: "02", title: "Plan the academic year", body: "Map curriculum to a term-wise calendar with clear deadlines." },
  { n: "03", title: "Track daily completion", body: "Teachers log progress; leaders see live syllabus status." },
  { n: "04", title: "Get alerts & insights", body: "Automatic warnings, weekly digests, and performance reports." },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="bg-background">
      <div className="container py-20 md:py-28">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">How it works</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground">
            Four steps from chaos to clarity.
          </h2>
        </div>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-border" aria-hidden />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((s) => (
              <div key={s.n} className="reveal">
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-extrabold text-sm ring-8 ring-background">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
