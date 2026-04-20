import { createContext, useContext, useState, type ReactNode } from "react";

interface ImageLightboxContextValue {
  isOpen: boolean;
  imageSrc: string | null;
  imageAlt: string | null;
  open: (src: string, alt: string) => void;
  close: () => void;
}

const ImageLightboxContext = createContext<ImageLightboxContextValue | undefined>(undefined);

export const ImageLightboxProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageAlt, setImageAlt] = useState<string | null>(null);

  const open = (src: string, alt: string) => {
    setImageSrc(src);
    setImageAlt(alt);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <ImageLightboxContext.Provider
      value={{
        isOpen,
        imageSrc,
        imageAlt,
        open,
        close,
      }}
    >
      {children}
    </ImageLightboxContext.Provider>
  );
};

export const useImageLightbox = () => {
  const ctx = useContext(ImageLightboxContext);
  if (!ctx) throw new Error("useImageLightbox must be used within ImageLightboxProvider");
  return ctx;
};
