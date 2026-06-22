"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

import { counterItems } from "../constants";

const AnimatedCounter = () => {
  const counterRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".counter-card",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counterRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );

        gsap.utils.toArray(".counter-card").forEach((card, index) => {
          const numberElement = card.querySelector(".counter-number");
          const item = counterItems[index];
          if (!numberElement || !item) return;

          gsap.fromTo(
            numberElement,
            { innerText: 0 },
            {
              innerText: item.value,
              duration: 2,
              ease: "power2.out",
              snap: { innerText: 1 },
              scrollTrigger: {
                trigger: counterRef.current,
                start: "top 85%",
                once: true,
              },
              onComplete: () => {
                numberElement.textContent = `${item.value}${item.suffix}`;
              },
            }
          );
        });
      }, counterRef);

      return () => ctx.revert();
    },
    { scope: counterRef }
  );

  return (
    <div
      id="counter"
      ref={counterRef}
      className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-20 mt-1 sm:mt-2 xl:mt-0 pb-5 sm:pb-7"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 rounded-2xl border border-black-50 bg-black-100/60 p-2 sm:p-2.5 md:p-3 backdrop-blur-sm">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="counter-card group rounded-xl border border-black-50/80 bg-black-200/40 px-2.5 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 text-center transition-all duration-300 hover:border-white/10 hover:bg-black-200/70"
          >
            <div className="counter-number text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-[11px] sm:text-xs leading-snug">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
