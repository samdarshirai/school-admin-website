import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4 leading-tight">
              Let's talk about <span className="text-primary italic">your</span> school's future
            </h2>
            <p className="text-base text-muted-foreground font-medium mb-10 max-w-lg leading-relaxed">
              Have questions about integration, data security, or custom pricing? Our team of academic experts is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-button flex items-center justify-center text-primary border-black/5 bg-black/5 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Email us</p>
                  <p className="text-xl font-black text-foreground">hello@aceplanner.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-button flex items-center justify-center text-primary border-black/5 bg-black/5 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Call us</p>
                  <p className="text-xl font-black text-foreground">+91 80 4567 8910</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-button flex items-center justify-center text-primary border-black/5 bg-black/5 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Visit us</p>
                  <p className="text-xl font-black text-foreground">5th Floor, Nucleus Mall<br />Circular Road, Ranchi 834001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="glass-card p-10 md:p-12 rounded-[3rem] border-white/40 shadow-2xl relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px] -z-10" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                    <Input placeholder="Rajesh Kumar" className="demo-input h-14" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Work Email</label>
                    <Input type="email" placeholder="rajesh@theheritageschool.in" className="demo-input h-14" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">School Name</label>
                  <Input placeholder="The Heritage School" className="demo-input h-14" required />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                  <Textarea 
                    placeholder="How can we help you?" 
                    className="demo-input min-h-[150px] py-4 resize-none" 
                    required 
                  />
                </div>

                <Button type="submit" className="demo-submit h-16 group">
                  Send My Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
