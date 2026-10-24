import React from "react";
import { Mails } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import type { IconType } from "react-icons";
import ContainerHeading from "../Canvas/ContainerHeading";
import styles from "./style.module.scss";
import { MotionDiv } from "../Motion/MotionDiv";

const links: { label: string; href: string; Icon: IconType | typeof Mails }[] =
  [
    { label: "Email", href: "mailto:ashish12345bisht@gmail.com", Icon: Mails },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ashishbishtconnect/",
      Icon: FaLinkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/ashish12345bisht",
      Icon: FaGithub,
    },
    {
      label: "X (Twitter)",
      href: "https://twitter.com/https__ashishb",
      Icon: FaXTwitter,
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/ashish12345bisht/",
      Icon: SiLeetcode,
    },
  ];

const Contact = () => {
  return (
    <section id="contact" className="pb-20 sm:pb-2">
      <ContainerHeading heading="Contact" />
      <div className="m-auto flex w-2/3">
        {links.map(({ label, href, Icon }) => (
          <MotionDiv
            key={label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.card}
          >
            <a
              className="text-center text-[30px] font-bold text-[#042465] drop-shadow-lg"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="m-auto h-[60px] w-[60px] sm:h-[16px] sm:w-[16px]" />
            </a>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default Contact;
