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
      gradient: "from-purple-600 to-indigo-700",
      light: "purple-500",
      dark: "purple-800"
    },
    blue: {
      gradient: "from-blue-600 to-cyan-700",
      light: "blue-500",
      dark: "blue-800"
    },
    teal: {
      gradient: "from-teal-600 to-emerald-700", 
      light: "teal-500",
      dark: "teal-800"
    },
    pink: {
      gradient: "from-pink-600 to-rose-700",
      light: "pink-500",
      dark: "pink-800"
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      {/* Animated 3D background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Floating isometric shapes */}
        <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-purple-900/30 transform rotate-45 skew-y-12 animate-float-1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-900/30 transform rotate-45 skew-y-12 animate-float-2"></div>
        <div className="absolute top-2/3 left-1/3 w-36 h-36 bg-teal-900/30 rounded-full animate-float-3"></div>
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMEgxMDBWMTAwSDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMjBMODAgODBNODAgMjBMMjAgODBNNTAgMEwxMDAgNTBNMCA1MEw1MCAxMDBMNTAgMCIgc3Ryb2tlPSJyZ2JhKDEyNSwyMTEsMjUyLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Securely manage medical records on blockchain
          </p>
        </div>

        {/* Isometric 3D timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-blue-900 to-teal-900 transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => {
            const colors = colorMap[step.color];
            return (
              <div 
                key={index}
                className={`relative transform transition-all duration-500 hover:scale-105 hover:z-10 ${index % 2 === 0 ? 'lg:translate-y-0' : 'lg:translate-y-12'}`}
              >
                {/* 3D shape container */}
                <div className={`absolute -top-8 left-1/2 w-20 h-20 transform -translate-x-1/2 ${step.shape === 'cube' ? 'rotate-45 skew-y-12' : step.shape === 'pyramid' ? 'rotate-45' : ''} ${colors.dark}/50 shadow-lg`}>
                  <div className={`w-full h-full flex items-center justify-center text-2xl ${colors.light}`}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Content card */}
                <div className={`pt-16 pb-8 px-6 bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl hover:shadow-${colors.light}/20 transition-all`}>
                  <div className={`w-12 h-1 mx-auto mb-4 bg-gradient-to-r ${colors.gradient}`}></div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    <span className={`text-${colors.light}`}>0{index+1}.</span> {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(45deg) skewY(12deg); }
          50% { transform: translate(-15px, -20px) rotate(45deg) skewY(12deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(45deg) skewY(12deg); }
          50% { transform: translate(20px, 15px) rotate(45deg) skewY(12deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 20px); }
        }
        .animate-float-1 {
          animation: float-1 12s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 15s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}