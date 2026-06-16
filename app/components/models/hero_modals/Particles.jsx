"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 60, active = true }) => {
  const mesh = useRef();
  const frameSkip = useRef(0);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      arr[i * 3] = p.position[0];
      arr[i * 3 + 1] = p.position[1];
      arr[i * 3 + 2] = p.position[2];
    });
    return arr;
  }, [particles, count]);

  useFrame(() => {
    if (!active || !mesh.current) return;

    frameSkip.current += 1;
    if (frameSkip.current % 2 !== 0) return;

    const positionAttr = mesh.current.geometry.attributes.position;
    const positionsArray = positionAttr.array;

    for (let i = 0; i < count; i++) {
      let y = positionsArray[i * 3 + 1];
      y -= particles[i].speed * 2;
      if (y < -2) y = Math.random() * 10 + 5;
      positionsArray[i * 3 + 1] = y;
    }

    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
