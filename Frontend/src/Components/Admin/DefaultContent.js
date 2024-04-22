import React from 'react';

const DefaultContent = () => {
  return (
    <div className="flex justify-center items-center h-1/2">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Admin Dashboard</h1>
        <p className="text-lg text-gray-600">Please select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
};

export default DefaultContent;
