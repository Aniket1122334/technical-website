import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import HeroSection from "./HeroSection";

const About = () => {
  const { updateAboutPage } = useContext(AppContext);

  useEffect(() => {
    updateAboutPage(
      "About Us",
      "/images/about.jpg",
      `At GadgetGate, we are passionate about bringing the future of technology to your doorstep. Founded by tech enthusiasts, our mission is to provide you with the latest and most innovative gadgets that simplify and enhance your life. We meticulously curate our selection to ensure quality, reliability, and cutting-edge performance. 

     Our commitment to excellence goes beyond just offering great products. We strive to deliver exceptional customer service, making your shopping experience seamless and enjoyable.`
    );
  }, []);
  return (
    <>
      <HeroSection />
    </>
  );
};

export default About;
