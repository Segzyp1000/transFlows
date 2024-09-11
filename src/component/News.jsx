import React from "react";
import Blog1 from "../assets/blog1.png";
import Date1 from "../assets/Date1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Date2 from "../assets/Date2.png";
import Date3 from "../assets/Date3.png";

function News() {
  return (
    <div
      className="flex flex-col flex-wrap overflow-auto justify-center items-center md:mx-20 mx-auto text-center mt-20 space-y-5 md:space-y-2"
      id="pages"
    >
      <div className="text-center space-y-5 md:space-y-2">
        <p>Our Blog</p>
        <h2 className="font-bold text-2xl">Our Latest News</h2>
      </div>
      <div className="flex space-x-6">
        <div>
          <img src={Blog1} alt="" className="md:flex hidden" />
        </div>
        <div>
          <img src={Date1} alt="" className="md:flex hidden" />
        </div>

        <div className="flex flex-col text-left">
          <p className="text-2xl">
            Inland freight a worthy solution for your business.
          </p>
          <p className="max-w-full font-thin">
            We are dedicated in creating added value for our customers by
            implementing modern technology in our work.
          </p>
          <ul>
            <li>Urgent transport solution</li>
            <li>Reliable & experienced staffs</li>
            <li>Urgent transport solution</li>
            <li>Reliable and experienced staffs</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row space-x-6">
        <div>
          <img src={Blog2} alt="" className="md:flex hidden" />
        </div>
        <div>
          <img src={Date2} alt="" className="md:flex hidden" />
        </div>

        <div className="flex flex-col text-left">
          <p className="text-2xl">
            Inland freight a worthy solution for your business.
          </p>
          <p className="max-w-full font-thin">
            We are dedicated in creating added value for our customers by
            implementing modern technology in our work.
          </p>
          <ul>
            <li>Urgent transport solution</li>
            <li>Reliable & experienced staffs</li>
            <li>Urgent transport solution</li>
            <li>Reliable and experienced staffs</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row space-x-6">
        <div>
          <img src={Blog3} alt="" className="md:flex hidden" />
        </div>
        <div>
          <img src={Date3} alt="" className="md:flex hidden" />
        </div>

        <div className="flex flex-col text-left">
          <p className="text-2xl">
            Inland freight a worthy solution for your business.
          </p>
          <p className="max-w-full font-thin">
            We are dedicated in creating added value for our customers by
            implementing modern technology in our work.
          </p>
          <ul>
            <li>Urgent transport solution</li>
            <li>Reliable & experienced staffs</li>
            <li>Urgent transport solution</li>
            <li>Reliable and experienced staffs</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-500 text-white font-bold p-2 mb-12">
        <button>More Work</button>
      </div>
    </div>
  );
}

export default News;
