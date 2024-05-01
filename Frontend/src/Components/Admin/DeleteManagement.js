import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminPageLayout from "./AdminPageLayout";
import { Button } from "flowbite-react";
import { getEntriesOfPTA, deleteEntryPTA, getEntriesOfSMC, deleteEntrySMC } from "../../Actions/panel";
import { useDispatch, useSelector } from "react-redux";
import { AlertBox } from "../AlertBox";
import { baseUrl } from "../../baseUrl";
import { clearErrors, clearMessage } from "../../redux/managementSlice";
import { Link } from "react-router-dom";
export default function DeleteManagement() {
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
        // Handle error if needed
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
  

  const handlesmc = async (id) => {
   dispatch(deleteEntrySMC({id, token}))
  };

  const handlepta = async (id) => {
    dispatch(deleteEntryPTA({ id, token }));
  };

  return (
    <div className="flex lg:mt-10 ">
      <AdminPageLayout />
      {message && <AlertBox message={message} />}
  
      <div className="mt-5 mb-5 px-2 lg:mt-10">
        <div className="w-full">
          <h3
            className="text-center  font-bold"
            colSpan={"3"}
            style={{ color: "var(--orange)", fontSize: "20px" }}
          >
            {" "}
            MANAGEMENT COMMITTEE (SMC)
          </h3>
          <Link className="text-white bg-orange p-2" to='/addsmc' >Add Entry</Link>
          <table className="table text-left min-w-full mt-2  w-full">
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
                <th scope="col" className="px-4 py-2 border border-gray-200">
                  Action
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
                  <td className="border border-gray-200 px-4 py-2">
                    <button
                      onClick={() => {
                        handlesmc(item.id);
                      }}
                      className="bg-orange text-white px-2 py-1 rounded-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Table 2************************************************************************************************* */}
        <div className="w-full py-5">
      
          <h2
            className="text-center  font-bold"
            colSpan={"3"}
            style={{ color: "var(--orange)", fontSize: "20px" }}
          >
            PTA (2023-2024)
          </h2>
          <Link className="text-white bg-orange p-2" to='/addpta'>Add Entry</Link>

          <table className="table text-left min-w-full mt-2  w-full ">
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
                <th scope="col" className="px-4 py-2 border border-gray-200">
                  Action
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
                  <td className="border border-gray-200 px-4 py-2 ">
                    <button
                      onClick={() => {
                        handlepta(item.id);
                      }}
                      className="bg-orange text-white px-2 py-1 rounded-sm"
                    >
                      Delete
                    </button>
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
