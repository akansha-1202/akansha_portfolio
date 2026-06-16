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
      className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-20 mt-2 sm:mt-4 xl:mt-0 pb-8 sm:pb-12"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 rounded-2xl border border-black-50 bg-black-100/60 p-2.5 sm:p-3 md:p-4 backdrop-blur-sm">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="counter-card group rounded-xl border border-black-50/80 bg-black-200/40 px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-7 text-center transition-all duration-300 hover:border-white/10 hover:bg-black-200/70"
          >
            <div className="counter-number text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-xs md:text-sm leading-snug">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
