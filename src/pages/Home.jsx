import Hero from "../components/hero";
import Header from "../components/header";
import React from "react";
import AboutUs from "../components/about-us";
import Academics from "../components/academics";
import Admissions from "../components/admissions";
import Faculty from "../components/faculty";
import Students from "../components/students";
import Gallery from "../components/gallery";
import Testimonials from "../components/testimonial";

const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="academics">
        <Academics />
      </div>
      <div id="admissions">
        <Admissions />
      </div>
      <div id="faculty">
        <Faculty />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="students">
        <Students />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
};

export default HomePage;
