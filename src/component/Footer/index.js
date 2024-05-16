import React from "react";

function Footer() {
  return (
    <footer className=" text-black py-8 w-full cursor-pointer">
      <div className="container mx-auto px-4 w-full flex">
        <div className="w-[25%]">
          <h2 className="text-lg font-semibold mb-4  text-[1.5vw] lg:text-[1.4vw]">
            Quick Links
          </h2>
          <ul className=" text-[1.3vw] lg:text-[1.2vw]">
            <li>
              <p className="hover:text-gray-600">Sarkari Result @Twitter</p>
            </li>
            <li>
              <p className="hover:text-gray-300">Sarkari Result @Telegram</p>
            </li>
            <li>
              <p className="hover:text-gray-300">Sarkari Result @WhatsApp</p>
            </li>
            <li>
              <p className="hover:text-gray-300">Sarkari Result @Instagram</p>
            </li>
            <li>
              <p className="hover:text-gray-300">Sarkari Result @Koo</p>
            </li>
            <li>
              <p className="hover:text-gray-300">Sarkari Result @Facebook</p>
            </li>
            <li>
              <p className="hover:text-gray-300">Sarkari Result @Linkedin</p>
            </li>
            <li>
              <p className="hover:text-gray-300">Sarkari Result @Youtube</p>
            </li>
          </ul>
        </div>

        <div className="w-[25%]">
          <h2 className="text-lg font-semibold mb-4  text-[1.5vw] lg:text-[1.4vw]">
            Apps
          </h2>
          <ul className=" text-[1.3vw] lg:text-[1.2vw]">
            <li>
              <p className="hover:text-gray-300">Android App</p>
            </li>
            <li>
              <p className="hover:text-gray-300">Apple iOS App</p>
            </li>
          </ul>
        </div>
        <div className="w-[50%]">
          <h2 className="text-lg font-semibold mb-4  text-[1.5vw] lg:text-[1.4vw]">
            More
          </h2>
          <ul className="w-full flex flex-wrap  text-[1.3vw] lg:text-[1.2vw]">
            <li className="hover:text-gray-300 w-[33%]">
              <p>BPSC</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]  ">
              <p>UPSSSC</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>CCC</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>UP-scholorship</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>IBPS</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>SSC</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>UPSC</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>Air Force</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>Navy</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>RPSC</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>Delhi Dssb</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>Railway</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>UPPCS</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>HSSC</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>TET</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>Coast Guard</p>
            </li>
            <li className="hover:text-gray-300 w-[33%]">
              <p>Police Vacancy</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
