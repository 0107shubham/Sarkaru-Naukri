import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

const Navigation = () => {
  const navItem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Latest Jobs", path: "/latestjob" },
    { id: 3, name: "Results", path: "/result" },
    { id: 4, name: "Admit Card", path: "/admitcard" },
    { id: 5, name: "Answer Key", path: "/answerkey" },
    { id: 6, name: "Syllabus", path: "/syllabus" },
    { id: 7, name: "Search", path: "/search" },
    { id: 8, name: "Contact us", path: "/" },
  ];
  return (
    <div className="flex flex-col w-full ">
      <Header />
      <ul className="flex  w-full justify-between">
        {navItem.map((eachItem) => (
          <Link key={eachItem.id} to={eachItem.path}>
            <button className="bg-black mx-[.1vw] text-[1.9vw] px-[2vw] lg:text-[.9vw] lg:px-[2vw] lg:py-[.5vw] text-white font-medium">
              {eachItem.name}
            </button>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
