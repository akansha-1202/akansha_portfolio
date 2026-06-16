"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "../lib/gsap";

import { counterItems } from "../constants";

const AnimatedCounter = () => {
  const counterRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".counter-card");

        cards.forEach((card, index) => {
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
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="counter-card bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
