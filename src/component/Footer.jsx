import React from "react";
import Logo from "../assets/Logo.png";
import Email from "../assets/logo-email.png";
import Call from "../assets/logo-call.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="block w-full mt-20">
        <div className="foot"></div>
        <div className="bg-slate-300 flex  items-center pl-20 space-x-12 ">
          <img
            src={Logo}
            alt="TransportFlow Logistics Logo"
            className="bg-slate-600 p-3"
          />
        </div>
        <div className="flex bg-slate-600 text-white pl-0 md:pl-20 w-auto">
          <div className="flex flex-col space-y-7 p-7  pl-20 md:pl-5">
            <div className="lg:w-52 w-full font-mono text-gray-400">
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy collaborative thinking to further the overall value
                proposition.
              </p>
            </div>

            <div className="flex space-x-1">
              <img src={Call} alt="Email Icon" />
              <div className="flex flex-col">
                <p>Email:</p>
                <p>contact@Logistics.com</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <img src={Email} alt="Phone Icon" />
              <div className="flex flex-col">
                <p>Call us:</p>
                <p>+01(222451)</p>
              </div>
            </div>
          </div>
          <div className="justify-center hidden lg:flex w-full space-x-20">
            <div className="pt-7">
              <h1 className="font-semibold space-y-7 text-1xl">PAGES</h1>
              <ul>
                <li className="font-mono text-gray-400">About</li>
                <li className="font-mono text-gray-400">Study Guide</li>
                <li className="font-mono text-gray-400">OUR Team</li>
                <li className="font-mono text-gray-400">Chargelog</li>
                <li className="font-mono text-gray-400">Our Projects</li>
              </ul>
            </div>

            <div className="pt-7">
              <h1 className="font-semibold space-y-7 text-1xl">UTILITY</h1>
              <ul>
                <li className="font-mono text-gray-400">Lincenses</li>
                <li className="font-mono text-gray-400">Pricing</li>
                <li className="font-mono text-gray-400">Protected</li>
                <li className="font-mono text-gray-400">Contacts</li>
                <li className="font-mono text-gray-400">Not Found</li>
              </ul>
            </div>

            <div className="flex flex-col  pt-7 space-y-3 mb-10">
              <div className="font-semibold  text-1xl">
                <h1>SUBSCRIBE</h1>
              </div>
              <div className="pt-2">
                <input type="text" placeholder="Email here" />
              </div>
              <div className="pt-2">
                <button className="bg-lightYellow text-black font-semibold w-full">
                  Send Now
                </button>
              </div>
              <div className="pt-2 flex space-x-5">
                <a href="https://www.facebook.com">
                  <FaFacebook />
                </a>
                <a href="https://www.twitter.com">
                  <FaXTwitter />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagramSquare />
                </a>
                <a href="https://www.linkedin.com">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
