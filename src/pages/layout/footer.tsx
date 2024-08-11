import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { CiMail } from "react-icons/ci";


const Footer = () =>{
    return(
        <div className="static bottom-0 left-0 w-full  pt-2 pl-5 pr-5 pb-5 h-auto  footer">
            <div className="smxsmall:block  sm-max:block md-min:flex md-min:justify-evenly text-[#758694]">
                <div className=" block mt-2">
                    <h1 className="text-[14px] font-bold">Contact us</h1>
                    <ul>
                        <li>
                        <div className="flex mr-2">
           <BiPhone size={16} />
            <p className="text-[12px] font-medium ml-1">  +91 9443347746</p>
            </div></li>
                        <li>
                        <div className="flex mr-2 ">
            <CiMail size={16} />
            <p className="text-[12px] font-medium ml-1">srivatsatrust2010@gmail.com</p>
          </div>
                        </li>
                    </ul>
                </div>
                <div className="smxsmall:block   sm-max:block  mt-2">
                <div className=" block">
                    <h1 className="text-[14px] font-bold">Connect with us</h1>
                    <div className="flex   space-x-2">
            <AiFillInstagram size={18} />
            <AiFillFacebook size={18} />
            <AiFillYoutube size={18} />
          </div>
                </div>
            </div>
            <div className="smxsmall:block   sm-max:block  mt-2 md-max:w-[70%] w-[40%]">
                <div className=" block">
                    <h1 className="text-[14px] font-bold">Donate Via Our Account Number</h1>
                    <div className="flex mr-2 ">
            <p className="text-[12px] font-medium ">SRIVATSA CHARITABLE TRUST, STATE BANK OF INDIA, A/CNO, 41102555770, IFSCODENO, SBIN0003358, MICR CODENO.638002004</p>
          </div>
                </div>
            </div>
            <div className="smxsmall:block   sm-max:block  mt-2 md-max:w-[70%] w-[40%]">
                <div className=" block">
                    <h1 className="text-[14px] font-bold">Address</h1>
                    <div className="flex mr-2 ">
            <p className="text-[12px] font-medium ">218,Easwaranstreet, GandhijiRoad, (opp) Fireservice Station  erode.1,L372D, KOOTTAPALLI,</p>
          </div>
                </div>
            </div>
            </div>
        </div>
    )

}

export default Footer