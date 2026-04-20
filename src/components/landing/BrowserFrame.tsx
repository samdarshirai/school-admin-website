import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  src: string;
  alt: string;
  className?: string;
  tilt?: boolean;
}

export const BrowserFrame = ({ src, alt, className, tilt = false }: BrowserFrameProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card overflow-hidden shadow-card-hover",
        tilt && "lg:rotate-[-1deg] lg:hover:rotate-0 transition-transform duration-500",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/60">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <div className="ml-3 flex-1">
          <div className="mx-auto max-w-xs h-5 rounded-md bg-background border border-border" />
        </div>
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
    </div>
  );
};
