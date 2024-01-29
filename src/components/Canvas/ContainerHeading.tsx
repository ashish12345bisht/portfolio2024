"use client";
import { MotionDiv } from "../Motion/MotionDiv";
import HeadingLetter from "./HeadingLetter";

const ContainerHeading = ({ heading }: { heading: string }) => {
  return (
    <MotionDiv className="flex items-center justify-center h-[100px] sm:h-[60px] w-full my-10 sm:my-5">
      {heading?.split("")?.map((letter, index) => (
        <HeadingLetter letter={letter} index={index} length={heading.length} />
      ))}
    </MotionDiv>
  );
};

export default ContainerHeading;
