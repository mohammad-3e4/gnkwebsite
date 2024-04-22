import React, { useState } from 'react';
import axios from 'axios';
import AdminPageLayout from './AdminPageLayout';
import { baseUrl } from '../../baseUrl';
export default function Addpta() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');


  

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    
    formData.append('name', name);
    formData.append('designation', designation);


    try {
      const response = await axios.post(`${baseUrl}/api/addpta`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("ok");
    } catch (error) {
      console.error(error);
    }
  };
    return (
        <div className='flex items-center'>
            <AdminPageLayout />
            <div className="App w-full flex justify-center items-center h-[500px]">
                <div className='shadow-lg   sm:w-4/6	 md:w-1/2 lg:w-1/2 shadow-md rounded px-8 pt-6  pb-8'>
                    <h1 className='text-center m-5 text-xl text-orange font-bold'>Add PTA (2023-2024) </h1>
                    <form onSubmit={handleSubmit}>
                        
                        <div>
                            <label className="block text-gray-700 text-sm font-bold  " htmlFor="nameInput">Name</label><br></br>
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"

                                type="text" id="nameInput" value={name} onChange={handleNameChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold  " htmlFor="designationInput">Designation</label><br></br>
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"

                                type="text" id="designationInput" value={designation} onChange={handleDesignationChange} />
                        </div>
                        <button className="bg-orange w-full hover:bg-white hover:text-orange border border-orange   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Upload</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
