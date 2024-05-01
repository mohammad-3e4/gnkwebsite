import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Donate() {
    return (
        <div className="flex justify-center lg:mt-10 ">
            {/* <div className="w-75 bg-white shadow mt-5 mb-5 p-5 rounded"> */}
            <div className="max-w-7xl  mt-5 mb-5 p-5 ">

                <h2 style={{ textAlign: "center", marginBottom: "40px" }} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Donate <span style={{ color: 'var(--orange)', display: 'inline-block' }}> Us</span> </h2>

                <p style={{ fontSize: "20px" }}>
                    <p  className="text-orange font-bold my-5">YOU COULD HELP OUR CHILDREN IN SO MANY WAYS!</p>
                    <p  className="text-orange font-semibold my-5">As every one knows bringing up kids properly is expensive. Our major expenses Include:</p>

                    <ul className="list-none list-inside">
                        <li className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue me-3" />The school is providing free books, uniform and full fee concession to about 500 students every year.</li>
                        <li className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue me-3" />School fees at poor children</li>
                        <li className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue me-3" />Co-curricular activities expenses</li>
                        <li className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue me-3" />Ongoing medical care and inoculations</li>
                        <li className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue me-3" />Co-curricular activities expensive</li>
                        <li className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue me-3" />Services of counselors and therapists.</li>
                        <li className="mb-1" ><CheckBadgeIcon className="h-6 w-6 inline text-blue me-3" />Providing basic infrastructure for children</li>
                    </ul>
                    <p  className="my-5 font-semibold text-orange">So JOIN IN and see where you'd like to help! As you can see, we need all kinds of help:</p>
                    <p className="my-5">With help from donors like you, GURUNANAK KHALSA SENIOR SECONDARY SCHOOL, SECTOR 30 CHANDIGARH  has served disadvantaged children for more than a four decades, by providing poor children free education , uniform , books etc. All our efforts go towards making our poor children as normal as possible by 'Regenerating the Rhythm of Life' - so that they integrate well into society.</p>
                    

                    <p  className="my-5 font-semibold text-orange">Corpus Donation</p>
                    <p className="my-5">Donating to a Corpus Fund is one way to build up a strong organisation. Funds in a Corpus cannot be used directly at any time- the organisation is supposed to use only the interest accruing from the investment made out of the Corpus donations, without touching the principal itself. This way your money remains forever, strengthening the organization.</p>
                    
                    <p  className="my-5 font-semibold text-orange">General Donation</p>
                    <p className="my-5">Make a general donation and we will assign the funds to the area where we know the need is greatest. Your donation helps to make a difference in the lives of children, giving them a new hope, proper education and health care-in short giving them the chances in life they deserve to emerge as 'Eternal Winners'.</p>
                     
                     <p  className="my-5 font-semibold text-orange">Account No 07891000200592</p>
                     
                     <p  className="my-5">IFSC Code No PSIB0000798</p>
                     <p  className="my-5">Punjab and Sind Bank</p>

                    
                    




                </p>


            </div>
        </div>
    )
}