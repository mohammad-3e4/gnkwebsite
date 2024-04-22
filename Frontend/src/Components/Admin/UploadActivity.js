import React, { useState } from 'react';
import axios from 'axios';
import AdminPageLayout from './AdminPageLayout';
import { baseUrl } from '../../baseUrl';
export default function UploadActivity() {
    const [file, setFile] = useState(null);
    const [activity, setActivity] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleActivityChange = (event) => {
        setActivity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('activity', activity);

        try {
            const response = await axios.post(`${baseUrl}/uploadactivity`, formData, {
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
                <div className='shadow-lg sm:w-4/6 md:w-1/2 lg:w-1/2 shadow-md rounded px-8 pt-6 pb-8'>
                    <h1 className='text-center m-5 text-xl text-orange font-bold'>Upload Image To Activities</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="fileInput">Choose File:</label><br />
                            <input
                                className="block w-full text-sm text-gray-900 mb-5 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                type="file" id="fileInput" onChange={handleFileChange}
                            />
                        </div>
                        {/* <div>
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="activityInput">Activity:</label><br />
                        <input
                            className="block w-full text-sm text-gray-900 mb-5 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            type="text" id="activityInput" value={activity} onChange={handleActivityChange}
                        />
                    </div> */}
                        <div>
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="activitySelect">Activity:</label><br />
                            <select
                                className="block w-full text-sm text-gray-900 mb-5 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="activitySelect" value={activity} onChange={handleActivityChange}
                            >
                                <option value="">Select an activity</option>
                                <option value="sports">Sports</option>
                                <option value="ardas">Ardas Diwas</option>
                                <option value="interschool">Interschool Competition</option>
                                <option value="ind-2015">Independence Day 2015</option>
                                <option value="inauguration">Inauguration of NSQF</option>
                                <option value="nagar">Nagar Kirtan</option>
                               
                                <option value="chart">Sports</option>
                                <option value="healthy">Healthy Tiffinn</option>
                                <option value="swachhta">Swachhta Pakhwada</option>
                               
                                <option value="plantation">Plantation in School</option>
                                <option value="theatre">Theatre Workshop for Teachers</option>
                                <option value="ind-2016">Independence Day 2016</option>
                               
                                <option value="management">new Management Committee</option>
                                <option value="poster">Poster Making Competition</option>
                                <option value="annual">Annual Function</option>
                               
                                <option value="chandrayaan">Chandrayaan-3 Landing Live Streaming</option>
                                <option value="tabacco">Say No To Tabacco</option>
                                <option value="ind-pre">Option 3</option>
                                <option value="rakhi">Rakhi Making Activity -Pre Perimery students</option>
                               
                                <option value="honour">Honour of Ms.Bakshi</option>
                                <option value="teej">Teej Celebration</option>
                                <option value="anitdrug">Anti Drug Day</option>

                               
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <button className="bg-orange w-full hover:bg-white hover:text-orange border border-orange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Upload</button>
                    </form>
                </div>
            </div>
        </div>

    );
}
