import React, { useState,useEffect } from 'react';
import axios from 'axios';
import AdminPageLayout from './AdminPageLayout';
import { baseUrl } from '../../baseUrl';
import { Confirmation } from '../Confirmation';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'

function AdminActivity() {
    const [files, setFiles] = useState([]);
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fileId, setFileId] = useState();
    const [error, setError] = useState(null);
    const [buttonsVisible, setButtonsVisible] = useState(true); // State to track button visibility

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
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseUrl}/api/v2/media/deletegalleryimage/${id}`);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='flex lg:mt-10'>
            <AdminPageLayout />
            <div className='mb-10 overflow-scroll h-[600px] lg:mt-10'>
            <div className='lg:flex justify-around'>
                <h2 className="text-3xl my-5 text-center text-blue font-bold tracking-tight sm:text-4xl">
                    <span className='text-orange'>Acitity </span>Images 
                </h2>
                <Link to="/uploadactivity">
                    <div className="inline-block mt-7 align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "a>
                    Upload activity images
                </div>
                </Link>
                </div>
                <div className='w-full mb-10 flex  justify-center items-center  '>
                    <div className='grid grid-cols-2 w-4/5 md:grid-cols-3 gap-4'>
                        {activity.map((act, index) => (
                            <div className='relative h-full w-full flex justify-center items-center' key={index} style={{ display: buttonsVisible ? 'block' : 'none' }}>
                                <button onClick={() => fetchData(act.activity)} className='w-full h-full'>
                                    <img className="block max-w-full h-full rounded-lg" src={`/uploads/activity/${act.file_name}`} alt="" />
                                    <div style={{ background: "rgba(255,255,255,0.8)" }} className="absolute duration-500 h-full w-full opacity-0 flex justify-center items-center left-0 top-0 rounded-lg hover:opacity-100 " >
                                        <h2 className="font-bold text-center text-xs lg:text-2xl sm:text-lg drop-shadow-md" style={{ color: "var(--orange)" }}>{act.activity}</h2>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {files?.length > 0 && (

                    <div className='w-full'>
                        <div className="flex justify-start ms-[10%] mb-5">
                            <button onClick={showButtons} className=" bg-orange hover:bg-blue duration-300 text-white  font-bold py-2 px-4 rounded">
                                Back
                            </button>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <div className='grid grid-cols-2 w-4/5 md:grid-cols-3 gap-4'>
                                {files?.map((file, index) => (
                                    <div className=' relative w-full rounded-lg bg-orange ' key={index}>
                                        <img className="h-full w-full duration-200 rounded-lg hover:skew-y-3 " src = {`/uploads/activity/${file.file_name}`} alt = {`${file.file_name} is not available`}  />
                                        <div style={{ background: "rgba(255,255,255,0.8)" }} className="absolute duration-500 h-full w-full opacity-0 flex justify-center items-center left-0 top-0 rounded-lg hover:opacity-100 " >
                                            <button onClick={() =>setFileId(file.id)} className="font-bold text-center bg-orange px-4 py-2 rounded-lg text-white text-xs lg:text-2xl sm:text-lg drop-shadow-md">Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                )}
            </div>
            {fileId && <Confirmation id={fileId} docType="activity" isClose={()=>setFileId(null)}/>}
        </div>

    );

}

export default AdminActivity;

