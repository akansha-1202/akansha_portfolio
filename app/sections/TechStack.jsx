"use client";

import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs, skillTags } from "../constants";

const categoryOrder = ["Frontend", "Backend", "Ad-Tech", "Tools"];

const categoryColors = {
  Frontend: "#61DAFB",
  Backend: "#68A063",
  "Ad-Tech": "#FFD43B",
  Tools: "#F05032",
};

const TechStack = () => {
  const sectionRef = useRef(null);
  const coreRef = useRef(null);
  const toolkitHeaderRef = useRef(null);
  const matrixRef = useRef(null);

  const skillCategories = useMemo(() => {
    const grouped = skillTags.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});

    return categoryOrder
      .filter((category) => grouped[category]?.length)
      .map((category) => ({
        title: category,
        skills: grouped[category],
        color: categoryColors[category],
      }));
  }, []);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        if (coreRef.current) {
          gsap.fromTo(
            coreRef.current.children,
            { y: 24, opacity: 0, scale: 0.92 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.55,
              stagger: 0.08,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: coreRef.current,
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        if (toolkitHeaderRef.current) {
          const line = toolkitHeaderRef.current.querySelector(".toolkit-line");
          gsap.fromTo(
            toolkitHeaderRef.current,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: toolkitHeaderRef.current,
                start: "top 92%",
                once: true,
              },
            }
          );
          if (line) {
            gsap.fromTo(
              line,
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: toolkitHeaderRef.current,
                  start: "top 90%",
                  once: true,
                },
              }
            );
          }
        }

        if (matrixRef.current) {
          gsap.fromTo(
            matrixRef.current.children,
            { y: 32, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.65,
              stagger: 0.12,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: matrixRef.current,
                start: "top 88%",
                once: true,
              },
            }
          );

          matrixRef.current.querySelectorAll(".skill-row").forEach((row, i) => {
            gsap.fromTo(
              row,
              { x: -16, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.45,
                delay: i * 0.04,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: matrixRef.current,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          });
        }
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full px-4 sm:px-5 md:px-20 mt-12 md:mt-24 py-8 md:py-10 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-16 h-56 w-56 rounded-full bg-[#61DAFB]/10 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-8 h-56 w-56 rounded-full bg-[#68A063]/10 blur-[90px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 md:gap-7">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        {/* Core technologies — open layout, no box */}
        <div className="w-full">
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white-50/60">
            Core Technologies
          </p>
          <div
            ref={coreRef}
            className="flex flex-wrap justify-center gap-2.5 md:gap-3"
          >
            {techStackImgs.map((tech, index) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2.5 rounded-xl border border-black-50 bg-black-100 px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
              >
                <div
                  className="tech-icon-float flex size-9 shrink-0 items-center justify-center rounded-lg border border-black-50 bg-black-200 transition-transform duration-300 group-hover:scale-110"
                  style={{ animationDelay: `${index * 0.25}s` }}
                >
                  <img
                    src={tech.imgPath}
                    alt={tech.name}
                    className="size-5 object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-semibold text-white-50 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                  {tech.name}
                </span>
                <span
                  className="hidden sm:block size-1.5 rounded-full opacity-70"
                  style={{ backgroundColor: tech.accent }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Daily tools — separate section, each category its own card */}
        <div className="w-full flex flex-col gap-5 md:gap-6">
          <div
            ref={toolkitHeaderRef}
            className="flex flex-col items-center gap-2.5 text-center"
          >
            <p className="hero-badge text-xs">⚡ Extended Toolkit</p>
            <h2 className="text-lg md:text-xl font-semibold">
              Technologies & Tools I Use Daily
            </h2>
            <div className="toolkit-line h-px w-full max-w-xs origin-center bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>

          <div
            ref={matrixRef}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5"
          >
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="category-col group relative overflow-hidden rounded-2xl border border-black-50 bg-black-100 p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 opacity-80"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
                  }}
                />
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25"
                  style={{ backgroundColor: category.color }}
                />

                <div
                  className="relative z-10 mb-4 flex items-center gap-2 border-b border-black-50 pb-3"
                >
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                    {category.title}
                  </h3>
                  <span className="ml-auto text-xs text-white-50/50">
                    {category.skills.length}
                  </span>
                </div>

                <ul className="relative z-10 flex flex-col gap-1">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="skill-row group/skill flex items-center gap-2.5 rounded-lg border border-transparent px-2 py-2 transition-all duration-300 hover:border-black-50 hover:bg-black-200/50 hover:translate-x-1">
                        <div
                          className="flex size-8 shrink-0 items-center justify-center rounded-md border border-black-50 bg-black-200/60 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:border-white/10"
                          style={{
                            boxShadow: `0 0 0 0 ${category.color}00`,
                          }}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="size-[18px] object-contain"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-sm text-white-50 transition-colors duration-300 group-hover/skill:text-white">
                          {skill.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
