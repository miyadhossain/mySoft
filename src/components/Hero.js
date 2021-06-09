import React from "react";
import showcase from "../images/homepage/header1.jpg";
// import { FaChevronRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="hero xl:mx-20">
      <div>
        <img className="hero-img" src={showcase} alt="" />
      </div>
      <div className="overlay bg-gray-200 text-center p-10 sm:bg-transparent sm:text-left">
        <p className="bg-white inline-block py-1 px-5 text-green-700 font-bold mb-3">
          Countdown Sales
        </p>
        <h1 className="font-bold text-2xl text-white mb-2">
          Bundle and save up to $430
        </h1>
        <p className="text text-white">
          Complete your Surface Pro 7 with choice of select Type Cover and free
          sleeve
        </p>
        <button className="bg-green-600 text-white py-2 px-4 mt-3 hover:bg-black sm:inline-block">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
