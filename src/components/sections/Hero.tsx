"use client";

import Image from "next/image";
import { heroStats } from "@/lib/data";
import { useFadeUp, useParallax } from "@/lib/useScrollAnimation";

export default function Hero() {
  const fadeRef = useFadeUp<HTMLDivElement>();
  const parallaxRef = useParallax<HTMLDivElement>();

  return (
    <section
      id="소개"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Radial gradient overlay */}
      <div ref={parallaxRef} className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(64,145,108,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl w-full flex flex-wrap items-center gap-12 lg:gap-20">
        {/* Profile image */}
        <div className="mx-auto lg:mx-0 shrink-0">
          <div className="relative w-[280px] h-[420px] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
            <Image
              src="/images/I02.jpg"
              alt="임솔 프로필"
              width={280}
              height={420}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Right content */}
        <div ref={fadeRef} className="flex-1 min-w-[280px]">
          <p data-animate className="font-mono text-primary text-xs tracking-[6px] uppercase mb-4">
            MAKER &middot; BUILDER &middot; CREATOR
          </p>

          <h1
            data-animate
            className="font-black text-white mb-4"
            style={{ fontSize: "clamp(48px, 8vw, 80px)", lineHeight: 1.1 }}
          >
            임 솔
          </h1>

          <p data-animate className="text-foreground text-base leading-relaxed mb-2 max-w-lg">
            120평 CNC 공방{" "}
            <span className="text-primary font-medium">스토리팜</span> 대표,
            60평 독채 펜션{" "}
            <span className="text-primary font-medium">달팽이아지트</span> 운영.
          </p>
          <p data-animate className="text-muted text-sm mb-6 max-w-lg">
            10년간 700건+ 제작, 매라키 4억+ 매출, AI 에이전트 25명 설계.
            만들고, 운영하고, 자동화합니다.
          </p>

          {/* Hero stats */}
          <div data-animate className="flex flex-wrap gap-6 mb-8">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-mono text-xl text-primary font-bold">
                  {stat.value}
                </p>
                <p className="text-[10px] text-dim uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div data-animate className="flex flex-wrap items-center gap-4 text-xs text-muted font-mono">
            <span>📞 010-8531-9531</span>
            <span>💬 sool9241</span>
            <span>✉️ sool9241@naver.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
