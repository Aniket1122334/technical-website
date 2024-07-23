import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Navbar.css";

const Header = () => {
  return (
    <header className="header flex justify-between items-center p-[4.8rem] h-[10rem] bg-[#eaf6f9] ">
      <Link to="/">
        <img
          className="h-[8rem] min-w-[30%] rounded-full"
          src="/images/logo.jpg"
          alt="logo"
        ></img>
      </Link>

      <Navbar></Navbar>
    </header>
  );
};

export default Header;
