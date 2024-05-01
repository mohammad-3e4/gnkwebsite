import React from 'react';


export default function Message() {
    return (
        <div className='lg:mt-20'>
            <h2 style={{ color: 'var(--orange)', textAlign: "center", marginBottom: "40px" }} className="text-3xl mt-5 font-bold tracking-tight  sm:text-4xl">MESSAGES </h2>

            <div className=' p-sm-1 p-md-4  p-lg-5 flex justify-center'>
                <div className=" p-3 rounded" style={{width:"90%"}}>
                    <div className="">
                        <img style={{ height: "200px" }} className='float-left' src="http://gnkschool.info/userfiles/image/Charanjit_singh_Channa_Chairman.jpg" alt="" />
                        <p className='text-justify' style={{ fontSize: "20px" }}>
                            <span className='font-bold' style={{color:"var(--orange)"}}>S.Charanjit Singh Channa (Chairman):-</span>  I am thankful to all the members of Sr. Guru Singh Sabha, Sector 19D, Chandigarh, who bestowed upon me honour to become the Chairman of the school committee. To serve institution like school is a most important one in the present era, as the standard of the education has gone to a very high peak. Thus, in performing my duty as Chairman I seek the cooperation of each and every member of the school staff. I am very much hopeful that I would receive a good response. I shall try my level best to take necessary steps for the welfare of the students and their studies.

                            <br></br><br></br>Education is now the first & foremost concern of our management & I thereof being an obedient servant of sabha, would always be looking forward for the progress of the school.

                            <br></br><br></br>I pray to almighty God to help me in serving the institution in a befitting Chairman so that I may watch the interest of the school staff, the students as well as of Sri Guru Singh Sabha.

                            <br></br><br></br>May Akal Purakh Shower his blessings on all of us.</p>
                    </div>
                    <div className="my-10 ">
                        <img className="pr-10 float-left" style={{ height: "200px" }} src="http://gnkschool.info/userfiles/image/img101.jpeg" alt="" />
                        <p style={{ fontSize: "20px" }} className='text-justify'>
                            <span className='font-bold' style={{color:"var(--orange)"}}>S.Amritpal Singh (Manager):- </span>
                            Education is a lifetime pursuit that brings deep understanding which ensures skill, industry experience and a quality of life. It encourages creativity, promotes innovation and pursues excellence. An institution should be committed to provide a dynamic learning environment for children. It should focus on combining education and overall development of personality. It is observed that the school is catering to these things. I am sure that every student here feels that the academic pursuit in this school is a wonderful journey of learning. The pupils here learn it, define the depth of the world of knowledge.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}