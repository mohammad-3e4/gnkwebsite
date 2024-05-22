import React, { useEffect, useState } from "react";
import AdminPageLayout from "./AdminPageLayout";

import {
  listOffaculties,
  getSalaries,
  deleteFacultyEntry,
  deleteFacultySalary,
} from "../../Actions/panel";
import { clearErrors, clearMessage } from "../../redux/facultiesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AlertBox } from "../AlertBox";

export default function Faculties() {
  const [salaries, setSalaries] = useState([]);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editFacultyData, setEditFacultyData] = useState({});
  const [isEditingSalary, setIsEditingSalary] = useState(false); // New state to differentiate between salary and joining edit
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
    if (error) {
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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, message, error]);

  const getFacultyByCategory = (category) => {
    return faculties?.filter((faculty) => faculty.category === category);
  };

  const handleDelete = async (id) => {
    dispatch(deleteFacultyEntry({ id, token }));
  };

  const handleDeleteSalary = async (id) => {
    dispatch(deleteFacultySalary({ id, token }));
    const data = await getSalaries(); // Fetch updated salary data after deletion
    setSalaries(data.salaries);
  };

  const handleEdit = (faculty, isSalary = false) => {
    setEditFacultyData(faculty);
    setIsEditingSalary(isSalary);
    setIsEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
    setEditFacultyData({});
  };

  const handleSave = () => {
    // Implement the logic to save the edited data
    // Example: dispatch(updateFacultyEntry({ ...editFacultyData, token }));
    closeEditPopup();
  };

  const renderTable = (category) => {
    const facultyByCategory = getFacultyByCategory(category);

    return (
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
              </tr>
            </thead>
            <tbody>
              {facultyByCategory?.map((faculty) => (
                <tr className="hover:bg-gray-100" key={faculty.id}>
                  <td className="border px-4 py-2">{faculty.name}</td>
                  <td className="border px-4 py-2">{faculty.designation}</td>
                  <td className="border px-4 py-2">{faculty.qualification}</td>
                  <td className="border px-4 py-2">{faculty.date_of_birth}</td>
                  <td className="border px-4 py-2">
                    {faculty.date_of_appointment}
                  </td>
                  <td className="border px-4 py-2">
                    {faculty.date_of_retirement}
                  </td>
                  <th scope="col" className="px-1  flex gap-1 py-2">
                    <button
                      onClick={() => handleDelete(faculty.id)}
                      className="py-1 px-3 bg-orange text-white"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(faculty, false)}
                      className="py-1 px-3 bg-blue text-white"
                    >
                      Edit
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const getFacultyByCategory1 = (category) => {
    return salaries?.filter((faculty) => faculty.category === category);
  };

  const renderTable1 = (category) => {
    const facultyByCategory1 = getFacultyByCategory1(category);

    return (
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
              </tr>
            </thead>
            <tbody>
              {facultyByCategory1?.map((faculty) => (
                <tr className="hover:bg-gray-100" key={faculty.id}>
                  <td className="border px-4 py-2">{faculty.name}</td>
                  <td className="border px-4 py-2">{faculty.designation}</td>
                  <td className="border px-4 py-2">{faculty.qualification}</td>
                  <td className="border px-4 py-2">{faculty.experience}</td>
                  <td className="border px-4 py-2">{faculty.pay_scale}</td>
                  <th scope="col" className="px-1 py-2 flex gap-1">
                    <button
                      onClick={() => handleDeleteSalary(faculty.id)}
                      className="py-1 px-3 bg-orange text-white"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(faculty, true)}
                      className="py-1 px-3 bg-blue text-white"
                    >
                      Edit
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="flex lg:mt-10">
      <AdminPageLayout />
      {message && <AlertBox message={message} />}
      <div className="w-full flex justify-center lg:mt-5">
        <div style={{ width: "90%" }} className="m-5 p-2 ">
          <div className="container mx-auto">
            <h1 className="text-center text-orange text-2xl font-bold mb-4">
              Staff Salary Details
            </h1>
            <Link
              to="/facultyjoining"
              className="bg-blue text-white p-2 font-semibold"
            >
              Add faculty
            </Link>
            <Link
              to="/facultysalary"
              className="bg-orange text-white p-2 font-semibold"
            >
              Add Salary
            </Link>
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

      {isEditPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">
              {isEditingSalary ? "Edit Salary Details" : "Edit Faculty Details"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2"
                  value={editFacultyData.name}
                  onChange={(e) =>
                    setEditFacultyData({
                      ...editFacultyData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
           
              <div className="mb-4">
                <label className="block text-gray-700">Designation</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2"
                  value={editFacultyData.designation}
                  onChange={(e) =>
                    setEditFacultyData({
                      ...editFacultyData,
                      designation: e.target.value,
                    })
                  }
                />
              </div>
        
              <div className="mb-4">
                <label className="block text-gray-700">Qualification</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2"
                  value={editFacultyData.qualification}
                  onChange={(e) =>
                    setEditFacultyData({
                      ...editFacultyData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Qualification</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2"
                  value={editFacultyData.qualification}
                  onChange={(e) =>
                    setEditFacultyData({
                      ...editFacultyData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">category</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2"
                  value={editFacultyData.category}
                  onChange={(e) =>
                    setEditFacultyData({
                      ...editFacultyData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              {/* Add more input fields as needed */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeEditPopup}
                  className="py-2 px-4 bg-gray-500 text-white rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="py-2 px-4 bg-green-300 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
