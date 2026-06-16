"use client";

import { useRef, useCallback } from "react";

const GlowCard = ({ card, index = 0, children }) => {
  const cardRef = useRef(null);
  const rafId = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (rafId.current) return;

    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      const cardEl = cardRef.current;
      if (!cardEl) return;

      const rect = cardEl.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      cardEl.style.setProperty("--start", angle + 60);
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-xl p-5 sm:p-8 md:p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" loading="lazy" />
        ))}
      </div>
      <div className="mb-4 sm:mb-5">
        <p className="text-white-50 text-base sm:text-lg leading-relaxed">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
