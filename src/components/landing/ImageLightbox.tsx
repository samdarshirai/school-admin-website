import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useImageLightbox } from "@/hooks/use-image-lightbox";
import { X, ZoomIn, ZoomOut, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export const ImageLightbox = () => {
  const { isOpen, imageSrc, imageAlt, close } = useImageLightbox();
  const [zoom, setZoom] = React.useState(1);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) {
      setZoom(1);
      setIsFullscreen(false);
    }
  }, [isOpen]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.5, 1));
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  if (!imageSrc) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent 
        className={cn(
          "max-w-[95vw] w-full p-0 overflow-hidden border-none bg-black/90 transition-all duration-300",
          isFullscreen ? "h-[100vh] rounded-none" : "h-[90vh] sm:rounded-2xl"
        )}
      >
        <DialogTitle className="sr-only">Image Preview: {imageAlt}</DialogTitle>
        
        <div className="relative w-full h-full flex flex-col">
          {/* Controls Overlay */}
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
            <div className="flex items-center gap-1 bg-background/20 backdrop-blur-md rounded-full p-1 border border-white/10">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                onClick={handleZoomOut}
                disabled={zoom <= 1}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-[10px] font-medium text-white px-1 min-w-[3ch] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                onClick={handleZoomIn}
                disabled={zoom >= 3}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
              onClick={toggleFullscreen}
            >
              {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
              onClick={close}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Image Container */}
          <ScrollArea className="flex-1 w-full h-full">
            <div 
              className={cn(
                "min-h-full min-w-full flex items-center justify-center p-4 sm:p-12 transition-transform duration-300 ease-out",
                zoom > 1 ? "cursor-zoom-out" : "cursor-zoom-in"
              )}
              onClick={() => zoom > 1 ? setZoom(1) : handleZoomIn()}
            >
              <img
                src={imageSrc}
                alt={imageAlt || "Screenshot"}
                className="max-w-full h-auto shadow-2xl transition-all duration-300 shadow-black/50 rounded-lg"
                style={{ 
                  transform: `scale(${zoom})`,
                  transformOrigin: 'center center'
                }}
              />
            </div>
          </ScrollArea>
          
          {/* Caption */}
          {imageAlt && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/10">
              <p className="text-white text-xs font-medium tracking-tight whitespace-nowrap">
                {imageAlt}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
