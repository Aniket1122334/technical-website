import { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  const { updateHomePage } = useContext(AppContext);

  useEffect(() => {
    updateHomePage(
      "GadgetGate",
      "/images/home.jpg",
      "Welcome to GadgetGate, the ultimate destination for cutting-edge technology and innovative gadgets. At GadgetGate, we bring you the latest and greatest in tech, from sleek smartphones and powerful laptops to smart home devices and must-have accessories. Our curated selection ensures you stay ahead of the curve with the most advanced and reliable products on the market."
    );
  }, []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
