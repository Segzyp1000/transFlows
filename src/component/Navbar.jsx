import React from "react";
import Logo from "../assets/Logo.png";
import Icon from "../assets/logo-icon.png";
import Email from "../assets/logo-call.png";
import Call from "../assets/logo-email.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const nav = document.querySelector("nav");
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > nav.offsetHeight) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  return (
    <div>
      <nav className="relative bg-darkBlue p-6">
        <div className=" flex items-center justify-between md:mx-14 mx-auto">
          {/* <!-- logo --> */}
          <div className="pt-2">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          {/* <!-- desktop menu --> */}
          <div className=" hidden lg:flex space-x-5 items-center text-lightWhite">
            {/* <!-- contact info --> */}
            <div className="flex space-x-1 items-center">
              <img src={Icon} alt="Clock Icon" />
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
                <p>Call us:</p>
                <p>+01(222451)</p>
              </div>
            </div>
          </div>
          <div>
            <button
              id="menu-btn"
              className="hamburger focus:outline-none"
              onClick={toggleMenu}
              style={{
                display: windowWidth >= 1024 ? "none" : "block",
              }}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>
        {/* mobile menu  */}
        <div
          id="menu"
          className={`${
            isOpen ? "flex" : "hidden"
          } ggg absolute flex-col items-center self-end py-8 mt-20 lg:mt-32 space-y-12 font-bold bg-white w-full sm:self-center left-0 right-6 drop-shadow-md`}
        >
          {/* <!-- contact info --> */}
          <div className="flex space-x-1 items-center">
            <img src={Call} alt="Phone Icon" />
            <div className="flex flex-col">
              <p>Call us:</p>
              <p>+01(222451)</p>
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
            <img src={Icon} alt="Clock Icon" />
            <div className="flex flex-col">
              <p>9.00 -18.00</p>
              <p>Sunday Closed</p>
            </div>
          </div>
          {/* <!-- social media --> */}
          <div className="space-x-5 flex">
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
      </nav>
      <header className="mx-auto max-w-full bg-fadedBlue sticky">
        <div className="flex items-center justify-between sm:mx-0 md:mx-20">
          <div className="flex space-x-5 md:p-0 p-5 text-lightWhite">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#pages">Pages</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
          </div>
          <div className="hidden lg:flex space-x-5  pb-3 mt-3 text-lightWhite">
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
          <div>
            <p className="lg:flex hidden mr-24  text-black font-bold  bg-white p-4 ">
              Request Quote
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
