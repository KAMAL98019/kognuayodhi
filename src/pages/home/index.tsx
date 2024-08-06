import Link from "next/link";
import React from "react";
import { SiRazorpay } from "react-icons/si";


const Home: React.FC = () =>{

return(
  <>
    <div className="main-container mb-14">
      <div className="relative">
      <h1 className="font-bold absolute  inset-0 flex items-start justify-center  text-[1.4rem]  text-[#201e43] " style={{"textShadow":"9px 2px 19px #000000"}}>Sri Vatsa Charitable Trust</h1>

        <img src="/images/banner.jpg"   alt="banner" className="w-full md-max:h-[350px]  md-min:object-none object-cover " />
        
        </div>
        <p className="text-[#758694] text-center text-lg font-semibold mt-[12px] mb-1">Welcome To Kongu Ayodhi</p>
        <div className="md-max:block  md-min:flex md-min:justify-evenly md-min:p-10 p-3">
        <div className="md-max:block md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
  <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
    SRIVATSA CHARITABLE TRUST
  </p>
</div>
          <div className="p-2  bg-[#F7E7DC] rounded-md  md-min:w-[600px] shadow-lg flex justify-center items-start">
        <p className="text-[#405d72] text-justify font-normal text-[12px] leading-[18px]  tracking-[0.36px]">
        SRIVATSA Charitable Trust stands as a beacon of hope for underprivileged children, committed to transforming their lives through comprehensive support in education, nutrition, and healthcare. In a world where many children are deprived of basic necessities, SRIVATSA Trust’s unwavering mission is to bridge this gap and ensure every child has the opportunity to lead a healthy, educated, and fulfilling life. This detailed content aims to encapsulate the essence of SRIVATSA Charitable Trust’s efforts, highlighting its initiatives, 
        impact stories,and the transformative power of community support.
        </p>
        </div>

        </div>

        <div className="md-max:block  md-min:flex md-min:justify-evenly md-min:p-10 p-3">
        <div className="md-min:hidden md-max:block  md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
  <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
  Kongu Ayodhi Temple Building Project
  </p>
</div>
          <div className="p-2  bg-[#F7E7DC] rounded-md  md-min:w-[600px] shadow-lg flex justify-center items-start">
        <p className="text-[#405d72] text-justify font-normal text-[12px] leading-[18px]  tracking-[0.36px]">
        At Kongu Ayodhi, we are embarking on a transformative journey to construct a new temple that will serve as a sanctuary for spiritual growth, community gathering, and cultural preservation. This sacred space is envisioned to be more than just a place of worship; it will be a cornerstone of our community, fostering a deeper connection to our spiritual heritage and traditions. The temple will be a beacon of peace, devotion, and enlightenment for generations to come, reflecting our shared values and aspirations.

        </p>
        </div>
        <div className="md-max:hidden md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
  <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
  Kongu Ayodhi Temple Building Project
  </p>
</div>
        </div>

    <div className="">

    </div>
    <div className="md-max:block  md-min:flex md-min:justify-evenly md-min:p-10 p-3">
    <div className="md-max:block md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
  <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
  Nutana Sri Trinetra Panchamuga Anjaneyar
  </p>
</div>
<div className="p-2   rounded-md  md-min:w-[600px]  flex justify-center items-start">
<img src="/images/anjaneya.png"  width={280} height={280}  />
        </div>
    </div> 

    <div className="md-max:block  md-min:flex md-min:justify-evenly md-min:p-10 p-3">
        <div className="md-min:hidden md-max:block  md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
  <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
  Kongu Ayodhi Bala Ramar
  </p>
</div>
          <div className="p-2   rounded-md  md-min:w-[600px]  flex justify-center items-start">
          <img src="/images/balramar.jpg" width={280} height={280} />
        </div>
        <div className="md-max:hidden md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
  <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
  Kongu Ayodhi Bala Ramar
  </p>
</div>
        </div>  

        <div className="md-max:block  md-min:flex md-min:justify-evenly md-min:p-10 p-3">
    <div className="md-max:block md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
  <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
  Kongu Ayodhi Temple Architecture
  </p>
</div>
<div className="p-2   rounded-md  md-min:w-[600px]  flex justify-center items-start">
<img src="/images/architecture.png"  width={310} height={310} className="md:w-full"/>

        </div>
    </div> 

    <div className="md-max:block  md-min:flex md-min:justify-evenly md-min:p-10 p-3">
        <div className="md-min:hidden md-max:block  md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
  <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
  Scan to donate for Kongu Ayodhi Temple
  </p>
</div>
          <div className="p-2   rounded-md  md-min:w-[600px]  flex justify-center items-start">
          <div className="p-2 block payment  mb-5 shadow-lg">
    <img src="/images/gpay.png" width={280} height={280} className=""/>
    <span className="flex justify-center md:hidden">or</span>
    <div className=" flex justify-center items-center mt-2">
    
    <p className="text-[#758694] text-center text-base font-medium mr-3">Pay with Razorpay </p>
    <Link href="/razorpaypage">
    <button className="bg-[#201e43] smxsmall:p-2    sm-max:p-2 smxsmall:text-xs sm-max:text-xs  p-3 rounded-md flex text-[#FFFFFF]">
    <SiRazorpay />
    Open Razor Pay
    </button> 
    </Link>
       
    </div>
    </div>
        </div>
        <div className="md-max:hidden md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
  <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
  Scan to donate for Kongu Ayodhi Temple
  </p>
</div>
        </div>  


    </div>
    </>
)

}

export default Home