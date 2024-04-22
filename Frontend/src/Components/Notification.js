

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
export default function Notification() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/notification`);
            // console.log('Response from backend:', response.data);
            setData(response.data[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleItemClick = async (index) => {
        const clickedItem = data[index];

        // Check if the status is 1, then allow the click event
        if (clickedItem.status === 1) {
            const newData = [...data];
            newData[index].clicked = true;
            newData[index].status = 0; // Update status to 0
            setData(newData);

            try {
                const response = await axios.put(`${baseUrl}/api/notification/${clickedItem.notification_id}`, {
                    status: 0,
                });
                console.log('Status updated:', response.data);
            } catch (error) {
                console.error('Error updating status:', error);
            }
        }

    };



    return (
        <>
            <h2 className="text-3xl my-5 text-center text-blue font-bold tracking-tight sm:text-4xl">
                <span className='text-orange'>Our</span> Notifications
            </h2>

            <div className='flex w-full justify-center items-center'>
                <ul className='m-3 shadow p-5 rounded-lg sm:w-full md:w-full lg:max-w-7xl'>
                    {data.map((item, index) => (
                        <li
                            className={`flex justify-between p-3 border-b items-center ${item.status === 0 ? 'font-normal' : 'font-bold'}`}
                            key={index}
                            onClick={() => handleItemClick(index)}
                        >
                            <div className='mr-3 flex'>
                                <div>
                                    <span className='px-2 py-1 bg-orange text-white rounded-md my-3'>
                                        {index + 1}
                                    </span>
                                </div>
                                <div>
                                    <span className='ml-2 text-orange'>Title:</span> {item.title}
                                    <span className='ml-2 text-orange'>Content:</span> {item.content}
                                    <span className='ml-2 text-orange'>Status:</span> {item.status}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
