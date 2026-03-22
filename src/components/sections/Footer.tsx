"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { EXTERNAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#060606] pt-20 pb-10 text-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Profile image */}
        <div className="w-20 h-20 rounded-full border-2 border-primary mx-auto mb-4 overflow-hidden">
          <img
            src="/images/I10.jpg"
            alt="SOL"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Logo */}
        <div className="font-mono text-xl font-bold text-primary mb-2">SOL.</div>

        {/* Quote */}
        <p className="text-dim text-sm italic mb-6">
          &ldquo;달팽이처럼 천천히, 하지만 정성을 담아 준비하겠습니다.&rdquo;
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted mb-6">
          <span>📞 010-8531-9531</span>
          <span>💬 sool9241</span>
          <span>✉️ sool9241@naver.com</span>
        </div>

        {/* External links */}
        <div className="flex justify-center gap-5 mb-10">
          {EXTERNAL_LINKS.map((link) => (
            <a
              key={link.text}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-xs hover:underline"
            >
              {link.emoji} {link.text}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[#222] text-xs">
          &copy; 2026 스토리팜. 임솔.
        </p>
      </div>
    </footer>
  );
}
