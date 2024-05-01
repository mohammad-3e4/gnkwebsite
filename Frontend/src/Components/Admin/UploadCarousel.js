import React from "react";
import AdminPageLayout from "./AdminPageLayout";
import { uploadCarousel } from "../../Actions/carousel";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import ErrorAlert from "../ErrorAlert";
import SuccessAlert from "../SuccessAlert";
import Spinner from "../Spinner";
import * as Yup from "yup";

export default function UploadCarousel() {
  const { loading, error, message } = useSelector((state) => state.carousels);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const initialValues = {
    file: null,
    slide: "",
  };

  const validationSchema = Yup.object().shape({
    slide: Yup.string().required("Slide number is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      
      const formData = new FormData();
      formData.append("file", values.file);
      formData.append("slide", values.slide);
      dispatch(uploadCarousel({ formData, token }));
    },
  });

  return (
    <div className="flex items-center lg:mt-10 ">
      <AdminPageLayout />
      <div className="w-full flex justify-center items-center">
        <div className="sm:w-4/6 md:w-1/2 lg:w-1/2 rounded">
          <h1 className="text-center my-5 text-xl text-orange font-bold">
            Upload Carousels
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
                htmlFor="slide"
              >
                Slide Number:
              </label>
              <input
                className="shadow appearance-none border my-2 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="slide"
                value={formik.values.slide}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.slide && formik.errors.slide && (
                <p className="text-red-500 tracking-widest text-xs mt-2">
                  {formik.errors.slide}
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
}
