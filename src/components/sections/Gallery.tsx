"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { gallery } from "@/lib/data";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gallery.length);
      setFadeKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (i: number) => {
    setCurrentIndex(i);
    setFadeKey((k) => k + 1);
  };

  const padIndex = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <section className="py-8 border-t border-b border-card overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main display area */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-4 bg-black">
          {gallery.map((item, i) => (
            <div
              key={item.src}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{
                opacity: i === currentIndex ? 1 : 0,
                zIndex: i === currentIndex ? 10 : 0,
              }}
            >
              <Image
                src={item.src}
                alt={item.cap}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{
                  animation: i === currentIndex ? "kenburns 8s ease-in-out infinite alternate" : "none",
                }}
              />
            </div>
          ))}

          {/* Overlay caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-5 z-20">
            <p className="text-white text-sm font-medium">{gallery[currentIndex].cap}</p>
          </div>

          {/* Image counter */}
          <div className="absolute top-4 right-5 z-20 font-mono text-xs text-white/70 tracking-widest bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {padIndex(currentIndex)} / {padIndex(gallery.length - 1)}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none py-1">
          {gallery.map((item, i) => (
            <button
              key={item.src}
              onClick={() => handleSelect(i)}
              className={`relative shrink-0 w-[90px] h-[60px] rounded-lg overflow-hidden transition-all duration-300 ${
                i === currentIndex
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background brightness-100"
                  : "brightness-[0.4] hover:brightness-[0.7]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.cap}
                fill
                className="object-cover"
                sizes="90px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Ken Burns keyframes */}
      <style jsx>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.08) translate(-1%, -1%);
          }
        }
      `}</style>
    </section>
  );
}
