import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";

export default function About() {
  useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      easing: "ease-in-out",
      //   once: true
    });
  });
  return (
    <div>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light " data-aos="fade-up">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue">
            About <span style={{ color: "var(--orange)" }}>School</span>{" "}
          </h2>
          <p className="mb-4 text-xl text-justify">
            Guru Nanak Khalsa Sr. Secondary School is co-educational, Govt.
            aided institute of a rich reputation. School was established on the
            auspicious day of Baisakhi 13th April, 1965 and successfully
            completed 50 years. It is affiliated to C.B.S.E., New Delhi. The
            school is situated is an area of 5.772 acres. The total student
            strength of the school is about 1720.
          </p>
          <Link
            to="/about_School"
            type="button"
            className="text-white duration-300  hover:bg-blue  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  bg-gradient-to-r from-orange to-blue  "
          >
            Read More
          </Link>
          <Link
            to="/school_disclosure"
            type="button"
            className="text-white duration-300  hover:bg-blue  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   bg-gradient-to-r from-orange to-blue "
          >
            Mandatory Public Disclosure
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8" data-aos="fade-up">
          <img
            className="w-full rounded-lg"
            src="./images/SR405717.jpg"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="./images/Student.jpg"
            alt="office content 2"
          />
        </div>
      </div>
    </div>
  );
}
