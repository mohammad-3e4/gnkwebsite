import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminPageLayout from "./AdminPageLayout";
import { getDocuments, updateDocuments } from "../../Actions/documents";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, clearMessage } from "../../redux/documentsSlice";
export default function AdminFee() {
    const { user } = useSelector((state) => state.user);
    const token = localStorage.getItem("token");
    const [editId, setEditId] = useState(null);
    const [id, setId] = useState();
    const [editData, setEditData] = useState({ class_name: "",
    time: "",
    fees: ""
  });


  const dispatch = useDispatch();
  const { loading, error, message, documents } = useSelector(
    (state) => state.documents
  );

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
  

  const handleEditClick = (item) => {
    setEditId(item.fee_id);
    setEditData({
      class_name: item.class_name,
      time: item.time,
      fees: item.fees
    });
  };

  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveClick = () => {
    dispatch(updateDocuments({ id: editId, ...editData, token }));
    setEditId(null);
  };


  return (
    <div className="flex lg:mt-10">
      <div>
        <AdminPageLayout />
      </div>
      <div className="flex justify-center lg:mt-5">
        <div className=" mb-5  p-3 " style={{ width: "100%" }}>
          <h2
            style={{ textAlign: "center", marginBottom: "40px", color: "var(--blue)" }}
            className="text-3xl font-bold tracking-tight  sm:text-4xl"
          >
            FEE <span className="text-orange"> STRUCTURE</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="max-w-full text-left ">
              <thead>
                <tr className="bg-blue text-white">
                  <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4">S.No.</th>
                  <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4">Class Name</th>
                  <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4">Admission Time</th>
                  <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4">Fees</th>
                  <th scope="col" className="border border-slate-400 px-4 py-2 w-1/4">Edit</th>
                </tr>
              </thead>
              <tbody>
                {documents?.map((item, index) => (
                  <tr key={index} className="transition duration-400 hover:bg-gray-100">
                    <th scope="row" className="border border-slate-400 px-4 py-2">{index + 1}</th>
                    <td className="px-4 py-2 border border-slate-400">
                      {editId === item.fee_id ? (
                        <input
                          type="text"
                          name="class_name"
                          value={editData.class_name}
                          onChange={handleEditChange}
                        />
                      ) : (
                        item.class_name
                      )}
                    </td>
                    <td className="px-4 py-2 border border-slate-400">
                      {editId === item.fee_id ? (
                        <input
                          type="text"
                          name="time"
                          value={editData.time}
                          onChange={handleEditChange}
                        />
                      ) : (
                        item.time
                      )}
                    </td>
                    <td className="px-4 py-2 border border-slate-400">
                      {editId === item.fee_id ? (
                        <input
                          type="text"
                          name="fees"
                          value={editData.fees}
                          onChange={handleEditChange}
                        />
                      ) : (
                        item.fees
                      )}
                    </td>
                    <td className="px-4 py-2 border border-slate-400">
                      {editId === item.fee_id ? (
                        <button
                        className=" bg-orange flex-none  rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                         onClick={handleSaveClick}>Save</button>
                      ) : (
                        <button
                        type="button"
                        className=" bg-orange flex-none  rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                       onClick={() => handleEditClick(item)}>Edit</button>
                      )}
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}