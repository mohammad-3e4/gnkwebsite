import React, { useState } from 'react';
import AdminPageLayout from './AdminPageLayout';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';
import { SuccessCard } from '../SuccessCard';
import { ErrorCard } from '../Errorcard';
export default function UploadVideo() {
  const [formData, setFormData] = useState({
    
    videolink: '',
    videotitle: ''
  });
  const [message, setMessage] = useState()
  const [error, setError] = useState()



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/api/v2/media/uploadvideo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log(response)
        setMessage('Video insert successfully!');
        formData.videolink=""
        formData.videotitle=""

      } else {
        setError('Failed to insert video.');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  const handleGetLink = () => {
    const link = document.getElementById('video-link').value;
    const playLink = document.getElementById('link');
    playLink.href = link;
  };

  return (
    <div div className='flex items-center'>
       <AdminPageLayout/>
      <div className="w-full flex justify-center items-center h-[500px]  ">
        <form className="bg-white shadow-lg   sm:w-4/6	 md:w-1/2 lg:w-1/2 shadow-md rounded px-8 pt-6  pb-8 mb-4" onSubmit={handleSubmit}>
          <div>

            <h2 className='text-center m-5 text-xl text-orange font-bold'>YouTube Video Uploader</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Paste Video Link Here :-
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="video-link"
              type="text"
              name="videolink"
              placeholder="Video Link"
              value={formData.videolink}
              onChange={handleChange}
            />

          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Video Description :-
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="videotitle"
              placeholder="Video Title"
              value={formData.videotitle}
              onChange={handleChange}
            />

          </div>
          <div className="flex items-center justify-between">
            <button oncClick={()=>{handleSubmit()}} className="bg-orange hover:bg-white hover:text-orange border border-orange   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Upload
            </button>
            <Link to="/adminvideo">
                    <div className="inline-block align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "a>
                    All Videos
                </div>
              </Link>
            <Link className="inline-block align-baseline border  border-orange py-2 px-8 rounded font-bold text-sm text-orange hover:bg-orange hover:text-white" id="link" to="#" onClick={handleGetLink}>
              Play
            </Link>
          </div>
        </form>
      </div>
      {message && <SuccessCard message={message} isClose={()=>setMessage(null)}/>}
      {error && <ErrorCard message={error} isClose={()=>setError(null)}/>}

    </div>
  );
}

