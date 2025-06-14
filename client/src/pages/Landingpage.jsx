// src/pages/Landing.jsx
import React from "react";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/How";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Landing() {
  return (
    <div>
      <Navbar/>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">MedChain</h1>
        <p className="text-xl mb-6 max-w-xl">
          Decentralized, Patient-Controlled Medical Records on the Blockchain.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
          Connect Wallet
        </button>
      </section>

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
