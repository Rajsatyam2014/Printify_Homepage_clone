import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';
import 'tailwindcss/tailwind.css';
import createAnimationData from './lotties/create.json'; 
import sellAnimationData from './lotties/sell.json'; 
import fulfillAnimationData from './lotties/fulfill.json'; 

const LottieComponent = ({ animationData, isPlaying }) => {
  return (
    <Lottie
      loop
      play={isPlaying} // Ensure the animation plays based on prop
      animationData={animationData}
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid slice',
      }}
      height={150} // Adjust height
      width={150}  // Adjust width
    />
  );
};

const ProductShowcase = () => {
  const createRef = useRef(null);
  const sellRef = useRef(null);
  const fulfillRef = useRef(null);
  const [isVisible, setIsVisible] = useState({
    create: false,
    sell: false,
    fulfill: false,
  });

  useEffect(() => {
    const handleSlideFromTop = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.dataset.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleSlideFromTop, {
      threshold: 0.5,
    });

    if (createRef.current) observer.observe(createRef.current);
    if (sellRef.current) observer.observe(sellRef.current);
    if (fulfillRef.current) observer.observe(fulfillRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-auto bg-white flex items-center justify-center py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
        
        {/* CREATE */}
        <div
          ref={createRef}
          data-id="create"
          className={`${
            isVisible.create ? 'animate-slide-in-from-left' : 'opacity-0'
          } transition-opacity duration-500 ease-in-out transform`}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <LottieComponent animationData={createAnimationData} isPlaying={isVisible.create} />
            <h3 className="text-xl font-bold mt-4">Create</h3>
            <p className="text-gray-500 mt-2">
              Easily add your designs to a wide range of products using our free tools.
            </p>
          </div>
        </div>

        {/* SELL */}
        <div
          ref={sellRef}
          data-id="sell"
          className={`${
            isVisible.sell ? 'animate-slide-in-from-bottom' : 'opacity-0'
          } transition-opacity duration-700 ease-in-out transform delay-200`}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <LottieComponent animationData={sellAnimationData} isPlaying={isVisible.sell} />
            <h3 className="text-xl font-bold mt-4">Sell</h3>
            <p className="text-gray-500 mt-2">
              You choose the products, sale price, and where to sell.
            </p>
          </div>
        </div>

        {/* FULFILLMENT */}
        <div
          ref={fulfillRef}
          data-id="fulfill"
          className={`${
            isVisible.fulfill ? 'animate-slide-in-from-right' : 'opacity-0'
          } transition-opacity duration-1000 ease-in-out transform delay-400`}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <LottieComponent animationData={fulfillAnimationData} isPlaying={isVisible.fulfill} />
            <h3 className="text-xl font-bold mt-4">We Handle Fulfillment</h3>
            <p className="text-gray-500 mt-2">
              Once an order is placed, we automatically handle all the printing and delivery logistics.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductShowcase;
