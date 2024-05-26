import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
// import { motion, useAnimation } from "framer-motion";

const LatestUpdate = () => {
  // const [isHovered, setIsHovered] = useState(false);
  // const controls = useAnimation();

  return (
    <div className="flex flex-col items-center text-blue-700 font-medium w-full">
      <p className="text-black text-[2.1vw] lg:text-[1.4vw]">
        Sarkari Result : SarkariResult.Com Sarkari Naukri Latest Jobs Online
        Form at Sarkari Results 2024
      </p>
      <p className="text-[1.5vw] lg:text-[1.2vw] text-red-600">
        Welcome to No. 1 Education Portal Sarkari Result 2024
      </p>
      <p className="text-[1.7vw] lg:text-[1.2vw] text-[#004B91] ">
        <Link to="/form/1">Sarkari Result Android Apps</Link>{" "}
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span>
        <Link to="/form/1"> Sarkari Result Youtube Channel </Link>{" "}
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span>{" "}
        <Link to="/form/1">Sarkari Result Apple / IOS Apps</Link>
        <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">|| </span>
        Follow Instagram
      </p>

      <div className="relative overflow-hidden whitespace-nowrap  w-full">
        <div className="text-[1.6vw] lg:text-[1.1vw] flex animate-scroll inline-block hover:[animation-play-state:paused]   hover:pause-scroll">
          <Link to="/form/1"> NTA CSIR NET Online Form 2024</Link>
          <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">
            ||{" "}
          </span>{" "}
          <Link to="/form/1"> Bihar STET Admit Card 2024</Link>
          <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">
            ||{" "}
          </span>{" "}
          <Link to="/form/1"> Air Force Group Y Online Form 2024</Link>
        </div>
      </div>

      <div className="relative overflow-hidden whitespace-nowrap w-full ">
        <div className="text-[1.6vw] lg:text-[1.1vw] flex animate-scroll inline-block hover:[animation-play-state:paused]   hover:pause-scroll">
          <Link to="/form/1"> Haryana Board BSEH 10th Result 2024 </Link>
          <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">
            ||{" "}
          </span>{" "}
          <Link to="/form/1"> CPET Admissions Online Form 2024 </Link>
          <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">
            ||{" "}
          </span>{" "}
          <Link to="/form/1"> UPSIFS Admissions Online Form 2024</Link>
        </div>
      </div>

      <div className="relative overflow-hidden whitespace-nowrap w-full ">
        <div className="text-[1.6vw] lg:text-[1.1vw] flex animate-scroll inline-block hover:[animation-play-state:paused]   hover:pause-scroll">
          <Link to="/form/1"> CBSE Class 12th Result 2024 </Link>
          <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">
            ||{" "}
          </span>{" "}
          <Link to="/form/1"> CBSE Board Class 10th Result 2024 </Link>
          <span className="text-[1.7vw] lg:text-[1.2vw] text-black ">
            ||{" "}
          </span>{" "}
          <Link to="/form/1"> NTA CUET UG Exam City and Date 2024</Link>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate;
