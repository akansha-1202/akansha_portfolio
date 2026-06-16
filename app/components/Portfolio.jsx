"use client";

import SmoothScroll from "./SmoothScroll";
import NavBar from "./NavBar";
import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import LogoShowcase from "../sections/LogoShowcase";
import FeatureCards from "../sections/FeatureCards";
import Experience from "../sections/Experience";
import TechStack from "../sections/TechStack";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Portfolio = () => (
  <SmoothScroll>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </SmoothScroll>
);

export default Portfolio;
