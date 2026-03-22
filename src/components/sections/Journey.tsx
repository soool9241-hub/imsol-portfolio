"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { journey } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Journey() {
  const fadeRef = useFadeUp<HTMLDivElement>();
  const lastIndex = journey.length - 1;

  return (
    <section id="경력" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="JOURNEY" title="10년의 여정" />

        <div ref={fadeRef} className="relative">
          {journey.map((item, i) => {
            const isLatest = i === lastIndex;

            return (
              <div
                key={item.y}
                data-animate
                className="group flex gap-6 relative"
              >
                {/* Dot + line column */}
                <div className="flex flex-col items-center relative">
                  {/* Connecting line with gradient */}
                  {i < lastIndex && (
                    <div
                      className="absolute top-5 bottom-0 w-[3px] rounded-full"
                      style={{
                        background: `linear-gradient(to bottom, rgba(64,145,108,${0.15 + (i / lastIndex) * 0.5}), rgba(64,145,108,${0.2 + ((i + 1) / lastIndex) * 0.6}))`,
                      }}
                    />
                  )}

                  {/* Dot */}
                  <div
                    className={`relative w-4 h-4 rounded-full shrink-0 mt-1 z-10 ${
                      isLatest
                        ? "bg-primary shadow-[0_0_0_4px_rgba(64,145,108,0.25),0_0_12px_rgba(64,145,108,0.4)]"
                        : "bg-primary/70 border-2 border-background shadow-[0_0_0_3px_rgba(64,145,108,0.15)]"
                    }`}
                  >
                    {isLatest && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <div className="group-hover:bg-card/60 group-hover:border-border rounded-xl transition-all duration-300 p-3 -ml-3 group-hover:shadow-sm">
                    {/* Year pill */}
                    <span className="inline-block font-mono text-xs font-bold text-white bg-primary px-3 py-1 rounded-full mb-2">
                      {item.y}
                    </span>
                    <h3 className="text-white font-semibold text-base mt-1">
                      {item.e}
                    </h3>
                    <p className="text-dim text-sm mt-0.5">{item.d}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
