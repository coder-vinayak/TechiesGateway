import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Importing hamburger icon
import Highlightedtext from "./Highlightedtect";
import { Link } from "react-router-dom";

function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-10 top-0 w-full h-[64px] bg-[#FAFAFA] shadow-[0px_1px_56px_-20px_#00000040]">
      <div className="w-11/12 flex mx-auto items-center justify-between h-full">
        <Link to="/">
          {" "}
          <div className="text-[20px] font-semibold leading-[24px] md:text-[24px] md:leading-[30px]">
            SMM <Highlightedtext text="Panel" />
          </div>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <FiMenu size={24} onClick={toggleMenu} className="cursor-pointer" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-[12px] items-center">
          <ul className="list-none flex gap-[12px]">
            <Link to="/login">
              {" "}
              <li className="py-[8px] px-[12px] cursor-pointer">Login</li>
            </Link>{" "}
            <Link to="/service">
              <li className="py-[8px] px-[12px] cursor-pointer">Service</li>
            </Link>
            <Link to="/api">
              <li className="py-[8px] px-[12px] cursor-pointer">Api</li>
            </Link>{" "}
            <Link to="/terms">
              <li className="py-[8px] px-[12px] cursor-pointer">Terms</li>
            </Link>
          </ul>
          <Link to="/signup">
            <div className="flex w-[70px] h-[36px] border rounded-[18px] items-center justify-center bg-[#3D55CC] py-[6px] px-[12px] text-white text-sm">
              SignUp
            </div>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[64px] right-0 bg-white w-full shadow-md md:hidden">
            <ul className="list-none flex flex-col items-center gap-[8px] py-4">
              <li className="py-[6px] px-[12px] w-full text-center cursor-pointer border-b">
                Login
              </li>
              <li className="py-[6px] px-[12px] w-full text-center cursor-pointer border-b">
                Service
              </li>
              <li className="py-[6px] px-[12px] w-full text-center cursor-pointer border-b">
                Api
              </li>
              <li className="py-[6px] px-[12px] w-full text-center cursor-pointer border-b">
                Terms
              </li>
              <div className="flex w-[80%] h-[36px] border rounded-[18px] items-center justify-center bg-[#3D55CC] py-[6px] px-[12px] text-white text-sm mt-2">
                SignUp
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
