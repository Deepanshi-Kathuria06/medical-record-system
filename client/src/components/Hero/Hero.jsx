import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background blob animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full opacity-30 blur-3xl animate-blob top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000 top-[200px] right-[-150px]"></div>
        <div className="absolute w-[600px] h-[600px] bg-pink-500 rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000 bottom-[-100px] left-[150px]"></div>
      </div>

      {/* Hero Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Own Your Health Records with MedChain
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Decentralized, secure, and patient-controlled medical record management using blockchain.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
