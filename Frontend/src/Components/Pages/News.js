import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
function News() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v2/media/news`);
      setFiles(response.data.news.reverse());
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overflow-scroll h-[500px] lg:mt-20">
      <div>
        <h2
          style={{ marginBottom: "40px" }}
          className="text-3xl my-4 text-center font-bold tracking-tight text-orange sm:text-4xl"
        >
          NEWS{" "}
        </h2>

        <div className="w-full  flex justify-center items-center h-full ">
          <ul className="max-w-1/2 max-w-full sm:max-w-full	 md:max-w-full lg:max-w-7xl ">
            {files.map((file, index) => (
              <li
                className=" transition duration-400 flex justify-between mb-4  w-full  items-center  gap-x-4 gap-y-2 px-4 py-2 rounded hover:shadow-md"
                key={index}
              >
                <p className="text-sm leading-6 text-gray-900">
                  <strong
                    style={{ color: "var(--blue)" }}
                    className="font-semibold"
                  >
                    {file.date} -{" "}
                  </strong>

                  {file.description}
                </p>

                <a
                  className=" bg-orange flex-none  rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                  href={`/uploads/news/${file.file_name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Now<span aria-hidden="true">&rarr;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default News;
