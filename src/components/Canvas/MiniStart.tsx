"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { random } from "maath";
import { useRef, useState } from "react";
import type { Points as PointsType } from "three";
// import { Group } from 'three'

const Stars = () => {
  const ref = useRef<PointsType>(null);
  // const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const [sphere] = useState(() => {
    // Convert Float64Array to Float32Array
    const float64Array = random.inSphere(new Float64Array(6000), {
      radius: 1.2,
    });
    return new Float32Array(float64Array);
  });

  useFrame((state, delta) => {
    if (ref && ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
