"use client";
import React, { useEffect, useRef } from "react";
import { workProps } from "@/lib/interface";
import { MotionDiv } from "../Motion/MotionDiv";
import { useAnimation, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const SingleWork: React.FC<{ work: workProps }> = ({ work }) => {
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
      }  sm:flex-col-reverse`}
    >
      <div className="w-1/2 sm:w-full">
        <div className="m-auto w-2/3">
          <h1 className="text-[45px] text-[#fdd1ff] font-black">
            {work?.title}
          </h1>
          <h2 className="text-[20px] text-[#fdd1ff] font-extrabold mb-4 flex align-middle items-center">
            {work?.time}{" "}
            <ExternalLink
              className="cursor-pointer ml-2 w-4 h-4"
              onClick={() => window.open(work?.url, "_blank")}
            />
          </h2>
          <ul className="text-[14px] text-white font-medium">
            {work?.description?.map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-1/2 sm:w-full flex justify-center">
        <div className="text-right w-[280px] h-[280px] border-[14px] rounded-[35px] border-indigo-500/100">
          <div
            className={`w-[250px] flex align-middle items-center object-contain bg-[#333] p-10 h-[250px] ${
              work?.index % 2
                ? "-translate-x-12 sm:-translate-x-8"
                : "translate-x-12 sm:translate-x-8"
            } scale-110 -translate-y-12 sm:-translate-y-8 rounded-[30px]`}
          >
            <img
              className={`w-[250px] h-[250px] object-contain drop-shadow-lg image-white`}
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
