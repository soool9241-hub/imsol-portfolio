"use client";

import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { strengths } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Strengths() {
  const fadeRef = useFadeUp<HTMLDivElement>();

  return (
    <section
      id="강점"
      className="relative py-20 px-4 bg-gradient-to-b from-background to-[#0a0f0c]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="MY STRENGTHS"
          title="저의 강점은요."
          subtitle={`\u201C서툴지만 진심을 다해, 끈임없이 만들고, 배우고, 나누는 메이커\u201D`}
        />

        <div
          ref={fadeRef}
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {strengths.map((s) => (
            <Card key={s.tag} data-animate className="p-0 overflow-hidden">
              {/* Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={s.img}
                  alt={s.tag}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 260px"
                />
              </div>

              <div className="p-5">
                {/* Icon + tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{s.icon}</span>
                  <span className="font-mono text-xs text-primary tracking-wider">
                    {s.tag}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-muted italic border-l-2 border-primary-dark pl-3 mb-4">
                  {s.quote}
                </p>

                {/* Bullet points */}
                <ul className="space-y-1.5">
                  {s.pts.map((pt) => (
                    <li
                      key={pt}
                      className="text-xs text-dim flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5 text-[8px]">
                        &#9654;
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
