import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ace Planner transformed our academic tracking. We reduced manual paperwork by 60% in the first term alone.",
    author: "Dr. Anjali Sharma",
    role: "Principal, Delhi Public School, Ranchi",
    metric: "60% less manual tracking",
  },
  {
    quote: "The automated alerts for syllabus delays are a game-changer. Our teachers are more aligned than ever.",
    author: "Mr. Vikram Mehra",
    role: "Academic Director, JVM Shyamali",
    metric: "100% syllabus completion",
  },
  {
    quote: "Managing timetables used to take weeks. With Ace Planner, it's done in minutes with zero conflicts.",
    author: "Mrs. Sunita Reddy",
    role: "Administrator, Loreto Convent, Ranchi",
    metric: "12 hours saved weekly",
  },
];

const logos = [
  "DPS Ranchi",
  "JVM Shyamali",
  "Loreto Convent",
  "St. Xavier's School",
  "Surendranath Centenary",
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
            Trusted by <span className="text-primary italic">forward-thinking</span> schools
          </h2>
          <p className="text-base text-muted-foreground font-medium">
            Join hundreds of administrators who have streamlined their academic operations with Ace Planner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8 rounded-[2.5rem] reveal relative group hover:scale-[1.02] transition-all">
              <div className="absolute top-6 right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote size={48} />
              </div>
              <div className="mb-6 inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest">
                {t.metric}
              </div>
              <p className="text-lg text-foreground leading-relaxed font-medium mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div>
                <p className="font-black text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <p className="text-center text-sm font-bold text-muted-foreground/40 uppercase tracking-[0.2em] mb-10">
            Powering top-tier institutions worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {logos.map((logo) => (
              <div key={logo} className="text-xl md:text-2xl font-black text-muted-foreground/60 tracking-tighter">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
