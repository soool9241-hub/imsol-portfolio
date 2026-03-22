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
      className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-background to-[#121620]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="MY STRENGTHS"
          title="저의 강점은요."
          subtitle={`\u201C서툴지만 진심을 다해, 끈임없이 만들고, 배우고, 나누는 메이커\u201D`}
        />

        <div ref={fadeRef} className="space-y-6">
          {strengths.map((s, idx) => (
            <div
              key={s.tag}
              data-animate
              className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Large faded number behind */}
              <div className="absolute top-4 right-6 font-mono text-[80px] font-black text-white/[0.03] leading-none select-none pointer-events-none z-0">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div className="flex flex-col md:flex-row relative z-10">
                {/* Left: Image */}
                <div className="relative w-full md:w-[280px] h-48 md:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.tag}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                </div>

                {/* Right: Content */}
                <div className="p-4 md:p-8 flex-1 transition-transform duration-300 group-hover:-translate-y-1">
                  {/* Number + Icon + tag */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-primary/50 font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl">{s.icon}</span>
                    <span className="font-mono text-xs text-primary tracking-wider font-medium">
                      {s.tag}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base text-muted italic border-l-2 border-primary pl-4 mb-5 leading-relaxed">
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {s.pts.map((pt) => (
                      <li
                        key={pt}
                        className="text-sm text-dim flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5 text-[8px]">
                          &#9654;
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
