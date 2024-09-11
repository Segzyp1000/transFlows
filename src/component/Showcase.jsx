import React from "react";

function Showcase() {
  return (
    <div>
      <section
        className="wrappers flex flex-col max-w-full space-y-0"
        id="home"
      >
        <div className="flex flex-col mb-32 mt-20 xsm:mx-0 sm:mx-0 md:mx-12 space-y-12 md:w-1/2 ">
          <p className="max-w-sm text-center mx-10 md:mx-20 bg-whitishBackground text-whiteishGray">
            Logistics & Supply Chain Solutions
          </p>
          <h1 className="max-w-md text-xl font-bold text-center md:text-5xl text-white">
            Your Gateway to any Destination in the World
          </h1>
          <p className="max-w-sm text-center text-white">
            Ula feugiat ut nulla consequat. Ut est lacus, molestie in arcu no,
            iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim
            diam interdum nulla, sed laoreet risus lectus.
          </p>
          <a
            href="#"
            className="max-w-sm text-center p-3 pt-2 px-6 mx-12 md:mx-0 text-white bg-lightYellow hover:bg-gray-500"
          >
            Explore More
          </a>
        </div>
      </section>
    </div>
  );
}

export default Showcase;
