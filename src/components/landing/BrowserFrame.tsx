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
        "group relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-2xl cursor-zoom-in transition-all duration-700",
        tilt && "lg:rotate-[-1deg] lg:hover:rotate-0",
        className,
      )}
    >
      <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/[0.03]">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/30" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
          <span className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/30" />
        </div>
        <div className="ml-6 flex-1 max-w-md h-7 rounded-xl glass-button bg-white/[0.02] border-white/5 flex items-center px-4">
          <div className="h-1 w-24 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="relative overflow-hidden group-hover:bg-white/[0.02] transition-colors duration-700">
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.01]" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center pointer-events-none">
          <div className="glass-card p-4 rounded-full shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 bg-black/40 border-primary/20">
            <Search className="h-6 w-6 text-primary animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
