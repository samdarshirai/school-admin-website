const cols = [
  { title: "Product", links: ["Features", "How it works", "Pricing", "Changelog"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Contact"] },
  { title: "Resources", links: ["Documentation", "Help Center", "Blog", "Webinars"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
];

export const Footer = () => {
  return (
    <footer className="surface-dark border-t border-[hsl(var(--surface-dark-border))]">
      <div className="container py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 font-bold tracking-tight text-[hsl(var(--surface-dark-foreground))]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-extrabold">
                A
              </span>
              Academic Planner AI
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--surface-dark-muted))] max-w-sm leading-relaxed">
              Academic intelligence for modern schools. Plan, track, and execute with precision.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-semibold text-[hsl(var(--surface-dark-foreground))]">{c.title}</h4>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-[hsl(var(--surface-dark-muted))] hover:text-primary transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[hsl(var(--surface-dark-border))] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[hsl(var(--surface-dark-muted))]">
            © {new Date().getFullYear()} Academic Planner AI. All rights reserved.
          </p>
          <p className="text-xs text-[hsl(var(--surface-dark-muted))]">Built for school leaders.</p>
        </div>
      </div>
    </footer>
  );
};
