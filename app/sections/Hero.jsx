"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
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
          .fromTo(".hero-cta", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.25")
          .fromTo(
            ".hero-canvas",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
            0.15
          );
      }, heroRef);

      return () => ctx.revert();
    },
    { scope: heroRef }
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-dvh overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute top-0 left-0 z-0 opacity-70">
        <img src="/images/bg.png" alt="" className="w-40 sm:w-auto" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent z-[3]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-20">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 sm:gap-10 xl:gap-8 pt-24 sm:pt-28 md:pt-36 xl:pt-28 pb-8 sm:pb-12 xl:min-h-dvh">
          <div className="relative z-20 flex flex-col gap-5 sm:gap-6 md:gap-7 xl:w-[44%] xl:max-w-lg">
            <h1 className="hero-name text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {profile.name}
            </h1>

            <p className="hero-role text-base sm:text-lg md:text-xl text-white font-normal">
              <span className="block sm:inline">{profile.title}</span>
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline text-white-50 sm:text-white">
                {profile.location}
              </span>
            </p>

            <p className="hero-desc text-sm sm:text-base md:text-lg text-white-50 sm:text-white leading-relaxed">
              Building ad-tech dashboards, REST APIs, and production web apps
              with Next.js, React, Node.js & Python at Unibots.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {techPills.map((tech) => (
                <span
                  key={tech.label}
                  className="hero-tech-pill inline-flex items-center gap-2 rounded-full border border-black-50 bg-black-100 px-4 py-2 text-sm font-medium text-white"
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

            <div className="hero-cta flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Button
                text="See My Work"
                className="w-full sm:w-56 md:w-72 h-12 md:h-14"
                id="counter"
              />
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {socialImgs.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-12 items-center justify-center rounded-xl border border-black-50 bg-black-100 transition-all duration-300 hover:border-white/20 hover:bg-black-200"
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

          <div className="hero-canvas relative z-10 w-full xl:absolute xl:right-0 xl:top-1/2 xl:w-[56%] xl:-translate-y-1/2 h-[36vh] sm:h-[42vh] md:h-[48vh] xl:h-[min(85vh,700px)]">
            <div className="relative h-full w-full">
              <HeroExperience />
            </div>
          </div>
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
