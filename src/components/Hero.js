import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col lg:flex-row justify-center items-center lg:space-x-16 px-8 py-20">
      <div className="max-w-lg text-center lg:text-left mb-12 lg:mb-0 animate-fade-in-up">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          Create and Sell Custom Products Effortlessly
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Join the largest global print network and start selling high-quality products.
        </p>
        <ul className="text-gray-700 text-md mb-8 space-y-3">
          <li>✔️ 100% Free to Use</li>
          <li>✔️ 900+ Premium Quality Products</li>
          <li>✔️ Largest Global Print Network</li>
        </ul>
        <div className="space-x-4 flex flex-col sm:flex-row">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105">
            Start for Free
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-transform transform hover:scale-105">
            How it Works?
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          src="https://cdn.dribbble.com/users/97383/screenshots/1344461/media/03ddc4e650b95f84658d3c12467cf91d.gif"
          alt="T-shirt design"
          className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl transition-transform transform hover:scale-110 hover:rotate-2"
        />
      </div>
    </div>
  );
};

export default Hero;
