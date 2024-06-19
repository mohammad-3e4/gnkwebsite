import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { logoutUser } from "../../Actions/user";
import { useDispatch } from "react-redux";
const AdminPageLayout = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleOther = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <div className=" z-100   mt-2 sm:mt-[-16px] md:mt-3 2xl:mt-0 xl:mt-6  ">
      <button
        onClick={toggleSidebar}
        className="inline-flex fixed top-48 z-50 border bg-gray-300  items-center p-2 mt-2 ms-3 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 hover:text-blue focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className={`h-svh  ${isSidebarOpen ? "" : "sm:ml-64"}`}>
        <aside
          id="default-sidebar"
          className={`absolute left-0 w-64 transition-transform ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full sm:translate-x-0"
          }`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-r from-orange to-blue ">
            <ul className="space-y-2 font-medium">
              {/* Your Menu Items */}

              <li>
                <Link
                  to="/"
                  onClick={closeAllDropdowns}
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group"
                >
                  <span className="tracking-widest mx-auto text-2xl font-bold">
                    G.N.K SCHOOL
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/adminpage"
                  onClick={closeAllDropdowns}
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Admin</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/uploadcertificate"
                  onClick={closeAllDropdowns}
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>{" "}
                  </svg>
                  <span className="ms-3">Upload Certificate</span>
                </Link>
              </li>
              <li>
                <Link to="/adminresults" onClick={closeAllDropdowns} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group">
                  <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path> </svg>
                  <span className="ms-3">Result</span>
                </Link>
              </li>
              <li>
                <Link to="/uploadrequitment" onClick={closeAllDropdowns} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group">
                  <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path> </svg>
                  <span className="ms-3">Recuitment</span>
                </Link>
              </li>

              <li className="relative">
                <button
                  onClick={() => toggleOther("formupdate")}
                  className="flex items-center justify-start w-full p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group focus:outline-none"
                >
                  <svg
                    className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                      clip-rule="evenodd"
                    ></path>{" "}
                  </svg>
                  <span className="ms-3">Admission Form</span>
                  <ChevronDownIcon
                    className="h-6 w-6 ms-5 flex-none text-orange"
                    aria-hidden="true"
                  />
                  {/* Your Dropdown Toggle Content */}
                </button>
                {openDropdown === "formupdate" && (
                  <ul className="pl-4">
                    {/* First Dropdown Item */}
                    <li>
                      <Link
                        to="/uploadform"
                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue  dark:hover:bg-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          {/* Your icon */}
                        </svg>
                        <span className="ml-3">Add New Form</span>
                      </Link>
                    </li>
                    {/* Second Dropdown Item */}
                    <li>
                      <Link
                        to="/admisson/forms"
                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          {/* Your icon */}
                        </svg>
                        <span className="ml-3">Delete Form</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/adminfees"
                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          {/* Your icon */}
                        </svg>
                        <span className="ml-3">Fees Structure</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <button
                  onClick={() => toggleOther("management")}
                  className="flex items-center justify-start w-full p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group focus:outline-none"
                >
                  <svg
                    className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                      clip-rule="evenodd"
                    ></path>{" "}
                  </svg>
                  <Link className="ms-3" to="/delete_mangement">
                    Management
                  </Link>{" "}
                </button>
              </li>

              {/* ********************************************************************Faculity****************************************************************** */}

              <li className="relative">
                <button
                  onClick={() => toggleOther("faculty")}
                  className="flex items-center justify-start w-full p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group focus:outline-none"
                >
                  <svg
                    className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                      clip-rule="evenodd"
                    ></path>{" "}
                  </svg>
                  <Link className="ms-3" to="/faculties-info">
                    Faculties
                  </Link>
                </button>
              </li>

              <li>
                <Link
                  to="/uploadcarousel"
                  onClick={closeAllDropdowns}
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>{" "}
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>{" "}
                  </svg>
                  <span className="ms-3">Upload Carousel</span>
                </Link>
              </li>

              {/* Repeat the above structure for all menu items */}
              <li>
                <Link to="/deletenews" onClick={closeAllDropdowns} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                   <span className="ms-3">News & Highlights</span>
                </Link>
              </li>

             

              <li className="relative">
                <button
                  onClick={() => toggleOther('images&video')}
                  className="flex items-center justify-start w-full p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group focus:outline-none"
                >
                  <svg className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="ml-3 flex items-center">Images & Video <ChevronDownIcon className="h-6 w-6 ms-5 flex-none text-orange" aria-hidden="true" /></span>
                  {/* Your Dropdown Toggle Content */}
                </button>
                {openDropdown === 'images&video' && (
                  <ul className="pl-4">
                    {/* First Dropdown Item */}
                
                    {/* Second Dropdown Item */}
                    <li>
                      <Link to="/deleteimage" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700">
                        <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                          {/* Your icon */}
                        </svg>
                        <span className="ml-3">Gallery</span>
                      </Link>
                    </li>
                    {/* Second Dropdown Item */}
                    <li>
                      <Link to="/adminactivity" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700">
                        <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                          {/* Your icon */}
                        </svg>
                        <span className="ml-3">Activity</span>
                      </Link>
                    </li>
              
                    
                    <li>
                      <Link to="/adminvideo" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700">
                        <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                          {/* Your icon */}
                        </svg>
                        <span className="ml-3">Videos </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>



              <li>
                <button
                  onClick={() => dispatch(logoutUser())}
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AdminPageLayout;
