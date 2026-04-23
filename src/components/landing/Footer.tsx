export const Footer = () => {
  return (
    <footer className="relative py-16 md:py-24 overflow-hidden border-t border-black/5">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3 font-black text-2xl tracking-tighter text-foreground mb-6">
              <div className="h-10 w-10 rounded-xl glass-button flex items-center justify-center border-black/5 bg-black/5">
                <img src="/logo-icon.png" alt="Ace Planner" className="h-6 w-6 object-contain" />
              </div>
              Ace <span className="text-primary italic">Planner</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Academic intelligence for modern schools. Plan, track, and execute with precision.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 text-xs font-bold uppercase tracking-widest text-muted-foreground/40">
            <div className="flex flex-col gap-4">
              <span className="text-foreground/60">Product</span>
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#how" className="hover:text-primary transition-colors">How it works</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-foreground/60">Company</span>
              <a href="#testimonials" className="hover:text-primary transition-colors">Success Stories</a>
              <a href="#resources" className="hover:text-primary transition-colors">Resources</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-foreground/60">Contact</span>
              <span className="text-foreground/30 normal-case">hello@aceplanner.com</span>
              <span className="text-foreground/30 normal-case">+91 80 4567 8910</span>
              <span className="text-foreground/30 normal-case">Ranchi, Jharkhand</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold text-muted-foreground/30 tracking-widest uppercase">
            © {new Date().getFullYear()} Ace Planner. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground/30">
            <span className="h-1 w-1 rounded-full bg-primary/40" />
            <p className="text-sm font-bold tracking-widest uppercase">Built for school leaders.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
