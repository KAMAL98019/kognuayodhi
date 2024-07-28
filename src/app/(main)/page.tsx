import { Metadata } from "next";
import React from "react";
import Home from "@/pages/home";

export const metadata: Metadata = {
    title: "Kongu Ayodhi",
  }


const Index: React.FC = () =>{

    return(
        <>
        <Home/>
        </>
    )

}

export default Index