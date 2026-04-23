import { cn } from "@/lib/utils";
import { BrowserFrame } from "./BrowserFrame";

interface FeatureRowProps {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bullets?: string[];
}

export const FeatureRow = ({ eyebrow, title, body, image, imageAlt, reverse, bullets }: FeatureRowProps) => {
  return (
    <div className="glass-card p-8 md:p-12 rounded-[3rem] group hover:bg-white transition-all duration-700 reveal">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className={cn(reverse && "lg:order-2")}>
          <span className="text-sm font-bold uppercase tracking-widest text-primary/80">{eyebrow}</span>
          <h3 className="mt-4 text-3xl md:text-4xl font-black text-foreground leading-[1.15]">{title}</h3>
          <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed font-medium">{body}</p>
          {bullets && (
            <ul className="mt-10 grid sm:grid-cols-2 gap-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <div className="h-6 w-6 rounded-lg glass-button flex items-center justify-center shrink-0 border-black/5 bg-black/5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-bold tracking-tight">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={cn("relative", reverse && "lg:order-1")}>
          <div className="absolute -inset-4 bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative glass-card p-1.5 rounded-xl rotate-1 group-hover:rotate-0 transition-all duration-700 shadow-2xl border-white/40">
            <BrowserFrame src={image} alt={imageAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};
