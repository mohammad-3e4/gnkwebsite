import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import React from "react";
import Arrow from "../../Main/Arrow";

export default function OurAbout() {
    return (
        <div className="lg:mt-20"> 
          <Arrow  />
            <h2 style={{ textAlign: "center", marginBottom: "40px" }} className="text-3xl font-bold mt-10 tracking-tight text-gray-900 sm:text-4xl">ABOUT <span style={{ color: "var(--orange)" }}>SCHOOL</span> </h2>

            <div className="p-5 flex justify-center">

                <div className="max-w-7xl">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="flex justify-center items-center">

                            <img className="rounded-lg  " src="/school.jpg" alt="" style={{ float: 'left', marginRight: '13px' }} />

                        </div>
                        <div>
                            <p className="p-5 text-justify " >
                                Guru Nanak Khalsa Sr. Secondary School is CBSE affiliated, co-educational, Govt. aided School of a rich reputation. School was established on the auspicious day of Baisakhi 13th April, 1965 and successfully completed 50 years. The school is situated in an area of 5.772 acres. The total student strength of the school is 1720.The students at Guru Nanak Khalsa Sr. Secondary School are given freedom of self expression and are encouraged to think for themselves. In the progressive atmosphere of the modern age, our endeavour at Guru Nanak Khalsa Sr. Secondary School to equip the children with the set of values so needed to bring forth a balanced individual. They are given ample opportunities for self expression so that they learn to shoulder responsibilities in day to day life. Emphasis is laid on qualities such as self confidence and truthfulness towards oneself and society.
                            </p>
                        </div>
                    </div>
                    {/* <img className="rounded-lg" src="http://www.gnkschool.info/userfiles/image/school.jpg" alt="" style={{ float: 'left', marginRight: '13px' }} /> */}
                    {/* <p style={{ fontSize: "18px" }}>
                        Guru Nanak Khalsa Sr. Secondary School is CBSE affiliated, co-educational, Govt. aided School of a rich reputation. School was established on the auspicious day of Baisakhi 13th April, 1965 and successfully completed 50 years. The school is situated in an area of 5.772 acres. The total student strength of the school is 1720.The students at Guru Nanak Khalsa Sr. Secondary School are given freedom of self expression and are encouraged to think for themselves. In the progressive atmosphere of the modern age, our endeavour at Guru Nanak Khalsa Sr. Secondary School to equip the children with the set of values so needed to bring forth a balanced individual. They are given ample opportunities for self expression so that they learn to shoulder responsibilities in day to day life. Emphasis is laid on qualities such as self confidence and truthfulness towards oneself and society.
                    </p> */}
                    <br></br><br></br>
                    <p className="text-justify p-5 border-4 border-gray-50 shadow-md rounded-lg">The school has a well furnished air conditioned computer lab. It has a well stocked library. The school has a House System. It is distributed into four houses namely 1. Sahibzada Ajit Singh House 2.Sahibzada Jujhar Singh House 3.Sahibzada Zorawar Singh House 4.Sahibzada Fateh Singh House. The segregation of students into sections A,B,C. of various classNamees is done to ensure equal distribution of boys and girls in all the classNamees.</p>
                    <br></br>
                    <p className="text-justify p-5 border-4 border-gray-100 shadow-md rounded-lg">Importance is not given only to the spirit of competition in academics and extracurricular activities but also in the day to day involvement of students in the maintained of discipline and premises by the house on duty for the week. This system teaches them to shoulder responsibilities and develop a sense of belonging to their alma-meter.</p>
                    <br></br><br></br>
                    <p>Affiliation No.Extension of affiliation upto</p>

                </div>

            </div>

            <h4 style={{  fontSize: "20px" }} className="text-orange font-bold text-center pt-5 bg-gray-100">INFORMATION OF THE SCHOOL</h4>

            <div className="relative  bg-gray-100 flex justify-center py-10 ">
                <div className="overflow-x-auto">
                    <table className="max-w-7xl text-md text-left rtl:text-right ">

                        <tbody>
                            <tr className="  transition duration-400 bg-none border border-gray-200  hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1
                                </th>
                                <td className="px-6 py-4">
                                    Name of the School with address
                                </td>
                                <td className="px-6 py-4">
                                    Guru Nanak Khalsa Senior Secondary School, Sector- 30B, Chandigarh.
                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                </th>
                                <td className="px-6 py-4">
                                    E-Mail Id.
                                </td>
                                <td className="px-6 py-4">
                                    Gurunanak_30b@rediffmail.com.in
                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                </th>
                                <td className="px-6 py-4">
                                    Phone No.
                                </td>
                                <td className="px-6 py-4">
                                    0172 - 2654593, 993, 693
                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                </th>
                                <td className="px-6 py-4">
                                    Fax.
                                </td>
                                <td className="px-6 py-4">
                                    0172 - 2654993

                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2
                                </th>
                                <td className="px-6 py-4">
                                    Year of establishment of School                        </td>
                                <td className="px-6 py-4">
                                    1965
                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    3
                                </th>
                                <td className="px-6 py-4">
                                    Whether NOC from State/ UT or recommendation of Embassy of India obtained?</td>
                                <td className="px-6 py-4">
                                    yes
                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                </th>
                                <td className="px-6 py-4">
                                    NOC No.                        </td>
                                <td className="px-6 py-4">
                                    1/55-DPI-UT-A2-24( ) 92
                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    4
                                </th>
                                <td className="px-6 py-4">
                                    Is the school is recognised, if yes, by which Authority                       </td>
                                <td className="px-6 py-4">
                                    Education Department, Chandigarh Administration.
                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    5
                                </th>
                                <td className="px-6 py-4">
                                    Status of Affiliation                       </td>
                                <td className="px-6 py-4">

                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                </th>
                                <td className="px-6 py-4">
                                    Permanent/ Regular /Provisional                      </td>
                                <td className="px-6 py-4">
                                    Provisional (Applied for Permanent)
                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                </th>
                                <td className="px-6 py-4">
                                    2630003                        </td>
                                <td className="px-6 py-4">
                                    1/55-DPI-UT-A2-24( ) 92
                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                </th>
                                <td className="px-6 py-4">
                                    Affiliation with the Board since                        </td>
                                <td className="px-6 py-4">
                                    1981
                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                </th>
                                <td className="px-6 py-4">
                                    2019                        </td>
                                <td className="px-6 py-4">

                                </td>

                            </tr>
                            <tr className="  transition duration-400 bg-none border border-gray-200 hover:bg-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    6
                                </th>
                                <td className="px-6 py-4">
                                    Name of Trust / Society / Company registered under section 25 of the company Act, 1956 Period upto which Registration of Trust / Society is valid                        </td>
                                <td className="px-6 py-4">
                                    Gurdwara Sri Guru Singh Sabha, Sector - 19 D, Chandigarh, Permanent.
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
            <div className="flex justify-center">

                <div className="max-w-7xl text-justify p-5">
                    <h4 style={{ color: "var(--orange)", fontSize: "20px" }} className="font-bold my-5">SCHOOL LOGO DETAILS</h4>
                    <p style={{ fontSize: "18px" }}>Sarbhat dah phalla or Sarbat da bhala is a Punjabi term which means "may everyone be blessed"or "may good come to all". This is a term from an important part of the Sikh prayer called the Ardas. This term forms an important part of Sikh philosophy. The term establishes a new precedence set by the Sikh Gurus - It binds the Sikh to ask for the "well being of everyone in the world". In establishing this concept, the Gurus have set a new standard for the Sikhs – not only should the Sikhs pray for their own well-being but also need to ask for the blessing of "all the peoples of the world".
                        <br></br><br></br>
                        All Sikhs narrate this prayer called the Ardas (final request/prayer to God) at least twice a day. In the ardas, the Sikhs say the following line near the end of the Ardas:-</p><br></br>
                    <ul style={{ fontSize: "18px" }} className="max-w-full space-y-1  list-none list-inside ">
                        <li> <CheckBadgeIcon className="h-6 w-6 inline text-blue" /> "Nanak Naam Chardikala, teraa bhanaa Sarbaht dah Phahla" which can be translated as "Nanak asks for 'Naam' (name of God) with which comes well.</li>
                        <li><CheckBadgeIcon className="h-6 w-6 inline text-blue" /> "Nanak Naam Chardikala, teraa bhanaa Sarbaht dah Phahla" which can be translated as "Nanak asks for 'Naam' (name of God) with which comes well being, happiness and positive spirit and with your blessings, Lord may everyone in the world prosper and be in peace" or can be broken down as:</li>
                        <li> <CheckBadgeIcon className="h-6 w-6 inline text-blue" /> Nanak, With Naam comes Chardi Kala and with your blessings, may there be peace for all (part of the Ardas performed daily by all practising Sikhs)</li>
                    </ul><br></br>
                    <p style={{ fontSize: "18px" }} >
                        The Sikh concept of "Sarbaht dah Phahla" which means "blessings for everyone" or literally "May everyone Prosper".
                        <br></br><br></br>
                        This statement is repeated by all practising Sikhs at least twice daily (if not more) as part of their Nitnem (daily prayers). This concept is central to Sikhism and forms a very important and essential role in the religious philosophy of the Sikh Gurus.
                        <br></br><br></br>
                        To put this in concise and clear language, it means that the Sikh desires, prays and asks God for the:
                    </p>

                    <ul className="max-w-full space-y-1  list-none list-inside " style={{ fontSize: "18px" }}>
                        <li><CheckBadgeIcon className="h-6 w-6 inline text-blue" /> Well being of all of humanity</li>
                        <li><CheckBadgeIcon className="h-6 w-6 inline text-blue" /> Prosperity for everyone in the worldwide community and</li>
                        <li><CheckBadgeIcon className="h-6 w-6 inline text-blue" /> Global Peace for the entire planet.</li>
                    </ul>
                    <p style={{ fontSize: "18px" }} className="mt-5">
                        A true Sikh selflessly prays daily for "all to prosper". This gesture comes from the clear and pure teaching of Gurbani (Sri Guru Granth Sahib, SGGS) and forms the Gurmat code of conduct. Gurbani tells us that there are no "others". There is only One. The same One God resides within all. We are all the children of that One God. As the potter makes pots of different forms and colors from the same basic clay; and as the goldsmith moulds jewellery of various types, colors are all born of the and shapes from the same single homogenous material, gold; similarly, we same One Light. There is no difference.
                    </p>
                    <h4 style={{ fontSize: "20px" }} className="font-bold text-orange my-5">SCHOOL AFFILIATION</h4>
                    <p style={{ fontSize: "18px" }}>
                        The School is Co-educational and has accommodation for more than 1600 students. The School is affiliated to Central Board of school Examination (CBSE) New Delhi. It prepares students for the matriculation and the senior secondary examinations. The School offers four streams of subjects namely Medical, Non-Medical, Commerce and Humanities to its senior Secondary Students.
                        <br></br><br></br>
                        Status of Affiliation :- Regular Affiliated
                        <br></br><br></br>
                        Affiliation No. :- 2630003
                        <br></br><br></br>
                        Affiliation with the board :- 1981
                    </p>
                </div>
            </div>

        </div>
    )
}
