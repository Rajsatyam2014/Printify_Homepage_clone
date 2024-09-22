import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.linksContainer}>
          <a href="/intellectual-property-policy" style={styles.link}>Intellectual Property Policy</a>
          <a href="/terms-of-service" style={styles.link}>Terms of Service</a>
          <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
          <a href="/security" style={styles.link}>Security</a>
        </div>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} Printify, Inc. All rights reserved. Created by Raj Satyam
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#fff',  // White background
    padding: '20px 0',
    color: '#333',  // Dark text
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
    boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)', // Light shadow for separation
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',  // Wrap the links on smaller screens
    gap: '15px',       // Space between links
    marginBottom: '10px',
  },
  link: {
    color: '#333',  // Dark color for links
    textDecoration: 'none',
    fontSize: '14px',
  },
  copyright: {
    fontSize: '14px',
    color: '#777',  // Slightly lighter color for the copyright text
    marginTop: '10px',
  },
  // Media queries for smaller screens
  '@media (max-width: 768px)': {
    link: {
      fontSize: '12px',
    },
    copyright: {
      fontSize: '12px',
    },
  },
};

export default Footer;
