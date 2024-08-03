"use client";
import React, { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { BiPhone } from "react-icons/bi";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import MobileMenu from "./mobilemenu";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <nav className="sticky top-0 z-50  flex w-[100%] list-none navbar p-3 justify-center items-center">
          <img
            src="/images/nav-logo.png"
            alt="nav-logo"
            className="rounded-full  smxsmall:w-[35%]    sm-max:w-[28%] desktop:w-[12%] md-min:w-[15%]  max-w-full"
          />
          {/* for mobile menu */}
        <div className="absolute left-2 md-min:hidden">
          <HiMiniBars3  size={20} onClick={toggleActive}/>
        </div>
        <div className="absolute cursor-pointer left-2 sm-max:hidden md-max:hidden">
        <ul className="flex list-none  w-full text-[#758694] font-light text-[12px]">
        <Link href='/'><li className="p-2">Home</li></Link>
        <Link href="/razorpaypage"><li className="p-2">Donate</li></Link>
        <li className="p-2">About us</li>
        </ul>
        </div>
        <div className="absolute right-2
                 text-[#758694] sm-max:hidden md-max:hidden">
                  <div className="flex ">
                  <div className="flex mr-2">
           <BiPhone size={16} />
            <p className="text-[12px] font-medium ml-1">  +91 9443347746</p>
            </div>
                  <div className="flex mr-2 ">
            <CiMail size={16} />
            <p className="text-[12px] font-medium ml-1">srivatsatrust2010@gmail.com</p>
          </div>
          {/* <div className="flex   space-x-2">
            <AiFillInstagram size={16} />
            <AiFillFacebook size={16} />
            <AiFillYoutube size={16} />
          </div> */}
                  </div>
          
                  
          </div>
    </nav>
    { isActive &&(
    <MobileMenu/>
    )
}
    </>
  );
};

export default Navbar;
