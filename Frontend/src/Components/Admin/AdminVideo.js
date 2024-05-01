import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminPageLayout from "./AdminPageLayout";
import { baseUrl } from "../../baseUrl";
import { Confirmation } from "../Confirmation";
export default function AdminVideo() {
  const [data, setData] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v2/media/videos`);
      setData(response.data.videos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handledelete = async (id) => {
    try {
      window.alert("Are you sure ? Want to delete Videos link? ");
      await axios.delete(`${baseUrl}/api/v2/media/deletevideo/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex lg:mt-10">
      <div>
        <AdminPageLayout />
      </div>

      <div className="w-full lg:mt-10">
        <div className="lg:flex justify-around">
          <h2 className="text-3xl my-5 text-center text-blue font-bold tracking-tight sm:text-4xl">
            <span className="text-orange">Our</span> Videos
          </h2>
          <Link to="/uploadvideo">
            <div
              className="inline-block mt-7 align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "
              a
            >
              Upload Video
            </div>
          </Link>
        </div>

        <div className="flex w-full justify-center items-center">
          <ul className="m-3 shadow p-5 rounded-lg sm:w-full md:w-full lg:max-w-7xl">
            {data.map((item, index) => (
              <li
                className="flex justify-between p-3 border-b items-center"
                key={index}
              >
                <div className="mr-3 flex">
                  <div>
                    <span className="px-2 py-1 bg-orange text-white rounded-md my-3">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold ml-2 text-orange">Video:</span>{" "}
                    {item.videolink}
                    <span className="font-bold ml-2 text-orange">
                      Title:
                    </span>{" "}
                    {item.videotitle}
                  </div>
                </div>
                <div>
                  <a
                    className="inline-block me-3 align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-orange hover:bg-orange hover:text-white"
                    href={item.videolink}
                  >
                    Play
                  </a>
                  <button
                    onClick={() => setId(item.id)}
                    className="inline-block align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "
                    href={item.videolink}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {id && (
        <Confirmation id={id} docType="videos" isClose={() => setId(null)} />
      )}
    </div>
  );
}
