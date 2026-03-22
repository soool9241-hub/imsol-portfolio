"use client";

import { useState, useMemo } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { projects, FILTER_TAGS } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Career() {
  const fadeRef = useFadeUp<HTMLDivElement>();
  const [active, setActive] = useState("전체");

  // Count items per tag
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    counts["전체"] = projects.reduce((sum, g) => sum + g.items.length, 0);
    for (const tag of FILTER_TAGS) {
      if (tag === "전체") continue;
      counts[tag] = projects.reduce(
        (sum, g) => sum + g.items.filter((item) => item.tag === tag).length,
        0
      );
    }
    return counts;
  }, []);

  const filtered = projects
    .map((group) => ({
      ...group,
      items:
        active === "전체"
          ? group.items
          : group.items.filter((item) => item.tag === active),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="경력" className="py-20 px-6 max-w-5xl mx-auto">
      <SectionHeader label="CAREER" title="프로젝트 경력" />

      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap mb-8">
        {FILTER_TAGS.map((tag) => {
          const count = tagCounts[tag] || 0;
          if (tag !== "전체" && count === 0) return null;
          return (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 ${
                active === tag
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                  : "bg-card border border-border text-muted hover:border-primary/40 hover:text-primary"
              }`}
            >
              {tag}
              <span className={`ml-1.5 font-mono text-[10px] ${active === tag ? "text-white/70" : "text-dim"}`}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      <div ref={fadeRef}>
        {filtered.map((group) => (
          <div key={group.y} className="mb-10">
            {/* Year header with decorative line */}
            <div className="flex items-center gap-4 sticky top-14 bg-background py-2 z-10">
              <h3 className="font-mono text-lg font-bold text-primary shrink-0">
                {group.y}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </div>

            <div
              className="grid gap-3.5 mt-4"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
            >
              {group.items.map((item) => (
                <div
                  key={item.t}
                  data-animate
                  className={`group bg-card rounded-2xl p-5 transition-all duration-300 border-l-[2px] hover:border-l-[4px] hover:-translate-y-0.5 hover:shadow-md ${
                    item.hl
                      ? "border border-primary border-l-primary"
                      : "border border-border border-l-primary/40 hover:border-l-primary"
                  }`}
                >
                  <h4 className="font-bold text-sm text-foreground">{item.t}</h4>
                  <p className="text-xs text-muted mt-1">{item.d}</p>
                  <div className="flex gap-1.5 mt-3 flex-wrap">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary">
                      {item.s}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1a1a1a] text-muted">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
