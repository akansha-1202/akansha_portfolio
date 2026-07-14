"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { profile, socialImgs, techStackImgs } from "../constants";

const HeroExperience = dynamic(
  () => import("../components/models/hero_modals/HeroExperience"),
  { ssr: false }
);

const techPills = [
  { label: "React", imgPath: techStackImgs[0].imgPath },
  { label: "Next", imgPath: techStackImgs[1].imgPath },
  { label: "Node", imgPath: techStackImgs[2].imgPath },
  { label: "Python", imgPath: techStackImgs[3].imgPath },
];

const Hero = () => {
  const heroRef = useRef(null);
  const [showHeroCanvas, setShowHeroCanvas] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setShowHeroCanvas(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".hero-name", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
          .fromTo(".hero-role", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.45")
          .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
          .fromTo(
            ".hero-tech-pill",
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.45 },
            "-=0.35"
          )
          .fromTo(".hero-cta", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.25");

        if (heroRef.current?.querySelector(".hero-canvas")) {
          tl.fromTo(
            ".hero-canvas",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
            0.15
          );
        }
      }, heroRef);

      return () => ctx.revert();
    },
    { scope: heroRef, dependencies: [showHeroCanvas] }
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-0 xl:min-h-dvh overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute top-0 left-0 z-0 opacity-70">
        <img src="/images/bg.png" alt="" className="w-40 sm:w-auto" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent z-[3]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-20">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 sm:gap-6 xl:gap-8 pt-20 sm:pt-24 md:pt-24 xl:pt-24 pb-5 sm:pb-6 xl:min-h-dvh">
          <div className="relative z-20 flex flex-col gap-3 sm:gap-4 xl:w-[44%] xl:max-w-lg">
            <h1 className="hero-name text-[1.625rem] leading-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white">
              {profile.name}
            </h1>

            <p className="hero-role text-sm sm:text-base md:text-lg text-white font-normal">
              <span className="block sm:inline">{profile.title}</span>
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline text-white-50 sm:text-white">
                {profile.location}
              </span>
            </p>

            <p className="hero-desc text-sm sm:text-[0.9375rem] md:text-base text-white-50 sm:text-white leading-relaxed max-w-prose">
              Building ad-tech dashboards, REST APIs, and production web apps
              with Next.js, React, Node.js & Python at Somo Media(Unibots).
            </p>

            <div className="flex flex-wrap gap-2 pt-0.5">
              {techPills.map((tech) => (
                <span
                  key={tech.label}
                  className="hero-tech-pill inline-flex items-center gap-1.5 rounded-full border border-black-50 bg-black-100 px-3 py-1.5 text-xs sm:text-sm font-medium text-white"
                >
                  <img
                    src={tech.imgPath}
                    alt=""
                    className="size-4 object-contain"
                    loading="lazy"
                  />
                  {tech.label}
                </span>
              ))}
            </div>

            <div className="hero-cta flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
              <Button
                text="See My Work"
                className="w-full sm:w-52 md:w-60 h-11"
                id="counter"
              />
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                {socialImgs.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-xl border border-black-50 bg-black-100 transition-all duration-300 hover:border-white/20 hover:bg-black-200"
                    aria-label={social.name}
                  >
                    <img
                      src={social.imgPath}
                      alt={social.name}
                      className="size-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {showHeroCanvas && (
            <div className="hero-canvas relative z-10 w-full xl:absolute xl:right-0 xl:top-1/2 xl:w-[56%] xl:-translate-y-1/2 h-[42vh] md:h-[48vh] xl:h-[min(85vh,700px)]">
              <div className="relative h-full w-full">
                <HeroExperience />
              </div>
            </div>
          )}
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
