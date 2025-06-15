import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Decentralized Storage",
      description: "Patient records secured on IPFS network with blockchain verification",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Patient Ownership",
      description: "Complete control with cryptographic keys and granular permissions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Emergency Access",
      description: "Critical information available offline via secure QR system",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
      color: "teal"
    }
  ];

  const colorMap = {
    purple: {
      bg: "bg-purple-600",
      gradient: "from-purple-600 to-indigo-600",
      text: "text-purple-400",
      border: "border-purple-500"
    },
    blue: {
      bg: "bg-blue-600",
      gradient: "from-blue-600 to-cyan-600",
      text: "text-blue-400",
      border: "border-blue-500"
    },
    teal: {
      bg: "bg-teal-600",
      gradient: "from-teal-600 to-emerald-600",
      text: "text-teal-400",
      border: "border-teal-500"
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
            Networked Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our decentralized architecture connects these powerful capabilities
          </p>
        </div>

        {/* Neural Network Feature Nodes */}
        <div className="relative h-[500px] md:h-[600px]">
          {features.map((feat, index) => {
            const colors = colorMap[feat.color];
            return (
              <div 
                key={index}
                className={`absolute ${index === 0 ? 'top-[15%] left-[10%] md:left-[20%]' : index === 1 ? 'top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'top-[75%] right-[10%] md:right-[20%]'} 
                transform transition-all duration-500 hover:scale-105`}
              >
                {/* Feature node */}
                <div className={`relative p-1 rounded-2xl bg-gradient-to-br ${colors.gradient}`}>
                  <div className="bg-gray-900 rounded-xl p-8 backdrop-blur-md border border-gray-800">
                    {/* Animated icon */}
                    <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center text-white mb-6 mx-auto transform transition-transform duration-700 hover:rotate-y-180`}>
                      {feat.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 text-center">{feat.title}</h3>
                    <p className="text-gray-400 text-center">{feat.description}</p>
                  </div>
                  
                  {/* Connection glow */}
                  <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 pointer-events-none`}></div>
                </div>
                
                {/* Neural connection lines */}
                {index < features.length - 1 && (
                  <svg 
                    className={`absolute hidden md:block ${index === 0 ? 'bottom-0 right-0 translate-x-1/2 translate-y-1/2' : 'top-0 left-0 -translate-x-1/2 -translate-y-1/2'} w-32 h-32`}
                    viewBox="0 0 100 100"
                  >
                    <path 
                      d={index === 0 ? "M10,90 Q50,30 90,10" : "M10,10 Q50,70 90,90"} 
                      stroke={`url(#${feat.color}-gradient)`} 
                      strokeWidth="2" 
                      fill="none"
                      strokeDasharray="4 3"
                    />
                  </svg>
                )}
              </div>
            );
          })}
          
          {/* Central neuron */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 animate-pulse shadow-lg shadow-purple-500/30"></div>
              <div className="absolute inset-0 rounded-full bg-purple-600/20 animate-ping" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Definitions */}
      <svg className="hidden">
        <defs>
          <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="teal-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animations */}
      <style jsx global>{`
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
        @keyframes rotate-y {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(180deg); }
        }
        .hover\:rotate-y-180:hover {
          animation: rotate-y 0.7s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;