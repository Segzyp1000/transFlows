import React from "react";
import Arrow1 from "../assets/arrow1.png";
import Arrow2 from "../assets/arrow2.png";
import Testimonial1 from "../assets/testimonial.png";
import Testimonial2 from "../assets/testimonial2.png";

function Testimonial() {
  return (
    <div>
      <div className="container flex flex-col mt-[1250px] lg:mt-52 md:mt-[500px]">
        <div className="flex items-center justify-between mx-36">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg">Testimonials</p>
            <h3 className="font-bold md:text-xl text-sm">
              What Our Customers Say
            </h3>
          </div>
          <div className="md:flex hidden justify-center md:justify-end">
            <img src={Arrow1} alt="" />
            <img src={Arrow2} alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center">
          <img src={Testimonial1} alt="" className="w-[500px]" />
          <img src={Testimonial2} alt="" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
