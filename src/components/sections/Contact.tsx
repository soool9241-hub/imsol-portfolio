"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Contact() {
  const fadeRef = useFadeUp<HTMLDivElement>();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: form submission logic
  };

  const socialLinks = [
    { icon: "🏠", label: "펜션", url: "https://dalpaengi-five.vercel.app" },
    { icon: "🧩", label: "조립공간", url: "https://jolib-booking.vercel.app" },
    { icon: "📝", label: "블로그", url: "https://blog.naver.com/sool9241" },
    { icon: "🏕️", label: "sneff", url: "https://smartstore.naver.com/sneff" },
  ];

  return (
    <section id="문의" className="py-12 md:py-20 bg-[#0e1118]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
      <SectionHeader label="CONTACT" title="프로젝트 문의" />

      <div ref={fadeRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Left: Contact info */}
        <div className="space-y-8">
          {/* Location */}
          <div>
            <h3 className="font-mono text-xs text-primary tracking-wider mb-3 uppercase">
              Location
            </h3>
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-sm text-foreground font-semibold">전주 / 완주</p>
                  <p className="text-xs text-dim">전라북도 완주군 (스토리팜)</p>
                </div>
              </div>
              {/* Simple map indicator */}
              <div className="w-full h-24 bg-[#0d0d0d] rounded-lg flex items-center justify-center border border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle, #40916C 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }}
                />
                <div className="text-center z-10">
                  <div className="text-xl mb-1">🗺️</div>
                  <p className="text-[10px] text-dim font-mono">35.8N / 127.1E</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="font-mono text-xs text-primary tracking-wider mb-3 uppercase">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="text-lg">📞</span>
                <span>010-5765-9241</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="text-lg">💬</span>
                <span>카카오톡: sool9241</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="text-lg">✉️</span>
                <span>sool9241@naver.com</span>
              </div>
            </div>
          </div>

          {/* Social / External links */}
          <div>
            <h3 className="font-mono text-xs text-primary tracking-wider mb-3 uppercase">
              Links
            </h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-xs text-muted hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Floating label inputs */}
          {[
            { name: "name", label: "이름", type: "text" },
            { name: "phone", label: "연락처", type: "tel" },
            { name: "email", label: "이메일", type: "email" },
          ].map((field) => (
            <div key={field.name} className="relative">
              <input
                type={field.type}
                name={field.name}
                value={form[field.name as keyof typeof form]}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-card border border-border rounded-xl px-4 pt-5 pb-2 text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
              />
              <label className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted pointer-events-none transition-all duration-200 peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs">
                {field.label}
              </label>
            </div>
          ))}

          {/* Message textarea with floating label */}
          <div className="relative">
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-card border border-border rounded-xl px-4 pt-6 pb-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <label className="absolute left-4 top-4 text-sm text-muted pointer-events-none transition-all duration-200 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs">
              문의 내용
            </label>
          </div>

          {/* Submit button with gradient and arrow */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #1B4332, #40916C)" }}
          >
            문의하기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
      </div>
    </section>
  );
}
