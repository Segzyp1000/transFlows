import React from "react";
import World1 from "../assets/world1.png";
import World2 from "../assets/world2.png";
import World3 from "../assets/world3.png";
import World4 from "../assets/world4.png";
import World5 from "../assets/world5.png";

function Transportation() {
  return (
    <div>
      <div className="block bg-lightYellow mt-20  h-[570px] md:h-[500px] lg:h-[271px]">
        <div className="relative  z-[100] mb-40 -top-6 flex flex-col justify-center items-center text-center space-y-7 mt-20">
          <h2 className="font-bold flex justify-center items-center text-center mt-10 ">
            Transporting Across the World
          </h2>
          <div className="mx-auto md:mx-20 flex flex-wrap  justify-center items-center text-center space-x-2 space-y-2 ">
            <img src={World1} alt="" className="md:w-[175px] w-[151px]" />
            <img src={World2} alt="" className="md:w-[175px] w-[151px]" />
            <img src={World3} alt="" className="md:w-[175px] w-[151px]" />
            <img src={World4} alt="" className="md:w-[175px] w-[151px]" />
            <img src={World5} alt="" className="md:w-[175px] w-[151px]" />
          </div>
          <button className="bg-fadedBlue text-lightWhite flex items-center text-center p-3 pt-2 px-6 ">
            More Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transportation;
