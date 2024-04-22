import React, { useState } from 'react';
import axios from 'axios';
import AdminPageLayout from './AdminPageLayout';
import { baseUrl } from '../../baseUrl';
export default function UploadResult() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handledateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);
    formData.append('date', date);


    try {
      const response = await axios.post(`${baseUrl}/uploadresult`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
    return (
        <div className='flex items-center'>
            <AdminPageLayout />
            <div className="App w-full flex justify-center items-center h-[500px]">
                <div className='shadow-lg   sm:w-4/6	 md:w-1/2 lg:w-1/2 shadow-md rounded px-8 pt-6  pb-8'>
                    <h1 className='text-center m-5 text-xl text-orange font-bold'>Upload Result </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold " htmlFor="fileInput">Choose File:</label><br></br>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"

                                type="file" id="fileInput" onChange={handleFileChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold  " htmlFor="descriptionInput">Description:</label><br></br>
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"

                                type="text" id="descriptionInput" value={description} onChange={handleDescriptionChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold  " htmlFor="dateInput">Date:</label><br></br>
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"

                                type="date" id="dateInput" value={date} onChange={handledateChange} />
                        </div>
                        <button className="bg-orange w-full hover:bg-white hover:text-orange border border-orange   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Upload</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
