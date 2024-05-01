import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPageLayout from './AdminPageLayout';
import {baseUrl} from '../../baseUrl'
import { Confirmation } from '../Confirmation';
import { Link } from 'react-router-dom';
function AdminGallery() {
    const [files, setFiles] = useState([]);
    const [fileId, setFileId] = useState();
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
            setError('Error fetching data. Please try again later.');
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseUrl}/api/v1/media/deletegalleryimage/${id}`);
            //  console.log(`${news_id}`);
        }
        catch (err) {
            console.log(err);
        }
    }


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (

        <div className='flex lg:mt-10'>
            <div><AdminPageLayout /></div>
            <div className='mb-10 overflow-scroll h-[500px] lg:mt-10'>
            <div className='lg:flex justify-around'>
                <h2 className="text-3xl my-5 text-center text-blue font-bold tracking-tight sm:text-4xl">
                    <span className='text-orange'>Gallery</span> 
                </h2>
                <Link to="/uploadimage">
                    <div className="inline-block mt-7 align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "a>
                    Upload Gallery Images
                </div>
                </Link>
                </div>
                <div className='w-full flex justify-center items-center '>

                    <div className='grid relative grid-cols-2  w-4/5 md:grid-cols-3 gap-4'>
                        {files.map((file, index) => (
                            <div className=' relative w-full rounded-lg bg-orange ' key={index}>
                                <img className="h-full w-full duration-200 rounded-lg hover:skew-y-3 " src={`/uploads/images/${file.file_name}`} alt={`${file.file_name} is not available`} />
                                <div style={{ background: "rgba(255,255,255,0.8)" }} className="absolute duration-500 h-full w-full opacity-0 flex justify-center items-center left-0 top-0 rounded-lg hover:opacity-100 " >
                                    <button onClick={() =>setFileId(file.id)} className="font-bold text-center bg-orange px-4 py-2 rounded-lg text-white text-xs lg:text-2xl sm:text-lg drop-shadow-md">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {fileId && <Confirmation id={fileId} docType="images" isClose={()=>setFileId(null)}/>}
        </div>

    );
}

export default AdminGallery;

