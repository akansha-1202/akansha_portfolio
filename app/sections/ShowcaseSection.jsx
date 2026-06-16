"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { projects } from "../constants";

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const featuredRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const [featured, second, third] = projects;

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 }
        );

        const cards = [featuredRef.current, secondRef.current, thirdRef.current];

        cards.forEach((card, index) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                once: true,
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={featuredRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={featured.image} alt={featured.title} loading="lazy" />
            </div>
            <div className="text-content">
              <h2>{featured.title}</h2>
              <p className="text-white-50 md:text-xl">{featured.description}</p>
              <p className="text-white-50 md:text-lg mt-2">{featured.tech}</p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={secondRef}>
              <div className={`image-wrapper ${second.bgColor}`}>
                <img src={second.image} alt={second.title} loading="lazy" />
              </div>
              <h2>{second.title}</h2>
            </div>

            <div className="project" ref={thirdRef}>
              <div className={`image-wrapper ${third.bgColor}`}>
                <img src={third.image} alt={third.title} loading="lazy" />
              </div>
              <h2>{third.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
