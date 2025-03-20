import React, { useState } from "react";
import img1 from "/supercrete.png";
import img2 from "/supercrete-plus.png";
import img3 from "/holcim.png";
import img4 from "/holcim water protect.png";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

function Hero() {
  const [index, setIndex] = useState(0);
  const imgSrc = [img1, img2, img3, img4];

  const nextSlide = () => {
    if (index >= imgSrc.length - 1) {
      setIndex(0);
    } else {
      let newIndex = index + 1;
      setIndex(newIndex);
    }
  };

  const prevSlide = () => {
    if (index <= 0) {
      setIndex(imgSrc.length - 1);
    } else {
      let newIndex = index - 1;
      setIndex(newIndex);
    }
  };

  return (
    <section
      id="hero"
      className="md:h-[calc(100vh+84px)] max-md:flex flex-col-reverse grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 py-10 md:snap-start"
    >
      <div className="flex flex-col justify-end max-md:justify-end md:justify-center pl-0 lg:pl-16">
        <h3 className="font-mono text-3xl md:text-4xl font-medium mb-4">
          Your Trusted Dealer for Lafarge Holcim in Osmaninagar
        </h3>

        <p className="text-sm md:text-base text-gray-600">
          At HASSAN ENTERPRISE, we are proud to be a trusted dealer of Lafarge
          Holcim products in Osmaninagar. With a reputation for quality and
          reliability, we provide top-notch construction materials and solutions
          to meet the needs of both residential and commercial projects. Whether
          you're building your dream home or a large-scale development, we are
          your go-to source for Lafarge Holcim products, ensuring you receive
          the best in durability and performance.
        </p>

        <a href="#contact" className="mt-4 px-4 py-2 bg-[#1e8142] text-white font-medium w-32 text-center rounded-sm">Contact US</a>
      </div>

      <div className="flex justify-center items-center select-none relative max-md:mb-2 ">
        <BiLeftArrowAlt
          size={"48px"}
          cursor="pointer"
          onClick={prevSlide}
          className="absolute left-0 md:left-4 z-10"
        />
        <img
          src={imgSrc[index]}
          alt="Slide"
          className="w-full max-w-[400px] md:max-w-[500px] object-contain"
        />
        <BiRightArrowAlt
          size={"48px"}
          cursor="pointer"
          onClick={nextSlide}
          className="absolute right-0 md:right-4 z-10"
        />
      </div>
    </section>
  );
}

export default Hero;
