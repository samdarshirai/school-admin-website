export const Footer = () => {
  return (
    <footer className="surface-dark border-t border-[hsl(var(--surface-dark-border))]">
      <div className="container py-16">
        <div className="flex items-center gap-2 font-bold tracking-tight text-[hsl(var(--surface-dark-foreground))]">
          <img src="/logo-icon.png" alt="Academic Planner" className="h-8 w-8 object-contain" />
          Academic Planner
        </div>
        <p className="mt-4 text-sm text-[hsl(var(--surface-dark-muted))] max-w-sm leading-relaxed">
          Academic intelligence for modern schools. Plan, track, and execute with precision.
        </p>

        <div className="mt-14 pt-8 border-t border-[hsl(var(--surface-dark-border))] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[hsl(var(--surface-dark-muted))]">
            © {new Date().getFullYear()} Academic Planner. All rights reserved.
          </p>
          <p className="text-xs text-[hsl(var(--surface-dark-muted))]">Built for school leaders.</p>
        </div>
      </div>
    </footer>
  );
};
