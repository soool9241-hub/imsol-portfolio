"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { agentTeams, automationStats } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Automation() {
  const teamsRef = useFadeUp<HTMLDivElement>();
  const statsRef = useFadeUp<HTMLDivElement>();

  return (
    <section id="자동화" className="py-20 px-6 max-w-5xl mx-auto">
      <SectionHeader label="AI & AUTOMATION" title="AI 에이전트 & 자동화" />

      {/* Agent teams */}
      <div
        ref={teamsRef}
        className="grid gap-4 mb-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {agentTeams.map((team) => (
          <Card key={team.t} className="!border-l-[3px]" highlight={false} data-animate>
            <div style={{ borderLeftColor: team.c }}>
              <div
                className="!border-l-[3px] -ml-5 pl-[17px]"
                style={{ borderLeftColor: team.c }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold" style={{ color: team.c }}>
                    {team.t}
                  </h3>
                  <span className="font-mono text-xl" style={{ color: team.c }}>
                    {team.n}
                  </span>
                </div>
                <p className="text-sm text-muted">{team.d}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Stats grid */}
      <div
        ref={statsRef}
        className="grid gap-3"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}
      >
        {automationStats.map((s) => (
          <div
            key={s.label}
            data-animate
            className="text-center p-3.5 bg-primary/5 rounded-xl border border-primary/10"
          >
            <div className="font-mono text-xl font-bold text-primary">{s.value}</div>
            <div className="text-[10px] text-dim">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
