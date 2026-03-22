"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionEls = NAV_ITEMS.map((item) => document.getElementById(item)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <div
          className="h-full bg-primary transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass"
            : "bg-transparent"
        }`}
      >
        <div className={`max-w-6xl mx-auto px-3 md:px-6 flex items-center gap-3 md:gap-6 transition-all duration-500 ${
          scrolled ? "h-12" : "h-14 md:h-16"
        }`}>
          <button
            onClick={() => scrollTo("소개")}
            className="font-mono font-bold text-primary text-sm md:text-lg shrink-0 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(64,145,108,0.6)]"
          >
            SOL.
          </button>

          <div className="flex items-center gap-0.5 md:gap-1 overflow-x-auto scrollbar-none flex-nowrap">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative font-mono text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-1.5 whitespace-nowrap transition-colors duration-300 animated-underline ${
                  activeSection === item
                    ? "text-foreground"
                    : "text-dim hover:text-muted"
                }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
