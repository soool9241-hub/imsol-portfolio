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
      className="relative py-20 px-6 max-w-5xl mx-auto bg-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #40916C 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">
        <SectionHeader label="REVENUE" title="펜션 매출 5년간 7배 성장" />

        {/* Bar chart */}
        <div ref={barRef} className="space-y-4 mb-12">
          {revenue.map((r, i) => {
            const pct = (r.v / maxVal) * 100;
            const prev = i > 0 ? revenue[i - 1].v : null;
            const growth = prev ? Math.round(((r.v - prev) / prev) * 100) : null;

            return (
              <div key={r.y} className="flex items-center gap-4">
                <span className="font-mono w-12 text-sm text-dim text-right font-bold">
                  {r.y}
                </span>
                <div className="flex-1 h-12 bg-[#141414] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center pl-4"
                    data-bar={pct}
                    style={{
                      width: 0,
                      background: "linear-gradient(90deg, #1B4332, #40916C, #52B788)",
                    }}
                  >
                    <span className="font-mono text-sm font-bold text-white whitespace-nowrap">
                      {r.v.toLocaleString()}만
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 w-16 justify-end">
                  {growth !== null && (
                    <>
                      <span className="text-primary text-xs">&#9650;</span>
                      <span className="font-mono text-sm text-primary font-bold">
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
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
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
