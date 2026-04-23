import { useReveal } from "@/hooks/use-reveal";
import { DemoModalProvider } from "@/hooks/use-demo-modal";
import { VideoModalProvider } from "@/hooks/use-video-modal";
import { ImageLightboxProvider } from "@/hooks/use-image-lightbox";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { StatStrip } from "@/components/landing/StatStrip";
import { Problems } from "@/components/landing/Problems";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pillars } from "@/components/landing/Pillars";
import { ValueProps } from "@/components/landing/ValueProps";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Resources } from "@/components/landing/Resources";
import { Contact } from "@/components/landing/Contact";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { BookDemoModal } from "@/components/landing/BookDemoModal";
import { VideoModal } from "@/components/landing/VideoModal";
import { ImageLightbox } from "@/components/landing/ImageLightbox";

const Index = () => {
  useReveal();

  return (
    <ImageLightboxProvider>
      <VideoModalProvider>
        <DemoModalProvider>
          <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 overflow-hidden">
            {/* Background Mesh & Shapes */}
            <div className="fixed inset-0 bg-mesh opacity-40 -z-10" />
            <div className="fixed top-[-5%] left-[-5%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="fixed bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[100px] -z-10" />
            
            <Nav />
            <main className="relative z-10">
              <Hero />
              <StatStrip />
              <Problems />
              <Features />
              <HowItWorks />
              <Pillars />
              <ValueProps />
              <Testimonials />
              <Pricing />
              <Resources />
              <Contact />
              <FinalCTA />
            </main>
            <Footer />
          </div>
          <BookDemoModal />
          <VideoModal />
          <ImageLightbox />
        </DemoModalProvider>
      </VideoModalProvider>
    </ImageLightboxProvider>
  );
};


export default Index;

