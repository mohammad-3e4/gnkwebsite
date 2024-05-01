import React from "react";
import Myprops from "../../Myprops";

export default function Syllabus(){
    return(
        <div className="h-[300px] lg:mt-20">
            <h2 style={{ marginBottom: "40px", color: "var(--orange)" }} className="text-3xl mt-5 text-center font-bold tracking-tight text-gray-900 sm:text-4xl">SYLLABUS </h2>

        <Myprops
        path="./images/Syllabus.pdf"
        date="04/15/2021"
        content="ANNUAL ACADEMIC CALENDER"
        />
        </div>
    )
}