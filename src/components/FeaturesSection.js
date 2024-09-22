import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

// Import your Lottie animation JSON files
import higherProfitsAnimation from './lotties/higherProfits.json';
import robustScalingAnimation from './lotties/robustScaling.json';
import bestSelectionAnimation from './lotties/bestSelection.json';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState({
    higherProfits: false,
    robustScaling: false,
    bestSelection: false,
  });

  const higherProfitsRef = useRef(null);
  const robustScalingRef = useRef(null);
  const bestSelectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationName = entry.target.getAttribute('data-animation');
            setIsVisible((prevState) => ({
              ...prevState,
              [animationName]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const refs = {
      higherProfits: higherProfitsRef,
      robustScaling: robustScalingRef,
      bestSelection: bestSelectionRef,
    };

    Object.keys(refs).forEach((key) => {
      if (refs[key].current) {
        observer.observe(refs[key].current);
      }
    });

    return () => {
      Object.keys(refs).forEach((key) => {
        if (refs[key].current) {
          observer.unobserve(refs[key].current);
        }
      });
    };
  }, []);

  return (
    <div className="bg-white py-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Higher Profits */}
          <div
            className="flex flex-col items-center"
            ref={higherProfitsRef}
            data-animation="higherProfits"
          >
            <Lottie
              loop={false}
              animationData={higherProfitsAnimation}
              play={isVisible.higherProfits}
              style={{ width: '80%', maxWidth: 300, height: 'auto' }}
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Higher Profits</h3>
            <p className="text-gray-600 mt-2">
              We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
            </p>
          </div>

          {/* Robust Scaling */}
          <div
            className="flex flex-col items-center"
            ref={robustScalingRef}
            data-animation="robustScaling"
          >
            <Lottie
              loop={false}
              animationData={robustScalingAnimation}
              play={isVisible.robustScaling}
              style={{ width: '80%', maxWidth: 300, height: 'auto' }}
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Robust Scaling</h3>
            <p className="text-gray-600 mt-2">
              Easily handle peak holiday seasons with our wide network of partners and automatic routing functionality.
            </p>
          </div>

          {/* Best Selection */}
          <div
            className="flex flex-col items-center"
            ref={bestSelectionRef}
            data-animation="bestSelection"
          >
            <Lottie
              loop={false}
              animationData={bestSelectionAnimation}
              play={isVisible.bestSelection}
              style={{ width: '80%', maxWidth: 300, height: 'auto' }}
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Best Selection</h3>
            <p className="text-gray-600 mt-2">
              With 900+ products and top-quality brands, you can choose the best products for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
