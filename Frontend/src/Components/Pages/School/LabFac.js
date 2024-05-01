import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Arrow from "../../Main/Arrow";
import { Link } from "react-router-dom";
export default function LabFac() {
  return (
    <div className="lg:mt-20">
      <Arrow />
      <div className="flex justify-center mt-3  mb-3 p-3">
        <div style={{ width: "85%" }}>
          <h2
            style={{ textAlign: "center", marginBottom: "40px" }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {" "}
            <span style={{ color: "var(--orange)" }}> LAB </span>&
            <span style={{ color: "var(--orange)" }}> FACILITIES</span>{" "}
          </h2>

          <h4
            style={{ fontSize: "20px" }}
            className="font-bold text-orange my-5 cursor-pointer"
          >
            Library Facilities{" "}
            <span className="text-xs font-normal">
              {" "}
                <span className="text-sm text-blue-700 font-normal">
              {" "}
              <Link to="/lab-and-faculties">see gallery</Link>
            </span>
            </span>
          </h4>
          <ul className="list-none list-inside" style={{ fontSize: "18px" }}>
            <li>
              <CheckBadgeIcon className="h-6 w-6 inline text-blue mb-1" />{" "}
              Laboratories
            </li>
            <li>
              <CheckBadgeIcon className="h-6 w-6 inline text-blue mb-1" />{" "}
              Computer Education
            </li>
            <li>
              <CheckBadgeIcon className="h-6 w-6 inline text-blue mb-1" /> N.C.C
            </li>
            <li>
              <CheckBadgeIcon className="h-6 w-6 inline text-blue mb-1" />{" "}
              Co-curricular Activities
            </li>
            <li>
              <CheckBadgeIcon className="h-6 w-6 inline text-blue mb-1" />{" "}
              Spiritual Education
            </li>
            <li>
              <CheckBadgeIcon className="h-6 w-6 inline text-blue mb-1" />{" "}
              Health and Hygiene
            </li>
            <li>
              <CheckBadgeIcon className="h-6 w-6 inline text-blue mb-1" />{" "}
              Reservation and other facilities
            </li>
            <li>
              <CheckBadgeIcon className="h-6 w-6 inline text-blue mb-1" />{" "}
              Sports and Games
            </li>
            <li>
              <CheckBadgeIcon className="h-6 w-6 inline text-blue mb-1" />{" "}
              Canteen cum Stationery
            </li>
            <li>
              <CheckBadgeIcon className="h-6 w-6 inline text-blue mb-1" />{" "}
              Served Mid day Meal up to className VIII
            </li>
          </ul>

          <h4
            style={{ color: "var(--orange)", fontSize: "20px" }}
            className="font-bold my-5"
          >
            Medical Facilities
            <span className="text-xs font-normal">
              {" "}
                <span className="text-sm text-blue-700 font-normal">
              {" "}
              <Link to="/lab-and-faculties">see gallery</Link>
            </span>
            </span>
          </h4>
          <p style={{ fontSize: "18px" }}>
            Medical check up is being conducted time to time and two doctors are
            also deputed to provide the medical facilities to the students.
            <br></br>
            <br></br>
            Mrs. Prabhjit Kaur
          </p>

          <h4
            style={{ color: "var(--orange)", fontSize: "20px" }}
            className="font-bold my-5"
          >
            Laboratories{" "}
            <span className="text-xs font-normal">
              {" "}
                <span className="text-sm text-blue-700 font-normal">
              {" "}
              <Link to="/lab-and-faculties">see gallery</Link>
            </span>
            </span>
          </h4>
          <p style={{ fontSize: "18px" }}>
            There are seven laboratories, one each for Biology, Chemistry,
            Physics, Mathematics, Home Science, Work Experience and Computer.
            The laboratories are well designed, airy and well-lit. Modern in
            style and content and well stocked with equipment, instruments and
            data, the laboratories offer a rich experimental atmosphere and
            support. A lot of thought has gone into making the labs safe for
            student use, with wash areas at every table.
          </p>

          <h4
            style={{ color: "var(--orange)", fontSize: "20px" }}
            className="font-bold my-5"
          >
            The Dimension of Labs.
          </h4>
          <div className="overflow-x-auto relative">
            <table className="table   w-full text-left">
              <thead>
                <tr className="bg-blue text-white">
                  <th scope="col" className="border border-gray-200 px-4 py-2">
                    S.NO.
                  </th>
                  <th scope="col" className="border border-gray-200 px-4 py-2">
                    No. of Grounds
                  </th>
                  <th scope="col" className="border border-gray-200 px-4 py-2">
                    Dimension
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    1
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Chemistry Lab - One
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Dimension - 21 x 30 = 630 sqr feet.
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    2
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Physics Lab - One
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Dimension - 21 x 24 = 504 sqr feet
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    3
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Biology Lab - One
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Dimension - 21 x 24 = 504 sqr feet
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    4
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Maths Lab- One
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Dimension - 21 x 24 = 504 sqr feet
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    5
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Home science Lab- One
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Dimension-15 x 20 = 300 sqr feet
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    6
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Work experience - Two
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Dimension-15 x 20 = 300 x 2 = 600 sqr ft
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    7
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Computer Lab- One
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Dimension-21 x 24 = 504 sqr feet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4
            style={{ color: "var(--orange)", fontSize: "20px" }}
            className="font-bold my-5"
          >
            Rooms
          </h4>
          <p style={{ fontSize: "18px" }}>
            className Rooms Available For Study Purpose - 35 (21 X24 sqr feet)
            <br></br>
            <br></br>
            Lab Purpose - 07 (21 X 24 sqr feet)
            <br></br>
            <br></br>
            Other Purpose - 06
          </p>

          <h4
            style={{ color: "var(--orange)", fontSize: "20px" }}
            className="font-bold my-5"
          >
            GAMES, SPORTS AND RECREATION{" "}
            <span className="text-xs font-normal">
              {" "}
                <span className="text-sm text-blue-700 font-normal">
              {" "}
              <Link to="/lab-and-faculties">see gallery</Link>
            </span>
            </span>
          </h4>
          <p style={{ fontSize: "18px" }}>
            The students participate regularly in tournaments at the school,
            District, State & National levels.
            <br></br>
            <br></br>
            Physical education is an indispensable part of education that
            contributes to the holistic development of an individual. It helps
            to develop healthy and responsible students and instills in them
            various skills and qualities that add to their overall development.
            A healthy mind lives in a healthy body and thus, School has a lot to
            offer the students in terms of sports
            <br></br>
            <br></br>
            The school also has provisions for morning training prior to the
            routine classNamees where the students are prepared for various
            tournaments
            <br></br>
            <br></br>
            We also have the Annual Sports Day during which student exhibit
            their skills in track and field events. The little ones from
            classNamees Nursery to XII have a Sports Day where the focus is on
            skill development, having fun and participation by all.
          </p>
          <h4
            style={{ color: "var(--orange)", fontSize: "20px" }}
            className="font-bold my-5"
          >
            The Dimension of Playground
          </h4>
          <div className="overflow-x-auto relative">
            <table className="table  w-full  text-left">
              <thead>
                <tr className="bg-blue text-white">
                  <th scope="col" className="border border-gray-200 px-4 py-2">
                    S. NO.
                  </th>
                  <th scope="col" className="border border-gray-200 px-4 py-2">
                    NAME OF GAME
                  </th>
                  <th scope="col" className="border border-gray-200 px-4 py-2">
                    NO. OF GROUNDS
                  </th>
                  <th scope="col" className="border border-gray-200 px-4 py-2">
                    GROUND'S DIMENSION{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    1
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Hand Ball
                  </td>
                  <td className="border border-gray-200 px-4 py-2">One</td>
                  <td className="border border-gray-200 px-4 py-2">
                    40M x 20M
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    2
                  </th>
                  <td className="border border-gray-200 px-4 py-2">Football</td>
                  <td className="border border-gray-200 px-4 py-2">One</td>
                  <td className="border border-gray-200 px-4 py-2">
                    100 yard x 60 yard
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    3
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Volley Ball
                  </td>
                  <td className="border border-gray-200 px-4 py-2">Two</td>
                  <td className="border border-gray-200 px-4 py-2">18M x 9M</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    4
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Basket Ball
                  </td>
                  <td className="border border-gray-200 px-4 py-2">One</td>
                  <td className="border border-gray-200 px-4 py-2">
                    28M x 15 M
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    5
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Hand Ball
                  </td>
                  <td className="border border-gray-200 px-4 py-2">One</td>
                  <td className="border border-gray-200 px-4 py-2">
                    40M x 20M
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    6
                  </th>
                  <td className="border border-gray-200 px-4 py-2">Kho-Kho</td>
                  <td className="border border-gray-200 px-4 py-2">Two</td>
                  <td className="border border-gray-200 px-4 py-2">
                    29M x 16 M
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <th scope="row" className="border border-gray-200 px-4 py-2">
                    7
                  </th>
                  <td className="border border-gray-200 px-4 py-2">
                    Chess(Indoor Game)
                  </td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4
            style={{ color: "var(--orange)", fontSize: "20px" }}
            className="font-bold my-5"
          >
            School Library{" "}
            <span className="text-xs font-normal">
              {" "}
                <span className="text-sm text-blue-700 font-normal">
              {" "}
              <Link to="/lab-and-faculties">see gallery</Link>
            </span>
            </span>
          </h4>
          <p style={{ fontSize: "18px" }}>
            The School library is an active learning and resource centre for
            staff and students.The school houses a huge Library covering 504
            sq.ft. space. The collection of books is large and varied. The
            quality of books and the rich variety of texts available is the
            hallmark of the library. Spacious, comfortable and tranquil, the
            environment is that which encourages and stimulates reading and
            research interests. The school library has over 4575 books. It
            subscribes to several newsletters, periodicals, magazines and
            newspapers. It also has a stock of multimedia materials (CDs and
            DVDs ) for use in the classNamees
            <br></br>
            <br></br>
            In fact, the library specialises in the reference section where the
            students are actively encouraged to use the library for independent
            study and for research towards their presentations and projects.
            <br></br>
            <br></br>
            Library stocks are routinely updated with latest addition of the
            books available in the market.
            <br></br>
            <br></br>
            The school library caters to the need of all classNamees from
            Nursery to XII.
          </p>

          <h4
            style={{ color: "var(--orange)", fontSize: "20px" }}
            className="font-bold my-5 "
          >
            Different categories of Books:- <span className="text-xs font-normal"> <Link to='/lab-and-faculties'>see gallery</Link></span>
          </h4>
          <table className="table  w-full">
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">1.</span> Maths
                </td>
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">2.</span> English
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">3.</span> Hindi
                </td>
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">4.</span> Punjabi
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">5.</span> Science
                </td>
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">6.</span> Social science
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">7.</span> G.K
                </td>
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">8.</span> Computer
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">9.</span> Biology
                </td>
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">10.</span> Physics
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">11.</span> Chemistry
                </td>
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">12.</span> Religious
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">13.</span> Commerce
                </td>
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">14.</span> Primary
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">15.</span> History
                </td>
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">16.</span> Pol science
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">17.</span> Physical education
                </td>
                <td className="border border-gray-200 px-4 py-2 hover:bg-gray-100">
                  {" "}
                  <span className="font-bold">18.</span> Reference Books
                </td>
              </tr>
              <br></br>
              <tr className="hover:bg-gray-100">
                <td className="font-medium">
                  {" "}
                  E Annual Budget for the Library
                </td>
                <td className="font-medium">
                  {" "}
                  Approximately 18000/- per annum
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="font-medium"> F Number of Magazines</td>
                <td className="font-medium"> 11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
