"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { journey } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Journey() {
  const fadeRef = useFadeUp<HTMLDivElement>();

  return (
    <section id="경력" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="JOURNEY" title="10년의 여정" />

        <div ref={fadeRef} className="relative">
          {journey.map((item, i) => (
            <div key={item.y} data-animate className="flex gap-6">
              {/* Dot + line column */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-[0_0_0_3px_rgba(64,145,108,0.25)] shrink-0 mt-1" />
                {/* Connecting line */}
                {i < journey.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <span className="font-mono text-primary font-bold text-sm">
                  {item.y}
                </span>
                <h3 className="text-white font-semibold text-base mt-0.5">
                  {item.e}
                </h3>
                <p className="text-dim text-sm mt-0.5">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
