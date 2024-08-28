import React from "react";
import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";

function Team() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-20 space-y-6">
        <p>The Transporter</p>
        <h1 className="font-bold text-2xl">Meet Expert Team</h1>
        <div className="flex flex-wrap justify-center items-center mt-10 space-x-2 space-y-2">
          <img
            src={Person1}
            alt=""
            className="lg:max-w-full md:w-[100] w-[200px]"
            // mt-[1250px] lg:mt-52 md:mt-[500px]
          />
          <img
            src={Person2}
            alt=""
            className="lg:max-w-full md:w-[100] w-[200px]"
          />
          <img
            src={Person3}
            alt=""
            className="lg:max-w-full md:w-[100] w-[200px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
