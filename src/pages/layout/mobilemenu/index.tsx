import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { CiMail } from "react-icons/ci";


const MobileMenu: React.FC = () =>{
    return(
        <div className="relative bg-[#F7E7DC] p-1">
        <ul className="list-none block w-full text-[#758694] font-light">
        <Link href='/'><li className="p-2">Home</li></Link>
        <Link href="/razorpaypage"><li className="p-2">Donate</li></Link>
            <li className="text-[14px] p-2">About us</li>
            <li className="text-[14px] p-2"> 
                <div className="flex 
                 text-[#758694]">
            <BiPhone size={16} />
            <p className="text-[12px] font-medium ml-1">+91 9443347746</p>
          </div></li>
          <li className="text-[14px] p-2">
          <div className="flex text-[#758694]">
            <CiMail size={16} />
            <p className="text-[12px] font-medium ml-1">srivatsatrust2010@gmail.com</p>
          </div>
          
          </li>
          <li className="text-[14px] p-2">
          <div className="flex  text-[#758694] space-x-2">
            <AiFillInstagram size={16} />
            <AiFillFacebook size={16} />
            <AiFillYoutube size={16} />
          </div>
          </li>
        </ul>
        </div>
    )
}

export default MobileMenu