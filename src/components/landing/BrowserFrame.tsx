import { cn } from "@/lib/utils";
import { useImageLightbox } from "@/hooks/use-image-lightbox";
import { Search } from "lucide-react";

interface BrowserFrameProps {
  src: string;
  alt: string;
  className?: string;
  tilt?: boolean;
}

export const BrowserFrame = ({ src, alt, className, tilt = false }: BrowserFrameProps) => {
  const { open } = useImageLightbox();

  return (
    <div
      onClick={() => open(src, alt)}
      className={cn(
        "group relative rounded-xl border border-border bg-card overflow-hidden shadow-card-hover cursor-zoom-in transition-all duration-500",
        tilt && "lg:rotate-[-1deg] lg:hover:rotate-0",
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
      <div className="relative overflow-hidden">
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Search className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
