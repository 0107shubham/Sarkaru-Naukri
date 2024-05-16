import React from "react";

const Navigation = () => {
  const navItem = [
    { id: 1, name: "Home" },
    { id: 2, name: "Latest Jobs" },
    { id: 3, name: "Results" },
    { id: 4, name: "Admit Card" },
    { id: 5, name: "Answer Key" },
    { id: 6, name: "Syllabus" },
    { id: 7, name: "Search" },
    { id: 8, name: "Contact us" },
  ];
  return (
    <div className="flex w-full ">
      {navItem.map((eachItem) => (
        <p
          className="bg-black m-[.1vw] py-[1vw] px-[2.03vw] lg:px-[1.9vw] text-[2vw] lg:text-[1vw] text-white font-medium"
          key={eachItem.id}
        >
          {eachItem.name}
        </p>
      ))}
    </div>
  );
};

export default Navigation;
