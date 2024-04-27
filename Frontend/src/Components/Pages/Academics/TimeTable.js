import React from 'react';

const Timetable = () => {
    const timetableData = [
        {
            day: 'Monday',
            subjects: ['Mathematics', 'Science', 'English', 'History', 'Physical Education'],
        },
        {
            day: 'Tuesday',
            subjects: ['Science', 'Social Studies', 'Hindi', 'Mathematics', 'Computer Science'],
        },
        {
            day: 'Wednesday',
            subjects: ['English', 'Mathematics', 'Science', 'Geography', 'Economics'],
        },
        {
            day: 'Thursday',
            subjects: ['Social Studies', 'Physics', 'Chemistry', 'Biology', 'Physical Education'],
        },
        {
            day: 'Friday',
            subjects: ['Hindi', 'Chemistry', 'Biology', 'Computer Science', 'Geography'],
        },
    ];

    return (
        <>
            <h2 style={{ color: "var(--blue)", marginBottom: "40px" }} className="text-3xl mt-5 text-center  font-bold tracking-tight  sm:text-4xl">School <span style={{ color: 'var(--orange)' }}> Time-table</span> </h2>
            <div div className=' flex justify-center'>
                <div className="container mx-auto max-w-7xl px-4 py-8">
                    <h1 className="text-xl text-orange font-bold mb-4">className 10th Timetable</h1>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr className='bg-blue text-white'>
                                    <th className="px-4 py-2 border border-gray-100">Day</th>
                                    <th className="px-4 py-2 border border-gray-100">1st Period</th>
                                    <th className="px-4 py-2 border border-gray-100">2nd Period</th>
                                    <th className="px-4 py-2 border border-gray-100">3rd Period</th>
                                    <th className="px-4 py-2 border border-gray-100">4th Period</th>
                                    <th className="px-4 py-2 border border-gray-100">5th Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timetableData.map(({ day, subjects }) => (
                                    <tr className='hover:bg-gray-100' key={day}>
                                        <td className="border px-4 py-2">{day}</td>
                                        {subjects.map((subject, index) => (
                                            <td key={index} className="border px-4 py-2">{subject}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div div className=' flex justify-center'>
                <div className="container mx-auto max-w-7xl px-4 py-8">
                    <h1 className="text-xl text-orange font-bold mb-4">className 11th Timetable</h1>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr className='bg-blue text-white'>
                                    <th className="px-4 py-2 border border-gray-100">Day</th>
                                    <th className="px-4 py-2 border border-gray-100">1st Period</th>
                                    <th className="px-4 py-2 border border-gray-100">2nd Period</th>
                                    <th className="px-4 py-2 border border-gray-100">3rd Period</th>
                                    <th className="px-4 py-2 border border-gray-100">4th Period</th>
                                    <th className="px-4 py-2 border border-gray-100">5th Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timetableData.map(({ day, subjects }) => (
                                    <tr className='hover:bg-gray-100' key={day}>
                                        <td className="border px-4 py-2">{day}</td>
                                        {subjects.map((subject, index) => (
                                            <td key={index} className="border px-4 py-2">{subject}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div div className=' flex justify-center'>
                <div className="container mx-auto max-w-7xl px-4 py-8">
                    <h1 className="text-xl text-orange font-bold mb-4">className 12th Timetable</h1>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr className='bg-blue text-white'>
                                    <th className="px-4 py-2 border border-gray-100">Day</th>
                                    <th className="px-4 py-2 border border-gray-100">1st Period</th>
                                    <th className="px-4 py-2 border border-gray-100">2nd Period</th>
                                    <th className="px-4 py-2 border border-gray-100">3rd Period</th>
                                    <th className="px-4 py-2 border border-gray-100">4th Period</th>
                                    <th className="px-4 py-2 border border-gray-100">5th Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timetableData.map(({ day, subjects }) => (
                                    <tr className='hover:bg-gray-100' key={day}>
                                        <td className="border px-4 py-2">{day}</td>
                                        {subjects.map((subject, index) => (
                                            <td key={index} className="border px-4 py-2">{subject}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Timetable;
