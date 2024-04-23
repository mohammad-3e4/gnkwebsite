import React, { useEffect, useState } from "react";
import AdminPageLayout from "./AdminPageLayout";

import {
  listOffaculties,
  getSalaries,
  deleteFacultyEntry,
  deleteFacultySalary,
} from "../../Actions/panel";
import {clearErrors, clearMessage} from '../../redux/facultiesSlice'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AlertBox } from "../AlertBox";
export default function Faculties() {
  const [salaries, setSalaries] = useState([]);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { loading, error, message, faculties } = useSelector(
    (state) => state.faculties
  );

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
   
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
    const fetchData = async () => {
      try {
        dispatch(listOffaculties());
        const data = await getSalaries();
        setSalaries(data.salaries);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, message, error]);

  // Function to filter faculty data by category
  const getFacultyByCategory = (category) => {
    return faculties?.filter((faculty) => faculty.category === category);
  };

  const handledelete = async (id) => {
    dispatch(deleteFacultyEntry({ id, token }));
  };

  // Function to render a table based on faculty data for a specific category
  const renderTable = (category) => {
    const facultyByCategory = getFacultyByCategory(category);

    return (
      <>
        <div className="w-full" key={category}>
          <div className="overflow-x-auto">
            <h2 className="text-xl text-orange font-semibold my-5">
              {category.toUpperCase()}{" "}
            </h2>
            <table className="min-w-full text-left ">
              <thead>
                <tr className="bg-blue text-white">
                  <th scope="col" className="px-4 py-2">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Designation
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Qualification
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Date of Birth
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Date of Appointment
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Date of Retirement
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Action
                  </th>

                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
                {facultyByCategory?.map((faculty) => (
                  <tr className="hover:bg-gray-100" key={faculty.id}>
                    <td className="border px-4 py-2">{faculty.name}</td>
                    <td className="border px-4 py-2">{faculty.designation}</td>
                    <td className="border px-4 py-2">
                      {faculty.qualification}
                    </td>
                    <td className="border px-4 py-2">
                      {faculty.date_of_birth}
                    </td>
                    <td className="border px-4 py-2">
                      {faculty.date_of_appointment}
                    </td>
                    <td className="border px-4 py-2">
                      {faculty.date_of_retirement}
                    </td>
                    <th scope="col" className="px-4 py-2">
                      <button
                        onClick={() => {
                          handledelete(faculty.id);
                        }}
                        className="py-1 px-3 bg-orange text-white"
                      >
                        Delete
                      </button>
                    </th>

                    {/* Add more columns as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  const getFacultyByCategory1 = (category) => {
    return salaries?.filter((faculty) => faculty.category === category);
  };

  const handledelete1 = async (id) => {
    dispatch(deleteFacultySalary({id, token}));
    getSalaries()
  };

  const renderTable1 = (category) => {
    const facultyByCategory1 = getFacultyByCategory1(category);

    return (
      <>
        <div className="w-full" key={category}>
          <div className="overflow-x-auto">
            <h2 className="text-xl text-orange font-semibold my-5">
              {category.toUpperCase()}{" "}
            </h2>
            <table className="min-w-full text-left ">
              <thead>
                <tr className="bg-blue text-white">
                  <th scope="col" className="px-4 py-2">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Designation
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Qualification
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Experience
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Pay Scale
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Action
                  </th>

                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
                {facultyByCategory1?.map((faculty) => (
                  <tr className="hover:bg-gray-100" key={faculty.id}>
                    <td className="border px-4 py-2">{faculty.name}</td>
                    <td className="border px-4 py-2">{faculty.designation}</td>
                    <td className="border px-4 py-2">
                      {faculty.qualification}
                    </td>
                    <td className="border px-4 py-2">{faculty.experience}</td>
                    <td className="border px-4 py-2">{faculty.pay_scale}</td>
                    <th scope="col" className="px-4 py-2">
                      <button
                        onClick={() => {
                          handledelete1(faculty.id);
                        }}
                        className="py-1 px-3 bg-orange text-white"
                      >
                        Delete
                      </button>
                    </th>

                    {/* Add more columns as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="flex">
      <AdminPageLayout />
     {message && <AlertBox message={message}/>}
      <div className="w-full flex justify-center">
        <div style={{ width: "90%" }} className="m-5 p-2 ">
          <div className="container mx-auto">
            <h1 className="text-center text-orange text-2xl font-bold mb-4">
              Staff Salary Details
            </h1>
            <Link
              to="/facultyjoining"
              className="bg-blue text-white  p-2 font-semibold"
            >
              Add faculty
            </Link>
            <Link
              to="/facultysalary"
              className="bg-orange text-white  p-2 font-semibold"
            >
              Add Salary
            </Link>
            {/* Render tables for different categories */}
            {[
              "principal",
              "aided_tgt",
              "unaided_pgt",
              "unaided_tgt",
              "unaided_pst/ntt",
            ].map((category) => (
              <div key={category}>{renderTable1(category)}</div>
            ))}
          </div>

          <div className="container mx-auto">
            <h1 className="text-center text-orange text-2xl font-bold mb-4">
              Staff Joining Details
            </h1>
            {/* Render tables for different categories */}
            {[
              "aided_tgt",
              "aided_pti",
              "aided_drawing",
              "aided_homescience",
              "aided_workexperience",
              "aided_primary",
              "aided_nonteaching",
              "unaided_pgt",
              "unaided_tgt",
              "unaided_pst/ntt",
              "unaided_nonteaching",
              "unaided_librarian",
            ].map((category) => (
              <div key={category}>{renderTable(category)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
