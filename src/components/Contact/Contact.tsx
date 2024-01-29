import React from "react";
import ContainerHeading from "../Canvas/ContainerHeading";
import styles from "./style.module.scss";
import {
  Code,
  Github,
  Instagram,
  Linkedin,
  Mails,
  Twitter,
} from "lucide-react";
import { MotionDiv } from "../Motion/MotionDiv";

const Contact = () => {
  return (
    <section id="contact" className="pb-20 sm:pb-2">
      <ContainerHeading heading="Contact" />
      <div className="flex w-2/3 m-auto">
        <MotionDiv
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.card}
        >
          <a
            className="text-[#042465] drop-shadow-lg font-bold text-center text-[30px]"
            href="mailto:ashish12345bisht@gmail.com"
            target="_blank"
          >
            <Mails className="w-[60px] h-[60px] sm:w-[16px] sm:h-[16px] m-auto" />
          </a>
        </MotionDiv>
        <MotionDiv
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.card}
        >
          <a
            className="text-[#042465] drop-shadow-lg font-bold text-center text-[30px]"
            href="https://www.linkedin.com/in/ashishbishtconnect/?originalSubdomain=in"
            target="_blank"
          >
            <Linkedin className="w-[60px] h-[60px] sm:w-[16px] sm:h-[16px] m-auto" />
          </a>
        </MotionDiv>
        <MotionDiv
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.card}
        >
          <a
            className="text-[#042465] drop-shadow-lg font-bold text-center text-[30px]"
            href="https://github.com/ashish12345bisht"
            target="_blank"
          >
            <Github className="w-[60px] h-[60px] sm:w-[16px] sm:h-[16px] m-auto" />
            {/* ashish12345bisht@gmail.com */}
          </a>
        </MotionDiv>
        <MotionDiv
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.card}
        >
          <a
            className="text-[#042465] drop-shadow-lg font-bold text-center text-[30px]"
            href="https://twitter.com/https__ashishb?t=zZL_PajAbEth-SznD_kulg&s=09"
            target="_blank"
          >
            <Twitter className="w-[60px] h-[60px] sm:w-[16px] sm:h-[16px] m-auto" />
            {/* ashish12345bisht@gmail.com */}
          </a>
        </MotionDiv>
        <MotionDiv
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.card}
        >
          <a
            className="text-[#042465] drop-shadow-lg font-bold text-center text-[30px]"
            href="https://leetcode.com/ashish12345bisht/"
            target="_blank"
          >
            {/* <Code className="w-[60px] h-[60px] sm:w-[16px] sm:h-[16px] m-auto" /> */}
            <img
              className="w-[60px] h-[60px] sm:w-[16px] sm:h-[16px] m-auto"
              src="/leetcode.png"
              alt="leetcode"
            />
            {/* ashish12345bisht@gmail.com */}
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Contact;
