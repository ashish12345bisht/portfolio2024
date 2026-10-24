import { CertificateProps } from "@/lib/interface";
import React from "react";
import styles from "./style.module.scss";
import Tilt from "react-parallax-tilt";
import { MotionDiv } from "@/components/Motion/MotionDiv";

const CertificatesCard: React.FC<{ certificate: CertificateProps }> = ({
  certificate,
}) => {
  const { text, image, url, index, time } = certificate;
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: { opacity: 0, x: index * -100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: index * -100 },
      }}
      transition={{
        delay: index * 0.5,
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <Tilt>
        <div
          className={`${styles.gradientBorder} relative mb-3 h-[450px] w-full max-w-[400px] cursor-pointer rounded-3xl p-4 sm:max-w-[400px]`}
          onClick={handleClick}
        >
          <img
            className="h-[300px] w-full overflow-hidden rounded-2xl object-fill"
            alt="certificate"
            src={image}
          />
          <h2 className="my-6 text-center text-[20px] font-bold text-white">
            {text}
          </h2>
          <p className="absolute right-2 bottom-4 text-[12px] text-white">
            {time}
          </p>
        </div>
      </Tilt>
    </MotionDiv>
  );
};

export default CertificatesCard;
