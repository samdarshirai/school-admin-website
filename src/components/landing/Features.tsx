import { FeatureRow } from "./FeatureRow";
import classOverview from "@/assets/class-overview.png";
import academicCalendar from "@/assets/academic-calendar.png";
import alerts from "@/assets/alerts.png";
import lessonTracking from "@/assets/lesson-tracking.png";
import completionHistory from "@/assets/completion-history.png";
import sectionPerformance from "@/assets/section-performance.png";
import timetable from "@/assets/timetable.png";

const features = [
  {
    eyebrow: "Class Overview",
    title: "See your entire school at a glance.",
    body: "Every class, section, and teacher in a single command center — no more digging through spreadsheets.",
    image: classOverview,
    imageAlt: "Class overview dashboard",
    bullets: ["Live structure of classes & sections", "Teacher assignments by subject", "One-click drill-down"],
  },
  {
    eyebrow: "Academic Calendar",
    title: "Plan curriculum timelines that actually hold.",
    body: "Map the academic year by chapter and unit, and instantly spot deadlines slipping out of reach.",
    image: academicCalendar,
    imageAlt: "Academic calendar planning view",
    bullets: ["Visual term-wise planning", "Deadline conflict detection", "Sync across sections"],
  },
  {
    eyebrow: "Alerts System",
    title: "Catch delays before they snowball.",
    body: "Real-time alerts for overdue chapters, lagging sections, and low completion — sent to the right people, automatically.",
    image: alerts,
    imageAlt: "Alerts and notifications panel",
    bullets: ["Configurable thresholds", "Role-based escalation", "Daily digest summaries"],
  },
  {
    eyebrow: "Lesson Tracking",
    title: "Track completion down to the topic.",
    body: "Teachers log progress in seconds. Leaders see exactly where every section stands — chapter, topic, and subtopic.",
    image: lessonTracking,
    imageAlt: "Lesson tracking interface",
    bullets: ["Granular topic-level status", "Mobile-friendly logging", "Auto-rolled progress %"],
  },
  {
    eyebrow: "Completion History",
    title: "An audit trail you can trust.",
    body: "Every entry is timestamped and attributed. Know what was completed, when, and by whom — for any class, ever.",
    image: completionHistory,
    imageAlt: "Completion history audit log",
    bullets: ["Immutable activity log", "Per-teacher contribution view", "Exportable reports"],
  },
  {
    eyebrow: "Section Performance",
    title: "Identify underperformers early.",
    body: "Compare sections side by side, surface laggards, and intervene weeks earlier — not at year-end review.",
    image: sectionPerformance,
    imageAlt: "Section performance comparison",
    bullets: ["Side-by-side benchmarks", "Trend lines per section", "Actionable insights"],
  },
  {
    eyebrow: "Timetable Generator",
    title: "Optimized timetables in seconds.",
    body: "Define rules once. Generate conflict-free, balanced timetables across the school instantly — and re-run any time.",
    image: timetable,
    imageAlt: "Automated timetable generator",
    bullets: ["Constraint-aware scheduling", "Conflict-free guarantees", "One-click regenerate"],
  },
];

export const Features = () => {
  return (
    <section id="features" className="bg-secondary/40 border-y border-border">
      <div className="container py-20 md:py-28">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Platform</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            Everything you need to run academics — built in.
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {features.map((f, i) => (
            <FeatureRow key={f.eyebrow} {...f} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
