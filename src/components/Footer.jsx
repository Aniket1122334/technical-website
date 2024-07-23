import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center strip-section">
        <div className="strip flex bg-[#F6FAFB] mt-[3rem] justify-between items-center w-[60%] h-[8rem] pl-[5rem] pr-[5rem] shadow-md  rounded-xl translate-y-[50%]">
          <div className="strip-para">
            <p>
              Ready to get started?
              <br />
              Talk to us today
            </p>
          </div>

          {/* __________________________________________________ */}

          <div className="strip-btn">
            <button className="bg-[#6354F2] w-[7rem] h-[3rem] rounded-2xl mt-3 hover:bg-indigo-700 text-white uppercase transition-all duration-100">
              Buy Now
            </button>
          </div>

          {/* __________________________________________________ */}
        </div>
      </div>

      <footer className="footer flex justify-center  flex-col items-center bg-[#06132D] pt-[1rem]">
        <div className="footer-grid w-[60%] flex items-center h-[25rem]">
          <div className="grid-structure grid grid-cols-4 gap-8">
            {/* __________________________________________________ */}
            <div className="thanks">
              <p className="text-[1rem] text-white p-4">
                Thank you for choosing our products. We appreciate your trust
                and look forward to serving you again soon.
              </p>
            </div>

            {/* __________________________________________________ */}
            <div className="subscribe">
              <div className="flex flex-col p-4">
                <p className="text-[1rem] text-white ">
                  Subscribe to get important updates
                </p>
                <form
                  className="pt-4"
                  action="https://formspree.io/f/mgvwoeqv"
                  method="POST"
                >
                  <input
                    className="p-3 w-full"
                    type="email"
                    name="subscribed"
                    placeholder="Your Email"
                    autoComplete="off"
                    required
                  />

                  <button
                    className="bg-[#574CD9] w-[7rem] h-[3rem] rounded-2xl mt-4 text-white"
                    value="send"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* _______________________________________________ */}
            <div className="follow pt-4">
              <div className="follow flex items-center flex-col justify-center pt-4 text-[1.3rem] text-white">
                <h4>Follow Us On :</h4>
              </div>

              <div className="socialIcons flex mt-8 justify-evenly cursor-pointer items-center gap-2 flex-wrap">
                {/* _______________________________________________ */}
                <div className="rounded-full text-white overflow-hidden hover:text-[#FE1383] transition">
                  <a
                    href="https://www.instagram.com/aniket_verma_op/"
                    target="_blank"
                  >
                    <FaInstagram size={45} />
                  </a>
                </div>

                {/* _______________________________________________ */}

                <div className="rounded-full text-white overflow-hidden hover:text-[#000] transition">
                  <a href="https://x.com/Aniketverma_op" target="_blank">
                    <FaXTwitter size={45} />
                  </a>
                </div>

                {/* _______________________________________________ */}

                <div className="rounded-full text-white overflow-hidden hover:text-[#1F2328] transition">
                  <a href="https://github.com/Aniket1122334" target="_blank">
                    <FaGithub size={45} />
                  </a>
                </div>

                {/* _______________________________________________               */}
              </div>
            </div>

            {/* _______________________________________________ */}
            <div className="number flex  justify-center items-start p-4">
              <div className="text-white p-4 text-[1.2rem]">
                <h4>Call Us</h4>
                <h4>+91 9871587106</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="lower-section flex flex-col w-full justify-center h-[5rem]">
          <hr />

          <div className="bottom flex items-center h-[5rem] justify-around w-full">
            <div className=" text-white text-[1.1rem]">
              <h4>© 2024 GadgetGate. All Rights Reserved</h4>
            </div>
            <div className=" text-white text-[1.1rem]">
              <h4>privacy policy</h4>
              <h4>terms and conditions</h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
