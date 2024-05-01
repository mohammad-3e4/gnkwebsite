import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import React from "react";
import Arrow from "../../Main/Arrow";


export default function Silent() {
    return (
        <>
        <Arrow/>
          <div className="flex justify-center lg:mt-10">
            {/* <div className="w-75 bg-white shadow mt-5 mb-5 p-5 rounded"> */}
            <div className="max-w-7xl  mt-5 mb-5 p-5 ">

            <h2 style={{ textAlign: "center", marginBottom: "40px" }} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> SALIENT <span style={{ color: 'var(--orange)',display:'inline-block' }}> FEATURES</span> </h2>
                
                <p style={{fontSize:"20px"}}>
                    <ul className="list-none list-inside">
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Discipline highest priority.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Priority given to studies.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Computer education from className 1st onwards</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Well stocked library, fully functional Science labs.</li>
                    </ul>
                    <p style={{color:"var(--orange)",fontWeight:"500"}} className="my-5">Arrangements for Basketball, Football, Hockey, Handball, Badminton, Kho-Kho, Netball etc.</p>

                    <ul className="list-none list-inside" >
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Religious/Moral education.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Stage exposure of Children.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Hi-tech air conditioned Computer Lab</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Educational Trips and Excursions for all students.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> 15% reservation for economically weaker section.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Reasonable fee charges.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Pollution free environment having nature fresh club.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> NSS  for classNamees XI and XII</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> NCC for className IX and X</li>
                    </ul>
                    <p style={{color:"var(--orange)",fontWeight:"500"}} className="my-5">Special Instructions for Parents / Guardians:</p>

                    <ul className="list-none list-inside">
                       
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> School visiting hours: 9:30 a.m. to 10:30 a.m.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Parents can meet className teacher and subject teachers on Parent Teacher Meeting Day.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Parent must ensure that their wards are regular, punctual, correctly dressed and always carry school diary with them.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Attendance of students in all school activities / school functions, particular or celebrations of National Days is compulsory.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Trimming of beard and hair cut by Sikh students is strictly prohibited. Defaulters name will be struck off from the school without listening any excuse.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Turban is compulsory from className 8th onwards for Sikh students.</li>
                        <li  className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue"/> Non Sikh boys should get their hair trimmed at intervals.</li>

                    </ul>




                </p>
                
                
            </div>
        </div>
        </>
        
    )
}