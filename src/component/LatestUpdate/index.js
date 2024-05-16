import React, { useState } from "react";

const LatestUpdate = () => {
  return (
    <div className="flex flex-col items-center text-blue-700 font-medium">
      <p className="text-black text-[2.1vw] lg:text-[1.4vw]">
        Sarkari Result : SarkariResult.Com Sarkari Naukri Latest Jobs Online
        Form at Sarkari Results 2024
      </p>
      <p className="text-[1.5vw] lg:text-[1.2vw] text-red-600">
        Welcome to No. 1 Education Portal Sarkari Result 2024
      </p>
      <p className="text-[1.7vw] lg:text-[1.2vw] text-[#004B91] ">
        Sarkari Result Android Apps{" "}
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span>
        Sarkari Result Youtube Channel{" "}
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">
          ||{" "}
        </span>{" "}
        Sarkari Result Apple / IOS Apps
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span>
        Follow Instagram
      </p>

      <marquee
        behavior="alternate"
        scrollamount="3"
        onMouseOver={(e) => {
          e.target.stop();
        }}
        onMouseOut={(e) => {
          e.target.start();
        }}
        className="text-[1.6vw] lg:text-[1.1vw] "
      >
        NTA CSIR NET Online Form 2024{" "}
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span>{" "}
        Bihar STET Admit Card 2024{" "}
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span>{" "}
        Air Force Group Y Online Form 2024
      </marquee>

      <marquee
        behavior="alternate"
        scrollamount="3"
        onMouseOver={(e) => {
          e.target.stop();
        }}
        onMouseOut={(e) => {
          e.target.start();
        }}
        className="text-[1.6vw] lg:text-[1.1vw] "
      >
        CBSE Class 12th Result 2024{" "}
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span>{" "}
        CBSE Board Class 10th Result 2024{" "}
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span>{" "}
        NTA CUET UG Exam City and Date 2024
      </marquee>

      <marquee
        behavior="alternate"
        scrollamount="3"
        onMouseOver={(e) => {
          e.target.stop();
        }}
        onMouseOut={(e) => {
          e.target.start();
        }}
        className="text-[1.6vw] lg:text-[1.1vw] "
      >
        Haryana Board BSEH 10th Result 2024{" "}
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span> UP
        CPET Admissions Online Form 2024
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span>{" "}
        UPSIFS Admissions Online Form 2024
      </marquee>
    </div>
  );
};

export default LatestUpdate;
