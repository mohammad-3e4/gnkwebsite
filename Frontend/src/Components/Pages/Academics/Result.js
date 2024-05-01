import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../baseUrl";

export default function Result() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);
    const fetchdata = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/v2/documents/result`);
            console.log('Response from backend:', response.data.documents);
            setData(response.data.documents.reverse());
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    };


    return (
        <div  className='overflow-scroll w-full h-[500px] lg:mt-20'>
            <div className="w-full ">
                <h2 style={{ marginBottom: "40px" }} className="text-3xl  my-4 text-center font-bold tracking-tight text-orange sm:text-4xl">Result</h2>

                <div className='w-full  flex justify-center items-center h-full '>

                    
                    <ul className='w-[100%] lg:w-[75%]  '>
                       
                        {data.map((file, index) => (
                            <li className=' transition duration-400 flex justify-between mb-4  w-full  items-center  gap-x-4 gap-y-2 px-4 py-2 rounded hover:shadow-md' key={index}>
                                <p className="text-md leading-6 text-gray-900">
                                    <strong style={{ color: "var(--blue)" }} className="font-semibold">{file.date} - </strong>

                                    {file.description}
                                </p>

                                <a
                                    className=" bg-orange flex-none  rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                    href={`/uploads/result/${file.file_name}`} target="_blank" rel="noopener noreferrer">
                                    Download Now<span aria-hidden="true">&rarr;</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}