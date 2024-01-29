"use client";
import React from "react";
import ContainerHeading from "../Canvas/ContainerHeading";
import CertificatesCard from "../Cards/CertificatesCard/CertificatesCard";
import Slider from "react-slick";

const Certificates = () => {
  const certificates = [
    {
      index: 1,
      text: "MERN FULL STACK",
      time: "(09/2022 - 02/2023)",
      image: "/FULL-STACK-MERN.jpg",
      url: "https://drive.google.com/file/d/1LOiRUeB1Xgolq-QMvq1Totfq2YW1ul8q/view",
    },
    {
      index: 2,
      text: "Meta Frontend Developer Capstone Project",
      time: "(01/2023 - 02/2023)",
      image: "/Coursera-Capstone.jpg",
      url: "https://drive.google.com/file/d/1kiNcn5I1-pdoSXrfbMqI8So861YEIHA0/view",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="certificates">
      <ContainerHeading heading="Certificates" />
      <div className="flex justify-around px-10 sm:px-2 flex-wrap">
        {certificates?.map((certificate) => (
          <CertificatesCard certificate={certificate} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
