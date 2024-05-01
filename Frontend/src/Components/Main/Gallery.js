import React, { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v2/media/gallery`);
      console.log(response);
      setFiles(response.data.images.reverse());
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
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

  // if (loading) {
  //     return <div>Loading...</div>;
  // }

  // if (error) {
  //     return <div>Error: {error}</div>;
  // }

  return (
    <div className="mb-10 lg:mt-20">
      <h2 className="text-3xl my-10 text-center text-orange font-bold tracking-tight sm:text-4xl">
        Gallery
      </h2>

      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-2 w-4/5 md:grid-cols-3 gap-4">
          {files.map((file, index) => (
            <div className="rounded-lg bg-orange" key={index}>
              <img
                onClick={() => {
                  setOpenModal(true);
                  setSelectedImage(file.file_name);
                  setCurrentIndex(index);
                }}
                className="h-full aspect-square w-full duration-200 rounded-lg hover:skew-y-3"
                src={`/uploads/images/${file.file_name}`}
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
              className="w-full  rounded-lg"
              src={`/uploads/images/${selectedImage}`}
              alt={selectedImage}
            />
          )}

          {/* Backward Button */}
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
    </div>
  );
}

export default Gallery;
