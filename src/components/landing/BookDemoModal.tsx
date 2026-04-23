import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useDemoModal } from "@/hooks/use-demo-modal";

const FORMSPREE_URL = "https://formspree.io/f/xgorzdov";

export const BookDemoModal = () => {
  const { isOpen, close } = useDemoModal();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      close();
      // Reset status after closing animation completes
      setTimeout(() => setStatus("idle"), 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-[560px] p-0 overflow-hidden glass-card border-white/40 rounded-[3rem] bg-white/80 shadow-2xl backdrop-blur-2xl"
        id="book-demo-modal"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-primary/10 blur-[80px] -z-10" />
        
        {/* Header */}
        <DialogHeader className="px-10 pt-12 pb-4">
          <DialogTitle className="text-3xl font-black text-foreground tracking-tight">
            Book a <span className="text-primary italic">Demo</span>
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground font-medium">
            Tell us about your school and we’ll set up a personalized walkthrough.
          </DialogDescription>
        </DialogHeader>

        {/* Success / Error banners */}
        {status === "success" && (
          <div className="mx-10 mb-12 rounded-2xl glass-card border-green-500/20 bg-green-500/5 p-6 text-center reveal">
            <p className="text-xl font-bold text-green-600">
              ✅ Request Sent!
            </p>
            <p className="mt-2 text-muted-foreground font-medium">
              We'll reach out within 24 hours to schedule your walkthrough.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mx-10 mb-6 rounded-2xl glass-card border-red-500/20 bg-red-500/5 p-4 text-center">
            <p className="text-red-600 font-bold">
              Something went wrong. Please try again.
            </p>
          </div>
        )}

        {/* Form — hidden after success */}
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 px-10 pb-12"
            id="book-demo-form"
          >
            {/* Hidden fields */}
            <input type="hidden" name="source" value="website" />
            <input type="hidden" name="_subject" value="New Demo Request from Website" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <label htmlFor="demo-name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">
                  Full Name
                </label>
                <input id="demo-name" name="name" type="text" required placeholder="Jane Doe" className="demo-input" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="demo-email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">
                  Email
                </label>
                <input id="demo-email" name="email" type="email" required placeholder="jane@school.edu" className="demo-input" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <label htmlFor="demo-phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">
                  Phone
                </label>
                <input id="demo-phone" name="phone" type="tel" placeholder="+91 98765 43210" className="demo-input" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="demo-school" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">
                  School Name
                </label>
                <input id="demo-school" name="school_name" type="text" required placeholder="Springfield School" className="demo-input" />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="demo-message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">
                Message (Optional)
              </label>
              <textarea id="demo-message" name="message" rows={3} placeholder="Tell us about your goals..." className="demo-input resize-none" />
            </div>

            <button type="submit" disabled={status === "submitting"} className="demo-submit mt-4">
              {status === "submitting" ? (
                <>
                  <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                  Sending...
                </>
              ) : (
                "Request Demo"
              )}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
