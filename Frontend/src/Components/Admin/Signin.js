import React, { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../ErrorAlert";
import {  clearErrors } from "../../redux/userSlice";
import {loginUser } from '../../Actions/user'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { useFormik } from "formik";

import * as Yup from "yup";

const Signin = () => {
  const [showPass, setShowPass] = useState(false);
  const { loading, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);

      return () => clearTimeout(timer);
    }

    if (user === null) {
      navigate("/signin");
    } else {
      navigate(`/adminpage`);
    }
  }, [error, dispatch, navigate, user]);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="./images/school_logo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign In to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
      
          <div>
            <div className="flex items-center justify-between ">
              <label
                htmlFor="username"
                className="block text-sm font-sans tracking-widest font-medium leading-6 text-gray-900 "
              >
                Username
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="username"
                required
                className="block w-full tracking-widest font-sans px-3 rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 tracking-widest text-xs mt-2 text-left">
                {formik.errors.username}*
              </p>
            )}
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-sans tracking-widest font-medium leading-6 text-gray-900 "
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-semibold tracking-widest font-sans text-indigo-600 hover:text-indigo-500 "
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={showPass ? "text" : "password"}
                autoComplete="current-password"
                required
                className="block w-full font-sans tracking-widest rounded px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600 cursor-pointer"
              >
                {!showPass ? (
                  <FaRegEye
                    className="h-6 w-6 text-indigo-900"
                    aria-hidden="true"
                  />
                ) : (
                  <FaRegEyeSlash
                    className="h-6 w-6 text-indigo-900"
                    aria-hidden="true"
                  />
                )}
              </span>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 tracking-widest text-xs mt-2 text-left">
                {formik.errors.password}*
              </p>
            )}
          </div>
          {error && <ErrorAlert error={error} />}
          <div>
            <button
              type="submit"
              className={`flex w-full uppercase tracking-widest justify-center rounded ${
                loading ? "bg-[#fdba74]" : "bg-orange"
              } px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ea580c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ea580c]`}
            >
              {loading ? <Spinner /> : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
