import React from "react";

function Service() {
  return (
    <div>
      <div
        className="flex flex-col px-4 mx-auto md:mx-20 mt-20 space-y-12 md:space-y-0 md:flex-row"
        id="about"
      >
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="py-0 md:py-12 max-w-full text-4xl font-bold text-center">
            Safe & Reliable Cargo Solutions
          </h2>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex space-y-3 md:space-y-0 md:space-x-6 lg:flex-row">
            <div className="flex item-center space-x-2 w-auto ml-9">
              <img src="./image/Icon (3).png" alt="" />
            </div>
            <div className="ml-9">
              <h3 className="mb-5 text-lg font-bold">Sea Transport Services</h3>
              <p className="w-auto">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
          <div className="flex space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="flex item-center space-x-2 w-auto ml-9">
              <img src="./image/Icon (4).png" alt="" />
            </div>
            <div className="ml-9">
              <h3 className="mb-5 text-lg font-bold">WareHousing Services</h3>
              <p className="w-auto">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2" id="projects">
          <div className="flex space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="flex item-center w-auto space-x-2 ml-9">
              <img src="./image/Icon (5).png" alt="" />
            </div>
            <div className="ml-9">
              <h3 className="mb-5 text-lg font-bold">Air Flight Services</h3>
              <p className="w-auto">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="flex space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="flex item-center w-auto space-x-2 ml-9">
              <img src="./image/Icon (6).png" alt="" />
            </div>
            <div className="ml-9">
              <h3 className="mb-5 text-lg font-bold">Local Shipping Address</h3>
              <p className="w-auto">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
