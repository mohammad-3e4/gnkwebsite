
import React, { useEffect, useState } from "react";

import { listOffaculties, getSalaries } from "../../../Actions/panel";
import { useSelector, useDispatch } from "react-redux";
export default function Faculty() {
  const [salaries, setSalaries] = useState([])
  const dispatch = useDispatch();
  const { loading, error, message, faculties } = useSelector(
    (state) => state.faculties
  );
  
  useEffect(() => {
    const fetchData = async () => {
      try {
    
          dispatch(listOffaculties())
          const data = await getSalaries()
          setSalaries(data.salaries)
          
          
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [dispatch]);
  
  // Function to filter faculty data by category
  const getFacultyByCategory = (category) => {
    return faculties?.filter((faculty) => faculty.category === category);
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
    <div className="w-full flex justify-center lg:mt-10">
      <div style={{ width: "90%" }} className="m-5 p-2 ">
        <h2
          style={{ marginBottom: "40px" }}
          className="text-3xl  text-center font-bold my-5 tracking-tight text-gray-900 sm:text-4xl"
        >
          {" "}
          <span style={{ color: "var(--orange)" }}> FACULTY </span>
        </h2>
        <h2 className="text-2xl text-orange w-full border-none m-0">
          Very dedicated and trained highly qualified staff who are keen to
          impart knowledge and skills to their pupils with understanding.
        </h2>
        <br></br>
        <p className="text-xl w-full border-none m-0">
          Creation of excellent students is their aim.
        </p>
        <br></br>
        <br></br>

        <div className="container mx-auto">
          <h1 className="text-center text-orange text-2xl font-bold mb-4">
            Staff Salary Details
          </h1>
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
  );
}
