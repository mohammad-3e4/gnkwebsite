import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import {getCarouselSlides} from '../../Actions/carousel'
export default function MyCarousel() {
  const disptach = useDispatch();
  const { slides, message, error } = useSelector((state) => state.carousels);

  useEffect(() => {
    disptach(getCarouselSlides());
  }, [disptach]);
  // console.log(slides[0].file_name);
  return (
    <div className="h-56 sm:h-64 md:h-80 lg:h-[700px] xl:h-100 2xl:h-svh">
      <Carousel className="overflow-x-hidden">
        {slides?.map((item, index) => (
          <img
            key={index}
            src={`/uploads/carousel/${item.file_name}`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Carousel>
    </div>
  );
}

// <div className="h-56 sm:h-64 md:h-80 lg:h-[500px] xl:h-100 2xl:h-svh">
//   <Carousel>
//     <img src="./images/SR408056.jpg" alt="..." />
//     <img src="./images/Staffpic.jpg" alt="..." />
//     <img src="./images/SR406664.jpg" alt="..." />
//     <img src="./images/SR406644.jpg" alt="..." />
//     <img src="./images/SR408128.jpg" alt="..." />
//   </Carousel>
// </div>
