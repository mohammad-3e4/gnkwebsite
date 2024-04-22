import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPageLayout from './AdminPageLayout';
import {baseUrl} from '../../baseUrl'
function AdminGallery() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}/images`);
            setFiles(response.data.reverse());
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Error fetching data. Please try again later.');
            setLoading(false);
        }
    };

    const handleDelete = async (img_name) => {
        try {
            await axios.delete(`${baseUrl}/images/${img_name}`);
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

        <div className='flex'>
            <div><AdminPageLayout /></div>
            <div className='mb-10 overflow-scroll h-[500px]'>
                <h2 className="text-3xl my-10 text-center text-orange font-bold tracking-tight  sm:text-4xl"   >Gallery </h2>

                <div className='w-full flex justify-center items-center '>

                    <div className='grid relative grid-cols-2  w-4/5 md:grid-cols-3 gap-4'>
                        {files.map((file, index) => (
                            <div className=' relative w-full rounded-lg bg-orange ' key={index}>
                                <img className="h-full w-full duration-200 rounded-lg hover:skew-y-3 " src={`${baseUrl}/uploads/images/${file.Name}`} alt={`${file.Name} is not available`} />
                                <div style={{ background: "rgba(255,255,255,0.8)" }} className="absolute duration-500 h-full w-full opacity-0 flex justify-center items-center left-0 top-0 rounded-lg hover:opacity-100 " >
                                    <button onClick={() => handleDelete(file.Name)} className="font-bold text-center bg-orange px-4 py-2 rounded-lg text-white text-xs lg:text-2xl sm:text-lg drop-shadow-md">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AdminGallery;

