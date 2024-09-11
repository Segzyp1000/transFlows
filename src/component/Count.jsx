import React from "react";
import Pattern from "../assets/Pattern.png";

function Count() {
  return (
    <div>
      <div className="flex flex-wrap items-center text-center justify-center space-y-12 md:space-y-2 space-x-5 mt-72  lg:mt-56 max-w-full">
        <div className="flex space-x-3">
          <h1 className="max-w-md md:text-5xl text-xl font-bold">1296</h1>
          <div className="flex space-x-3">
            <img src={Pattern} alt="" className="size-5" />
            <p>Delivery Packages</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <h1 className="max-w-md md:text-5xl text-xl font-bold">3594</h1>

          <div className="flex space-x-3 ">
            <img src={Pattern} alt="" className="size-5" />
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count;
