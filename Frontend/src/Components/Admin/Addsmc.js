import React, { useState, useEffect } from "react";
import AdminPageLayout from "./AdminPageLayout";

import { useDispatch, useSelector } from "react-redux";
import { createEntrySMC } from "../../Actions/panel";
import { useFormik } from "formik";
import ErrorAlert from "../ErrorAlert";
import SuccessAlert from "../SuccessAlert";
import Spinner from "../Spinner";
import * as Yup from "yup";
import { clearErrors, clearMessage } from "../../redux/managementSlice";
export default function Addpta() {
  const { loading, error, message } = useSelector((state) => state.management);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    address: "",
    designation: "",
  };
  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Name is required"),
    designation: Yup.string().required("Designation is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      dispatch(createEntrySMC({ values, token }));
    },
  });
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        formik.resetForm();
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
  }, [message, dispatch, error, formik]);
  return (
    <div className="flex items-center">
      <AdminPageLayout />
      <div className="App w-full flex justify-center items-center h-[500px]">
        <div className="shadow-lg   sm:w-4/6	 md:w-1/2 lg:w-1/2 shadow-md rounded px-8 pt-6  pb-8">
          <h1 className="text-center m-5 text-xl text-orange font-bold">
            Management Commitee{" "}
          </h1>
          {error && <ErrorAlert error={error} />}
          {message && <SuccessAlert message={message} />}
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold  "
                htmlFor="name"
              >
                Name
              </label>
              <br></br>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold  "
                htmlFor="address"
              >
                Address
              </label>
              <br></br>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold  "
                htmlFor="designation"
              >
                Designation
              </label>
              <br></br>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
              />
            </div>
            <button
              type="submit"
              className={`flex w-full uppercase tracking-widest justify-center rounded ${
                loading ? "bg-[#fdba74]" : "bg-orange"
              } px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ea580c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ea580c]`}
              disabled={loading}
            >
              {loading ? <Spinner /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
