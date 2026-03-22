"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/92 backdrop-blur-xl border-b border-[#151515]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-6">
        <button
          onClick={() => scrollTo("소개")}
          className="font-mono font-bold text-primary text-lg shrink-0"
        >
          SOL.
        </button>

        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`font-mono text-xs px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                activeSection === item
                  ? "text-foreground bg-primary/12"
                  : "text-dim hover:text-muted"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
