"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { collabs } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Collabs() {
  const fadeRef = useFadeUp<HTMLDivElement>();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="콜라보" className="py-12 md:py-20 bg-[#0e1118]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
      <SectionHeader label="COLLABORATION" title="브랜드 콜라보 & 제조 기획" />

      <div
        ref={fadeRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {collabs.map((c, i) => (
          <div
            key={c.name}
            data-animate
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${
              hoveredIndex === i
                ? "border-primary -translate-y-2 shadow-xl shadow-primary/15"
                : "border-border"
            }`}
          >
            {/* Top gradient accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary/60 to-transparent" />

            <div className="p-4 md:p-7">
              {/* Large emoji visual */}
              <div className="flex items-start gap-3 md:gap-5 mb-4">
                <div
                  className={`text-3xl md:text-5xl transition-all duration-500 ${
                    hoveredIndex === i ? "scale-125 rotate-[-12deg]" : ""
                  }`}
                >
                  {c.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white">{c.name}</h3>
                  <p className="text-xs text-dim mt-0.5">{c.sub}</p>
                </div>
              </div>

              <p className="text-sm text-muted mb-5 leading-relaxed">{c.desc}</p>

              {/* Role badge - more prominent */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-dim uppercase tracking-wider">역할</span>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary font-semibold">
                  {c.role}
                </span>
              </div>
            </div>

            {/* Bottom bar animation */}
            <div
              className="absolute bottom-0 left-0 w-full h-[3px] bg-primary transition-transform duration-300 origin-left"
              style={{ transform: hoveredIndex === i ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
