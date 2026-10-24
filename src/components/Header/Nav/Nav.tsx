import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animation";
import NavLink from "./Link/Link";

const navItems = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "Experience",
    href: "experience",
  },
  {
    title: "Technologies",
    href: "technologies",
  },
  {
    title: "Certificates",
    href: "certificates",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
