"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { revenue, pensionStats } from "@/lib/data";
import { useFadeUp, useBarGrow } from "@/lib/useScrollAnimation";

export default function Pension() {
  const maxVal = Math.max(...revenue.map((r) => r.v));
  const barRef = useBarGrow<HTMLDivElement>();
  const fadeRef = useFadeUp<HTMLDivElement>();

  const statIcons = ["📋", "👥", "🔄", "👤", "📊"];

  return (
    <section
      id="펜션"
      className="relative py-12 md:py-20 bg-[#0e1118] overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #40916C 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader label="REVENUE" title="펜션 매출 5년간 7배 성장" />

        {/* Bar chart */}
        <div ref={barRef} className="space-y-4 mb-12">
          {revenue.map((r, i) => {
            const pct = (r.v / maxVal) * 100;
            const prev = i > 0 ? revenue[i - 1].v : null;
            const growth = prev ? Math.round(((r.v - prev) / prev) * 100) : null;

            return (
              <div key={r.y} className="flex items-center gap-2 md:gap-4">
                <span className="font-mono w-10 md:w-12 text-xs md:text-sm text-dim text-right font-bold">
                  {r.y}
                </span>
                <div className="flex-1 h-8 md:h-12 bg-[#1c1f28] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center pl-4"
                    data-bar={pct}
                    style={{
                      width: 0,
                      background: "linear-gradient(90deg, #1B4332, #40916C, #52B788)",
                    }}
                  >
                    <span className="font-mono text-[10px] md:text-sm font-bold text-white whitespace-nowrap">
                      {r.v.toLocaleString()}만
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 md:gap-1.5 w-12 md:w-16 justify-end">
                  {growth !== null && (
                    <>
                      <span className="text-primary text-[10px] md:text-xs">&#9650;</span>
                      <span className="font-mono text-[10px] md:text-sm text-primary font-bold">
                        +{growth}%
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats grid */}
        <div
          ref={fadeRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4"
        >
          {pensionStats.map((s, i) => (
            <div
              key={s.label}
              className="text-center p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl mb-2">{statIcons[i] || "📈"}</div>
              <div className="font-mono text-2xl font-bold text-primary">
                {s.value}
              </div>
              <div className="text-xs text-dim mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
