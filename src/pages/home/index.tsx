import React from "react";
import { SiRazorpay } from "react-icons/si";
import "./index.css"

const Home: React.FC = () =>{

return(
    <div className="mt-5 relative">
        {/* <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="/images/nav-logo.png"
            alt="nav-logo"
            className="rounded-full h-[20%] w-[20%] mt-4"
          />
      </div> */}
        <div className="p-3">
        <p className="text-[#758694] text-center text-lg font-semibold mb-1">Welcome To Kongu Ayodhi</p>
        <p className="text-[#758694] text-center text-base font-medium">SRIVATSA CHARITABLE TRUST</p>
        <div className="md:flex md:justify-center">
        <div className="p-2 bg-white  md:w-[900px] shadow-lg">
        <p className="text-[#405d72] text-justify font-normal text-[12px] leading-[18px]  tracking-[0.36px]">
        SRIVATSA Charitable Trust stands as a beacon of hope for underprivileged children, committed to transforming their lives through comprehensive support in education, nutrition, and healthcare. In a world where many children are deprived of basic necessities, SRIVATSA Trust’s unwavering mission is to bridge this gap and ensure every child has the opportunity to lead a healthy, educated, and fulfilling life. This detailed content aims to encapsulate the essence of SRIVATSA Charitable Trust’s efforts, highlighting its initiatives, 
        impact stories,and the transformative power of community support.
        </p>
        </div>
        </div>
        </div >
        <div className="p-3">
        
        <p className="text-[#758694]  text-center text-base font-medium">Support Our Kongu Ayodhi Temple Building Project</p>
        <div className="md:flex md:justify-center">
        <div className="p-2 bg-white shadow-lg md:w-[900px] ">
            <p className="text-[#405d72] text-justify font-normal text-[12px] leading-[18px]  tracking-[0.36px]">
            At Kongu Ayodhi, we are embarking on a transformative journey to construct a new temple that will serve as a sanctuary for spiritual growth, community gathering, and cultural preservation. This sacred space is envisioned to be more than just a place of worship; it will be a cornerstone of our community, fostering a deeper connection to our spiritual heritage and traditions. The temple will be a beacon of peace, devotion, and enlightenment for generations to come, reflecting our shared values and aspirations.
            </p>
            </div>
        </div>
        </div>

        <div className="p-3 ">
        <p className="text-[#758694] text-center text-base font-medium">Kongu Ayodhi Temple Architecture</p>
        <div className="md:flex md:justify-center">
        <div className="p-2 bg-white md:w-auto shadow-lg flex justify-center items-center">
            <img src="/images/architecture.png" className="md:w-full"/>
        </div>
        </div>
        </div>
        <div className="p-3  ">
        <p className="text-[#758694] text-center text-base font-medium">Kongu Ayodhi Temple Statues</p>
        <div  className="block statues">
        <div className="p-2 block bg-white mb-5 div-1 shadow-lg">
        <img src="/images/anjaneya.png" />
        <p className="text-[#758694] text-center text-[20px] mt-2 font-bold">Nutana Sri Trinetra Panchamuga Anjaneyar</p>
        </div>
        <div className="p-2 bg-white div-2  shadow-lg">
        <img src="/images/balramar.jpg" />
        <p className="text-[#758694] text-center text-[20px] mt-2 font-bold">Bala Ramar</p>
        </div>
        </div>
        </div>

        <div className="p-3">
  <p className="text-[#758694] block text-center text-base font-medium">
    Scan to donate for Kongu Ayodhi Temple
  </p>
    <div className="flex justify-center items-center">
  <div className="p-2 block payment bg-white mb-5 shadow-lg">
    <img src="/images/gpay.png" className=""/>
    <span className="flex justify-center md:hidden">or</span>
    <div className=" flex justify-center items-center">
    <p className="text-[#758694] text-center text-base font-medium mr-3">Pay with Razorpay </p>
    <button className="bg-[#201e43] p-3 rounded-md flex text-[#FFFFFF]">
    <SiRazorpay />
    Open Razor Pay
    </button>    
    </div>
  </div>
  
  </div>
</div>

    </div>  
)

}

export default Home