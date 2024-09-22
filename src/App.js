import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/FeaturesSection';
import AnimatedProductSection from './components/AnimatedProductSection';
import ProductShowcase from './components/ProductShowcase';
import ConnectStore from './components/ConnectStore';
import TalkSales from './components/TalkSales';
import UserComments from './components/UserComments';
import ProfitSection from './components/ProfitSection';
import ContactSection from './components/ContactSection';
import IntegrationsSection from './components/IntegrationsSection'; 
import Footer from './components/footer';  // Import the Footer component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <AnimatedProductSection />
      <ProductShowcase />
      <ConnectStore />
      <TalkSales />
      <UserComments />
      <ProfitSection />
      <ContactSection />
      <IntegrationsSection />
      <Footer />  {/* Add Footer at the end */}
    </div>
  );
}

export default App;
