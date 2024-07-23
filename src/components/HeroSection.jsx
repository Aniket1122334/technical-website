import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/context";

const HeroSection = () => {
  const { name, image, paragraph } = useContext(AppContext);

  return (
    <div className="w-full flex justify-evenly items-center box">
      <div className="bg-[#F9FFFC] w-full flex justify-evenly items-center min-h-[45rem] left-section-hero">
        {/* _____________________________________________________ */}
        <div className="left-section w-[30%]  min-h-[33rem] flex flex-col justify-start">
          <h1 className="text-[5.5rem] font-bold">{name}</h1>
          <p className="left-section-p text-[1.3rem] pt-1">{paragraph}</p>

          <Link to="/contacts">
            <button className="bg-[#6354F2] w-[8rem] h-[3rem] text-white font-semibold uppercase rounded-xl shadow-lg shadow-indigo-500/50 mt-6 hover:bg-[#162ad9] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover: duration-200">
              Contact Us
            </button>
          </Link>
        </div>

        {/* _____________________________________________________ */}
        <div className="right-section w-[30%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover: duration-300">
          <img
            className="w-full h-[33rem] rounded-3xl shadow-lg shadow-indigo-500/40"
            src={image}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
