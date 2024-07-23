import React from "react";

const Contact = () => {
  return (
    <div className="contact-box  p-[4rem]">
      <h2 className="commonHeading font-bold capitalize">Contact us</h2>

      <iframe
        className="mt-5"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.569702699804!2d77.06567507495826!3d28.672600082260978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04460435de33%3A0xecf0430866aa8233!2s91%2C%20C.%20R.%20Saini%20School%20Rd%2C%20Block%20A%2C%20Vandana%20Vihar%2C%20Nangloi%2C%20Delhi%2C%20110041!5e0!3m2!1sen!2sin!4v1721493606870!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contact-box">
        <div className="contactForm flex justify-center items-center min-h-[38rem]">
          <form
            action="https://formspree.io/f/mnnajqgg"
            method="POST"
            className="form flex flex-col min-w-[60rem] gap-[3rem] pt-[2rem]"
          >
            {/* _______________________________________________   */}
            <input
              className="input max-w-[50rem] pt-[1.6rem] pb-[1.6rem] pr-[2.4rem] pl-[2.4rem] border-2 border-[#BABBC7] uppercase shadow-lg shadow-[#CBCDD1] rounded-xl"
              type="text"
              name="username"
              placeholder="Enter Your Name"
              autoComplete="off"
              required
            />

            {/*   _______________________________________________ */}
            <input
              className="input max-w-[50rem] pt-[1.6rem] pb-[1.6rem] pr-[2.4rem] pl-[2.4rem] border-2 border-[#BABBC7] shadow-lg shadow-[#CBCDD1] rounded-xl"
              type="email"
              name="Email"
              placeholder="ENTER YOU EMAIL"
              autoComplete="off"
              required
            />

            <textarea
              className="input max-w-[50rem] pt-[1.6rem] pb-[1.6rem] pr-[2.4rem] pl-[2.4rem] border-2 border-[#BABBC7] shadow-lg shadow-[#CBCDD1] rounded-xl"
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            {/* 
            <input
              className="max-w-[16rem] mt-[2rem] bg-[#483DB1] text-[#A3A0C4] pt-[1.4rem] pt-b[1.4rem] pl-[2.2rem] pr-[2.2rem] border-[.1rem] uppercase text-[1.8rem] cursor-pointer"
              type="submit"
              value="send"
            /> */}

            <center>
              <button
                className="bg-blue-300 w-[9rem] h-[4rem] mr-[10rem] rounded-2xl hover:bg-indigo-700 hover:text-white uppercase transition-all duration-200"
                value="send"
              >
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
