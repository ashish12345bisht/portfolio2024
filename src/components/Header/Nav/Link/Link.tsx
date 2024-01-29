import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../animation";
import { MotionDiv } from "@/components/Motion/MotionDiv";

export default function Index({
  data,
  isActive,
  setSelectedIndicator,
}: {
  data: any;
  isActive: boolean;
  setSelectedIndicator: any;
}) {
  const { title, href, index } = data;

  return (
    <MotionDiv
      className={`${styles.link} cursor-pointer`}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <MotionDiv
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></MotionDiv>
      <span
        onClick={() =>
          document
            ?.getElementById(href)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "start",
            })
        }
      >
        {title}
      </span>
    </MotionDiv>
  );
}
