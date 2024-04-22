import 'aos/dist/aos.css'; 
import React, { useEffect } from 'react';
import AOS from 'aos';

export default function Principal() {

    useEffect(() => {
        AOS.init({
            // Global settings here
            duration: 1000,
            easing: 'ease-in-out',
            //   once: true
        });
    });
    return (
        <div className=" py-12 sm:py-16">
            <h2 style={{ textAlign: "center", marginBottom: "40px", color: "var(--blue)" }} className="text-3xl  font-bold tracking-tight  sm:text-4xl"   > <span style={{ color: "var(--orange)" }}>PRINCIPAL'S</span> DESK </h2>

            <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up">

                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-orange">Mrs Ramanjeet Kaur</h3>
                        <h5 className="text-xl font-medium tracking-tight text-blue">Principal</h5>

                        <p className="mt-6  text-justify text-base leading-7 text-gray-600">
                            {/* We look forward to welcoming you to be part of our vibrant learning community. “Let noble thoughts come to us from every side”As the Headmistress of the school, I feel honoured and privileged to be part of an educational institution where every stakeholder is a learner and every day is an opportunity to learn and discover. We look at ourselves as a community of learners, where everyone learns including our teachers, parents & staff. */}
                            I welcome you all to an outstanding learning community where everyone is dedicated to a high standard of excellence. We truly have a fantastic school with a supportive and involved parent community, dedicated and highly skillful staff, excellent resources and buildings and the most fantastic students to work with. We are very sure that with the help of all the stakeholders and with their continuous support, we will be able to take our school to the next highest level of excellence. At our end, we shall continue working with you for the best interests of our beloved students and our community at large. My commitment to our community is to lead the school with enthusiasm and passion to enable us to reach our goals. Let us work together to make Guru Nanak Khalsa Sr. Sec. School as the best school, it can be.

                        </p>
                    </div>
                    <div className="-mt-2  p-2 lg:mt-24 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-indigo-300 bg-opacity-20 py-0 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-2">
                            <div className="">
                                <img
                                    src="/uploads/staff/principal1.jpg"
                                    alt="principal"
                                    className="h-full w-full rounded-xl shadow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:text-center">
                    {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2> */}
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We look forward to welcoming you to be part of our vibrant learning community. “Let noble thoughts come to us from every side”As the Headmistress of the school, I feel honoured and privileged to be part of an educational institution where every stakeholder is a learner and every day is an opportunity to learn and discover. We look at ourselves as a community of learners, where everyone learns including our teachers, parents & staff.

                    </p>
                </div>
            </div>
        </div>
    )
}


