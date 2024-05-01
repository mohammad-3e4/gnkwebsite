import React, { useState } from 'react';
import axios from 'axios';
import AdminPageLayout from './AdminPageLayout';
import { baseUrl } from '../../baseUrl';
import { SuccessCard } from '../SuccessCard';
import { ErrorCard } from '../Errorcard';
import { Link } from 'react-router-dom';
export default function UploadActivity() {
    const [file, setFile] = useState(null);
    const [activity, setActivity] = useState('');
    const [message, setMessage] = useState()
    const [error, setError] = useState()
    
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleActivityChange = (event) => {
        setActivity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('docType',"activity" ); 
        formData.append('file', file);
        formData.append('activity', activity);

        try {
            const response = await axios.post(`${baseUrl}/api/v2/media/uploadactivity`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status==200) {
                console.log(response)
                setMessage('image insert successfully!');
                formData.file=null
        
              } else {
                setError('Failed to insert image.');
              }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex items-center'>
            <AdminPageLayout />
            <div className="App w-full flex justify-center items-center h-[500px]">
                <div className='shadow-lg sm:w-4/6 md:w-1/2 lg:w-1/2 shadow-md rounded px-8 pt-6 pb-8'>
                <div className='lg:flex justify-around'>
                <h2 className="text-3xl my-5 text-center text-blue font-bold tracking-tight sm:text-4xl">
                    <span className='text-orange'>Add </span>Image 
                </h2>
                <Link to="/adminactivity">
                    <div className="inline-block mt-7 align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "a>
                    All Activity Images
                </div>
                </Link>
                </div>
                <form onSubmit={(e)=>handleSubmit(e)}>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="fileInput">Choose File:</label><br />
                            <input
                                className="block w-full text-sm text-gray-900 mb-5 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                type="file" id="fileInput" onChange={handleFileChange}
                            />
                        </div>
                    
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
                                <option value="labfac">Lab & Faculties</option>
                        

                               
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <button className="bg-orange w-full hover:bg-white hover:text-orange border border-orange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Upload</button>
                    </form>
                </div>
            </div>
            {message && <SuccessCard message={message} isClose={()=>setMessage(null)}/>}
      {error && <ErrorCard message={error} isClose={()=>setError(null)}/>}
        </div>

    );
}
