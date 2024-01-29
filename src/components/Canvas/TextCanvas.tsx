import { TextProps } from "@/lib/interface";
import { OrbitControls, Preload, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, memo } from "react";
import { MotionDiv } from "../Motion/MotionDiv";

const TextCanvas: React.FC<TextProps> = ({ text, positions }) => {
  return (
    <MotionDiv
      key={text}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
        // exit: { opacity: 0, y: -100, rotate: -180 },
      }}
      transition={{
        delay: 0,
        ease: "easeInOut",
        duration: 1,
      }}
      className="m-auto w-full h-full"
    >
      <Canvas camera={{ position: positions.cameraPosition }}>
        <Suspense fallback={null}>
          <Text3D
            position={positions.textPosition}
            font={"./Poppins_Bold.json"}
          >
            {text}
          </Text3D>
          <OrbitControls
            autoRotate
            enableZoom={false}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
            rotation={[1, 2, 3]}
            // minAzimuthAngle={-Math.PI / 4}
            // maxAzimuthAngle={Math.PI / 4}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </MotionDiv>
  );
};

export default memo(TextCanvas);
