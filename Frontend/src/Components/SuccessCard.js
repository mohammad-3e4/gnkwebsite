import React from "react";
import { deleteByIdDocuments } from "../Actions/documents";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, clearMessage } from "../redux/documentsSlice";
import Spinner from "./Spinner";
export const SuccessCard = ({isClose, message}) => {
  
  return (
    <>
      {message && (
        <div
          id="deleteModal"
          tabindex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed flex items-center bg-[#00000094]  z-50 justify-center  w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
      
            <svg
  className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
  aria-hidden="true"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M5 13l4 4L19 7"
  ></path>
</svg>


             
                <p className="mb-4 text-green-500 dark:text-gray-300">{message}</p>
              
              <div className="flex justify-center items-center space-x-4">
                <button
                  data-modal-toggle="deleteModal"
                  type="button"
                  onClick={isClose}
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  cancel
                </button>
              
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
