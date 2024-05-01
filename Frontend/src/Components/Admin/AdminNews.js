import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminPageLayout from "./AdminPageLayout"
import { baseUrl } from '../../baseUrl';
import { Confirmation } from '../Confirmation';
function DeleteNews() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [id, setId] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/v2/media/news`);
            setFiles(response.data.news.reverse());
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Error fetching data. Please try again later.');
            setLoading(false);
        }
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='flex lg:mt-10'>
            <div><AdminPageLayout /></div>
            <div className='overflow-scroll h-[500px] lg:mt-10 '>
                <div>
                <div className='lg:flex justify-around'>
                <h2 className="text-3xl my-5 text-center text-blue font-bold tracking-tight sm:text-4xl">
                    <span className='text-orange'>News</span>
                </h2>
                <Link to="/uploadNews">
                    <div className="inline-block mt-7 align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "a>
                    Add News
                </div>
                </Link>
                <Link to="/addhighlight">
                    <div className="inline-block mt-7 align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "a>
                    Add Highlights
                </div>
                </Link>
                </div>


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
                                        onClick={() =>setId(file.id)}// Pass news ID to handleDelete function
                                    >
                                        Delete <span aria-hidden="true">&rarr;</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
            {id && <Confirmation id={id} docType="news" isClose={()=>setId(null)}/>}

        </div>

    );
}

export default DeleteNews;
