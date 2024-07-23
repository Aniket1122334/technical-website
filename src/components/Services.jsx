import React, { useContext } from "react";
import { AppContext } from "../context/context";

const Services = () => {
  const { services } = useContext(AppContext);

  return (
    <div className="section">
      <h2 className="commonHeading font-bold">Our Products</h2>

      <div className="flex justify-evenly flex-wrap pt-4 items-center">
        {services.map((elem, i) => {
          return (
            <div
              key={i}
              className="cards mt-5 h-[42rem] border border-slate-400 "
            >
              <figure className="w-[22rem]">
                <img
                  className="w-[22rem]"
                  src={elem.featuredImage}
                  alt={elem.name}
                />

                <div className="info  h-[25rem]  border-t-2 border-slate-300">
                  <h3 className="pt-5 text-center h-[6rem]">{elem.name}</h3>
                  <h4 className="p-5  h-[9rem]">{elem.description}</h4>
                  <h4 className="text-blue-500  block p-3 mt-7 ml-5 h-[3rem] w-[5rem] text-center bg-slate-100 rounded-2xl font-bold">
                    ${elem.basePrice}
                  </h4>
                  <center>
                    <button className="bg-blue-300 w-[7rem] h-[3rem] rounded-2xl mt-3 hover:bg-indigo-700 hover:text-white uppercase transition-all duration-100">
                      Buy Now
                    </button>
                  </center>
                </div>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
