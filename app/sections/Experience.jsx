"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "../lib/gsap";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Experience = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray(".exp-card-wrapper").forEach((wrapper) => {
          const card = wrapper.querySelector(".timeline-card");
          const text = wrapper.querySelector(".expText");
          const timeline = wrapper.querySelector(".timeline");

          if (card) {
            gsap.fromTo(
              card,
              { xPercent: -60, opacity: 0 },
              {
                xPercent: 0,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: wrapper,
                  start: "top 88%",
                  end: "top 58%",
                  scrub: 0.6,
                },
              }
            );
          }

          if (text) {
            gsap.fromTo(
              text,
              { opacity: 0, x: 40 },
              {
                opacity: 1,
                x: 0,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: wrapper,
                  start: "top 82%",
                  end: "top 52%",
                  scrub: 0.6,
                },
              }
            );
          }

          if (timeline) {
            gsap.set(timeline, { transformOrigin: "bottom bottom", scaleY: 1 });
            gsap.fromTo(
              timeline,
              { scaleY: 1 },
              {
                scaleY: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: wrapper,
                  start: "top 65%",
                  end: "bottom 15%",
                  scrub: 0.4,
                },
              }
            );
          }
        });
      }, sectionRef);

      const timer = setTimeout(() => ScrollTrigger.refresh(), 400);

      return () => {
        clearTimeout(timer);
        ctx.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="flex-center md:mt-24 mt-12 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-4 sm:px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-8 md:mt-14 relative">
          <div className="relative z-10 xl:space-y-16 space-y-8">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" loading="lazy" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="exp-content-row">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full absolute left-1/2 -translate-x-1/2 top-0 z-[5]" />
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" loading="lazy" />
                      </div>
                    </div>
                    <div className="expText flex-1 min-w-0">
                      <div>
                        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl leading-snug">
                          {card.title}
                        </h3>
                        <p className="my-2 sm:my-3 text-white-50 text-xs sm:text-sm">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic text-xs sm:text-sm">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-4 sm:ms-5 mt-2 sm:mt-3 flex flex-col gap-2 sm:gap-3 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, respIndex) => (
                              <li key={respIndex} className="text-xs sm:text-sm md:text-base leading-relaxed">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
