import React from 'react';

export default function HowItWorks() {
  const steps = [
    { 
      title: "Connect Wallet", 
      description: "Authenticate with Web3 wallet for decentralized identity",
      icon: "🔐",
      shape: "cube",
      color: "purple"
    },
    { 
      title: "Upload Records", 
      description: "Encrypted files stored on IPFS with blockchain hashes",
      icon: "📁",
      shape: "pyramid",
      color: "blue"
    },
    { 
      title: "Share Access", 
      description: "Grant time-limited permissions via smart contracts",
      icon: "👥",
      shape: "cylinder",
      color: "teal"
    },
    { 
      title: "Emergency QR", 
      description: "Offline-accessible critical medical information",
      icon: "⚡", 
      shape: "sphere",
      color: "pink"
    }
  ];

  const colorMap = {
    purple: {
      bg: "bg-purple-600",
      gradient: "from-purple-600 to-indigo-600",
      text: "text-purple-400",
      border: "border-purple-500",
      light: "purple-400",
      dark: "purple-600"
    },
    blue: {
      bg: "bg-blue-600",
      gradient: "from-blue-600 to-cyan-600",
      text: "text-blue-400",
      border: "border-blue-500",
      light: "blue-400",
      dark: "blue-600"
    },
    teal: {
      bg: "bg-teal-600",
      gradient: "from-teal-600 to-emerald-600",
      text: "text-teal-400",
      border: "border-teal-500",
      light: "teal-400",
      dark: "teal-600"
    },
    pink: {
      bg: "bg-pink-600",
      gradient: "from-pink-600 to-rose-600",
      text: "text-pink-400",
      border: "border-pink-500",
      light: "pink-400",
      dark: "pink-600"
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Main neural paths */}
          <path 
            d="M10,50 Q25,20 40,50 T70,50 T90,30" 
            stroke="url(#neural-gradient)" 
            strokeWidth="0.3" 
            fill="none"
            strokeDasharray="0.5 0.3"
          />
          <path 
            d="M10,70 Q25,40 40,70 T70,70 T90,50" 
            stroke="url(#neural-gradient)" 
            strokeWidth="0.3" 
            fill="none"
            strokeDasharray="0.5 0.3"
          />
          
          {/* Neuron nodes */}
          <circle cx="40" cy="50" r="1.5" fill="url(#neuron-glow)" className="animate-pulse" />
          <circle cx="70" cy="50" r="1.5" fill="url(#neuron-glow)" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
          
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <radialGradient id="neuron-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Floating gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl animate-float-1"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl animate-float-2"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Securely manage medical records on blockchain
          </p>
        </div>

        {/* Blockchain-inspired timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Blockchain connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2">
            <div className="relative h-full w-full">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-2 w-6 bg-purple-600"
                  style={{ left: `${i * 5}%` }}
                >
                  <div className="absolute -top-1 left-0 w-2 h-4 bg-blue-600"></div>
                  <div className="absolute -top-1 right-0 w-2 h-4 bg-teal-600"></div>
                </div>
              ))}
            </div>
          </div>
          
          {steps.map((step, index) => {
            const colors = colorMap[step.color];
            return (
              <div 
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Blockchain node indicator */}
                <div className={`hidden lg:block absolute top-1/2 -left-8 w-16 h-16 rounded-full bg-gradient-to-br ${colors.gradient} opacity-70 group-hover:opacity-100 transform -translate-y-1/2 transition-all duration-300`}>
                  <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center text-xl">
                    {step.icon}
                  </div>
                </div>

                {/* Content block - styled like a blockchain block */}
                <div className={`pt-12 pb-8 px-6 bg-gray-800/90 border-l-4 ${colors.border} rounded-lg shadow-2xl hover:shadow-lg hover:shadow-${colors.light}/20 transition-all duration-300 relative overflow-hidden`}>
                  {/* Block hash decoration */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20"></div>
                  
                  {/* Block header */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${colors.gradient}`}></div>
                  
                  {/* Block number */}
                  <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                    0{index+1}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                      <span className={`w-3 h-3 rounded-full bg-${colors.light} mr-2`}></span>
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                    
                    {/* Transaction-like decoration */}
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center text-xs text-gray-500">
                        <span className={`w-2 h-2 rounded-full bg-${colors.light} mr-2`}></span>
                        <span className="font-mono">tx_hash: {Math.random().toString(16).substr(2, 8)}...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -30px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(25px, 15px); }
        }
        .animate-float-1 {
          animation: float-1 15s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}