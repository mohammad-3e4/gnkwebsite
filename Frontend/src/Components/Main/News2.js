import React from 'react';
import { NewspaperIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { baseUrl } from '../../baseUrl';

export default function News2() {


  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      easing: 'ease-in-out',
      //   once: true
    });
  });

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

  // Display only the first four items
  const firstFourFiles = files.slice(0, 4);
  return (
    <div className="bg-gray-100 py-24 sm:py-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up">
        <div className="mx-auto max-w-2xl lg:text-center " >
          <h2 className="text-base font-semibold leading-7 text-blue " >Don't let yesterday use up too much of today</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-orange  sm:text-4xl" >
            News & Updates
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Education is like a bright light guiding us through the journey of life. It's not just about learning from books, but it's about learning how to think, understand the world, and make good choices
          </p>
        </div>
        <div className="mx-auto bg-green-400 bg-opacity-30 p-5  rounded-2xl   mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl" >
          <dl className="grid   max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {firstFourFiles.map((file, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base font-bold leading-7 " style={{ color: "var(--blue)" }}>
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center text-orange rounded-lg" >
                    <NewspaperIcon className="h-6 w-6 text-orange" aria-hidden="true" />
                  </div>
                  {file.date}
                </dt>
                <dd className="mt-2 text-justify text-base leading-7 ">{file.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

