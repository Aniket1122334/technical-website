import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [openMenu, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className={openMenu ? "active menuIcon" : "menuIcon"}>
        <ul className="navbar-list flex gap-[4.8rem] uppercase">
          {/* ________________________________________________________
           */}
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="text-[1.5rem] font-semibold text-[#5681AE] hover:text-[#8490ff] transition-colors ease-linear duration-100 hover:ease-in"
              to="/"
            >
              Home
            </Link>
          </li>

          {/* ________________________________________________________
           */}

          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="text-[1.5rem] font-semibold text-[#5681AE] hover:text-[#8490ff] transition-colors ease-linear duration-100 hover:ease-in"
              to="/about"
            >
              About
            </Link>
          </li>

          {/* ________________________________________________________
           */}
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="text-[1.5rem] font-semibold text-[#5681AE] hover:text-[#8490ff] transition-colors ease-linear duration-100 hover:ease-in"
              to="/products"
            >
              Products
            </Link>
          </li>

          {/* ________________________________________________________
           */}
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="text-[1.5rem] font-semibold text-[#5681AE] hover:text-[#8490ff] transition-colors ease-linear duration-100 hover:ease-in"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>

          {/* ________________________________________________________
           */}
        </ul>

        <div className="mobile-navbar-btn text-[3rem]">
          <CgMenu
            className="mobile-nav-icon"
            onClick={() => setMenuOpen(true)}
          />
          <MdClose
            className="mobile-nav-icon cross"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
