"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { tech } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function TechStack() {
  const fadeRef = useFadeUp<HTMLDivElement>();

  return (
    <section id="기술" className="py-20 px-6 max-w-5xl mx-auto">
      <SectionHeader label="TECH STACK" title="기술 스택" />

      <div
        ref={fadeRef}
        className="grid gap-3.5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
      >
        {tech.map((t) => (
          <Card key={t.c} data-animate>
            <div className="text-2xl mb-2">{t.e}</div>
            <div className="font-mono text-xs text-primary font-medium mb-2.5">
              {t.c}
            </div>
            <div>
              {t.i.map((item) => (
                <div key={item} className="text-sm text-muted py-0.5">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
