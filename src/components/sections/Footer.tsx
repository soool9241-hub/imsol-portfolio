"use client";

import { EXTERNAL_LINKS, NAV_ITEMS } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-[#0a0d12] pt-16 pb-10">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Back to top button */}
      <div className="flex justify-center -mt-22 md:-mt-24 mb-8 md:mb-10">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          aria-label="맨 위로"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
          {/* Left: Logo + Quote */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
                <img
                  src="/images/I10.jpg"
                  alt="SOL"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-mono text-xl font-bold text-primary">SOL.</div>
            </div>
            <p className="text-dim text-sm italic leading-relaxed">
              &ldquo;달팽이처럼 천천히, 하지만 정성을 담아 준비하겠습니다.&rdquo;
            </p>
          </div>

          {/* Center: Quick links */}
          <div className="text-center md:text-left">
            <h4 className="font-mono text-xs text-primary tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.slice(0, 8).map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-sm text-muted hover:text-primary transition-colors py-1"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-mono text-xs text-primary tracking-wider uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-muted mb-5">
              <div className="flex items-center gap-2">
                <span>📞</span> 010-8531-9531
              </div>
              <div className="flex items-center gap-2">
                <span>💬</span> sool9241
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span> sool9241@naver.com
              </div>
            </div>

            {/* Social / external link buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {EXTERNAL_LINKS.map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-sm hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
                  title={link.text}
                >
                  {link.emoji}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-6" />

        {/* Copyright */}
        <p className="text-[#444] text-xs text-center">
          &copy; 2026 스토리팜. 임솔.
        </p>
      </div>
    </footer>
  );
}
