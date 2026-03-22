"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { projects, FILTER_TAGS } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Career() {
  const fadeRef = useFadeUp<HTMLDivElement>();
  const [active, setActive] = useState("전체");

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

      <div className="flex gap-1.5 flex-wrap mb-8">
        {FILTER_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`px-4 py-2 rounded-lg border text-xs font-sans cursor-pointer transition-colors ${
              active === tag
                ? "bg-primary border-primary text-white"
                : "bg-transparent border-border text-muted"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div ref={fadeRef}>
      {filtered.map((group) => (
        <div key={group.y} className="mb-8">
          <h3 className="font-mono text-lg font-bold text-primary sticky top-14 bg-background py-2 border-b border-border z-10">
            {group.y}
          </h3>
          <div
            className="grid gap-3.5 mt-4"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
          >
            {group.items.map((item) => (
              <Card key={item.t} highlight={item.hl} data-animate>
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
              </Card>
            ))}
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}
