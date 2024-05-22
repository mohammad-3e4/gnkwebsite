import React, { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import { baseUrl } from "../../baseUrl";
// import { Link } from 'react-router-dom'

function HomeActivity() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [activity, setActivity] = useState([]);

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track button visibility

  const fetchActivity = async (endpoint) => {
    setLoading(true);
    try {
        const response = await axios.get(`${baseUrl}/api/v2/media/firstactivity`);
        setActivity(response.data.firstactivity);
    } catch (error) {
        console.error(error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
    }
};

useEffect(()=>{
    fetchActivity()
},[])

const fetchData = async (endpoint) => {
    setLoading(true);
    try {
        const response = await axios.get(`${baseUrl}/api/v2/media/oneactivity/${endpoint}`);
        setFiles(response.data.oneactivity);
        setLoading(false);
        setButtonsVisible(false); // Hide buttons after one is clicked
    } catch (error) {
        console.error(error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
    }
};
  const showButtons = () => {
    setButtonsVisible(true); // Set buttons to visible when "Back" button is clicked
    setFiles([]); // Reset files to empty array when "Back" button is clicked
  };
  useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      easing: "ease-in",
      //   once: true
    });
  });
  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? files.length - 1 : currentIndex - 1;
    setSelectedImage(files[prevIndex].file_name);
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === files.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(files[nextIndex].file_name);
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="mb-10  pt-5">
      <h2 className="text-3xl my-5 text-center text-blue font-bold tracking-tight sm:text-4xl">
        Our <span className="text-orange">Activity</span>{" "}
      </h2>

      <div
        className="w-full mb-10 flex  justify-center items-center "
        data-aos="flip-left"
      >
        <div className="grid grid-cols-2 w-4/5 md:grid-cols-3 gap-4">
          {activity.map((act, index) => (
            <div
              className=" relative  h-full w-full flex justify-center items-center"
              key={index}
              style={{ display: buttonsVisible ? "block" : "none" }}
            >
              <button
                onClick={() => fetchData(act.activity)}
                className="w-full h-full"
              >
                <img
                  className="block aspect-square max-w-full h-full rounded-lg"
                  src={`/uploads/activity/${act.file_name}`}
                  alt=""
                />
                <div
                  style={{ background: "rgba(255,255,255,0.8)" }}
                  className="absolute duration-500 h-full w-full opacity-0 flex justify-center items-center left-0 top-0 rounded-lg hover:opacity-100 "
                >
                  <h2 className="font-bold text-center text-orange text-xs lg:text-2xl sm:text-lg drop-shadow-md">
                    {act.activity}
                  </h2>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>


      {error && <p className="text-red-500">{error}</p>}

      {files.length > 0 && (
        <>
          <div className="flex justify-start ms-[10%] my-5">
            <button
              onClick={showButtons}
              className="bg-orange hover:bg-blue duration-300 text-white  font-bold py-2 px-4 rounded"
            >
              Back
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="grid grid-cols-2 w-4/5 md:grid-cols-3 gap-4">
              {files.map((file, index) => (
                <div
                  className="w-full md:w-full h-28 xs:h-36 sm:h-48 md:h-52 lg:h-60 xl:h-64 rounded-lg bg-orange aspect-w-1 aspect-h-1"
                  key={index}
                >
                  <img
                    onClick={() => {
                      setOpenModal(true);
                      setSelectedImage(file.file_name);
                    }}
                    className=" w-full h-full aspect-square duration-200 rounded-lg hover:skew-y-3"
                    src={`/uploads/activity/${file.file_name}`}
                    alt={`${file.file_name} is not available`}
                  />
                </div>
              ))}
            </div>
          </div>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Image Preview</Modal.Header>
            <Modal.Body>
              {selectedImage && (
                <img
                  className="w-full rounded-lg"
                  src={`/uploads/activity/${selectedImage}`}
                  alt={selectedImage}
                />
              )}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange p-2 rounded-full text-white font-bold"
                onClick={handlePrevious}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>

              {/* Forward Button */}
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange p-2 rounded-full text-white font-bold"
                onClick={handleNext}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </Modal.Body>
            {/* You can add a footer with additional buttons or actions if needed */}
          </Modal>
        </>
      )}
    </div>
  );
}

export default HomeActivity;
