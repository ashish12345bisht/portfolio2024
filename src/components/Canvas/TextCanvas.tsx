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
      }}
      transition={{
        delay: 0,
        ease: "easeInOut",
        duration: 1,
      }}
      className="m-auto h-full w-full"
    >
      <Canvas camera={{ position: positions.cameraPosition }}>
        <Suspense fallback={null}>
          <Text3D
            position={positions.textPosition}
            font={"./Poppins_Bold.json"}
          >
            {text}
          </Text3D>
          <OrbitControls autoRotate enableZoom={false} />
        </Suspense>
        <Preload all />
      </Canvas>
    </MotionDiv>
  );
};

export default memo(TextCanvas);
