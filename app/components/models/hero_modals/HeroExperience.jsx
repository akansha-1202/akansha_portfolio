"use client";

import { useRef, useEffect, useState, Suspense, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const particleCount = useMemo(() => (isMobile ? 35 : 60), [isMobile]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05, rootMargin: "100px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        frameloop={isVisible ? "always" : "never"}
        camera={{ position: [0, 0, 15], fov: 45 }}
        gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.2} color="#1a1a40" />
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <Suspense fallback={null}>
          <HeroLights />
          <Particles count={particleCount} active={isVisible} />
          <group
            scale={isMobile ? 0.7 : 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room enableBloom={!isMobile} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
