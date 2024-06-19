import React from "react";
import { useState, useEffect } from "react";
export default function Strength() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://tech.gnkschool.info/api/v1/student?class=undefined")
      .then((res) => res.json())
      .then((result) => setData(result?.students));
  }, []);

  const classValue = {
    1: "First",
    2: "Second",
    3: "Third",
    4: "Fourth",
    5: "Fifth",
    6: "Sixth",
    7: "Seventh",
    8: "Eighth",
    9: "Ninth",
    11: "Eleventh",
    13: "Pre Nursery",
    14: "Nursery",
    15: "KG",
  };

 
  const classSummary = data?.reduce((summary, student) => {
    const { class_name, section, gender } = student;
    const key = `${class_name}-${section}`;

    if (!summary[key]) {
      summary[key] = {
        class_name: classValue[class_name] || class_name,
        section: section,
        students: 0,
        girls: 0,
        boys: 0,
      };
    }

    summary[key].students++;
    if (gender === "Female") {
      summary[key].girls++;
    } else if (gender === "Male") {
      summary[key].boys++;
    }

    return summary;
  }, {});

  const result = Object.values(classSummary);
 
  return (
    <div className="lg:mt-20">
      <h2
        style={{ marginBottom: "40px" }}
        className="text-3xl text-orange text-center my-10 font-bold tracking-tight  sm:text-4xl"
      >
        {" "}
        STUDENT <span className="text-blue">STRENGTH</span>{" "}
      </h2>

      <div className="my-20 flex items-center justify-center m-auto">
        <div
          className="relative overflow-x-auto shadow-lg sm:rounded-lg"
          style={{ width: "90%" }}
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-blue dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Class
                </th>
                <th scope="col" className="px-6 py-3">
                  Section
                </th>
                <th scope="col" className="px-6 py-3">
                  Female
                </th>
                <th scope="col" className="px-6 py-3">
                  Male
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {result?.map((item, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.class_name}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.section.toUpperCase()}
                  </th>
                  <td className="px-6 py-4">{item.girls}</td>
                  <td className="px-6 py-4">{item.boys}</td>
                  <td className="px-6 py-4">{item.students}</td>
                </tr>
              ))}
                <tr
                
                  className="bg-orange text-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    Total Students
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    -
                  </th>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">-</td>
                  <th className="px-6 py-4">{data.length}</th>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
