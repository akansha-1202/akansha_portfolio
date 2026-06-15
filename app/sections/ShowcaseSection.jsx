"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const featuredRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const [featured, second, third] = projects;

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [featuredRef.current, secondRef.current, thirdRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={featuredRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={featured.image} alt={featured.title} />
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
                <img src={second.image} alt={second.title} />
              </div>
              <h2>{second.title}</h2>
            </div>

            <div className="project" ref={thirdRef}>
              <div className={`image-wrapper ${third.bgColor}`}>
                <img src={third.image} alt={third.title} />
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
