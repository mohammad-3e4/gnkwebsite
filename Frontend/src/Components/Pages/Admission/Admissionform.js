import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminPageLayout from "../../Admin/AdminPageLayout";
import { getDocuments, deleteByIdDocuments } from "../../../Actions/documents";
import { useDispatch, useSelector } from "react-redux";
import { Confirmation } from "../../Confirmation";
import { clearErrors, clearMessage } from "../../../redux/documentsSlice";
export default function Admissionform() {
  const dispatch = useDispatch();
  const { loading, error, message, documents } = useSelector(
    (state) => state.documents
  );
  const { user } = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(getDocuments({ docType: "admissionform", token }));
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
    <div className="flex lg:mt-10">
      <div>{user && <AdminPageLayout />}</div>

      <div className="overflow-scroll w-full h-[80vh]">
        <div className="w-full lg:mt-10 ">
          <h2
            style={{ marginBottom: "40px" }}
            className="text-3xl text-orange mt-5 text-center font-bold tracking-tight  sm:text-4xl"
          >
            Admission <span style={{ color: "var(--blue" }}>Form</span>{" "}
          </h2>

          <div className="w-full  flex justify-center items-center h-full ">
            {/* <ul className=' border max-w-full sm:max-w-full	 md:max-w-full lg:max-w-7xl '> */}

            <ul className="w-[100%] lg:w-[75%]  ">
              {documents?.map((file, index) => (
                <li
                  className=" transition duration-400 flex justify-between mb-4  w-full  items-center  gap-x-4 gap-y-2 px-4 py-2 rounded hover:shadow-md"
                  key={index}
                >
                  <p className="text-md leading-6 text-gray-900">
                    <strong
                      style={{ color: "var(--blue)" }}
                      className="font-semibold"
                    >
                      {file.date} -{" "}
                    </strong>

                    {file.description}
                  </p>
                  {user ? (
                    <button
                      type="button"
                      className=" bg-orange flex-none  rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                      onClick={() => setId(file.id)} // Pass news ID to handleDelete function
                    >
                      Delete <span aria-hidden="true">&rarr;</span>
                    </button>
                  ) :   <a
                  className=" bg-orange flex-none  rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                  href={`/uploads/admissionform/${file.file_name}`} target="_blank" rel="noopener noreferrer">
                  Download Now<span aria-hidden="true">&rarr;</span>
              </a>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {id && <Confirmation id={id} docType='admissionform' isClose={() => setId(null)} />}
    </div>
  );
}
