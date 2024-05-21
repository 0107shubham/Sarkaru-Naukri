import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItem = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Latest Jobs", path: "/latestjob" },
  { id: 3, name: "Results", path: "/result" },
  { id: 4, name: "Admit Card", path: "/admitcard" },
  { id: 5, name: "Answer Key", path: "/answerkey" },
  { id: 6, name: "Syllabus", path: "/syllabus" },
  { id: 7, name: "Search", path: "/search" },
  {
    id: 8,
    name: "More",
    path: "#",
    subItems: [
      { id: 9, name: "UPSSSC", path: "/upsssc" },
      { id: 10, name: "IBPS", path: "/ibps" },
      { id: 11, name: "Railway", path: "/railway" },
    ],
  },
];

const Contact = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col w-full">
        <div className="bg-[#AB183D] text-center w-full h-[13vw] p-[1vw] ">
          <div className="mx-[auto] font-bold">
            <h1 className="text-[3vw] text-white">SARKARI RESULT</h1>
            <p className="text-[1.5vw] text-center text-white">
              WWW.SARKARIRESULT.COM
            </p>
          </div>
        </div>
        <ul className="flex w-full justify-between ">
          {navItem.map((eachItem) => (
            <li
              key={eachItem.id}
              className="relative w-full  mx-[.2vw] md:mx-[.05vw]"
              onMouseEnter={eachItem.subItems ? handleMouseEnter : null}
              onMouseLeave={eachItem.subItems ? handleMouseLeave : null}
            >
              <button className="bg-black  text-[1.9vw]  lg:text-[1.4vw] w-full  mx-[.2vw] md:mx-[.05vw] py-[.8vw]  text-white font-medium">
                <Link to={eachItem.path}>{eachItem.name}</Link>
              </button>
              {eachItem.subItems && isDropdownVisible && (
                <ul className="absolute top-full left-0 bg-white shadow-md z-10 w-full ">
                  {eachItem.subItems.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        className="block bg-black text-center text-[1.9vw]  lg:text-[1.4vw] w-full  my-[.2vw] md:my-[.05vw] py-[.8vw]  text-white font-medium"
                        to={subItem.path}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-[2vw] my-[14vw]">
        <div className=" border-2 border-black my-[2vw]">
          <p className="text-[3.5vw] text-purple-700 font-bold text-center">
            {" "}
            WELCOME TO SARKARIRESULT.COM
          </p>
          <p className="text-[2.5vw] text-black font-normal text-center">
            No. 1 Education Website in India
          </p>
          <p className="text-[2.5vw] text-black font-normal text-center">
            Contact us & Mobile Apps Download
          </p>
        </div>
        <div className="text-center p-4 bg-white border-2 border-black my-[1vw]">
          <p className="text-[3.5vw] text-black">
            If Any Feedback or Problem Kindly Mail us on <br />
            <strong>SarkariResult@gmail.com</strong> <br /> For Instant Support
            / Contact Kindly Follow us on{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Twitter
            </a>
          </p>
        </div>
        <div className="border-2 border-black my-[3vw]">
          <p className="text-[5.5vw] text-pink-700 font-bold text-center">
            Benefit of Sarkari Result Apps
          </p>
          <p className="text-[3.5vw] text-black  text-center">
            Notification Service : After the Install the Sarkari Result Mobile
            Apps You Get the All Vacancy, Result, Admit Card and Other
            Information Through Notification / Message. Easy to Find Latest
            Jobs, Sarkari Naukri, Latest Result, Download Admit Card, Answer
            Key, Syllabus, Exam Pattern, Admission Notification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
