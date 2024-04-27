import React from "react";

export default function OurActivityProps(props) {
    return (
        <div className=" relative h-full w-full flex justify-center items-center">
            <img className="block max-w-full rounded-lg" src={props.src} alt="" />
            <div style={{ background: "rgba(255,255,255,0.5)" }}  className="absolute duration-500 h-full w-full opacity-0 flex justify-center items-center left-0 top-0 rounded-lg hover:opacity-100 " >
                <h2 className="font-bold text-xl lg:text-3xl  sm:text-3xl drop-shadow-md" style={{ color: "var(--orange)" }}>{props.activity}</h2>
            </div>
        </div>
    )
}