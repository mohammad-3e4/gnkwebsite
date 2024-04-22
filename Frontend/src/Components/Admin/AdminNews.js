import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPageLayout from "./AdminPageLayout"
import { baseUrl } from '../../baseUrl';

function DeleteNews() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}/files`);
            setFiles(response.data.reverse());
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Error fetching data. Please try again later.');
            setLoading(false);
        }
    };

    const handleDelete = async (news_id) => {
        try{
             await axios.delete(`${baseUrl}/delete/${news_id}`);
             console.log(`${news_id}`);
        }
        catch(err){
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
            <div className='overflow-scroll h-[500px] '>
                <div>
                    <h2 style={{ marginBottom: "40px" }} className="text-3xl my-4 text-center font-bold tracking-tight text-orange sm:text-4xl">NEWS </h2>

                    <div className='w-full  flex justify-center items-center h-full '>

                        <ul className='max-w-1/2 max-w-full sm:max-w-full	 md:max-w-full lg:max-w-7xl '>
                            {files.map((file, index) => (
                                <li className=' transition duration-400 flex justify-between mb-4  w-full  items-center  gap-x-4 gap-y-2 px-4 py-2 rounded hover:shadow-md' key={index}>
                                    <p className="text-sm leading-6 text-gray-900">
                                        <strong style={{ color: "var(--blue)" }} className="font-semibold">{file.date} - </strong>

                                        {file.description}
                                    </p>

                                    

                                    <button
                                        type='button'
                                        className=" bg-orange flex-none  rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                        onClick={() => handleDelete(file.news_id)} // Pass news ID to handleDelete function
                                    >
                                        Delete <span aria-hidden="true">&rarr;</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default DeleteNews;
