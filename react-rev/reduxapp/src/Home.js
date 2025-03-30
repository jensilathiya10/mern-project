import React from 'react';
import HeroSection from './components/Herosection';
import ShippingInfo from './components/Shippinginfo';
import HandpickedSection from './components/HandpickedSection';
import SummerCollection from './components/SummerCollection';
import BrandsSection from './components/BrandsSection';
import CustomerTestimonials from './components/CustomerTestimonials';

function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <ShippingInfo />
      <HandpickedSection />
      <SummerCollection />
      <BrandsSection />
      <CustomerTestimonials />
      {/* <h1>hello</h1> */}
    </div>
  );
}

export default Home;