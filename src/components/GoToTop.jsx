import React, { useEffect, useState } from "react";
import { TiArrowUpOutline } from "react-icons/ti";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 450;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="top-btn text-[2.4rem] w-[5rem] h-[5rem] bg-[#584cd923] shadow-lg shadow-[#131313] fixed rounded-full cursor-pointer bottom-[5rem] right-[2rem] z-20 flex items-center justify-center text-slate-400"
          onClick={goToBtn}
        >
          <TiArrowUpOutline className="fixed-button" />
        </div>
      )}
    </>
  );
};

export default GoToTop;
