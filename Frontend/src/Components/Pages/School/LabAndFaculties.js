import React, { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import { baseUrl } from "../../../baseUrl";

const LabAndFaculties = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/api/v2/media/oneactivity/labfac`);
      setFiles(response.data.oneactivity);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const showButtons = () => {
    setFiles([]);
  };

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

  useEffect(() => {
    fetchData();
    AOS.init({
      duration: 1000,
      easing: "ease-in",
    });
  }, []);

  return (
    <div>
     <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue text-center my-10">
            From <span style={{ color: "var(--orange)" }}>Lab And Facilities Gallery</span>{" "}
          </h2>
      {files.length > 0 && (
        <>
        
          <div className="w-full flex justify-center items-center my-10">
            <div className="grid grid-cols-2 w-4/5 md:grid-cols-3 gap-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="w-full md:w-full h-28 xs:h-36 sm:h-48 md:h-52 lg:h-60 xl:h-64 rounded-lg bg-orange aspect-w-1 aspect-h-1"
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
                  src={`${baseUrl}/uploads/activity/${selectedImage}`}
                  alt={selectedImage}
                />
              )}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange p-2 rounded-full text-white font-bold"
                onClick={handlePrevious}
              >
                {/* Previous Button */}
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>

              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange p-2 rounded-full text-white font-bold"
                onClick={handleNext}
              >
                {/* Forward Button */}
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </Modal.Body>
          </Modal>
        </>
      )}
    </div>
  );
};

export default LabAndFaculties;
