import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../baseUrl';
export default function Highlight() {

    const [highlight, setHighlight] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await axios.get(`${baseUrl}/api/v2/media/highlights`);
          setHighlight(response.data[0].reverse());
          console.log(response.data[0].reverse());
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
        return <div></div>;
      }
      const firstFile = highlight[0];
    
    return (
        <div className="relative mt-10 flex overflow-x-hidden">
            <div className="  animate-marquee whitespace-nowrap text-orange font-medium">
                <span className="text-xl mx-4">{firstFile.content}</span>
                <span className="text-xl mx-4">{firstFile.content}</span>
                <span className="text-xl mx-4">{firstFile.content}</span>
                <span className="text-xl mx-4">{firstFile.content}</span>
                <span className="text-xl mx-4">{firstFile.content}</span>               
            </div>

            <div className="absolute top-0  animate-marquee2 whitespace-nowrap text-orange font-medium">              
                <span className="text-xl mx-4">{firstFile.content}</span>
                <span className="text-xl mx-4">{firstFile.content}</span>
                <span className="text-xl mx-4">{firstFile.content}</span>
                <span className="text-xl mx-4">{firstFile.content}</span>
                <span className="text-xl mx-4">{firstFile.content}</span>
            </div>
        </div>

    )
}
