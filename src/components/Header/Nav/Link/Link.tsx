import styles from "./style.module.scss";
import { slide, scale } from "../../animation";
import { MotionDiv } from "@/components/Motion/MotionDiv";

export default function NavLink({
  data,
  isActive,
  setSelectedIndicator,
}: {
  data: { title: string; href: string; index: number };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
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
          document?.getElementById(href)?.scrollIntoView({
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
