import React, { useState } from 'react';
import AdminPageLayout from "./AdminPageLayout"

import { baseUrl } from '../../baseUrl';
export default function FacultySalary() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    qualification: '',
    experience: '',
    pay_scale: '',
    category: ''
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
      const response = await fetch(`${baseUrl}/api/salary`, {
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
      // console.log(formData);
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div className='flex'>
      <div><AdminPageLayout /></div>
      <div className="w-full flex justify-center items-center ">
        <form className="bg-white shadow-lg -auto sm:w-4/6 md:w-1/2 lg:w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div>
            <h2 className='text-center m-5 text-xl text-orange font-bold'>Salary Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation">
                Designation
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="designation"
                type="text"
                name="designation"
                placeholder="Enter Designation"
                value={formData.designation}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualification">
                Qualification
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="qualification"
                type="text"
                name="qualification"
                placeholder="Enter Qualification"
                value={formData.qualification}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
                Experience
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="experience"
                type="text"
                name="experience"
                placeholder="Enter Experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pay_scale">
                Pay Scale
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pay_scale"
                type="text"
                name="pay_scale"
                placeholder="Enter Pay Scale"
                value={formData.pay_scale}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scale">
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="principal">Principal</option>
                <option value="aided_tgt">Aided TGT</option>
                <option value="unaided_pgt">Unaided PGT</option>
                <option value="unaided_tgt">Unaided TGT</option>
                <option value="unaided_pst/ntt">Unaided PST/NTT</option>


              </select>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className=" w-full bg-orange hover:bg-white hover:text-orange border border-orange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}