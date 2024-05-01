import React, { useEffect, useState } from "react";

import { getEntriesOfPTA, getEntriesOfSMC } from "../../../Actions/panel";
import { useDispatch, useSelector } from "react-redux";

import { clearErrors, clearMessage } from "../../../redux/managementSlice";
export default function Management() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const { loading, error, message, ptaEntries } = useSelector(
    (state) => state.management
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getEntriesOfPTA());
      try {
        const ndata = await getEntriesOfSMC();
        setData(ndata.members);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    if (message) {
      const timeout = setTimeout(() => {
        dispatch(clearMessage());
      }, 2000);

      return () => clearTimeout(timeout);
    }

    if (error) {
      const timeout = setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [message, error, dispatch]);

  return (
    <div className="flex justify-center lg:mt-20">
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
                <th scope="col" className="px-4 py-2 border border-gray-200">
                  S.NO.
                </th>
                <th scope="col" className="px-4 py-2 border border-gray-200">
                  NAME
                </th>
                <th scope="col" className="px-4 py-2 border border-gray-200">
                  ADDRESS
                </th>
                <th scope="col" className="px-4 py-2 border border-gray-200">
                  DESIGNATION
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr
                  key={index}
                  className=" transition duration-400 hover:bg-gray-100"
                >
                  <th scope="row" className="px-4 py-2 border border-gray-200">
                    {index + 1}
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.name}{" "}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.address}{" "}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.designation}{" "}
                  </td>
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
                <th scope="col" className="px-4 py-2 border border-gray-200">
                  S.NO.
                </th>
                <th scope="col" className="px-4 py-2 border border-gray-200">
                  NAME
                </th>
                <th scope="col" className="px-4 py-2 border border-gray-200">
                  Designation
                </th>
              </tr>
            </thead>
            <tbody>
              {ptaEntries?.map((item, index) => (
                <tr
                  key={index}
                  className=" transition duration-400 hover:bg-gray-100"
                >
                  <th scope="row" className="px-4 py-2 border border-gray-200">
                    {index + 1}
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.name}{" "}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {item.designation}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
