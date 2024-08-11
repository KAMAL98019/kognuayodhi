import Link from "next/link";
import React, { useState } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineClose } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { CiMail } from "react-icons/ci";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#F7E7DC] p-4 z-50 overflow-y-auto">
      {/* Close button */}
      <div className="flex justify-end mb-4">
        <button onClick={handleClose} className="text-[#758694] text-xl">
          <AiOutlineClose />
        </button>
      </div>

      <ul className="list-none w-full text-[#758694] font-light">
        <Link href='/'>
          <li className="p-2">Home</li>
        </Link>
        {/* <Link href="/razorpaypage"><li className="p-2">Donate</li></Link> */}
        {/* <li className="text-[14px] p-2">About us</li> */}
        <li className="text-[14px] p-2">
          <div className="flex text-[#758694]">
            <BiPhone size={16} />
            <p className="text-[12px] font-medium ml-1">+91 9443347746</p>
          </div>
        </li>
        <li className="text-[14px] p-2">
          <div className="flex text-[#758694]">
            <CiMail size={16} />
            <p className="text-[12px] font-medium ml-1">srivatsatrust2010@gmail.com</p>
          </div>
        </li>
        <li className="text-[14px] p-2">
          <div className="flex text-[#758694] space-x-2">
            <AiFillInstagram size={16} />
            <AiFillFacebook size={16} />
            <AiFillYoutube size={16} />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
