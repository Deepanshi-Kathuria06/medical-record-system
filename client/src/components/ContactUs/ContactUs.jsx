import React, { useEffect, useState } from 'react';

export default function ContactUs() {
  const [robotMessage, setRobotMessage] = useState("Hi there! I'm MedBot!");
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const messages = [
      "Hi there! I'm MedBot!",
      "Let's talk about your medical records!",
      "Blockchain keeps your data safe!",
      "Ask me anything!",
      "Beep boop! 🤖"
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      setRobotMessage(messages[currentIndex]);
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">
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

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Cute Robot Section */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative w-full max-w-xs">
              {/* Robot Container */}
              <div className="bg-gray-800/80 border-2 border-gray-700 rounded-3xl p-6 pb-10">
                {/* Robot Head */}
                <div className="relative mx-auto w-40 h-40 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-6 flex items-center justify-center">
                  {/* Eyes */}
                  <div className="absolute flex space-x-6 top-12">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-900 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-900 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Mouth */}
                  <div className="absolute bottom-10 w-16 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <div className="w-12 h-2 bg-blue-900 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Antenna */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-purple-400 rounded-t-full">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Robot Body */}
                <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600">
                  {/* Blockchain Visualization */}
                  <div className="flex justify-center mb-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-8 h-8 rounded-full border-2 border-blue-400 bg-gray-800 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                        </div>
                        {i < 2 && <div className="w-4 h-1 bg-blue-400/30"></div>}
                      </div>
                    ))}
                  </div>
                  
                  {/* Message Bubble */}
                  <div className="relative bg-gray-600 rounded-lg p-3 mb-2">
                    <p className="text-white text-center text-sm">{robotMessage}</p>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-600 rotate-45"></div>
                  </div>
                </div>
                
                {/* Waving Arm */}
                <div className={`absolute -bottom-2 -right-4 w-12 h-4 bg-purple-400 rounded-full transform origin-left ${isWaving ? 'rotate-45' : 'rotate-12'} transition-transform duration-300`}></div>
              </div>
              
              {/* Medical Icons Floating Around */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-700/80 border border-gray-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gray-700/80 border border-gray-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-7/12">
            <div className="bg-gray-800/80 border-2 border-gray-700 rounded-3xl p-8 max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
              <p className="text-gray-400 mb-6">Have questions about decentralized medical records?</p>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-900 outline-none transition-all text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Your Message</label>
                  <textarea 
                    placeholder="Your message..."
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-900 outline-none transition-all text-white"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
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