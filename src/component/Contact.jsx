import React from "react";
import Date from "../assets/logo-icon.png";
import Email from "../assets/logo-email.png";
import Call from "../assets/logo-call.png";

function Contact() {
  return (
    <div>
      <div className="flex flex-col" id="contacts">
        <div className="flex flex-col md:flex-row h-auto bg-bgButton text-white mt-20  p-6">
          <div className="flex flex-col space-y-6 mx-7 w-72">
            <p>Contacts</p>
            <h1 className="font-bold text-2xl">Get In Touch With Us</h1>
            <div className="flex space-x-1 items-center">
              <img src={Date} />
              <div className="flex flex-col">
                <p>9.00 -18.00</p>
                <p>Sunday Closed</p>
              </div>
            </div>
            <div className="flex space-x-1 items-center">
              <img src={Email} alt="Email Icon" />
              <div className="flex flex-col">
                <p>Email:</p>
                <p>contact@Logistics.com</p>
              </div>
            </div>
            <div className="flex space-x-1 items-center">
              <img src={Call} alt="Phone Icon" />
              <div className="flex flex-col">
                <p>Call us</p>
                <p>:+01(222451)</p>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
            <div className="mt-8 max-w-md">
              <div className="grid grid-cols-2 gap-6">
                <label className="block">
                  <input
                    type="text"
                    className="mt-1 block w-full bg-transparent  border-2 border-slate-500 text-white p-3"
                    placeholder="Name*"
                  />
                </label>
                <label className="block">
                  <input
                    type="email"
                    className="mt-1 block w-full bg-transparent  border-2 border-slate-500 text-white p-3"
                    placeholder="Email*"
                  />
                </label>
                <label className="block">
                  <input
                    type="number"
                    className="mt-1 block w-full bg-transparent  border-2 border-slate-500 text-white p-3"
                    placeholder="Phone Number*"
                  />
                </label>
                <label className="block">
                  <input
                    type="text"
                    className="mt-1 block w-full bg-transparent  border-2 border-slate-500 text-white p-3"
                    placeholder="City*"
                  />
                </label>
              </div>
              <div className="max-w-full  block mt-5">
                <label>
                  <textarea
                    className="mt-1 block w-full  bg-transparent  border-2 border-slate-500 text-white  p-3"
                    placeholder="Your Message"
                    rows="3"
                  ></textarea>
                </label>
              </div>

              <div className="max-w-full text-center p-3 mt-8 text-white bg-lightYellow hover:bg-gray-500">
                <a href="#">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
