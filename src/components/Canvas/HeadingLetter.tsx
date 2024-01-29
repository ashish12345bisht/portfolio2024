import React, { useEffect, useRef } from "react";
import { MotionDiv } from "../Motion/MotionDiv";
import { useAnimation, useInView } from "framer-motion";

const HeadingLetter = ({
  letter,
  length,
  index,
}: {
  letter: string;
  length: number;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <MotionDiv
      ref={ref}
      className={`w-[1/${length}] text-center`}
      initial="hidden"
      animate={mainControls}
      exit="exit"
      variants={{
        hidden: { opacity: 0, x: -100, rotate: -180 },
        visible: { opacity: 1, x: 0, rotate: 0 },
        exit: { opacity: 0, x: -100, rotate: -180 },
      }}
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <span className="text-white text-[60px] sm:text-[30px] font-extrabold text-center">
        {letter}
      </span>
    </MotionDiv>
  );
};

export default HeadingLetter;
