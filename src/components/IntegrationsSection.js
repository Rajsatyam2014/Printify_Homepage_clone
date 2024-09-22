import React from 'react';

const integrations = [
  'Shopify',
  'Etsy',
  'eBay',
  'Amazon',
  'TikTok Shop',
  'PrestaShop',
  'BigCommerce',
  'Wix',
  'WooCommerce',
  'Squarespace',
  'Printify API',
  'Printify Pop-Up Store',
  'Shutterstock',
];

const resources = [
  'Discover',
  'Blog',
  'Guides',
  'Products',
  'Etsy print-on-demand',
  'Shopify print-on-demand',
  'Woocommerce print-on-demand',
  'Wix print-on-demand',
  'Squarespace print-on-demand',
  'Make Your Own Shirt',
];

const customProducts = [
  'Custom T-shirts',
  'Custom Hoodies',
  'Custom Mugs',
  'Custom Socks',
  'Custom Backpacks',
  'Custom Branding',
];

const IntegrationsSection = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Integrations</h2>
      <div style={styles.gridContainer}>
        <div style={styles.listContainer}>
          <h3>Platforms</h3>
          <ul style={styles.list}>
            {integrations.map((item) => (
              <li key={item} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={styles.listContainer}>
          <h3>Resources</h3>
          <ul style={styles.list}>
            {resources.map((item) => (
              <li key={item} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={styles.listContainer}>
          <h3>Custom Products</h3>
          <ul style={styles.list}>
            {customProducts.map((item) => (
              <li key={item} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  listContainer: {
    flex: '1 1 30%',
    minWidth: '200px',
    marginBottom: '20px',
    textAlign: 'left',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '20px',
    color: '#555',
    margin: '10px 0',
  },
  // Media Queries for responsive text size
  '@media (max-width: 768px)': {
    title: {
      fontSize: '24px', // Reduce title size on smaller screens
    },
    listItem: {
      fontSize: '16px', // Reduce list item size on smaller screens
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '20px', // Further reduce title size on very small screens
    },
    listItem: {
      fontSize: '14px', // Further reduce list item size on very small screens
    },
  },
};

export default IntegrationsSection;
