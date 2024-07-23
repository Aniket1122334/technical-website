import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[45rem]">
      <div className="flex flex-col items-center ">
        <img
          className="w-[70%] h-[50%]"
          src="/images/error.jpg"
          alt="error"
        ></img>

        <div>
          <Link to="/">
            <button className="bg-blue-300 w-[7rem] h-[3rem] rounded-2xl mt-6  hover:bg-indigo-700 hover:text-white uppercase transition-all duration-100">
              Home
            </button>
          </Link>

          <Link to="/about">
            <button className="bg-blue-300 w-[7rem] h-[3rem] rounded-2xl mt-3 ml-3 hover:bg-indigo-700 hover:text-white uppercase transition-all duration-100">
              about
            </button>
          </Link>

          <Link to="/products">
            <button className="bg-blue-300 w-[7rem] h-[3rem] rounded-2xl mt-3 ml-3 hover:bg-indigo-700 hover:text-white uppercase transition-all duration-100">
              proucts
            </button>
          </Link>

          <Link to="/contact">
            <button className="bg-blue-300 w-[7rem] h-[3rem] rounded-2xl mt-3 ml-3 hover:bg-indigo-700 hover:text-white uppercase transition-all duration-100">
              contact us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
