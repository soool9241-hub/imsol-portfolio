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
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        {metrics.map((m) => (
          <div
            key={m.u}
            data-animate
            className="relative border border-border rounded-2xl p-8 text-center overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{
              backgroundColor: `${m.c}08`,
              borderTopWidth: "3px",
              borderTopColor: m.c,
            }}
          >
            {/* Shimmer effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `linear-gradient(105deg, transparent 40%, ${m.c}12 45%, ${m.c}20 50%, ${m.c}12 55%, transparent 60%)`,
                backgroundSize: "200% 100%",
                animation: "shimmer 2s ease-in-out infinite",
              }}
            />

            <div
              className="font-mono text-5xl md:text-6xl font-black relative z-10"
              style={{ color: m.c }}
            >
              {m.n}
            </div>

            {/* Small decorative bar */}
            <div
              className="w-8 h-1 rounded-full mx-auto mt-4 mb-3"
              style={{ backgroundColor: `${m.c}40` }}
            />

            <div className="text-sm text-dim relative z-10">{m.u}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
