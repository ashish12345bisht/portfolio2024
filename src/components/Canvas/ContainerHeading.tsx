"use client";
import { MotionDiv } from "../Motion/MotionDiv";
import HeadingLetter from "./HeadingLetter";

const ContainerHeading = ({ heading }: { heading: string }) => {
  return (
    <MotionDiv className="my-10 flex h-[100px] w-full items-center justify-center sm:my-5 sm:h-[60px]">
      {heading?.split("")?.map((letter, index) => (
        <HeadingLetter
          key={index}
          letter={letter}
          index={index}
          length={heading.length}
        />
      ))}
    </MotionDiv>
  );
};

export default ContainerHeading;
