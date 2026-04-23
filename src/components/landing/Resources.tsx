import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    category: "Planning",
    title: "How to Detect Syllabus Delays Before They Impact Exams",
    excerpt: "Learn the early warning signs of academic lag and how data-driven tracking can save your term.",
    date: "May 12, 2024",
  },
  {
    category: "Efficiency",
    title: "10 Minutes to a Conflict-Free Timetable",
    excerpt: "The secret to automated scheduling that respects teacher preferences and room constraints.",
    date: "April 28, 2024",
  },
  {
    category: "Management",
    title: "Building a Culture of Accountability in Schools",
    excerpt: "How transparent progress tracking empowers teachers and motivates students.",
    date: "April 15, 2024",
  },
];

export const Resources = () => {
  return (
    <section id="resources" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 reveal">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
              Insights for <span className="text-primary italic">modern</span> educators
            </h2>
            <p className="text-base text-muted-foreground font-medium">
              Explore our latest articles on academic planning, institutional efficiency, and student success.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:translate-x-1 transition-transform">
            View All Resources <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <a key={i} href="#" className="group reveal">
              <div className="glass-card p-8 rounded-[2.5rem] h-full flex flex-col transition-all duration-500 group-hover:bg-primary/5 group-hover:border-primary/20">
                <div className="flex items-center justify-between mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-black/5 border border-black/5 text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                    {post.category}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/40">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-black text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed text-sm mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                  Read Article <ArrowUpRight size={14} className="text-primary" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
