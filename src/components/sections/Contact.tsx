"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useFadeUp } from "@/lib/useScrollAnimation";

export default function Contact() {
  const fadeRef = useFadeUp<HTMLFormElement>();
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

  return (
    <section id="문의" className="py-20 px-6 max-w-5xl mx-auto bg-[#0a0a0a]">
      <SectionHeader label="CONTACT" title="프로젝트 문의" />

      <form ref={fadeRef} onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
        <div>
          <label className="text-sm text-muted mb-1.5 block">이름</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="text-sm text-muted mb-1.5 block">연락처</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="text-sm text-muted mb-1.5 block">이메일</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="text-sm text-muted mb-1.5 block">문의 내용</label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors"
        >
          문의하기
        </button>
      </form>

      <div className="flex justify-center gap-8 mt-10 text-sm text-muted">
        <span>010-5765-9241</span>
        <span>카카오톡: sool9241</span>
        <span>sool9241@naver.com</span>
      </div>
    </section>
  );
}
