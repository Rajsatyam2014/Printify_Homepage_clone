import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';
import animationData from './lotties/sales.json'; // Lottie animation JSON file

const TalkSales = () => {
  const salesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect when the Talk to Sales section is in view
  useEffect(() => {
    const handleScroll = () => {
      const salesTop = salesRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (salesTop < windowHeight && salesTop > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={salesRef}
      className={isVisible ? 'slide-down' : ''}
      style={styles.salesSection}
    >
      <h3 style={styles.salesTitle}>Are you a large business looking for custom solutions?</h3>
      <p style={styles.description}>
        We provide tailored, scalable solutions for businesses ready to grow. With our platform, you can seamlessly integrate, automate, and boost your business efficiency. Partner with us to unlock new possibilities.
      </p>
      <p style={styles.highlight}>
        Let’s talk about how we can help you achieve your business goals faster and smarter.
      </p>
      <div style={styles.salesButtonContainer}>
        <Lottie animationData={animationData} play style={styles.lottieAnimation} />
        <button style={styles.salesButton}>Talk to Sales</button>
      </div>
    </section>
  );
};

const styles = {
  salesSection: {
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
    textAlign: 'center',
    padding: '4rem 1rem',
    opacity: 0,
    transform: 'translateY(-50px)', // Initial slide in position
  },
  salesTitle: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#333333',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555555',
    maxWidth: '600px',
    marginBottom: '1rem',
  },
  highlight: {
    fontSize: '1.3rem',
    color: '#007bff',
    fontWeight: '700',
    maxWidth: '600px',
    marginBottom: '2rem',
  },
  salesButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  salesButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background-color 0.3s ease',
  },
  lottieAnimation: {
    width: '150px',
    height: '150px',
  },
};

// CSS for sliding in from the top
const slideDownKeyframes = `
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = slideDownKeyframes;
document.head.appendChild(styleSheet);

// CSS class for sliding in from the top
const slideDownClass = `
  .slide-down {
    animation: slide-down 0.8s ease-out forwards;
  }
`;

const slideDownStyleSheet = document.createElement('style');
slideDownStyleSheet.type = 'text/css';
slideDownStyleSheet.innerText = slideDownClass;
document.head.appendChild(slideDownStyleSheet);

export default TalkSales;
