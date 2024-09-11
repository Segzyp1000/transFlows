import React from "react";
import Arrow1 from "../assets/arrow1.png";
import Arrow2 from "../assets/arrow2.png";
import Testimonial1 from "../assets/testimonial.png";
import Testimonial2 from "../assets/testimonial2.png";

function Testimonial() {
  return (
    <div className="container flex flex-col mt-52 lg:mt-36">
      <div className="text-center flex flex-col justify-center mx-0 md:mx-20 items-center md:text-left mb-4 md:mb-0">
        <p className="text-lg">Testimonials</p>
        <h3 className="font-bold md:text-xl text-sm">What Our Customers Say</h3>
      </div>
      <div className="hidden lg:flex justify-between mx-28 p-2">
        <img src={Arrow1} alt="" />
        <img src={Arrow2} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center text-center">
        <img src={Testimonial1} alt="" className="w-[400px]" />
        <img src={Testimonial2} alt="" className="w-[400px]" />
      </div>
    </div>
  );
}

export default Testimonial;
