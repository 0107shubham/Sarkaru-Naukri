import React from "react";

const Header = () => {
  return (
    <div className="bg-[#AB183D] flex flex-row  w-full h-[13vw] p-[1vw] ">
      <img
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1715747848/logo-new_vkl5it.png"
        alt="logo"
        class="h-[10vw]"
      />
      <div class=" mx-[auto]  font-bold">
        <h1 class="text-[3vw] text-white">SARKARI RESULT</h1>
        <p class="text-[1.5vw] text-center text-white">WWW.SARKARIRESULT.COM</p>
      </div>
    </div>
  );
};

export default Header;
