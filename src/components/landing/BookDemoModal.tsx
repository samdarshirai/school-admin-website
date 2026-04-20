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
        className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto rounded-xl p-0"
        id="book-demo-modal"
      >
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-xl font-bold text-foreground">
            Book a Demo
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Fill in your details and we'll arrange a personalised walkthrough.
          </DialogDescription>
        </DialogHeader>

        {/* Success / Error banners */}
        {status === "success" && (
          <div className="mx-6 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm font-medium text-green-800">
            ✅ Thanks! We'll contact you within 24 hours.
          </div>
        )}

        {status === "error" && (
          <div className="mx-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm font-medium text-red-800">
            ❌ Something went wrong. Please try again.
          </div>
        )}

        {/* Form — hidden after success */}
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 px-6 pb-6"
            id="book-demo-form"
          >
            {/* Hidden fields */}
            <input type="hidden" name="source" value="website" />
            <input type="hidden" name="_subject" value="New Demo Request from Website" />

            {/* Honeypot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            {/* Name */}
            <div className="grid gap-1.5">
              <label htmlFor="demo-name" className="text-sm font-medium text-foreground">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="demo-name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="demo-input"
              />
            </div>

            {/* Email */}
            <div className="grid gap-1.5">
              <label htmlFor="demo-email" className="text-sm font-medium text-foreground">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="demo-email"
                name="email"
                type="email"
                required
                placeholder="jane@school.edu"
                className="demo-input"
              />
            </div>

            {/* Phone */}
            <div className="grid gap-1.5">
              <label htmlFor="demo-phone" className="text-sm font-medium text-foreground">
                Phone
              </label>
              <input
                id="demo-phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="demo-input"
              />
            </div>

            {/* School Name */}
            <div className="grid gap-1.5">
              <label htmlFor="demo-school" className="text-sm font-medium text-foreground">
                School Name <span className="text-red-500">*</span>
              </label>
              <input
                id="demo-school"
                name="school_name"
                type="text"
                required
                placeholder="Springfield International School"
                className="demo-input"
              />
            </div>

            {/* City + Students — side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-1.5">
                <label htmlFor="demo-city" className="text-sm font-medium text-foreground">
                  City
                </label>
                <input
                  id="demo-city"
                  name="city"
                  type="text"
                  placeholder="Mumbai"
                  className="demo-input"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="demo-students" className="text-sm font-medium text-foreground">
                  Number of Students
                </label>
                <input
                  id="demo-students"
                  name="number_of_students"
                  type="number"
                  min={1}
                  placeholder="500"
                  className="demo-input"
                />
              </div>
            </div>

            {/* Message */}
            <div className="grid gap-1.5">
              <label htmlFor="demo-message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="demo-message"
                name="message"
                rows={3}
                placeholder="Tell us what you're looking for…"
                className="demo-input resize-none"
              />
            </div>

            {/* Consent checkbox */}
            <label
              htmlFor="demo-consent"
              className="flex items-start gap-2 text-sm text-muted-foreground cursor-pointer select-none"
            >
              <input
                id="demo-consent"
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
              />
              <span>
                I agree to be contacted regarding my demo request{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              id="book-demo-submit"
              className="demo-submit mt-1"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending…
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
