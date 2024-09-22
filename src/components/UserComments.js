import React, { useEffect, useState } from 'react';

// Inline styles and keyframes for sliding and fading in
const fadeSlideInKeyframes = `
  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const UserComments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const comments = [
    {
      text: "Printify has been an incredible service for us musicians unable to keep large amounts of inventory...",
      author: "- Robert A. Voltaire",
      rating: "★★★★★",
      image: "https://th.bing.com/th/id/OIP.7bjUDOYwzVAKu9IgM0sPygHaHa?rs=1&pid=ImgDetMain",
    },
    {
      text: "We chose Printify because of their offerings and their incredibly low prices...",
      author: "- Quinten Barney, Etsy Merchant",
      rating: "★★★★★",
      image: "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA",
    },
    // Add more comments here
  ];

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(fadeSlideInKeyframes, styleSheet.cssRules.length);

    const onScroll = () => {
      const commentsSection = document.querySelector('.comments-section');
      const sectionPos = commentsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight;

      if (sectionPos < screenPos) {
        commentsSection.style.animation = 'fadeSlideIn 0.6s ease-out forwards';
      }
    };

    window.addEventListener('scroll', onScroll);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 8000); // Change comment every 8 seconds

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(interval);
    };
  }, [comments.length]);

  return (
    <section className="comments-section" style={styles.section}>
      <h2 style={styles.title}>Trusted by over 8M sellers around the world</h2>
      <div className="slider" style={styles.slider}>
        {comments.map((comment, index) => (
          <div
            key={index}
            className="comment"
            style={{
              ...styles.comment,
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          >
            <img src={comment.image} alt="User" style={styles.image} />
            <p style={styles.text}>{comment.text}</p>
            <span style={styles.author}>{comment.author}</span>
            <div style={styles.rating}>{comment.rating}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'white',
    padding: '60px 20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderTop: '5px solid #4CAF50',
  },
  title: {
    fontSize: '28px',
    marginBottom: '30px',
    fontWeight: 'bold',
    color: '#333',
  },
  slider: {
    position: 'relative',
    height: '350px', // Increased height for better mobile view
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  comment: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    transition: 'opacity 0.5s ease',
  },
  image: {
    borderRadius: '50%',
    width: '100px', // Adjusted size for mobile view
    height: '100px', // Adjusted size for mobile view
    marginBottom: '15px',
    border: '3px solid #4CAF50',
    objectFit: 'cover', // Ensures the image is properly contained
  },
  text: {
    fontSize: '16px',
    margin: '10px 0',
    color: '#555',
    lineHeight: '1.5',
    textAlign: 'center',
  },
  author: {
    fontSize: '14px',
    fontStyle: 'italic',
    marginBottom: '5px',
    color: '#777',
  },
  rating: {
    fontSize: '18px',
    color: '#FFD700',
  },
};

export default UserComments;
