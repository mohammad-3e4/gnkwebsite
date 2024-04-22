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
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track button visibility

  const fetchData = async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/${endpoint}`);
      setFiles(response.data);
      setLoading(false);
      setButtonsVisible(false); // Hide buttons after one is clicked
      // If there are files, set the first file as the selected image
      if (response.data.length > 0) {
        setSelectedImage(response.data[0].Name);
      }
    } catch (error) {
      console.error(error);
      // setError('Error fetching data. Please try again later.');
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
    setSelectedImage(files[prevIndex].Name);
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === files.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(files[nextIndex].Name);
    setCurrentIndex(nextIndex);
  };
  const buttons = [
    {
      show: "none",
      activity: "rakhi",
      name: "Rakhi Making Activity - Pre Primary Students",
      imageSrc: "/uploads/activity/914.jpeg",
      alt: "Rakhi Making Activity - Pre Primary Students",
    },
    {
      activity: "ind-pre",
      name: "Independence day Celebration By Pre-Primary",
      imageSrc: "/uploads/activity/905.jpeg",
      alt: "Independence day Celebration By Pre-Primary",
    },
    {
      activity: "chandrayaan",
      name: "Chandrayaan-3 Landing Live Streaming",
      imageSrc: "/uploads/activity/898.jpeg",
      alt: "Chandrayaan-3 Landing Live Streaming",
    },
    {
      activity: "tabacco",
      name: "Say No To Tabacco :- Webinar",
      imageSrc: "/uploads/activity/901.jpeg",
      alt: "Say No To Tabacco :- Webinar",
    },
    {
      activity: "swachhta",
      name: "Swachhta Pakhwada",
      imageSrc: "/uploads/activity/854.JPG",
      alt: "Swachhta Pakhwada",
    },
    {
      activity: "annual",
      name: "Annual Function",
      imageSrc: "/uploads/activity/887.JPG",
      alt: " Annual Function",
    },
    {
      activity: "antidrug",
      name: "Anti Drug Day",
      imageSrc: "/uploads/activity/878.JPG",
      alt: "Anti Drug Day",
    },
    {
      activity: "ardas",
      name: "Ardas Diwas",
      imageSrc: "/uploads/activity/806.JPG",
      alt: " Ardas Diwas",
    },
    {
      activity: "chart",
      name: "Chart Making",
      imageSrc: "/uploads/activity/843.JPG",
      alt: "Chart Making",
    },
  ];

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
          {buttons.map((button, index) => (
            <div
              className=" relative  h-full w-full flex justify-center items-center"
              key={index}
              style={{ display: buttonsVisible ? "block" : "none" }}
            >
              <button
                onClick={() => fetchData(button.activity)}
                className="w-full h-full"
              >
                <img
                  className="block max-w-full h-full rounded-lg"
                  src={button.imageSrc}
                  alt=""
                />
                <div
                  style={{ background: "rgba(255,255,255,0.8)" }}
                  className="absolute duration-500 h-full w-full opacity-0 flex justify-center items-center left-0 top-0 rounded-lg hover:opacity-100 "
                >
                  <h2 className="font-bold text-center text-orange text-xs lg:text-2xl sm:text-lg drop-shadow-md">
                    {button.name}
                  </h2>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {loading && <p>Loading...</p>}
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
                      setSelectedImage(file.Name);
                    }}
                    className="object-cover w-full h-full duration-200 rounded-lg hover:skew-y-3"
                    src={`${baseUrl}/uploads/activity/${file.Name}`}
                    alt={`${file.Name} is not available`}
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
                  src={`${baseUrl}/uploads/activity/${selectedImage}`}
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
                  class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
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
                  class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
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
