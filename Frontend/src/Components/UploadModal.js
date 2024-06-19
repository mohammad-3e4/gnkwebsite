import React, { useEffect } from "react";
import { uploadDocuments } from "../Actions/documents";

import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import ErrorAlert from "./ErrorAlert";
import SuccessAlert from "./SuccessAlert";
import * as Yup from "yup";
import Spinner from "../Components/Spinner";
import { clearErrors , clearMessage } from "../redux/documentsSlice";
export const UploadModal = ({ isClose,  docType }) => {
  const { loading, error, message } = useSelector((state) => state.documents);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();


  useEffect(()=>{
    if (message) {
      const timeoutId = setTimeout(() => {
        dispatch(clearMessage());
        isClose();
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
    if (error) {
      const timeoutId = setTimeout(() => {
        dispatch(clearErrors());
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  },[error , message, dispatch])
  const initialValues = {
    file: null,
    date: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    date: Yup.string().required("Date is required"),
    description: Yup.string().required("Description is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("file", values.file);
      formData.append("docType", docType);
      formData.append("date", values.date);
      formData.append("description", values.description);
 
      dispatch(uploadDocuments({ formData, token }));
    },
  });

  return (
    <div
      id="deleteModal"
      tabindex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed flex items-center bg-[#00000094]  z-50 justify-center  w-full md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <button
          onClick={isClose}
            type="button"
            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="deleteModal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only cursor-pointer" >
              Close modal
            </span>
          </button>
       
          <h1 className="text-center my-5 text-xl text-orange font-bold">
            Upload {docType}
          </h1>
          {error && <ErrorAlert error={error} />}
          {message && <SuccessAlert message={message} />}
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="file"
              >
                Choose File:
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="appearance-none border-black my-2 rounded w-full px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  formik.setFieldValue("file", event.currentTarget.files[0]);
                }}
                accept=".jpg,.jpeg,.png,.pdf"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="description"
              >
                Description:
              </label>
              <input
                className="shadow appearance-none border my-2 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-500 tracking-widest text-xs mt-2">
                  {formik.errors.description}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="date"
              >
                Date:
              </label>
              <input
                className="shadow appearance-none border my-2 rounded w-full px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.date && formik.errors.date && (
                <p className="text-red-500 tracking-widest text-xs mt-2">
                  {formik.errors.date}
                </p>
              )}
            </div>
            <button
              className={`flex w-full uppercase tracking-widest justify-center rounded ${
                loading ? "bg-[#fdba74]" : "bg-orange"
              } px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ea580c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ea580c]`}
              disabled={loading}
            >
              {loading ? <Spinner /> : "Upload"}
            </button>
     
          </form>
        </div>
      </div>
    </div>
  );
};
