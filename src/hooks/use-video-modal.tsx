import { createContext, useContext, useState, type ReactNode } from "react";

interface VideoModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const VideoModalContext = createContext<VideoModalContextValue | undefined>(undefined);

export const VideoModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VideoModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </VideoModalContext.Provider>
  );
};

export const useVideoModal = () => {
  const ctx = useContext(VideoModalContext);
  if (!ctx) throw new Error("useVideoModal must be used within VideoModalProvider");
  return ctx;
};
