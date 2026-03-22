"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { gallery } from "@/lib/data";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-6 border-t border-b border-card overflow-hidden">
      <div className="flex gap-3 overflow-x-auto scrollbar-none px-4 py-2">
        {gallery.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setCurrentIndex(i)}
            className={`relative shrink-0 w-[280px] h-[180px] rounded-xl overflow-hidden transition-all duration-500 ${
              i === currentIndex
                ? "border-2 border-primary scale-105"
                : "border-2 border-transparent brightness-[0.6]"
            }`}
          >
            <Image
              src={item.src}
              alt={item.cap}
              fill
              className="object-cover"
              sizes="280px"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
              <p className="text-xs text-white/90 font-mono truncate">
                {item.cap}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
