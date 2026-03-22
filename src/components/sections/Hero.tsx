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
      className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden noise"
    >
      {/* Radial gradient overlay */}
      <div ref={parallaxRef} className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(64,145,108,0.08)_0%,_transparent_70%)] pointer-events-none" />

      {/* Floating decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-primary/20 animate-float" />
        <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 rounded-full bg-primary/15 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-[30%] left-[20%] w-1 h-1 rounded-full bg-primary/25 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[60%] right-[10%] w-2.5 h-2.5 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative max-w-6xl w-full flex flex-wrap items-center gap-16 lg:gap-24">
        {/* Profile image */}
        <div className="mx-auto lg:mx-0 shrink-0">
          <div className="relative">
            {/* Decorative rotated rectangle behind */}
            <div className="absolute -inset-3 rounded-2xl border border-primary/20 rotate-3 transition-transform duration-500" />
            {/* Dots pattern decoration */}
            <div className="absolute -top-6 -right-6 grid grid-cols-3 gap-1.5 opacity-30">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-primary" />
              ))}
            </div>
            {/* Image with gradient glow border */}
            <div className="relative w-[280px] h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 p-[2px] bg-gradient-to-br from-primary/60 via-primary/20 to-primary-dark/40">
              <div className="w-full h-full rounded-[14px] overflow-hidden">
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
          </div>
        </div>

        {/* Right content */}
        <div ref={fadeRef} className="flex-1 min-w-[280px]">
          <div data-animate className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-[1px] bg-primary" />
            <p className="font-mono text-primary text-xs tracking-[6px] uppercase">
              MAKER &middot; BUILDER &middot; CREATOR
            </p>
            <span className="block w-8 h-[1px] bg-primary" />
          </div>

          <h1
            data-animate
            className="font-black text-white mb-5 text-gradient"
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
          <p data-animate className="text-muted text-sm mb-8 max-w-lg">
            10년간 700건+ 제작, 매라키 4억+ 매출, AI 에이전트 25명 설계.
            만들고, 운영하고, 자동화합니다.
          </p>

          {/* Hero stats as pill badges */}
          <div data-animate className="flex flex-wrap gap-3 mb-10">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 hover:border-primary/30 transition-colors duration-300">
                <span className="font-mono text-sm text-primary font-bold">
                  {stat.value}
                </span>
                <span className="text-[10px] text-dim uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Contact info as clickable pills */}
          <div data-animate className="flex flex-wrap items-center gap-3">
            <a href="tel:010-8531-9531" className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/30 text-xs text-muted font-mono hover:border-primary/40 hover:text-foreground transition-all duration-300">
              <span>📞</span> 010-8531-9531
            </a>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/30 text-xs text-muted font-mono hover:border-primary/40 hover:text-foreground transition-all duration-300 cursor-default">
              <span>💬</span> sool9241
            </span>
            <a href="mailto:sool9241@naver.com" className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/30 text-xs text-muted font-mono hover:border-primary/40 hover:text-foreground transition-all duration-300">
              <span>✉️</span> sool9241@naver.com
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-mono text-[10px] text-dim tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
          <path d="M8 2v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
