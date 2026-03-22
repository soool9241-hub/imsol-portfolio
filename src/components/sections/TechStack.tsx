"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { tech } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function TechStack() {
  const fadeRef = useFadeUp<HTMLDivElement>();

  // Split into hardware / software
  const hardware = tech.filter((t) => t.c === "제조 장비");
  const software = tech.filter((t) => t.c !== "제조 장비");

  // Skill levels for software items (mapped by category name)
  const skillLevels: Record<string, number> = {
    "프론트엔드": 80,
    "백엔드": 70,
    "자동화": 85,
    "AI/LLM": 90,
    "데이터": 75,
  };

  return (
    <section id="기술" className="py-12 md:py-20 px-4 md:px-6 max-w-6xl mx-auto">
      <SectionHeader label="TECH STACK" title="기술 스택" />

      <div ref={fadeRef} className="space-y-10">
        {/* Hardware row */}
        <div>
          <h3 className="font-mono text-sm text-primary/70 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary/50" />
            하드웨어 — 제조 장비
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {hardware.map((t) => (
              <div
                key={t.c}
                data-animate
                className="group bg-card border border-border rounded-2xl p-4 md:p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                style={{ perspective: "600px" }}
              >
                <div className="transition-transform duration-300 md:group-hover:[transform:rotateY(3deg)_rotateX(2deg)]">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-xl md:text-3xl mb-2 md:mb-3">
                    {t.e}
                  </div>
                  <div className="font-mono text-xs text-primary font-medium mb-3">{t.c}</div>
                  <div>
                    {t.i.map((item) => (
                      <div key={item} className="text-xs md:text-sm text-muted py-0.5">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software row */}
        <div>
          <h3 className="font-mono text-sm text-primary/70 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary/50" />
            소프트웨어 — 프론트/백/자동화/AI/데이터
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {software.map((t) => {
              const level = skillLevels[t.c] || 50;
              return (
                <div
                  key={t.c}
                  data-animate
                  className="group bg-card border border-border rounded-2xl p-4 md:p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                  style={{ perspective: "600px" }}
                >
                  <div className="transition-transform duration-300 md:group-hover:[transform:rotateY(3deg)_rotateX(2deg)]">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-xl md:text-3xl mb-2 md:mb-3">
                      {t.e}
                    </div>
                    <div className="font-mono text-xs text-primary font-medium mb-2">{t.c}</div>

                    {/* Skill level bar */}
                    <div className="h-1.5 bg-border/80 rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                    <div className="font-mono text-[10px] text-dim mb-2">{level}%</div>

                    <div>
                      {t.i.map((item) => (
                        <div key={item} className="text-xs md:text-sm text-muted py-0.5">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
