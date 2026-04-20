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
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className={cn("reveal", reverse && "lg:order-2")}>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</span>
        <h3 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground leading-tight">{title}</h3>
        <div className="mt-3 h-0.5 w-12 bg-primary" />
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{body}</p>
        {bullets && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={cn("reveal", reverse && "lg:order-1")}>
        <BrowserFrame src={image} alt={imageAlt} />
      </div>
    </div>
  );
};
