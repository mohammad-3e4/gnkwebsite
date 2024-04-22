import React, { useState } from 'react';
import axios from 'axios';
import AdminPageLayout from './AdminPageLayout';
import { baseUrl } from '../../baseUrl';
export default function UploadImage() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file); 

        try {
            const response = await axios.post(`${baseUrl}/uploadimage`, formData, {
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
        <AdminPageLayout/>
        <div className="App w-full flex justify-center items-center h-[500px]">
            <div className='shadow-lg   sm:w-4/6	 md:w-1/2 lg:w-1/2 shadow-md rounded px-8 pt-6  pb-8'>
                <h1 className='text-center m-5 text-xl text-orange font-bold'>Upload Image To Gallery </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold " htmlFor="fileInput">Choose File:</label><br></br>
                        <input
                            className="block w-full text-sm text-gray-900 mb-5 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"

                            type="file" id="fileInput" onChange={handleFileChange} />
                    </div>
                    <button className="bg-orange w-full hover:bg-white hover:text-orange border border-orange   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Upload</button>
                </form>
            </div>
        </div>
        </div>
        
    );
} 