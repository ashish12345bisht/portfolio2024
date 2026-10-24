"use client";
import React, { useEffect, useRef } from "react";
import { workProps } from "@/lib/interface";
import { MotionDiv } from "../Motion/MotionDiv";
import { useAnimation, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";

const SingleWork: React.FC<{ work: workProps }> = ({ work }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <MotionDiv
      ref={ref}
      key={work.title}
      initial="hidden"
      animate={mainControls}
      exit="exit"
      variants={{
        hidden: { opacity: 0, x: work.index % 2 ? 100 : -100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: work.index % 2 ? 100 : -100 },
      }}
      transition={{
        delay: work.index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      className={`flex items-center justify-around px-40 py-10 sm:px-2 ${
        work?.index % 2 ? "flex-row-reverse" : ""
      } sm:flex-col-reverse`}
    >
      <div className="w-1/2 sm:w-full">
        <div className="m-auto w-2/3">
          <h1 className="text-[45px] font-black text-[#fdd1ff]">
            {work?.title}
          </h1>
          <h2 className="mb-4 flex items-center align-middle text-[20px] font-extrabold text-[#fdd1ff]">
            {work?.time}{" "}
            <ExternalLink
              className="ml-2 h-4 w-4 cursor-pointer"
              onClick={() => window.open(work?.url, "_blank")}
            />
          </h2>
          <ul className="text-[14px] font-medium text-white">
            {work?.description?.map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-1/2 justify-center sm:w-full">
        <div className="h-[280px] w-[280px] rounded-[35px] border-[14px] border-indigo-500/100 text-right">
          <div
            className={`flex h-[250px] w-[250px] items-center bg-[#333] object-contain p-10 align-middle ${
              work?.index % 2
                ? "-translate-x-12 sm:-translate-x-8"
                : "translate-x-12 sm:translate-x-8"
            } -translate-y-12 scale-110 rounded-[30px] sm:-translate-y-8`}
          >
            <img
              className={`image-white h-[250px] w-[250px] object-contain drop-shadow-lg`}
              alt="user"
              src={work?.image}
            />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default SingleWork;
