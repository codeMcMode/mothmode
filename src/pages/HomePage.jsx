import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SoftwareSection from '../components/SoftwareSection';
import VSTSection from '../components/VSTSection';
import CloudApps from '../components/CloudApps';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-[#0a0a0c] min-h-screen text-[#e2e2e5] font-sans selection:bg-white/20 selection:text-white">
      <Header />
      <main>
        <Hero />
        <SoftwareSection />
        <VSTSection />
        <CloudApps />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
