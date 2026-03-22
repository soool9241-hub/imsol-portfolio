"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { agentTeams, automationStats } from "@/lib/data";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Automation() {
  const teamsRef = useFadeUp<HTMLDivElement>();
  const statsRef = useFadeUp<HTMLDivElement>();

  return (
    <section id="자동화" className="relative py-12 md:py-20 px-4 md:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Circuit/grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(64,145,108,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64,145,108,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10">
        <SectionHeader label="AI & AUTOMATION" title="AI 에이전트 & 자동화" />

        {/* Agent teams */}
        <div ref={teamsRef} className="relative mb-12">
          {/* Connecting line between teams */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#1B4332] via-[#40916C] to-[#52B788] hidden md:block" />

          <div className="space-y-5">
            {agentTeams.map((team, i) => (
              <div
                key={team.t}
                data-animate
                className="relative group"
              >
                {/* Horizontal connector on desktop */}
                <div
                  className="absolute left-8 top-1/2 w-8 h-px hidden md:block"
                  style={{ backgroundColor: team.c }}
                />

                <div
                  className="md:ml-20 bg-card border border-border rounded-2xl p-4 md:p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  style={{
                    background: `linear-gradient(135deg, #111 0%, ${team.c}08 100%)`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    {/* Circular number badge */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-xl font-black text-white shrink-0"
                      style={{ backgroundColor: team.c }}
                    >
                      {team.n.replace("명", "")}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">{team.t}</h3>
                      <span className="font-mono text-xs" style={{ color: team.c }}>
                        {team.n} 에이전트
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{team.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {automationStats.map((s) => {
            const numVal = parseInt(s.value);
            return (
              <div
                key={s.label}
                data-animate
                className="relative text-center p-6 bg-card rounded-2xl border border-primary/10 overflow-hidden group hover:border-primary/30 transition-all"
              >
                {/* Circular progress visual */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-3">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(64,145,108,0.1)"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#40916C"
                      strokeWidth="2.5"
                      strokeDasharray={`${numVal}, 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-lg font-bold text-primary">
                    {s.value}
                  </div>
                </div>
                <div className="text-xs text-dim">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
