// src/Components/Main.jsx
import React from "react";

const Main = () => {
  return (
    <div className="bg-[#f0f6f9] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
          Your Logo on the Best <br /> Garments in the Industry
        </h1>
        <p className="text-gray-700 mb-6">
          Hand-Picked so you don’t have to. <br />
          Because we know you’re Busy.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 text-sm font-semibold rounded hover:bg-red-700 transition">
          Order Now
        </button>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="src/assets/Screenshot2025-06-13131027.png"
          alt="Hero"
          className="w-[280px] md:w-[350px] lg:w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Main;
