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
    <div className="flex flex-col w-full  bg-purple-300">
      <Header />
      <ul className="flex  w-full justify-between">
        {navItem.map((eachItem) => (
          <button className="bg-black  text-[1.9vw] mx-[.2vw] md:mx-[.02vw] py-[.8vw] lg:text-[1.4vw] w-full text-white font-medium">
            <Link key={eachItem.id} to={eachItem.path}>
              {eachItem.name}
            </Link>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
