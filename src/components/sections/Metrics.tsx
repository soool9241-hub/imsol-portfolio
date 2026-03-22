"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { metrics } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Metrics() {
  const fadeRef = useFadeUp<HTMLDivElement>();

  return (
    <section id="성과" className="py-20 px-6 max-w-5xl mx-auto">
      <SectionHeader label="ACHIEVEMENTS" title="핵심 성과" />

      <div
        ref={fadeRef}
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}
      >
        {metrics.map((m) => (
          <div
            key={m.u}
            data-animate
            className="border border-border rounded-2xl p-7 text-center"
            style={{
              backgroundColor: `${m.c}12`,
              borderTopWidth: "3px",
              borderTopColor: m.c,
            }}
          >
            <div className="font-mono text-4xl font-bold" style={{ color: m.c }}>
              {m.n}
            </div>
            <div className="text-xs text-dim mt-2">{m.u}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
