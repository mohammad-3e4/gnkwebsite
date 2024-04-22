import React, { useState } from 'react';
import axios from 'axios';
import AdminPageLayout from './AdminPageLayout';
import { baseUrl } from '../../baseUrl';
// import { Link } from 'react-router-dom'

function AdminActivity() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [buttonsVisible, setButtonsVisible] = useState(true); // State to track button visibility

    const fetchData = async (endpoint) => {
        setLoading(true);
        try {
            const response = await axios.get(`${baseUrl}/${endpoint}`);
            setFiles(response.data);
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
    const handleDelete = async (img_name) => {
        try {
            await axios.delete(`${baseUrl}/activity/${img_name}`);
            //  console.log(`${news_id}`);
        }
        catch (err) {
            console.log(err);
        }
    }

    const buttons = [
        { show: "none", activity: 'rakhi', name: "Rakhi Making Activity - Pre Primary Students", imageSrc: `${baseUrl}/uploads/activity/914.jpeg`, alt: 'Rakhi Making Activity - Pre Primary Students' },
        { activity: 'ind-pre', name: "Independence day Celebration By Pre-Primary", imageSrc: `${baseUrl}/uploads/activity/905.jpeg`, alt: 'Independence day Celebration By Pre-Primary' },
        { activity: 'chandrayaan', name: "Chandrayaan-3 Landing Live Streaming", imageSrc: `${baseUrl}/uploads/activity/898.jpeg`, alt: 'Chandrayaan-3 Landing Live Streaming' },
        { activity: 'tabacco', name: "Say No To Tabacco :- Webinar", imageSrc: `${baseUrl}/uploads/activity/901.jpeg`, alt: 'Say No To Tabacco :- Webinar' },
        { activity: 'swachhta', name: "Swachhta Pakhwada", imageSrc: `${baseUrl}/uploads/activity/854.JPG`, alt: 'Swachhta Pakhwada' },
        { activity: 'annual', name: "Annual Function", imageSrc: `${baseUrl}/uploads/activity/887.JPG`, alt: ' Annual Function' },
        { activity: 'antidrug', name: "Anti Drug Day", imageSrc: `${baseUrl}/uploads/activity/878.JPG`, alt: 'Anti Drug Day' },
        { activity: 'ardas', name: "Ardas Diwas", imageSrc: `${baseUrl}/uploads/activity/806.JPG`, alt: ' Ardas Diwas' },
        { activity: 'chart', name: "Chart Making", imageSrc: `${baseUrl}/uploads/activity/843.JPG`, alt: 'Chart Making' },
        { activity: 'healthy', name: "Healthy Tiffinn", imageSrc: `${baseUrl}/uploads/activity/847.JPG`, alt: 'Healthy Tiffinn' },
        { activity: 'honour', name: "Honour of Ms.Bakshi", imageSrc: `${baseUrl}/uploads/activity/856.JPG`, alt: 'Honour of Ms.Bakshi' },
        { activity: 'ind-2015', name: "Independence Day 2015", imageSrc: `${baseUrl}/uploads/activity/821.JPG`, alt: 'Independence Day 2015' },
        { activity: 'ind-2016', name: "Independence Day 2016", imageSrc: `${baseUrl}/uploads/activity/869.JPG`, alt: 'Independence Day 2016' },
        { activity: 'inauguration', name: "Inauguration of NSQF", imageSrc: `${baseUrl}/uploads/activity/829.JPG`, alt: 'Inauguration of NSQF' },
        { activity: 'interschool', name: "Interschool Competitions", imageSrc: `${baseUrl}/uploads/activity/814.JPG`, alt: 'Interschool Competitions' },
        { activity: 'nagar', name: "Nagar Kirtan", imageSrc: `${baseUrl}/uploads/activity/871.JPG`, alt: 'Nagar Kirtan' },
        { activity: 'management', name: "New management Committee", imageSrc: `${baseUrl}/uploads/activity/874.JPG`, alt: 'New management Committee' },
        { activity: 'plantation', name: "Plantation in School", imageSrc: `${baseUrl}/uploads/activity/885.JPG`, alt: ' Plantation in School' },
        { activity: 'poster', name: "Poster Making Competitions", imageSrc: `${baseUrl}/uploads/activity/881.JPG`, alt: 'Poster Making Competitions' },
        { activity: 'sports', name: "Sports Day", imageSrc: `${baseUrl}/uploads/activity/836.JP`, alt: ' Sports Day' },
        { activity: 'teej', name: "Teej Celebrations", imageSrc: `${baseUrl}/uploads/activity/850.JP`, alt: ' Teej Celebrations' },
        { activity: 'theatre', name: "Theatre Workshop For Teachers", imageSrc: `${baseUrl}/uploads/activity/861.JPG`, alt: 'Theatre Workshop For Teachers' },
    ];

    return (
        <div className='flex '>
            <AdminPageLayout />
            <div className='mb-10 overflow-scroll h-[600px]'>
                <h2 className="text-3xl my-10 text-center text-blue font-bold tracking-tight sm:text-4xl">Our <span className='text-orange'>Activity</span> </h2>

                <div className='w-full mb-10 flex  justify-center items-center  '>
                    <div className='grid grid-cols-2 w-4/5 md:grid-cols-3 gap-4'>
                        {buttons.map((button, index) => (
                            <div className='relative h-full w-full flex justify-center items-center' key={index} style={{ display: buttonsVisible ? 'block' : 'none' }}>
                                <button onClick={() => fetchData(button.activity)} className='w-full h-full'>
                                    <img className="block max-w-full h-full rounded-lg" src={button.imageSrc} alt="" />
                                    <div style={{ background: "rgba(255,255,255,0.8)" }} className="absolute duration-500 h-full w-full opacity-0 flex justify-center items-center left-0 top-0 rounded-lg hover:opacity-100 " >
                                        <h2 className="font-bold text-center text-xs lg:text-2xl sm:text-lg drop-shadow-md" style={{ color: "var(--orange)" }}>{button.name}</h2>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {files.length > 0 && (

                    <div className='w-full'>
                        <div className="flex justify-start ms-[10%] mb-5">
                            <button onClick={showButtons} className=" bg-orange hover:bg-blue duration-300 text-white  font-bold py-2 px-4 rounded">
                                Back
                            </button>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <div className='grid grid-cols-2 w-4/5 md:grid-cols-3 gap-4'>
                                {files.map((file, index) => (
                                    <div className=' relative w-full rounded-lg bg-orange ' key={index}>
                                        <img className="h-full w-full duration-200 rounded-lg hover:skew-y-3 " src = {`${baseUrl}/uploads/activity/${file.Name}`} alt = {`${file.Name} is not available`}  />
                                        <div style={{ background: "rgba(255,255,255,0.8)" }} className="absolute duration-500 h-full w-full opacity-0 flex justify-center items-center left-0 top-0 rounded-lg hover:opacity-100 " >
                                            <button onClick={() => handleDelete(file.Name)} className="font-bold text-center bg-orange px-4 py-2 rounded-lg text-white text-xs lg:text-2xl sm:text-lg drop-shadow-md">Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>

    );

}

export default AdminActivity;

