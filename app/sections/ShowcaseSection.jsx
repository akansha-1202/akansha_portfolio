"use client";

import { useRef } from "react";
import { gsap } from "../lib/gsap";
import { useGSAP } from "@gsap/react";

import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const [featured, ...sideProjects] = projects;

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { y: 48, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              delay: index * 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
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
    <section id="work" ref={sectionRef} className="app-showcase">
      <TitleHeader
        title="Selected Work & Live Projects"
        sub="💼 Portfolio Showcase"
      />

      <div className="showcaselayout">
        <a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (cardRefs.current[0] = el)}
          className="showcase-featured group"
        >
          <div className="showcase-image">
            <img src={featured.image} alt={featured.title} loading="lazy" />
            <div className="showcase-overlay" />
            <span className="showcase-visit">
              Visit site
              <img src="/images/arrow-right.svg" alt="" aria-hidden="true" />
            </span>
          </div>
          <div className="showcase-body">
            <p className="showcase-tag">Featured project</p>
            <h2>{featured.title}</h2>
            <p className="showcase-desc">{featured.description}</p>
            <p className="showcase-tech">{featured.tech}</p>
          </div>
        </a>

        <div className="showcase-grid">
          {sideProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (cardRefs.current[index + 1] = el)}
              className="showcase-card group"
            >
              <div className="showcase-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="showcase-overlay" />
                <span className="showcase-visit">
                  <img src="/images/arrow-right.svg" alt="" aria-hidden="true" />
                </span>
              </div>
              <div className="showcase-body">
                <h2>{project.title}</h2>
                <p className="showcase-tech">{project.tech}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
