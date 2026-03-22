"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { lectures } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Lectures() {
  const fadeRef = useFadeUp<HTMLDivElement>();

  const icons = ["🏝️", "🎓", "💰", "🔬", "🏛️"];

  return (
    <section id="교육" className="py-12 md:py-20 bg-[#0e1118]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
      <SectionHeader label="LECTURES" title="강연 & 자문" />

      <div ref={fadeRef} className="space-y-3">
        {lectures.map((l, i) => (
          <div
            key={l.t}
            data-animate
            className="group flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4 p-3 px-4 md:p-4 md:px-5 bg-card rounded-xl border border-border transition-all duration-300 hover:border-primary/50 hover:translate-x-2 hover:shadow-md hover:shadow-primary/5 relative overflow-hidden"
          >
            {/* Left green accent on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            {/* Index */}
            <span className="font-mono text-xs text-primary/40 font-bold w-6 text-center shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Icon */}
            <span className="text-2xl shrink-0">{icons[i] || "🎤"}</span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xs md:text-sm font-semibold text-foreground">{l.t}</h3>
              <p className="text-[10px] md:text-xs text-dim mt-0.5">{l.d}</p>
            </div>

            {/* Date badge */}
            <span className="font-mono text-[10px] md:text-xs text-primary bg-primary/10 px-2 md:px-3 py-1 rounded-full shrink-0">
              {l.y}
            </span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
