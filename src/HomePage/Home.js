import React from "react";
import Navbar_Component from "../HomePage/Navbar/Navbar_Component";
import CarouselApp from "./Carousel/CarouselApp";
import Section1 from "../HomePage/Section1/Section1";
import FetchApi from "../Store/FetchApi";
import Footer from "../HomePage/Footer/Footer";
import Section2 from "../HomePage/Section2/Section2";
import Section3 from "../HomePage/Section3/Section3";
import Section4 from "../HomePage/Section4/Section4";
import Section5 from "../HomePage/Section5/Section5";

function Home() {
  return (
    <div>
      <Navbar_Component />
      <CarouselApp />
      <Section1 />
      <Section5 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      <FetchApi />
    </div>
  );
}

export default Home;
