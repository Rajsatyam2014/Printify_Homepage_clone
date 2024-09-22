import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import Lottie from 'react-lottie-player';
import contactAnimation from './lotties/contact.json'; // Replace with your Lottie file path

const ContactSection = () => {
  return (
    <section style={styles.section}>
      <Lottie
        animationData={contactAnimation}
        style={styles.animation}
        loop
        play
      />
      <h2 style={styles.title}>Get in Touch</h2>
      <p style={styles.description}>
        We would love to hear from you! Connect with us on social media.
      </p>
      <div style={styles.socialIcons}>
        <a href="https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram size={40} />
        </a>
        <a href="https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaTwitter size={40} />
        </a>
        <a href="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaFacebook size={40} />
        </a>
        <a href="https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaYoutube size={40} />
        </a>
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
  animation: {
    width: '200px',
    height: '200px',
    margin: '0 auto 20px',
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
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  icon: {
    color: '#4CAF50',
    transition: 'color 0.3s',
  },
};

export default ContactSection;
