import React, { useEffect, useRef } from 'react';

const ConnectStore = () => {
  const platforms = [
    {
      name: 'BigCommerce',
      imgSrc: 'https://cdn.icon-icons.com/icons2/3911/PNG/512/bigcommerce_logo_icon_247476.png',
      alt: 'BigCommerce',
    },
    {
      name: 'Shopify',
      imgSrc: 'https://w7.pngwing.com/pngs/833/276/png-transparent-e-commerce-shopify-logo-web-design-magento-shopping-cart-grass-business-internet.png',
      alt: 'Shopify',
    },
    {
      name: 'WooCommerce',
      imgSrc: 'https://banner2.cleanpng.com/20180928/lt/kisspng-computer-icons-e-commerce-woocommerce-portable-net-social-media-commerce-icon-1713932406564.webp',
      alt: 'WooCommerce',
    },
    {
      name: 'Squarespace',
      imgSrc: 'https://th.bing.com/th/id/OIP.hbSR8npez49fREsvGRtjYQHaGZ?rs=1&pid=ImgDetMain',
      alt: 'Squarespace',
    },
    {
      name: 'Wix',
      imgSrc: 'https://th.bing.com/th/id/OIP.5o_v750rPwoW2HPdRpHLlQHaEK?rs=1&pid=ImgDetMain',
      alt: 'Wix',
    },
    {
      name: 'Etsy',
      imgSrc: 'https://th.bing.com/th/id/OIP.8PM-ISJZkBr_G_ajP1o9ZwHaHa?rs=1&pid=ImgDetMain',
      alt: 'Etsy',
    },
    {
      name: 'API',
      imgSrc: 'https://www.shutterstock.com/shutterstock/photos/2188624445/display_1500/stock-vector-api-application-interface-icon-black-vector-graphics-2188624445.jpg',
      alt: 'API',
    },
    {
      name: 'PrestaShop',
      imgSrc: 'https://www.svgrepo.com/show/306598/prestashop.svg',
      alt: 'PrestaShop',
    },
  ];

  const platformsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          } else {
            entry.target.classList.remove('slide-in');
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the logo is visible
    );

    const platformsElements = document.querySelectorAll('.platform-logo');
    platformsElements.forEach((el) => observer.observe(el));

    return () => {
      platformsElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Connect Your Store</h2>
      <p style={styles.description}>
        Integrate easily with major e-commerce platforms and marketplaces.
      </p>

      <div style={styles.logoContainer}>
        {/* Central Printify logo */}
        <div style={styles.centralLogo}>
          <img
            src="https://th.bing.com/th/id/OIP.cwA_sO58WTx6imuS3ZT7tQAAAA?rs=1&pid=ImgDetMain"
            alt="Printify Logo"
            style={styles.logoImage}
          />
        </div>

        {/* Logos */}
        <div style={styles.platforms} ref={platformsRef}>
          {platforms.map((platform) => (
            <div key={platform.name} className="platform-logo" style={styles.platformLogo}>
              <img
                src={platform.imgSrc}
                alt={platform.alt}
                style={styles.logoImage}
              />
              <span style={styles.logoText}>{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    padding: '4rem 1rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555555',
    marginBottom: '2rem',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  centralLogo: {
    marginBottom: '3rem',
  },
  logoImage: {
    height: '5rem',
    width: '5rem',
    transition: 'transform 0.2s',
  },
  platforms: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    maxWidth: '900px',
  },
  platformLogo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, opacity 0.3s',
    width: '120px',
    cursor: 'pointer',
    opacity: 0,
    transform: 'translateY(20px)',
  },
  logoText: {
    fontSize: '1rem',
    color: '#333333',
    marginTop: '0.5rem',
    fontWeight: '600',
  },
};

// Keyframes for animations
const slideInKeyframes = `
  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Append keyframes to the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = slideInKeyframes;
document.head.appendChild(styleSheet);

// CSS class for sliding in
const slideInClass = `
  .slide-in {
    animation: slide-in 0.5s forwards;
  }
`;

const slideInStyleSheet = document.createElement('style');
slideInStyleSheet.type = 'text/css';
slideInStyleSheet.innerText = slideInClass;
document.head.appendChild(slideInStyleSheet);

export default ConnectStore;
