import React from "react";
import Main from "../homepage/Main";
import Discover from "../homepage/Discover";
import AboutSparkNex from "../homepage/AboutSparkNex";
import Contact from "../homepage/Contact";
import SubscribeSection from "../homepage/SubscribeSection";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Discover />
      <AboutSparkNex />
      <Contact />
      <SubscribeSection />
    </div>
  );
};

export default Home;
