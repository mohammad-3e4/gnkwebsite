import React, { useEffect, useState } from "react";
import axios from "axios";
import { getDocuments, deleteByIdDocuments } from "../../../Actions/documents";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, clearMessage } from "../../../redux/documentsSlice";
export default function Fee() {


  const dispatch = useDispatch();
  const { loading, error, message, documents } = useSelector(
    (state) => state.documents
  );
  const { user } = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(getDocuments({ docType: "fee_structure", token }));
    if (error) {
      const errorInterval = setInterval(() => {
        dispatch(clearErrors());
      }, 3000);
      return () => clearInterval(errorInterval);
    }
    if (message) {
      const messageInterval = setInterval(() => {
        dispatch(clearMessage());
      }, 3000);
      return () => clearInterval(messageInterval);
    }
  }, [dispatch, message, error]);
  return (
    
    <div className="flex justify-center lg:mt-20">
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
                <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4" >className</th>
                <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4">ADMISSION TIME</th>
                <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4">FEES</th>
              </tr>
            </thead>
            <tbody>
              {documents?.map((item, index) => (
                <tr key={index} className="transition duration-400 hover:bg-gray-100">
                  <th scope="row" className="border border-slate-400 px-4 py-2">{index + 1}</th>
                  <td className="px-4 py-2 border border-slate-400">{item.class_name}</td>
                  <td className="px-4 py-2 border border-slate-400">
                    {item.time}
                  </td>
                  <td className="px-4 py-2 border border-slate-400">
                    {item.fees}
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
