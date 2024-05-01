import React, { useState } from "react";
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/20/solid";

export default function Contact() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);

    const phoneRegex = /^\d{10}$/;
    setIsPhoneNumberValid(phoneRegex.test(newPhoneNumber));
  };

  
  return (
    <>
      <div className="relative  overflow-hidden p-8 sm:p-8 lg:p-20   contact-img">
        <div className="absolute inset-0 " style={{ backgroundColor: "var(--blue)" }}>
          <img
            style={{ width: '100%', objectPosition: '50% 50%', opacity: 0.3, }}
            className="w-full h-full r"
            src='/contact-bg.jpg'
            alt="ContactBg"
          />  
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                GET IN <span style={{ color: "var(--orange)" }}>TOUCH</span>{" "}
              </h2>
              <h4 className="mt-4 font-semibold text-white">ADDRESS</h4>
              <p className="mt-2 leading-7 text-justify text-white">
                Guru Nanak Khalsa Sr. Secondary School (Affiliated with C.B.S.E.
                - Affiliation No. 2630003) (Permanently Recognized by U.T.
                Chandigarh) Sector 30-B, Chandigarh - 160 030.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <EnvelopeIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">MAIL US</dt>
                <dd className="mt-2 leading-7 text-white">
                  gurunanak_30b@rediffmail.com{" "}
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <PhoneArrowDownLeftIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">PHONE</dt>
                <dd className="mt-2 leading-7 text-white">
                  +91-172-2654693, 5030579{" "}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>


      <div className=" bg-white px-6 py-5   ">

        <div className=" py-5 ">

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl text-orange font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact <span className="text-blue">Us</span>
            </h2>
          </div>
          <form
            action="https://formspree.io/f/xbjnagae"
            method="POST"
            className="mx-auto shadow-lg rounded-lg p-5 mt-10 max-w-xl sm:mt-16"        >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Name :
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="full-name"
                    className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
             
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Email :
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-md font-semibold leading-6 text-gray-900"
                  >
                    Phone Number :
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      className={`block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${isPhoneNumberValid ? 'focus:ring-indigo-600' : 'focus:ring-red-600'
                        } sm:text-sm sm:leading-6`}
                    />
                  </div>
                  {!isPhoneNumberValid && (
                    <p className="text-red-600 text-sm mt-1">Please enter a valid phone number.</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="sub"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Subject :
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="sub"
                    id="sub"
                    autoComplete="sub"
                    className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Message :
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button

                type="submit"
                className="block w-full  rounded-md bg-gradient-to-r from-orange to-blue  duration-500  px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>



      <div className="contact-map">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.098639195807!2d76.78858847537234!3d30.715627274592485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecfb5ed36835%3A0x4e3b9ea9b92c46cd!2sGuru%20Nanak%20Khalsa%20Senior%20Secondary%20School!5e0!3m2!1sen!2sin!4v1706007413925!5m2!1sen!2sin"
          className="h-60 w-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </>
  );
}
