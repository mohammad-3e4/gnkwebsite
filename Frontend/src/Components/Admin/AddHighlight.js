import React, { useState } from "react";
import axios from "axios";
import AdminPageLayout from "./AdminPageLayout";
import { baseUrl } from "../../baseUrl";
import { SuccessCard } from "../SuccessCard";
import { ErrorCard } from "../Errorcard";
import { Link } from "react-router-dom";

export default function Addhighlight() {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${baseUrl}/api/v2/media/addhighlight`,
        {
          content: content,
        }
      );
      if (response.status == 200) {
        setMessage("News insert successfully!");
        setContent("");
      } else {
        setError("Failed to insert news.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <AdminPageLayout />
      <div className="flex   min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="./images/school_logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add Latest Notice
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="lg:flex justify-around">
                <h2 className="text-3xl my-5 text-center text-blue font-bold tracking-tight sm:text-4xl">
                  <span className="text-orange">News</span>
                </h2>
                <Link to="/deletenews">
                  <div
                    className="inline-block mt-7 align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "
                    a
                  >
                    All News
                  </div>
                </Link>
              </div>
              <div className="mt-2">
                <input
                  id="content"
                  name="text"
                  type="text"
                  value={content}
                  onChange={handleContentChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={(event) => {
                  handleSubmit(event);
                }}
                className="flex w-full justify-center rounded-md bg-orange duration-300  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue "
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
      {message && (
        <SuccessCard message={message} isClose={() => setMessage(null)} />
      )}
      {error && <ErrorCard message={error} isClose={() => setError(null)} />}
    </div>
  );
}
