"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

import { educationItems } from "../constants";
import TitleHeader from "../components/TitleHeader";

const cardAccents = ["#68A063", "#F05032", "#FFD43B", "#839cb5"];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const featuredRef = useRef(null);
  const subHeaderRef = useRef(null);
  const gridRef = useRef(null);

  const [featured, ...restItems] = educationItems;

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        if (featuredRef.current) {
          gsap.fromTo(
            featuredRef.current,
            { y: 48, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: featuredRef.current,
                start: "top 88%",
                once: true,
              },
            }
          );

          const badge = featuredRef.current.querySelector(".edu-pursuing-badge");
          const avatar = featuredRef.current.querySelector(".edu-featured-avatar");
          const content = featuredRef.current.querySelector(".edu-featured-content");

          if (badge) {
            gsap.fromTo(
              badge,
              { scale: 0.8, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                delay: 0.2,
                ease: "back.out(2)",
                scrollTrigger: {
                  trigger: featuredRef.current,
                  start: "top 88%",
                  once: true,
                },
              }
            );
          }

          if (avatar) {
            gsap.fromTo(
              avatar,
              { x: -20, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.6,
                delay: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: featuredRef.current,
                  start: "top 88%",
                  once: true,
                },
              }
            );
          }

          if (content) {
            gsap.fromTo(
              content.children,
              { y: 16, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.08,
                delay: 0.25,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: featuredRef.current,
                  start: "top 88%",
                  once: true,
                },
              }
            );
          }
        }

        if (subHeaderRef.current) {
          const line = subHeaderRef.current.querySelector(".edu-sub-line");
          gsap.fromTo(
            subHeaderRef.current,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              ease: "power2.out",
              scrollTrigger: {
                trigger: subHeaderRef.current,
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
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: subHeaderRef.current,
                  start: "top 90%",
                  once: true,
                },
              }
            );
          }
        }

        if (gridRef.current) {
          gsap.fromTo(
            gridRef.current.children,
            { y: 32, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.65,
              stagger: 0.1,
              ease: "back.out(1.1)",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 90%",
                once: true,
              },
            }
          );
        }
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative w-full px-4 sm:px-5 md:px-20 mt-16 md:mt-40 py-10 md:py-16 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-[#61DAFB]/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#68A063]/10 blur-[100px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-9 md:gap-10">
        <TitleHeader
          title="Education & Professional Journey"
          sub="🎓 Learning path and milestones"
        />

        {/* Featured — MCA */}
        <article
          ref={featuredRef}
          className="group relative w-full overflow-hidden rounded-2xl border border-black-50 bg-gradient-to-br from-black-100 to-black-200/30 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#61DAFB]/30 hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#61DAFB] to-transparent opacity-90" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#61DAFB]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse at 20% 30%, rgba(97,218,251,0.08), transparent 60%)",
            }}
          />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
            <div className="edu-featured-avatar relative flex size-[72px] shrink-0 items-center justify-center md:size-20">
              <div className="absolute inset-0 rounded-2xl bg-[#61DAFB]/20 blur-md edu-pulse-ring" />
              <div className="relative flex size-16 items-center justify-center overflow-hidden rounded-2xl border-2 border-[#61DAFB]/30 bg-black-200 transition-transform duration-500 group-hover:scale-105 md:size-20">
                <img
                  src={featured.imgPath}
                  alt=""
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="edu-featured-content flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="edu-pursuing-badge inline-flex items-center gap-1.5 rounded-full border border-[#61DAFB]/40 bg-[#61DAFB]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#61DAFB]">
                  <span className="size-1.5 rounded-full bg-[#61DAFB] edu-pulse-dot" />
                  Currently Pursuing
                </span>
                <span className="text-sm text-white-50/70">{featured.period}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#61DAFB]/90">
                {featured.name}
              </h3>
              <p className="text-sm md:text-base font-medium text-white-50">
                {featured.institution}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-white-50/80">
                {featured.review}
              </p>
            </div>
          </div>
        </article>

        {/* Sub-header */}
        <div
          ref={subHeaderRef}
          className="flex w-full flex-col items-center gap-2.5 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white-50/60">
            Academic & Professional Qualifications
          </p>
          <div className="edu-sub-line h-px w-full max-w-xs origin-center bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
        >
          {restItems.map((item, index) => {
            const accent = cardAccents[index % cardAccents.length];
            return (
              <article
                key={item.name}
                className="edu-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-black-50 bg-black-100 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15 hover:shadow-[0_14px_36px_rgba(0,0,0,0.35)]"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                  }}
                />
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-15"
                  style={{ backgroundColor: accent }}
                />

                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black-50 bg-black-200 transition-all duration-300 group-hover:scale-105"
                    style={{ boxShadow: `0 0 0 0 ${accent}00` }}
                  >
                    <img
                      src={item.imgPath}
                      alt=""
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="size-1.5 rounded-full"
                        style={{ backgroundColor: accent }}
                      />
                      <span className="text-xs font-medium text-white-50/60">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white leading-snug transition-colors duration-300 group-hover:text-white-50">
                      {item.name}
                    </h3>
                    <p className="text-sm text-white-50 line-clamp-2">
                      {item.institution}
                    </p>
                  </div>
                </div>
                <p className="relative z-10 text-sm leading-relaxed text-white-50/75 line-clamp-3 border-t border-black-50 pt-3">
                  {item.review}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
