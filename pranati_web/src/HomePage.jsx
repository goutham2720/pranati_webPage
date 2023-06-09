import React from "react";
import Navbar from "./components/Navigationbar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import WhatWeOffer from "./components/WhatWeOffer";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <WhatWeOffer />
      <ContactSection />
      <Footer />
    
    </>
  );
}

export default HomePage;
