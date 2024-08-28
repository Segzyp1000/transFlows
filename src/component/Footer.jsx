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
      <footer className="container max-w-full mt-20">
        <div className="foot"></div>
        <div className="bg-fadedBlue text-white flex flex-row items-center pl-20 space-x-12 ">
          <img
            src={Logo}
            alt="TransportFlow Logistics Logo"
            className="bg-bgButton p-3"
          />
        </div>
        <div className="flex flex-row bg-bgButton text-white pl-0 md:pl-20 w-auto">
          <div className="flex flex-col space-y-7 p-7  pl-20 md:pl-5">
            <div className="w-52">
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy collaborative thinking to further the overall value
                proposition.
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <img src={Call} alt="Email Icon" />
              <div className="flex flex-col">
                <p>Email:</p>
                <p>contact@Logistics.com</p>
              </div>
            </div>
            <div className="flex space-x-1 items-center">
              <img src={Email} alt="Phone Icon" />
              <div className="flex flex-col">
                <p>Call us:</p>
                <p>+01(222451)</p>
              </div>
            </div>
          </div>
          <div className="hidden flex-row md:flex">
            <div className="pl-10 pt-7">
              <a href="#" className="font-bold space-y-7">
                Pages
              </a>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Study Guide</a>
                </li>
                <li>
                  <a href="#">OUR Team</a>
                </li>
                <li>
                  <a href="#">Chargelog</a>
                </li>
                <li>
                  <a href="#">Our Projects</a>
                </li>
              </ul>
            </div>

            <div className="pl-10 pt-7">
              <a href="#" className="font-bold space-y-7">
                Utility
              </a>
              <ul>
                <li>
                  <a href="#">Lincenses</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Protected</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
                <li>
                  <a href="#">Not Found</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col pl-10 pt-7">
              <div className="font-bold">
                <a href="#">Subscribe</a>
              </div>
              <div className="pt-2">
                <input type="text" placeholder="Email here" />`{" "}
              </div>
              <div className="pt-2">
                <button className="bg-lightYellow text-black">Send Now</button>
              </div>
              <div className="pt-2 flex space-x-2">
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
