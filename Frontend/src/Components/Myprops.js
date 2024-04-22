import React from "react";
// import { Link } from "react-router-dom";

export default function Myprops(props) {
    return (
        <div className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden  px-6 py-2.5 sm:px-3.5 ">

            <div className="flex  justify-between w-full lg:w-8/12 md:w-full sm:w-full items-center  gap-x-4 gap-y-2  px-4 py-2 rounded-full hover:shadow  ">
                <p className="text-md leading-6 text-gray-900">
                    <strong style={{ color: "var(--blue)" }} className="font-semibold">{props.date} - </strong>

                    {props.content}
                </p>
                <a
                    href={props.path}

                    className="flex-none  rounded-full bg-orange  px-3.5 py-1 duration-500 text-sm font-semibold text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    Download now <span aria-hidden="true">&rarr;</span>
                </a>
            </div>

        </div>
    )
}
