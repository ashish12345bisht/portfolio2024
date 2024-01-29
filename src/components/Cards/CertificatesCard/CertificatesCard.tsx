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
          className={`${styles.gradientBorder} relative p-4 w-full sm:max-w-[400px] max-w-[400px] h-[450px] rounded-3xl cursor-pointer mb-3`}
          onClick={handleClick}
        >
          <img
            className="rounded-2xl overflow-hidden w-full h-[300px] object-fill"
            alt="certificate"
            src={image}
          />
          <h2 className="text-white text-[20px] font-bold text-center my-6">
            {text}
          </h2>
          <p className="text-[12px] absolute bottom-4 right-2 text-white">
            {time}
          </p>
        </div>
      </Tilt>
    </MotionDiv>
  );
};

export default CertificatesCard;
