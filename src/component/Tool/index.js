import React from "react";
import { Link } from "react-router-dom";

const Tool = () => {
  return (
    <div className="w-full items-center flex flex-col">
      <div className="bg-[#0080FF]  text-[1xl] my-[2vw]  w-fit">
        {" "}
        <p className="text-[2vw] mx-[1vw] text-white ">Sarkari Result Tools</p>
      </div>

      <div className="flex w-full justify-around flex-wrap ">
        <div className=" pt-[.2vw] pb-[2vw] bg-[#0080FF] w-[24%] text-[1.4vw] text-white text-center font-bold leading-none px-[.5vw] mx-[.1vw]">
          <Link to="/form/1">RPF Constable / SI Apply Online</Link>
        </div>
        <div className="bg-[#868A08]  w-[24%]  pt-[.2vw] pb-[2vw]  text-[1.4vw] text-white text-center font-bold leading-none px-[.5vw] m-[.1vw]">
          <Link to="/form/1">UGC NET June 2024 Apply Online</Link>
        </div>
        <div className="bg-[#0404B4]  w-[24%]   pt-[.2vw] pb-[2vw]  text-[1.4vw] text-white text-center font-bold leading-none px-[.5vw] m-[.1vw]">
          <Link to="/form/1">Bihar STET 2024 Admit Card</Link>
        </div>
        <div className="bg-[#FB5E03]  w-[24%]   pt-[.2vw] pb-[2vw]  text-[1.4vw] text-white text-center font-bold leading-none px-[.5vw] m-[.1vw]">
          <Link to="/form/1">UPSC CAPF AC Apply Online</Link>
        </div>
        <div className="bg-[#8C0101]  w-[24%]  pt-[.2vw] pb-[2vw]  text-[1.4vw] text-white text-center font-bold leading-none px-[.5vw] m-[.1vw]">
          <Link to="/form/1"> Navy SSR / MR Apply Online</Link>
        </div>
        <div className="bg-[#FB0303]  w-[24%]  pt-[.2vw] pb-[2vw]   text-[1.4vw] text-white text-center font-bold leading-none px-[.5vw] m-[.1vw]">
          <Link to="/form/1">CUET UG 2024 Admit Card</Link>
        </div>
        <div className="bg-[#0B610B]  w-[24%]   pt-[.2vw] pb-[2vw]  text-[1.4vw] text-white text-center font-bold leading-none px-[.5vw] m-[.1vw]">
          <Link to="/form/1">UPSSSC AGTA 2024 Apply Online</Link>
        </div>
        <div className="bg-[#FF00BF]  w-[24%]   pt-[.2vw] pb-[2vw]  text-[1.4vw] text-white text-center font-bold leading-none px-[.5vw] m-[.1vw]">
          <Link to="/form/1"> CBSE 10th & 12th Result 2024</Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
