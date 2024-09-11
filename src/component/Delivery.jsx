import React from "react";
import About1 from "../assets/Icon 4about.png";
import About2 from "../assets/Icon4abt.png";
import About3 from "../assets/About.png";
import Count from "./Count";

function Delivery() {
  return (
    <main>
      <div className="wrapper mt-20">
        <div className="wrap mt-36 flex flex-row bg-white text-black justify-center items-center text-center">
          <div className="text-center flex  flex-col justify-center h-auto">
            <h1 className="font-bold max-w-full text-2xl">
              We provide full range global logistics solution
            </h1>
            <p className="font-neutral-50">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className="font-extralight">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>

            <div className="flex flex-row space-x-6 mt-10">
              <img src={About1} alt="" />
              <h2 className="mt-2">Delivery on Time</h2>
            </div>
            <div className="flex flex-row space-x-6 mt-10">
              <img src={About2} alt="" />
              <h2 className="mt-2">Optimized Travel Time</h2>
            </div>
          </div>
          <div className="hidden md:flex">
            <img src={About3} alt="" />
          </div>
        </div>
      </div>
      <Count/>
    </main>
  );
}

export default Delivery;
