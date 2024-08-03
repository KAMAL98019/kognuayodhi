import { Metadata } from "next";
import RazorpayPage from "@/pages/razorpaypages";
export const metadata: Metadata = {
    title: "Kongu Ayodhi",
  }


  export default function razorpaypage() {
    return <RazorpayPage />
  }