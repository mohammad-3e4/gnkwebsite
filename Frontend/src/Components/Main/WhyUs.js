import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';



const posts = [
    {
        id: 1,
        color: "bg-red-400",
        title: 'WE ARE UNIQUE',
        content:
            'At our institution, students are encouraged to explore their passions, embrace diversity, and think critically. Our dynamic curriculum and supportive community empower each student to thrive academically, socially, and personally. Through collaboration and creativity, we cultivate future leaders who will shape a brighter world.'
    },
    {
        id: 2,
        color: "bg-yellow-400",

        title: 'INDIVIDUAL GOALS',
        content:
        'In our institution, we prioritize the individual goals of each student. We believe in fostering a learning environment where students can explore their unique passions, talents, and interests. Our curriculum is designed to nurture personal growth, critical thinking, and creativity. We empower students to set and achieve their academic, social, and personal aspirations.'
    },
    {
        id: 3,
        color: "bg-green-400",
        title: 'SPORTS',
        content:
        'Sports at our school are more than just games; they are a way of life. We foster a culture of athleticism, teamwork, and sportsmanship. From football to basketball, athletics are ingrained in our curriculum, teaching students the value of discipline and resilience. Our state-of-the-art facilities and dedicated coaches ensure students excel both on and off the field.'
    },
   
]

export default function WhyUs() {

    useEffect(() => {
        AOS.init({            
            duration: 1000,
            easing: 'ease-in-out',           
        });
    });
    return (
        <div className="bg-gray-100 py-16 sm:py-24">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-orange sm:text-4xl">Why choose Us ?</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Guru Nanak Khalsa Senior Secondary School
                    </p>
                </div>
                <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex  max-w-xl flex-col items-start justify-between">

                            {/* <div   className="`${post.color}` bg-opacity-50 group relative"> */}
                            <div data-aos="fade-up" className={`${post.color} translate-y-0 hover:-translate-y-6 transition-transform duration-300 bg-opacity-30 p-5 rounded-lg group relative`}>
                                <h3 className="mt-3 text-xl font-bold leading-6 text-orange">{post.title}</h3>
                                <p className="mt-5 text-justify  text-md leading-6 text-gray-600">{post.content}</p>
                            </div>


                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
