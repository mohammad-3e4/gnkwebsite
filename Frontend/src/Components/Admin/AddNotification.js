import React, { useState } from 'react';
import { baseUrl } from '../../baseUrl';
export default function AddNotification() {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseUrl}/addnotification`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form data sent successfully!');
            } else {
                console.error('Failed to send form data.');
            }
        } catch (error) {
            console.error('Error sending form data:', error);
        }
    };

    //   const handleGetLink = () => {
    //     const title = document.getElementById('title').value;
    //     const content = document.getElementById('content').value;



    //   };

    return (
        <>
            <div className="w-full flex justify-center items-center h-[500px]  ">
                <form className="bg-white shadow-lg   sm:w-4/6	 md:w-1/2 lg:w-1/2 shadow-md rounded px-8 pt-6  pb-8 mb-4" onSubmit={handleSubmit}>
                    <div>

                        <h2 className='text-center m-5 text-xl text-orange font-bold'>Add Notification</h2>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Enter Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            name="title"
                            placeholder="Enter Title"
                            value={formData.title}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Content
                        </label>
                        <input
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="content"
                            placeholder="Enter Content"
                            value={formData.content}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-orange hover:bg-white hover:text-orange border border-orange   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Upload
                        </button>
                        {/* <a className="inline-block align-baseline border  border-orange py-2 px-8 rounded font-bold text-sm text-orange hover:bg-orange hover:text-white" id="link" href="#" onClick={handleGetLink}>
              Play
            </a> */}
                    </div>
                </form>
            </div>
        </>
    );
}

