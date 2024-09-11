import React from "react";
import Planes from "../assets/planes.png";
import package1 from "../assets/package1.png";
import package2 from "../assets/package1.png";
import package3 from "../assets/package1.png";
import package4 from "../assets/package1.png";
import package5 from "../assets/package1.png";
import package6 from "../assets/package1.png";

function Why() {
  return (
    <div>
      <div className="container flex flex-row max-w-full mt-20" id="projects">
        <div className="lg:flex hidden bg-bgButton w-1/2">
          <img src={Planes} alt="" className="h-[210px]  w-[329px] mt-20" />
        </div>
        <div className="bg-lightWhite lg:w-1/2 max-w-full p-3">
          <div className="flex flex-col p-4 space-x-3 space-y-3">
            <p>Why Choose us</p>
            <h2 className="font-bold">
              We Create Opportunity to Reach Potential
            </h2>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 p-2">
              <li className="flex  items-center gap-2">
                <img src={package1} alt="" />
                Safe Package
              </li>
              <li className="flex  items-center gap-2">
                <img src={package2} alt="" />
                Ship everywhere
              </li>
              <li className="flex  items-center gap-2">
                <img src={package3} alt="" />
                Global Tracking
              </li>
              <li className="flex  items-center gap-2">
                <img src={package4} alt="" />
                24/7 Support
              </li>
              <li className="flex  items-center gap-2">
                <img src={package5} alt="" />
                In-Time Delivery
              </li>
              <li className="flex  items-center gap-2">
                <img src={package6} alt="" />
                Transparent Pricing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
