import React from "react";

export default function Recruitment() {
    return (
        <div className="lg:mt-20">
            <h2 style={{color:"var(--blue)" }}
                className="text-3xl text-center my-10 font-bold tracking-tight  sm:text-4xl"
            >         <span style={{ color: "var(--orange)" }}> RECRUITMENT </span>FORM </h2>
            <div className="p-3 my-3 flex justify-center">


                <div className="p-3 w-full text-left h-auto md:h-64" style={{ width: "90%" }}>
                    <h4  className="text-orange  font-bold text-xl">WALK IN INTERVIEW</h4>
                    <p className="text-justify text-lg">
                        Guru Nanak Khalsa Sr. Secondary School, Sector 30 B, Chandigarh
                        invites application from interested candidates for the post of
                        required teachers. Eligibility as per CBSE norms. Date to submit
                        resume upto 03.10.2023. Only shortlisted candidates will be called for
                        interview by disseminating list on the school website between October
                        05 to 07, 2023 alongwith date and time of interview.
                    </p>
                    <h4 className="mt-4 text-lg">
                        SEND YOUR RESUME ON OUR MAIL{" "}
                        <span className="text-orange" >
                           
                            gurunanak_30b@rediffmail.com 
                        </span>{" "}
                         or School Reception.
                    </h4>
                </div>
            </div>
        </div>
    );
}
