import React from "react";

export default function Fee() {
  return (
    <div className="flex justify-center ">
      <div className="mt-5  mb-5  p-3 " style={{ width: "90%" }}>
        <h2
          style={{ textAlign: "center", marginBottom: "40px", color: "var(--blue)" }}
          className="text-3xl font-bold tracking-tight  sm:text-4xl"
        >
          FEE <span className="text-orange"> STRUCTURE</span>
        </h2>
        <h2 c style={{ color: "var(--orange)", fontSize: "20px" }} className="px-4 py-2 font-bold">Fee Structure (2024-2025)</h2>
        <div className="overflow-x-auto">
          <table className="max-w-full text-left ">
            <thead>
              <tr className="bg-blue text-white">
                <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4" >S.No.</th>
                <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4" >CLASS</th>
                <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4">ADMISSION TIME</th>
                <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4">FEES</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" transition duration-400 hover:bg-gray-100" >
                <th scope="row" className="border border-slate-400  px-4 py-2 ">1</th>
                <td className=" px-4 py-2 border border-slate-400">Pre Nursery</td>
                <td className="px-4 py-2 border border-slate-400">
                  (Including April to June Fee)/
                  <span className="text-orange">Quarterly ( 3 Months)</span>
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  8600/-/<span className="text-orange">3600/-</span>
                </td>
              </tr>
              <tr className=" transition duration-400 hover:bg-gray-100" >
                <th scope="row" className="border border-slate-400  px-4 py-2">
                  2
                </th>
                <td className="px-4 py-2 border border-slate-400">Nursery and KG</td>
                <td className="px-4 py-2 border border-slate-400">
                  (Including April to June Fee)/
                  <span className="text-orange">Quarterly ( 3 Months)</span>
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  6100/-/<span className="text-orange">3600/-</span>
                </td>
              </tr>
              <tr className=" transition duration-400 hover:bg-gray-100">
                <th scope="row" className="border border-slate-400  px-4 py-2">
                  3
                </th>
                <td className="px-4 py-2 border border-slate-400">1st to 5th</td>
                <td className="px-4 py-2 border border-slate-400">
                  (Including April to June Fee)/
                  <span className="text-orange">Quarterly ( 3 Months)</span>
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  3290/-/<span className="text-orange">1770/-</span>
                </td>
              </tr>
              <tr className=" transition duration-400 hover:bg-gray-100">
                <th scope="row" className="border border-slate-400  px-4 py-2">
                  4
                </th>
                <td className="px-4 py-2 border border-slate-400">6th to 8th</td>
                <td className="px-4 py-2 border border-slate-400">
                  (Including April to June Fee)/
                  <span className="text-orange">Quarterly ( 3 Months)</span>
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  3780/-/<span className="text-orange">2160/-</span>
                </td>
              </tr>
              <tr className=" transition duration-400 hover:bg-gray-100">
                <th scope="row" className="border border-slate-400  px-4 py-2">
                  5
                </th>
                <td className="px-4 py-2 border border-slate-400">9th to 10th</td>
                <td className="px-4 py-2 border border-slate-400">
                  (Including April to June Fee)/
                  <span className="text-orange">Quarterly ( 3 Months)</span>
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  4210/-/<span className="text-orange">2370/-</span>
                </td>
              </tr>
              <tr className=" transition duration-400 hover:bg-gray-100">
                <th scope="row" className="border border-slate-400  px-4 py-2">
                  6
                </th>
                <td className="px-4 py-2 border border-slate-400">+1 & +2 Arts</td>
                <td className="px-4 py-2 border border-slate-400">
                  (Including April to June Fee)/
                  <span className="text-orange">Quarterly ( 3 Months)</span>
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  14600/- & 12900/-/<span className="text-orange">6900/-</span>
                </td>
              </tr>
              <tr className=" transition duration-400 hover:bg-gray-100">
                <th scope="row" className="border border-slate-400  px-4 py-2">
                  7
                </th>
                <td className="px-4 py-2 border border-slate-400">+1 & +2 Commerce</td>
                <td className="px-4 py-2 border border-slate-400">
                  (Including April to June Fee)/
                  <span className="text-orange">Quarterly ( 3 Months)</span>
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  15500/- & 14000/-/<span className="text-orange">7500/-</span>
                </td>
              </tr>
              <tr className=" transition duration-400 hover:bg-gray-100" >
                <th scope="row" className="border border-slate-400  px-4 py-2">
                  8
                </th>
                <td className="px-4 py-2 border border-slate-400">+1 & +2 Science</td>
                <td className="px-4 py-2 border border-slate-400">
                  (Including April to June Fee)/
                  <span className="text-orange">Quarterly ( 3 Months)</span>
                </td>
                <td className="px-4 py-2 border border-slate-400">
                  16600/- & 15100/-<span className="text-orange">8100/-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
