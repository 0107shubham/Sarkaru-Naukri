import React from "react";

import LatestUpdate from "../LatestUpdate";
import Navigation from "../Navigation";
import Tool from "../Tool";
import Complete from "../Complete";
import FAQ from "../FAQ";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="px-[2vw] md:px-[0vw]">
      <Navigation />
      <LatestUpdate />
      <Tool />
      <Complete />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
