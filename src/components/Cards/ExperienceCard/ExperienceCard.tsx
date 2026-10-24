import React from "react";
import styles from "./style.module.scss";
import { experienceProps } from "@/lib/interface";

const ExperienceCard = ({ experience }: { experience: experienceProps }) => {
  return (
    <div className={styles.nft}>
      <div className={styles.main}>
        <div className="flex w-full items-center text-center align-middle sm:flex-col">
          <img
            className={`${styles.tokenImage} sm:!mr-0`}
            src={experience?.image}
            alt="NFT"
          />
          <div className="flex w-full items-center justify-between sm:flex-col">
            <div className="text-center sm:w-full">
              <h2 className="text-[30px] font-bold sm:text-[20px]">
                {experience?.title}
              </h2>
              <h2 className="text-left text-[14px] font-bold sm:text-center">
                {experience?.position}
              </h2>
            </div>
            <h2 className="text-[14px] font-bold sm:text-[10px]">
              {experience?.timeline}
            </h2>
          </div>
        </div>
        <hr />

        <ul className={`${styles.description} sm:!px-2`}>
          {experience?.description?.map((item) => (
            <li key={item} className="list-decimal sm:text-xs">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
