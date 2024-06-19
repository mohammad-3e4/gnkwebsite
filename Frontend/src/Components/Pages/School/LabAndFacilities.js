import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../../baseUrl";
import { Confirmation } from "../../Confirmation";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'

function LabAndFacilities() {
  const [files, setFiles] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileId, setFileId] = useState();
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const fetchActivity = async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/api/v2/media/firstactivity`);
      setActivity(response.data.firstactivity.filter((item)=>item.activity ==='lab-and-facilties'));
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchData = async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}/api/v2/media/oneactivity/${endpoint}`
      );
      setFiles(response.data.oneactivity);
      setLoading(false);
      setButtonsVisible(false);
    } catch (error) {
      console.error(error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  const showButtons = () => {
    setButtonsVisible(true);
    setFiles([]);
  };

  return (
    <div className="flex lg:mt-10">
      <div className="mb-10  lg:mt-10">
        <div className="lg:flex justify-around">
          <h2 className="text-3xl my-5 text-center text-blue font-bold tracking-tight sm:text-4xl">
            <span className="text-orange">Lab </span>And Facilities
          </h2>
          {token &&          <Link to="/uploadactivity">
            <div
              className="inline-block mt-7 align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "
              a
            >
              Upload activity images
            </div>
          </Link>}
        </div>
        <div className="w-full mb-10 flex  justify-center items-center  ">
          <div className="grid grid-cols-2 w-4/5 md:grid-cols-3 gap-4">
            {activity.map((act, index) => (
              <div
                className=" pb-10 shadow-lg flex justify-center items-center"
                key={index}
                style={{ display: buttonsVisible ? "block" : "none" }}
              >
                <button
                  onClick={() => fetchData(act.activity)}
                  className="w-full h-full"
                >
                  <img
                    className="block max-w-full aspect-square h-full rounded"
                    src={`/uploads/activity/${act.file_name}`}
                    alt=""
                  />

                  <p
                    className="text-center text-xl capitalize tracking-wider drop-shadow-md"
                    style={{ color: "var(--orange)" }}
                  >
                    {act.activity}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>

        {files?.length > 0 && (
          <div className="w-full">
            <div className="flex justify-start ms-[10%] mb-5">
              <button
                onClick={showButtons}
                className=" bg-orange hover:bg-blue duration-300 text-white  font-bold py-2 px-4 rounded"
              >
                Back
              </button>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="grid grid-cols-2 w-4/5 md:grid-cols-3 gap-4">
                {files?.map((file, index) => (
                  <div className=" w-full rounded-lg bg-orange " key={index}>
                    <img
                      className=" aspect-square duration-200 rounded"
                      src={`/uploads/activity/${file.file_name}`}
                      alt={`${file.file_name} is not available`}
                    />
                   {token &&
                    <button
                      onClick={() => setFileId(file.id)}
                      className="font text-center bg-orange px-4 py-2 rounded text-white  drop-shadow-md"
                    >
                      Delete
                    </button>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {fileId && (
        <Confirmation
          id={fileId}
          docType="activity"
          isClose={() => setFileId(null)}
        />
      )}
    </div>
  );
}

export default LabAndFacilities;
