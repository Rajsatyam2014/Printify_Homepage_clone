import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import moneyAnimation from './lotties/money.json'; // Replace with the actual path to your Lottie file

const ProfitSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('profit-section');
      const sectionPos = section.getBoundingClientRect().top;
      const screenPos = window.innerHeight;

      if (sectionPos < screenPos && !isVisible) {
        setIsVisible(true);
        setIsAnimationPlaying(true); // Start animation when section is visible
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <section id="profit-section" style={styles.section}>
      <div
        style={{
          ...styles.container,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
        }}
      >
        <Lottie
          animationData={moneyAnimation}
          style={styles.animation}
          loop={false} // Animation will not loop
          play={isAnimationPlaying} // Play animation when section is visible
          onComplete={() => setIsAnimationPlaying(false)} // Stop after one play
        />
        <div style={styles.profitContainer}>
          <h2 style={styles.title}>Make Money, Risk-Free</h2>
          <p style={styles.description}>
            You pay for fulfillment only when you make a sale
          </p>
          <div style={styles.productInfo}>
            <h3 style={styles.productTitle}>You sell a t-shirt</h3>
            <div style={styles.priceContainer}>
              <span style={styles.price}>$30</span>
              <span style={styles.productionCost}> - $12</span>
            </div>
            <h3 style={styles.profit}>
              Your profit: <span style={styles.profitAmount}>$18</span>
            </h3>
          </div>
          <button style={styles.button}>Start Selling</button>
          <p style={styles.freeText}>
            100% Free to use · 900+ Products · Largest print network
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#f9f9f9',
    padding: '40px 20px',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  animation: {
    width: '350px', // Increased size for visibility
    height: '350px',
    marginRight: '40px', // Space between animation and text
  },
  profitContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: '10px',
    padding: '20px',
    color: 'white',
    flex: 1,
    maxWidth: '500px',
    textAlign: 'left',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  productInfo: {
    margin: '20px 0',
  },
  productTitle: {
    fontSize: '24px',
  },
  priceContainer: {
    fontSize: '20px',
    margin: '10px 0',
  },
  price: {
    fontWeight: 'bold',
  },
  productionCost: {
    color: '#d9534f', // Red color for cost
  },
  profit: {
    fontSize: '22px',
    margin: '10px 0',
  },
  profitAmount: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    color: '#4CAF50',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.3s',
    marginTop: '10px',
  },
  freeText: {
    fontSize: '16px',
    marginTop: '20px',
  },
};

export default ProfitSection;
