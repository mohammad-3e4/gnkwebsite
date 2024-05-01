import React from "react";
import About from "./About";
import MyCarousel from "./MyCarousel";
import News2 from "./News2";
import HomeActivity from "./HomeActivity";
import Highlight from "./Highlight";
import Principal from "../Pages/Principal";
import WhyUs from "./WhyUs";
import Arrow from "./Arrow";
// import News from '../Pages/News';

export default function Main() {
  return (
    <>
      <MyCarousel />
      <Highlight />
      <Principal />
      <WhyUs />
      <About />
      <News2 />
      {/* <News/> */}
      <Arrow />
      <HomeActivity />
    </>
  );
}
