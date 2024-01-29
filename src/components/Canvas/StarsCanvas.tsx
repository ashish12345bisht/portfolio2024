"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Stars from "./MiniStart";

const StarsCanvas = () => {
    return (
        <div className='w-full h-auto absolute inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <OrbitControls
                        autoRotate
                        enableZoom={false}
                        // maxPolarAngle={Math.PI / 2}
                        // minPolarAngle={Math.PI / 2}
                        rotation={[1, -1, 0]}
                    />
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;