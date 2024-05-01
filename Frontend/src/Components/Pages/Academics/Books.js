import React from "react";

export default function Books() {
    return (
        <div className="lg:mt-20">
            <div className="flex justify-center">
                <div className="flex justify-center p-3 " style={{ width: "90%" }}>

                    <div className="w-full text-center">
                        <h2 style={{ color: "var(--blue)", marginBottom: "40px" }} className="text-3xl mt-5  font-bold tracking-tight  sm:text-4xl">LIST OF <span style={{ color: 'var(--orange)' }}> BOOKS</span> </h2>

                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className - Pre_Nursary</h2>
                        <div className="overflow-x-auto relative mb-5 ">
                            <table className="table   w-full  text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400  w2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400  w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">Begin with Alphabet</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">My Learning Book (1 to 20)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">G.K</td>
                                        <td className="px-4 py-2 border border-slate-400">Star kidz Picture Book </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">Pattern</td>
                                        <td className="px-4 py-2 border border-slate-400">My Learning Boook (Pattern Book) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">5</th>
                                        <td className="px-4 py-2 border border-slate-400">Drawing </td>
                                        <td className="px-4 py-2 border border-slate-400">Alexia Art and Craft  'A'</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Table 2************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className -Nursary</h2>
                        <div className="overflow-x-auto mb-5 ">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1 </th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">My Learning Book ( Alphabet Capital)/My  Learning Book ( Alphabet SMALL)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Twinkling Stars 1 to 100</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">G.K</td>
                                        <td className="px-4 py-2 border border-slate-400">Grafalco Pre School

                                            GK &B Conversation </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">Punjabi	</td>
                                        <td className="px-4 py-2 border border-slate-400">	Akhar Giyan</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">5</th>
                                        <td className="px-4 py-2 border border-slate-400">Drawing </td>
                                        <td className="px-4 py-2 border border-slate-400">Alexia Art and Craft  'B'</td>
                                    </tr>


                                </tbody>
                            </table></div>

                        {/* Table 3************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className -k.G</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">Twilight Introductory

                                            My Skill Book - English 3 Cursive</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">MAth Spool Introductory</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">G.K</td>
                                        <td className="px-4 py-2 border border-slate-400">Grafalco Pre School

                                            GK &B Conversation</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">Punjabi</td>
                                        <td className="px-4 py-2 border border-slate-400">Akhar Giyan

                                            Shabad Giyan </td>
                                    </tr>


                                </tbody>
                            </table></div>

                        {/* Table 4************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className -I</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">Marigold - I (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Math Magic Book -I (NCERT)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">1st Language</td>
                                        <td className="px-4 py-2 border border-slate-400">Punjabi: l.Punjabi Praveshika-I (PSEB)<br></br>
                                            2. Punjabi Pustak-l (PSEB)</td>
                                    </tr>
                                </tbody>
                            </table></div>

                        {/* Table 5************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className -II</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">Marigold - II (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Math Magic Book -II(NCERT)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">1st Language</td>
                                        <td className="px-4 py-2 border border-slate-400">2. Punjabi Pustak-II (PSEB)</td>
                                    </tr>
                                </tbody>
                            </table></div>

                        {/* Table 6************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className -III</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">Marigold - III (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Math Magic Book -III (NCERT)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">EVS</td>
                                        <td className="px-4 py-2 border border-slate-400">Looking Around-III (NCERT) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">1st Language</td>
                                        <td className="px-4 py-2 border border-slate-400">Punjabi: Punjabi Pustak-III (PSEB) </td>
                                    </tr>
                                </tbody>
                            </table></div>

                        {/* Table 7************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className -IV</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">Marigold - IV (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Math Magic Book -IV (NCERT)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">EVS</td>
                                        <td className="px-4 py-2 border border-slate-400">Looking Around-IV (NCERT) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">1st Language</td>
                                        <td className="px-4 py-2 border border-slate-400">Punjabi: Punjabi Pustak-IV (PSEB)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">5</th>
                                        <td className="px-4 py-2 border border-slate-400">2nd Language </td>
                                        <td className="px-4 py-2 border border-slate-400">Hindi: Rim Jim-I (NCERT)</td>
                                    </tr>
                                </tbody>
                            </table></div>

                        {/* Table 8************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className - V</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">Marigold - V (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Math Magic Book -V (NCERT)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">EVS</td>
                                        <td className="px-4 py-2 border border-slate-400">Looking Around-V (NCERT) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">1st Language</td>
                                        <td className="px-4 py-2 border border-slate-400">Punjabi: Punjabi Pustak-V (PSEB)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">5</th>
                                        <td className="px-4 py-2 border border-slate-400">2nd Language </td>
                                        <td className="px-4 py-2 border border-slate-400">Hindi: Rim Jim-II (NCERT)</td>
                                    </tr>
                                </tbody>
                            </table></div>

                        {/* Table 9************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className - VI</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">Honey Suckle (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics VI (NCERT)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">Science</td>
                                        <td className="px-4 py-2 border border-slate-400">Science Text Book for className-VI (NCERT) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">Social Science</td>
                                        <td className="px-4 py-2 border border-slate-400">1. Our Pasts-l (NCERT)<br></br>
                                            2. The Earth-our Habitat (NCERT)<br></br>
                                            3. Social and Political Life-l (NCERT) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">5</th>
                                        <td className="px-4 py-2 border border-slate-400">1st Language </td>
                                        <td className="px-4 py-2 border border-slate-400">Punjabi: l.Punjabi Pustak-VI (PSEB)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">6</th>
                                        <td className="px-4 py-2 border border-slate-400">2nd Language  </td>
                                        <td className="px-4 py-2 border border-slate-400">Rim Jim-lll (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">7</th>
                                        <td className="px-4 py-2 border border-slate-400">Optional (Any Other)</td>
                                        <td className="px-4 py-2 border border-slate-400">Drawing: l.Chitrakalafor className-VI (PSEB)<br></br>
                                            Home Science: 1. Greh Vigyan 6-8 (PSEB)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">8</th>
                                        <td className="px-4 py-2 border border-slate-400">2nd Language  </td>
                                        <td className="px-4 py-2 border border-slate-400">Life Skill Education - VI (CBSE)</td>
                                    </tr>
                                </tbody>
                            </table></div>

                        {/* Table 10************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className - VII</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">Honey Comb (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics VII (NCERT)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">Science</td>
                                        <td className="px-4 py-2 border border-slate-400">Science Text Book for className-VII (NCERT) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">Social Science</td>
                                        <td className="px-4 py-2 border border-slate-400">1. Our Pasts-l (NCERT)<br></br>
                                            2. The Earth-our Habitat (NCERT)<br></br>
                                            3. Social and Political Life-l (NCERT) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">5</th>
                                        <td className="px-4 py-2 border border-slate-400">1st Language </td>
                                        <td className="px-4 py-2 border border-slate-400">Punjabi: l.Punjabi Pustak-VII (PSEB)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">6</th>
                                        <td className="px-4 py-2 border border-slate-400">2nd Language  </td>
                                        <td className="px-4 py-2 border border-slate-400">Rim Jim-lll (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">7</th>
                                        <td className="px-4 py-2 border border-slate-400">Optional (Any Other)</td>
                                        <td className="px-4 py-2 border border-slate-400">Drawing: l.Chitrakalafor className-VII (PSEB)<br></br>
                                            Home Science: 1. Greh Vigyan 6-8 (PSEB)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">8</th>
                                        <td className="px-4 py-2 border border-slate-400">2nd Language  </td>
                                        <td className="px-4 py-2 border border-slate-400">Life Skill Education - VII (CBSE)</td>
                                    </tr>
                                </tbody>
                            </table></div>

                        {/* Table 11************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className - VIII</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="mb-5">
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">Honey Dew (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics VIII (NCERT)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">Science</td>
                                        <td className="px-4 py-2 border border-slate-400">Science Text Book for className-VII (NCERT) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">Social Science</td>
                                        <td className="px-4 py-2 border border-slate-400">1. Our Pasts-III - Part I (NCERT)<br></br>
                                            2. Our Pasts-III - Part II (NCERT)<br></br>
                                            3. The Earth-our Habitat (NCERT)<br></br>
                                            4. Social and Political Life-l (NCERT) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">5</th>
                                        <td className="px-4 py-2 border border-slate-400">1st Language </td>
                                        <td className="px-4 py-2 border border-slate-400">Punjabi: l.Punjabi Pustak-VIII (PSEB)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">6</th>
                                        <td className="px-4 py-2 border border-slate-400">2nd Language  </td>
                                        <td className="px-4 py-2 border border-slate-400">Rim Jim-V (NCERT)</td>
                                    </tr>
                                </tbody>
                            </table></div>

                        {/* Table 12************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className - IX</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="table min-w-full bg-white w-full text-left ">
                                <thead className="bg-blue text-white">
                                    <tr >
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400 w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">1</th>
                                        <td className="px-4 py-2 border border-slate-400">English</td>
                                        <td className="px-4 py-2 border border-slate-400">1. Beehive (CBSE)<br></br>
                                            2. Moments Supplementary Reader (CBSE)
                                        </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics for className IX (NCERT)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">Science</td>
                                        <td className="px-4 py-2 border border-slate-400">Science Text Book for className-IX (NCERT) </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">Social Science</td>
                                        <td className="px-4 py-2 border border-slate-400">1. India and Contemporary World - I (History) (NCERT)<br></br>
                                            2. Contemporary India - I Geography (NCERT)<br></br>
                                            3. Economics (NCERT)<br></br>
                                            4. Democratic Politics - I (NCERT)<br></br>
                                            5. Together towards a safer India Part - II
                                            (Disaster Management - CBSE)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">5</th>
                                        <td className="px-4 py-2 border border-slate-400">Punjabi</td>
                                        <td className="px-4 py-2 border border-slate-400">1. Sahitik Kirna Part - I (CBSE)<br></br>
                                            2. Sahitik Rang Part - I (CBSE)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">7</th>
                                        <td className="px-4 py-2 border border-slate-400">Hindi  </td>
                                        <td className="px-4 py-2 border border-slate-400">1. Sparsh-l(NCERT)<br></br>
                                            2. Sanchayan-I(NCERT)</td>
                                    </tr>
                                </tbody>
                            </table></div>

                        {/* Table 13************************************************************************************************* */}
                        <h2 className="text-center font-bold my-5" colSpan={"4"} style={{ color: 'var(--orange)', fontSize: "20px" }} >className - X</h2>
                        <div className="overflow-x-auto  mb-5">
                            <table className="table border-collapse  min-w-full bg-white w-full text-left  ">
                                <thead >
                                    <tr className="bg-blue text-white">
                                        <th scope="col" className="px-4 py-2 border border-slate-400   w-1/5">S.NO.</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400  w-2/5">SUBJECT</th>
                                        <th scope="col" className="px-4 py-2 border border-slate-400  w-2/5">PRESCRIBED BOOKS</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400 " >1</th>
                                        <td className="px-4 py-2 border border-slate-400 ">English</td>
                                        <td className="px-4 py-2 border border-slate-400  ">1. First Flight (CBSE)<br></br>
                                        2. Footprint without Feet Supplementary
                                        </td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400"></th>
                                        <td className="px-4 py-2 border border-slate-400"></td>
                                        <td className="px-4 py-2 border border-slate-400">
                                            2. Footprint without Feet Supplementary</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">2</th>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics</td>
                                        <td className="px-4 py-2 border border-slate-400">Mathematics for className X (NCERT)</td>
                                    </tr>

                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">3</th>
                                        <td className="px-4 py-2 border border-slate-400">Science</td>
                                        <td className="px-4 py-2 border border-slate-400">Science Text Book for className-X (NCERT)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">4</th>
                                        <td className="px-4 py-2 border border-slate-400">Social Science</td>
                                        <td className="px-4 py-2 border border-slate-400">1. India and Contemporary World - 2 (History) (NCERT)<br></br>
                                            2. Contemporary India - 2 Geography (NCERT)<br></br>
                                            3. Understanding Economics Development (NCERT)<br></br>
                                            4. Democratic Politics - 2 (NCERT)<br></br>
                                            5. Together towards a safer India Part - III
                                            (Disaster Management - CBSE)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">5</th>
                                        <td className="px-4 py-2 border border-slate-400">Drawing </td>
                                        <td className="px-4 py-2 border border-slate-400">1. Sahitik Kirna Part - II (CBSE)<br></br>
                                            2. Sahitik Rang Part - II (CBSE)</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">7</th>
                                        <td className="px-4 py-2 border border-slate-400">Dy D. E.O.  </td>
                                        <td className="px-4 py-2 border border-slate-400">Chandigarh Administration</td>
                                    </tr>
                                    <tr className=" transition duration-400 hover:bg-gray-100">
                                        <th scope="row" className="px-4 py-2 border border-slate-400">8</th>
                                        <td className="px-4 py-2 border border-slate-400">Hindi </td>
                                        <td className="px-4 py-2 border border-slate-400">1. Sparsh-lI(NCERT)<br></br>
                                            3. Sanchayan-II(NCERT)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}