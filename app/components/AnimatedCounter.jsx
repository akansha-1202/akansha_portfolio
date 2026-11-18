"use client";

import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

import { counterItems } from "../constants";
import {
  formatExperience,
  getExperienceDuration,
} from "../lib/experience";

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const experience = useMemo(() => getExperienceDuration(), []);
  const experienceLabel = useMemo(
    () => formatExperience(experience, { compact: true }),
    [experience]
  );

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

          if (item.type === "experience") {
            const counter = { value: 0 };
            gsap.to(counter, {
              value: experience.totalMonths,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: counterRef.current,
                start: "top 85%",
                once: true,
              },
              onUpdate: () => {
                const total = Math.round(counter.value);
                const years = Math.floor(total / 12);
                const months = total % 12;
                numberElement.textContent = formatExperience(
                  { years, months },
                  { compact: true }
                );
              },
              onComplete: () => {
                numberElement.textContent = experienceLabel;
              },
            });
            return;
          }

          const counter = { value: 0 };
          const format = (value) =>
            `${value.toFixed(item.decimals ?? 0)}${item.suffix}`;

          gsap.to(counter, {
            value: item.value,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counterRef.current,
              start: "top 85%",
              once: true,
            },
            onUpdate: () => {
              numberElement.textContent = format(counter.value);
            },
            onComplete: () => {
              numberElement.textContent = format(item.value);
            },
          });
        });
      }, counterRef);

      return () => ctx.revert();
    },
    { scope: counterRef, dependencies: [experience.totalMonths, experienceLabel] }
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
            key={item.label}
            className="counter-card group rounded-xl border border-black-50/80 bg-black-200/40 px-2.5 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 text-center transition-all duration-300 hover:border-white/10 hover:bg-black-200/70"
          >
            <div
              className={`counter-number font-bold text-white mb-0.5 ${
                item.type === "experience"
                  ? "text-lg sm:text-xl md:text-2xl"
                  : "text-xl sm:text-2xl md:text-3xl"
              }`}
            >
              {item.type === "experience" ? "0 mos" : `0${item.suffix}`}
            </div>
            <div className="text-white-50 text-[11px] sm:text-xs leading-snug">
              {item.label}
            </div>
            {item.sublabel && (
              <div className="mt-1 text-[10px] sm:text-[11px] text-white-50/60">
                {item.sublabel}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
