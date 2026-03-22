"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { lectures } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Lectures() {
  const fadeRef = useFadeUp<HTMLDivElement>();

  return (
    <section id="교육" className="py-20 px-6 max-w-5xl mx-auto bg-[#0a0a0a]">
      <SectionHeader label="LECTURES" title="강연 & 자문" />

      <div ref={fadeRef}>
        {lectures.map((l) => (
          <div
            key={l.t}
            data-animate
            className="flex justify-between items-center p-3.5 px-5 bg-card rounded-xl border border-border mb-2 transition-colors hover:border-primary-dark"
          >
            <div>
              <h3 className="text-sm font-semibold text-foreground">{l.t}</h3>
              <p className="text-xs text-dim mt-0.5">{l.d}</p>
            </div>
            <span className="font-mono text-sm text-primary">{l.y}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
