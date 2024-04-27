

import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";


export default function IconsProps() {



    return (
        <ul className="h-[219px]  z-50  fixed top-[40%] left-[86%] 2xl:left-[97%] xl:left-[96%] lg:left-[95%] md:left-[94%] sm:left-[92%] xs:left-[89%] w-full  xl:w-[60%] lg:w-[62%] md:w-[63%] sm:w-[80%]  h-full " >
            {/* <Link to='/notification'><li className="w-full shadow-lg text-2xl left-0  text-white mb-1 bg-orange px-1 py-1 relative w-1/4 duration-300  hover:left-[-38%] xs:hover:left-[-26%]">{totalStatus}<i className="fa fa-bell mx-4 inline" />Notification</li></Link> */}
            <Link target="_blank" to='/'><li className="w-full shadow-lg text-2xl left-0  text-white mb-1 bg-green-500 px-1 py-1 relative w-1/4 duration-300  hover:left-[-38%] xs:hover:left-[-26%]"><i className="fa fa-whatsapp mx-5 inline" />WhatsApp</li></Link>
            <Link target="_blank" to='https://www.facebook.com/profile.php?id=100095540462840&mibextid=ZbWKwL'><li className="w-full shadow-lg text-2xl  left-0 text-white mb-1 bg-sky-500 px-1 py-1 relative  w-1/4 duration-300  hover:left-[-38%] xs:hover:left-[-26%]"><i className="fa fa-facebook mx-5 inline" />Facebook</li></Link>
            <Link target="_blank" to='https://youtube.com/@GuruNanakKhalsa30B?si=3X5vATld63B7MIhI'><li className="w-full shadow-lg text-2xl left-0 text-white mb-1 bg-red-500 px-1 py-1 relative  w-1/4 duration-300  hover:left-[-38%] xs:hover:left-[-26%]"><i className="fa fa-youtube  mx-5 inline" />YouTube </li></Link>
            <Link target="_blank" to='/'><li className="w-full shadow-lg text-2xl left-0 text-white mb-1 bg-pink-500 px-1 py-1 relative  w-1/4 duration-300  hover:left-[-38%] xs:hover:left-[-26%]"><i className="fa fa-instagram mx-5 inline " />Instagram </li></Link>
            <Link target="_blank" to='https://twitter.com/GNKSSS30b'><li className="w-full shadow-lg  text-2xl left-0 text-white mb-1 bg-sky-500 px-1 py-1 relative  w-1/4 duration-300  hover:left-[-38%] xs:hover:left-[-26%]"><i className="fa fa-twitter mx-5 inline" />Twitter </li></Link>
            <Link  to='/payment'><li className="w-full  shadow-lg  text-2xl left-0 text-white mb-1 bg-yellow-500 px-1 py-1 relative  w-1/4 duration-300  hover:left-[-38%] xs:hover:left-[-26%]"><img src="./images/pay2.png" alt="." className=" ms-2 me-5  h-9 inline" />Fees </li></Link>
        
        </ul>

    )
}

