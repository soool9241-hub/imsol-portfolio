import type { Metadata } from "next";
import { Noto_Sans_KR, DM_Mono } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "임솔 | 청년장인 · 메이커 · 크리에이터",
  description: "120평 CNC 공방 스토리팜 대표, 60평 독채 펜션 달팽이아지트 운영, AI 자동화 마케팅 시스템 구축. 10년차 메이커 임솔의 포트폴리오.",
  keywords: ["임솔", "스토리팜", "청년장인", "CNC", "목공", "포트폴리오", "메이커", "달팽이아지트"],
  openGraph: {
    title: "임솔 | 청년장인 · 메이커 · 크리에이터",
    description: "120평 CNC 공방 · 60평 독채 펜션 · AI 에이전트 25명. 10년차 메이커 임솔의 포트폴리오.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
