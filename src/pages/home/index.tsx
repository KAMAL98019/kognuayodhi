import Link from "next/link";
import React from "react";
import { SiRazorpay } from "react-icons/si";


const Home: React.FC = () => {

  return (
    <>
      <div className="main-container mb-14">
        <div className="relative">
          <h1 className="font-bold absolute inset-0 flex items-start justify-center text-[1rem] sm:text-[1.2rem] md:text-[2.4rem] desktop:text-[2rem] text-[#201e43] mt-1 sm:mt-1 md:mt-2 lg:mt-5 xl:mt-6" style={{ textShadow: "9px 2px 19px #000000" }}>
            SriVatsa Charitable Trust
          </h1>
          <h3 className="font-bold absolute inset-0 flex items-start justify-center text-[0.8rem] sm:text-[1rem] md:text-[2rem] desktop:text-[1rem] text-[#201e43] desktop:mt-14 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14" style={{ textShadow: "9px 2px 19px #000000" }}>
            Donating for Kongu Ayodhi Temple Pranaprathishta
          </h3>
          {/* <h5 className="font-bold absolute inset-0 flex items-start justify-center text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] desktop:text-[0.9rem] text-[#201e43] mt-10 desktop:mt-20 sm:mt-12 md:mt-14lg:mt-32 xl:mt-16" style={{ textShadow: "9px 2px 19px #000000" }}>
            Under Section 80G of Income Tax
          </h5> */}
          <img src="/images/banner.jpg" alt="banner" className="w-full sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover" />
        </div>
        <div className="overflow-hidden w-full text-center">
          <div className="inline-block">
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-red-600 font-semibold animate-blink">
            &#34; Support SRIVATSA Trust in building spiritual happiness; your donation brings hope. &#34;
            </p>
          </div>
        </div>


        <p className="text-[#758694] text-center text-lg font-semibold mt-[12px] mb-1">Welcome To Kongu Ayodhi</p>
        <p className="text-center text-[#758694]text-lg font-semibold text-[#758694]">“ஸ்ரீ ராம ராம ராமேதி
          ரமே ராமே மனோ ரமே
          சஹஸ்ர நாம தத்துல்யம்
          ராம நாம வரானனே”</p>
        <div className="md-max:block md-min:flex md-min:justify-evenly md-min:p-10 p-3">
          <div className="md-max:block md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">SRIVATSA CHARITABLE TRUST</p>

          </div>

          <div className="p-2 bg-[#F7E7DC] rounded-md md-min:w-[600px] shadow-lg flex justify-center items-start">
            <p className="text-[#405d72] text-justify font-normal text-[14px] leading-[18px] tracking-[0.36px]">
              SRIVATSA Charitable Trust: Transforming Lives of Underprivileged Children
              In a world where many children lack basic necessities, SRIVATSA Charitable Trust stands as a beacon of hope. Since 2010, the trust has been dedicated to transforming lives by providing essential support in education, nutrition, and healthcare. Their mission is simple yet powerful: to ensure every child has the opportunity to lead a healthy, educated, and fulfilling life.
              Our Vision
              SRIVATSA Charitable Trust envisions a world where every child, regardless of background, can access the essentials for a fulfilling life. By focusing on education, nutrition, and healthcare, the trust aims to break the cycle of poverty and create a brighter future for underprivileged children.
              Our Initiatives
              Education Support
              We believe every child deserves quality education. Our initiatives include scholarships and sponsorships to help with school fees, books, and uniforms. We establish learning centers that provide after-school programs and tutoring. Additionally, we offer skill development courses that teach essential life skills and vocational training.
              Nutrition Programs
              Understanding the link between nutrition and learning, we ensure children receive nutritious meals daily that meet dietary needs. We also provide supplementary nutrition through vitamins and other supplements to combat malnutrition. Our nutrition education workshops teach children and their families about healthy eating habits.
              Healthcare Initiatives
              Healthcare is a fundamental right, and we provide regular check-ups to monitor children&apos;s health. We ensure children are vaccinated through our immunization programs and offer financial aid for special medical treatments through our medical assistance initiative.
              How You Can Help
              Our work is powered by community support. You can contribute by volunteering your time and skills, making financial donations to fund our initiatives, and partnering with businesses, schools, and healthcare providers to amplify our impact.
              Conclusion
              SRIVATSA Charitable Trust is committed to changing lives by addressing the critical needs of education, nutrition, and healthcare. Every child deserves the chance to lead a healthy, educated, and fulfilling life. With community support, we&apos;re making this vision a reality. Each year, within our capacity, we help children with education, medicine, and more, creating a stronger, more equitable society.
            </p>
          </div>
        </div>

        <div className="md-max:block md-min:flex md-min:justify-evenly md-min:p-10 p-3">
          {/* Centered title block for small screens */}
          <div className="md-min:hidden md-max:block p-3">
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
              Kongu Ayodhi Temple Building Project
            </p>
          </div>

          {/* Main content block */}
          <div className="p-2 bg-[#F7E7DC] rounded-md md-min:w-[600px] shadow-lg">
            <p className="text-[#405d72] text-justify font-normal text-[14px] leading-[18px] tracking-[0.36px]">
              We are excited to announce the construction of the Kongu Ayodhi temple, a new sanctuary for spiritual growth, community gathering, and cultural preservation. This temple will be more than just a place of worship; it will be a cornerstone of our community, fostering a deeper connection to our spiritual heritage and traditions.
            </p>
            <p className="text-[#405d72] text-justify font-normal text-[14px] leading-[18px] tracking-[0.36px] mt-4">
              Our work is powered by community support, and we need your help to continue making a difference. You can contribute in several ways:
            </p>
            <p className="text-[#405d72] text-justify font-normal text-[14px] leading-[18px] tracking-[0.36px] mt-4">
              Donations: Your financial contributions fund our education, nutrition, and healthcare initiatives, as well as the construction of the Kongu Ayodhi temple. Every donation, no matter the size, helps us reach more children in need and advance our temple project.
            </p>
            <p className="text-[#405d72] text-justify font-normal text-[14px] leading-[18px] tracking-[0.36px] mt-4">
              Volunteering: Offer your time and skills to assist with our various programs and activities.
            </p>
          </div>

          {/* Centered title block for medium and larger screens */}
          <div className="md-max:hidden md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">
              Kongu Ayodhi Temple Building Project
            </p>
          </div>
        </div>


        {/* Additional Content Sections */}
        <div className="md-max:block md-min:flex md-min:justify-evenly md-min:p-10 p-3">
          <div className="md-max:block md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">Nutana Sri Trinetra Panchamuga Anjaneyar</p>
          </div>
          <div className="p-2 rounded-md md-min:w-[600px] flex justify-center items-start">
            <img src="/images/anjaneya.png" width={280} height={280} />
          </div>
        </div>

        <div className="md-max:block md-min:flex md-min:justify-evenly md-min:p-10 p-3">
          <div className="md-min:hidden md-max:block md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">Kongu Ayodhi Bala Ramar</p>
          </div>
          <div className="p-2 rounded-md md-min:w-[600px] flex justify-center items-start">
            <img src="/images/balramar.jpg" width={280} height={280} />
          </div>
          <div className="md-max:hidden md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">Kongu Ayodhi Bala Ramar</p>
          </div>
        </div>

        <div className="md-max:block md-min:flex md-min:justify-evenly md-min:p-10 p-3">
          <div className="md-max:block md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">Kongu Ayodhi Temple Architecture</p>
          </div>
          <div className="p-2 rounded-md md-min:w-[600px] flex justify-center items-start">
            <img src="/images/architecture.png" width={510} height={510} className="md:w-full" />
          </div>
        </div>

        <div className="md-max:block md-min:flex md-min:justify-evenly md-min:p-10 p-3">
          <div className="md-min:hidden md-max:block md-min:flex md-min:flex-col md-min:items-center md-min:justify-center p-3">
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">Scan to donate for Kongu Ayodhi Temple.</p>
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">Gpay Number: 9384922390.</p>
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">STATE BANK OF INDIA, SRIVATSA CHARITABLE TRUST A/CNO: 41102555770,</p>
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">IFSC Code: SBIN0003358,MICR CODE NO:638002004,</p>
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">80G available as per Income Tax Act 1961 and rules made there under.</p>
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">Tax Exemption Certificate Ref. No.: AAJTS3811NF20241.</p>
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">To get the receipt of donation made through NEFT, RTGS, IMPS PayTm, UPI as mentioned above,<br /> please share your legal name,whatsapp number,email, postal address with pincode (and PAN if you need 80G receipt) along with transaction details on <a href="" style={{ color: "blue" }}>srivatsatrust2010@gmail.com</a> or <br /> whatsapp Number: <a href="" style={{ color: "blue" }}>94433 47746</a> </p>
          </div>

          <div className="p-2 rounded-md md-min:w-[600px] flex justify-center items-start">
            <div className="p-2 block payment mb-5 shadow-lg">
              <img src="/images/gpay.png" width={280} height={280} className="" />
              {/* <span className="flex justify-center md:hidden">or</span> */}
              <div className="flex justify-center items-center mt-2">
                {/* Payment Option */}
              </div>
            </div>
          </div>
          <div className="md-max:hidden md-min:flex md-min:flex-col md-min:items-start md-min:justify-start p-3">
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">Scan to donate for Kongu Ayodhi Temple.</p>
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">Gpay Number: 9384922390.</p>
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">STATE BANK OF INDIA, SRIVATSA CHARITABLE TRUST, A/CNO: 41102555770,</p>
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">IFSC Code: SBIN0003358, MICR CODENO: 638002004,</p>
            <p className="text-[#758694] text-center text-base font-semibold mt-1 mb-1">80G available as per Income Tax Act 1961 and rules made there under.</p>
            <p className="text-[#758694] text-justify text-base font-semibold mt-1 mb-1">Tax Exemption Certificate Ref. No.: AAJTS3811NF20241.</p>
            <p className="text-[#758694] text-justify text-base font-semibold mt-1 mb-1">To get the receipt of donation made through NEFT, RTGS, IMPS PayTm, UPI as mentioned above,<br /> please share your legal name,whatsapp number,email, postal address with pincode (and PAN if you need 80G receipt) along with transaction details on <a href="" style={{ color: "blue" }}>srivatsatrust2010@gmail.com</a> or <br /> whatsapp Number: <a href="" style={{ color: "blue" }}>94433 47746.</a> </p>
          </div>
        </div>
      </div>
    </>
  )

}

export default Home;
