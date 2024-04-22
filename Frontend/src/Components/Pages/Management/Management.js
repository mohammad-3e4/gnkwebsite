import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../baseUrl";
export default function Management() {
  const [data, setData] = useState([]);



  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/managingcommitee`);
      setData(response.data);
      console.log(response.data)

    }
    catch (error) {
      console.log(error);
    }
  }
  const [pta, setPta] = useState([]);
  useEffect(() => {
    fetchPta();
  }, []);


  const fetchPta = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/pta`);
      setPta(response.data);
      console.log(response.data)

    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center">
      <div className="mt-5 mb-5 p-3" style={{ width: "90%" }}>
        <div className="w-full">
          <h2
            style={{ marginBottom: "40px", color: "var(--blue)" }}
            className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            ABOUT <span style={{ color: "var(--orange)" }}>MANAGEMENT</span>
          </h2>
        </div>
        {/* Table */}
        <h3
          className="text-center my-5 font-bold"
          colSpan={"3"}
          style={{ color: "var(--orange)", fontSize: "20px" }}
        >
          {" "}
          MANAGEMENT COMMITTEE (SMC)
        </h3>

        <div className="overflow-x-auto">
          <table className="table text-left min-w-full b w-full">
            <thead>
              <tr className="bg-blue text-white">
                <th scope="col" className="px-4 py-2 border border-gray-200">S.NO.</th>
                <th scope="col" className="px-4 py-2 border border-gray-200">NAME</th>
                <th scope="col" className="px-4 py-2 border border-gray-200">ADDRESS</th>
                <th scope="col" className="px-4 py-2 border border-gray-200">DESIGNATION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className=" transition duration-400 hover:bg-gray-100">
                  <th scope="row" className="px-4 py-2 border border-gray-200">
                    {index + 1}
                  </th>
                  <td className="border border-gray-200 px-4 py-2">{item.name} </td>
                  <td className="border border-gray-200 px-4 py-2">{item.address} </td>
                  <td className="border border-gray-200 px-4 py-2">{item.designation} </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        {/* Table 2************************************************************************************************* */}
        <h2
          className="text-center my-5 font-bold"
          colSpan={"3"}
          style={{ color: "var(--orange)", fontSize: "20px" }}
        >
          PTA (2023-2024)
        </h2>
        <div className="overflow-x-auto">
          <table className="table text-left min-w-full  w-full ">
            <thead>
              <tr className="bg-blue text-white">
                <th scope="col" className="px-4 py-2 border border-gray-200">S.NO.
                </th>
                <th scope="col" className="px-4 py-2 border border-gray-200">NAME</th>
                <th scope="col" className="px-4 py-2 border border-gray-200">Designation</th>
              </tr>
            </thead>
            <tbody>

              {pta.map((item, index) => (
                <tr key={index} className=" transition duration-400 hover:bg-gray-100">
                  <th scope="row" className="px-4 py-2 border border-gray-200">
                    {index + 1}
                  </th>
                  <td className="border border-gray-200 px-4 py-2">{item.name} </td>
                  <td className="border border-gray-200 px-4 py-2">{item.designation} </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


