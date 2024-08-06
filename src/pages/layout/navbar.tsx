"use client";
import React, { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { BiPhone } from "react-icons/bi";
import "./navbar.css";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { CiMail } from "react-icons/ci";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="w-full flex items-center h-[5rem] justify-between p-2 navbar">
        <div className="flex items-center">
          <ul className="list-none flex space-x-4 text-[#758694] hidden sm:flex">
            <li className="p-[5px]">
              <p className="text-[12px]">Home</p>
            </li>
            <li className="p-[5px]">
              <p className="text-[12px]">Donate</p>
            </li>
            <li className="p-[5px]">
              <p className="text-[12px]">About</p>
            </li>
          </ul>
          <HiMiniBars3 className="sm:hidden cursor-pointer" onClick={toggleActive} />
        </div>
        {/* <div className="flex items-center justify-center flex-grow">
          <img
            src="/images/nav-logo.png"
            alt="nav-logo"
            className="rounded-full object-cover h-12 w-12"
          />
        </div> */}
        <div className="flex items-center space-x-4 text-[#758694] hidden sm:flex">
          <div className="flex items-center">
            <BiPhone size={16} />
            <p className="text-[12px] font-medium ml-1">+91 9443347746</p>
          </div>
          <div className="flex items-center">
            <CiMail size={16} />
            <p className="text-[12px] font-medium ml-1">srivatsatrust2010@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <AiFillInstagram size={16} />
            <AiFillFacebook size={16} />
            <AiFillYoutube size={16} />
          </div>
        </div>
      </nav>
      {isActive && (
        <div className="block sm:hidden p-2 bg-white">
          <ul className="list-none text-[#758694]">
            <li className="p-[5px]">
              <p className="text-[12px]">Home</p>
            </li>
            <li className="p-[5px]">
              <p className="text-[12px]">Donate</p>
            </li>
            <li className="p-[5px]">
              <p className="text-[12px]">About</p>
            </li>
          </ul>
          <div className="flex p-[5px] text-[#758694]">
            <BiPhone size={16} />
            <p className="text-[12px] font-medium ml-1">+91 9443347746</p>
          </div>
          <div className="flex p-[5px] text-[#758694]">
            <CiMail size={16} />
            <p className="text-[12px] font-medium ml-1">srivatsatrust2010@gmail.com</p>
          </div>
          <div className="flex p-[5px] text-[#758694] space-x-2">
            <AiFillInstagram size={16} />
            <AiFillFacebook size={16} />
            <AiFillYoutube size={16} />
          </div>
        </div>
      )}
      <div className="relative">
        
      <img src="/images/banner.jpg" alt="banner" className="w-full" />
      <div className=" absolute left-0   top-[2px]">
      <h1 className="font-bold  text-[1.4rem]  text-[#201e43] " style={{"textShadow":"29px 2px 19px #000000"}}>Kongu Ayodhi</h1>
      </div>
      </div>
    </>
  );
};

export default Navbar;
