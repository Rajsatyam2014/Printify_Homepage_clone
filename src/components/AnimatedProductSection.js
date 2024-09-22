import React from 'react';
import Lottie from 'react-lottie-player';
import { useInView } from 'react-intersection-observer';
import productAnimation from './lotties/productAnimation.json';

const AnimatedProductSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`animated-product-section bg-white flex items-center justify-center transition-transform duration-500 ${inView ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}
      style={{ height: '100vh' }} // Full height for desktop
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full">
        
        {/* Product Animation on the Left */}
        <div className="product-animation md:w-1/2 flex justify-center mb-8 md:mb-0 h-full">
          <Lottie
            loop
            animationData={productAnimation}
            play
            style={{ width: '80%', maxWidth: 600, height: 'auto' }}
            className="lottie-animation"
          />
        </div>

        {/* Text Content on the Right */}
        <div className="text-content md:w-1/2 text-center md:text-left flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Easily add your design to a wide range of products
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600">
            With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <p className="text-md md:text-lg mb-6 text-gray-600">
            Our platform offers a seamless experience, allowing you to create unique designs that will make your products stand out.
          </p>
          <p className="text-md md:text-lg mb-6 text-gray-600">
            Join us today and unleash your creativity!
          </p>
          <a href="#all-products" className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300 ease-in-out">
            All products &rarr;
          </a>
        </div>

      </div>
    </div>
  );
};

export default AnimatedProductSection;
