import { useReveal } from "@/hooks/use-reveal";
import { DemoModalProvider } from "@/hooks/use-demo-modal";
import { ImageLightboxProvider } from "@/hooks/use-image-lightbox";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { StatStrip } from "@/components/landing/StatStrip";
import { Problems } from "@/components/landing/Problems";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pillars } from "@/components/landing/Pillars";
import { ValueProps } from "@/components/landing/ValueProps";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { BookDemoModal } from "@/components/landing/BookDemoModal";
import { ImageLightbox } from "@/components/landing/ImageLightbox";

const Index = () => {
  useReveal();

  return (
    <ImageLightboxProvider>
      <DemoModalProvider>
        <div className="min-h-screen bg-background">
          <Nav />
          <main>
            <Hero />
            <StatStrip />
            <Problems />
            <Features />
            <HowItWorks />
            <Pillars />
            <ValueProps />
            <FinalCTA />
          </main>
          <Footer />
        </div>
        <BookDemoModal />
        <ImageLightbox />
      </DemoModalProvider>
    </ImageLightboxProvider>
  );
};

export default Index;

