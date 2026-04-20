import { createContext, useContext, useState, type ReactNode } from "react";

interface DemoModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const DemoModalContext = createContext<DemoModalContextValue | undefined>(undefined);

export const DemoModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DemoModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </DemoModalContext.Provider>
  );
};

export const useDemoModal = () => {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
};
