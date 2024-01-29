"use client;";
import React from "react";
import styles from "./style.module.scss";
import { experienceProps } from "@/lib/interface";

const ExperienceCard = ({ experience }: { experience: experienceProps }) => {
  return (
    <div className={styles.nft}>
      <div className={styles.main}>
        <div className="flex sm:flex-col items-center text-center w-full align-middle">
          <img
            className={`${styles.tokenImage} sm:!mr-0`}
            src={experience?.image}
            alt="NFT"
          />
          <div className="flex justify-between items-center sm:flex-col w-full">
            <div className="sm:w-full text-center">
              <h2 className="text-[30px] sm:text-[20px] font-bold">
                {experience?.title}
              </h2>
              <h2 className="text-[14px] font-bold">{experience?.position}</h2>
            </div>
            <h2 className="text-[14px] sm:text-[10px] font-bold">
              {experience?.timeline}
            </h2>
          </div>
        </div>
        <hr />

        <ul className={`${styles.description} sm:!px-2`}>
          {experience?.description?.map((item) => (
            <li className="list-decimal sm:text-xs">{item}</li>
          ))}
        </ul>
        {/* <div className={styles.tokenInfo}>
                    <div className={styles.price}>
                        <ins>◘</ins>
                        <p>0.031 ETH</p>
                    </div>
                    <div className={styles.duration}>
                        <ins>◷</ins>
                        <p>11 days left</p>
                    </div>
                </div> */}
        {/* <div className={styles.creator}>
                    <div className={styles.wrapper}>
                        <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
                    </div>
                    <p><ins>Creation of</ins> Kiberbash</p>
                </div> */}
      </div>
    </div>
  );
};

export default ExperienceCard;
