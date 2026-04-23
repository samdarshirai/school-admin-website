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
    eyebrow: "Track Section Performance in Real Time",
    title: "Spot delays early. Fix them faster.",
    body: "Track how each section is progressing in real time and identify where teaching is falling behind. Instantly see gaps like Class 10 Section A running 16.8% behind with multiple missed milestones—so you can act before it impacts results.",
    image: sectionPerformance,
    imageAlt: "Dashboard showing Section A with 16.8% velocity gap and 3 missed deadlines",
    bullets: ["Track missed deadlines and pacing gaps", "Identify sections falling behind instantly", "Automatically flag critical subjects"],
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
    <section id="features" className="relative py-24 md:py-32">
      <div className="container relative z-10">
        <div className="max-w-3xl mb-20 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full glass-button text-xs font-bold uppercase tracking-widest text-primary mb-6">
            Platform Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            Everything you need to run <span className="text-primary italic">academics</span> — built in.
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          {features.map((f, i) => (
            <FeatureRow key={f.eyebrow} {...f} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
