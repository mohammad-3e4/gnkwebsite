import React, { useState, useEffect } from "react";
import AdminPageLayout from "./AdminPageLayout";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import ErrorAlert from "../ErrorAlert";
import SuccessAlert from "../SuccessAlert";
import Spinner from "../Spinner";
import * as Yup from "yup";
import { clearErrors, clearMessage } from "../../redux/facultiesSlice";
import { facultiesJoining } from "../../Actions/panel";

export default function FacultyJoining() {
  const { loading, error, message } = useSelector((state) => state.faculties);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    designation: "",
    qualification: "",
    date_of_birth: "",
    date_of_appointment: "",
    date_of_appointment: "",
    category: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    designation: Yup.string().required("Designation is required"),
    qualification: Yup.string().required("Qualification is required"),
    date_of_birth: Yup.string().required("Date of Birth is required"),
    date_of_appointment: Yup.string().required(
      "Date of Appointment is required"
    ),
    category: Yup.string().required("Category is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      dispatch(facultiesJoining({ values, token }));
    },
  });
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        formik.resetForm()
        dispatch(clearMessage());
      }, 2000);

      return () => clearTimeout(timeout);
    }
    if ( error) {
      const timeout = setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [message, dispatch, error, formik]);

  return (
    <div className="flex">
      <div>
        <AdminPageLayout />
      </div>

      <div className="w-full flex justify-center items-center flex-col ">
        <h2 className="text-center m-5 text-xl text-orange font-bold">
          Joining Details
        </h2>
        {error && <ErrorAlert error={error} />}
        {message && <SuccessAlert message={message} />}
        <form
          className="bg-white sm:w-4/6 md:w-1/2 lg:w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={formik.handleSubmit}
        >
          <div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 tracking-widest text-xs mt-2">
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Designation
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="designation"
                type="text"
                name="designation"
                placeholder="Enter Designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.designation && formik.errors.designation && (
                <p className="text-red-500 tracking-widest text-xs mt-2">
                  {formik.errors.designation}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="qualification"
              >
                Qualification
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="qualification"
                type="text"
                name="qualification"
                placeholder="Enter Qualification"
                value={formik.values.qualification}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.qualification && formik.errors.qualification && (
                <p className="text-red-500 tracking-widest text-xs mt-2">
                  {formik.errors.qualification}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pay"
              >
                Date of Birth
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date_of_birth"
                type="date"
                name="date_of_birth"
                placeholder="Enter Date of Birth"
                value={formik.values.date_of_birth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.date_of_birth && formik.errors.date_of_birth && (
                <p className="text-red-500 tracking-widest text-xs mt-2">
                  {formik.errors.date_of_birth}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pay"
              >
                Date of Appointment
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date_of_appointment"
                type="date"
                name="date_of_appointment"
                placeholder="Enter Date of Appointment "
                value={formik.values.date_of_appointment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.date_of_appointment &&
                formik.errors.date_of_appointment && (
                  <p className="text-red-500 tracking-widest text-xs mt-2">
                    {formik.errors.date_of_appointment}
                  </p>
                )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pay"
              >
                Date of Retirement
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date_of_retirement"
                type="date"
                name="date_of_retirement"
                placeholder="Enter Date of Retirement"
                value={formik.values.date_of_retirement}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.date_of_appointment &&
                formik.errors.date_of_appointment && (
                  <p className="text-red-500 tracking-widest text-xs mt-2">
                    {formik.errors.date_of_appointment}
                  </p>
                )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="scale"
              >
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Category</option>
                <option value="aided_tgt">Aided TGT</option>
                <option value="aided_pti">Aided PTI</option>
                <option value="aided_drawing">Aided Drawing</option>
                <option value="aided_homescience">Aided Home Science</option>
                <option value="aided_workexperience">
                  Aided Work Experience
                </option>
                <option value="aided_primary">
                  Aided Primary School Teacher
                </option>
                <option value="aided_nonteaching">
                  Aided Non Teaching Staff
                </option>

                <option value="unaided_pgt">Unaided PGT</option>
                <option value="unaided_tgt">Unaided TGT</option>
                <option value="unaided_pst/ntt">Unaided PST/NTT</option>
                <option value="unaided_nonteaching">
                  Unaided Non Teaching Staff
                </option>
                <option value="unaided_librarian">Unaided Librarian</option>
              </select>

              {formik.touched.date_of_appointment &&
                formik.errors.date_of_appointment && (
                  <p className="text-red-500 tracking-widest text-xs mt-2">
                    {formik.errors.date_of_appointment}
                  </p>
                )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
             type="submit"
              className={`flex w-full uppercase tracking-widest justify-center rounded ${
                loading ? "bg-[#fdba74]" : "bg-orange"
              } px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ea580c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ea580c]`}
              disabled={loading}
            >
              {loading ? <Spinner /> : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
