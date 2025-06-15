// src/pages/Landing.jsx
import React from "react";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/How";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/Hero";
import AboutUs from "../components/Aboutus/About";

export default function Landing() {
  return (
    <div>
      <Navbar/>
      

       <HeroSection />
        <AboutUs />
      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
