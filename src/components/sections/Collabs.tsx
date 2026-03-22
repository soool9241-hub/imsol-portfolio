"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { collabs } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Collabs() {
  const fadeRef = useFadeUp<HTMLDivElement>();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="콜라보" className="py-20 px-6 max-w-5xl mx-auto bg-[#0a0a0a]">
      <SectionHeader label="COLLABORATION" title="브랜드 콜라보 & 제조 기획" />

      <div
        ref={fadeRef}
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {collabs.map((c, i) => (
          <div
            key={c.name}
            data-animate
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative bg-card border rounded-2xl p-7 transition-all duration-300 overflow-hidden ${
              hoveredIndex === i
                ? "border-primary -translate-y-1.5 shadow-lg shadow-primary/10"
                : "border-border"
            }`}
          >
            {/* Bottom bar animation */}
            <div
              className="absolute bottom-0 left-0 w-full h-[3px] bg-primary transition-transform duration-300 origin-left"
              style={{ transform: hoveredIndex === i ? "scaleX(1)" : "scaleX(0)" }}
            />

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-black text-white">{c.name}</h3>
                <p className="text-xs text-dim">{c.sub}</p>
              </div>
              <span
                className={`text-3xl transition-transform duration-300 ${
                  hoveredIndex === i ? "scale-[1.3] rotate-[-10deg]" : ""
                }`}
              >
                {c.emoji}
              </span>
            </div>

            <p className="text-sm text-muted mb-4">{c.desc}</p>

            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary">
              {c.role}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
