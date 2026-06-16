"use client";

import { createContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsap";

export const LenisContext = createContext(null);

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isNarrowViewport = window.matchMedia("(max-width: 768px)").matches;

    if (isCoarsePointer || isNarrowViewport) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timer = setTimeout(refresh, 800);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", refresh);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
};

export default SmoothScroll;
