"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { revenue, pensionStats } from "@/lib/data";
import { useFadeUp, useBarGrow } from "@/lib/useScrollAnimation";

export default function Pension() {
  const maxVal = Math.max(...revenue.map((r) => r.v));
  const barRef = useBarGrow<HTMLDivElement>();
  const fadeRef = useFadeUp<HTMLDivElement>();

  return (
    <section id="펜션" className="py-20 px-6 max-w-5xl mx-auto bg-[#0a0a0a]">
      <SectionHeader label="REVENUE" title="펜션 매출 5년간 7배 성장" />

      {/* Bar chart */}
      <div ref={barRef} className="space-y-3 mb-10">
        {revenue.map((r, i) => {
          const pct = (r.v / maxVal) * 100;
          const prev = i > 0 ? revenue[i - 1].v : null;
          const growth = prev ? Math.round(((r.v - prev) / prev) * 100) : null;

          return (
            <div key={r.y} className="flex items-center gap-4">
              <span className="font-mono w-12 text-sm text-dim text-right">{r.y}</span>
              <div className="flex-1 h-10 bg-[#141414] rounded-lg overflow-hidden">
                <div
                  className="h-full rounded-md flex items-center pl-3"
                  data-bar={pct}
                  style={{
                    width: 0,
                    background: "linear-gradient(90deg, #1B4332, #40916C)",
                  }}
                >
                  <span className="font-mono text-sm font-bold text-white whitespace-nowrap">
                    {r.v.toLocaleString()}만
                  </span>
                </div>
              </div>
              <span className="font-mono text-sm text-primary font-bold w-14 text-right">
                {growth !== null ? `+${growth}%` : ""}
              </span>
            </div>
          );
        })}
      </div>

      {/* Stats grid */}
      <div
        ref={fadeRef}
        className="grid gap-3"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}
      >
        {pensionStats.map((s) => (
          <div
            key={s.label}
            className="text-center p-3.5 bg-card rounded-xl border border-border"
          >
            <div className="font-mono text-xl font-bold text-primary">{s.value}</div>
            <div className="text-[10px] text-dim">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
