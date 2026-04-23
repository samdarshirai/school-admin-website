import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useVideoModal } from "@/hooks/use-video-modal";
import { Play } from "lucide-react";

export const VideoModal = () => {
  const { isOpen, close } = useVideoModal();

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none rounded-[2rem] shadow-2xl">
        <div className="relative aspect-video flex items-center justify-center bg-muted/10 group cursor-pointer">
          {/* Placeholder for actual video embed */}
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Play className="text-primary h-8 w-8 fill-primary" />
            </div>
            <p className="text-xl font-black text-white italic">Interactive Tour Coming Soon</p>
            <p className="text-white/60 font-medium">Ace Planner — 90s Platform Overview</p>
          </div>
          
          {/* Background Decorative Mesh */}
          <div className="absolute inset-0 bg-mesh opacity-20 -z-10" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
