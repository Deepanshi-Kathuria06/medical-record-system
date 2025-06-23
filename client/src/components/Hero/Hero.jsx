import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
    const navigate = useNavigate();

  const containerRef = useRef(null);

  
  useEffect(() => {
    // Create floating medical record blocks
    const container = containerRef.current;
    const blockCount = 12;
    
    for (let i = 0; i < blockCount; i++) {
      const block = document.createElement('div');
      block.className = 'absolute rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-sm shadow-lg';
      
      // Random position and size
      const size = Math.random() * 80 + 40;
      const left = Math.random() * 80 + 10;
      const top = Math.random() * 80 + 10;
      
      block.style.width = `${size}px`;
      block.style.height = `${size * 1.4}px`;
      block.style.left = `${left}%`;
      block.style.top = `${top}%`;
      block.style.zIndex = '0';
      block.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
      
      // Medical record content
      const content = document.createElement('div');
      content.className = 'p-2 h-full flex flex-col';
      
      const header = document.createElement('div');
      header.className = 'h-2 w-full bg-blue-500/30 mb-1 rounded';
      
      const lines = [];
      for (let j = 0; j < 3; j++) {
        const line = document.createElement('div');
        line.className = `h-1 w-full bg-gray-700/50 mb-1 rounded ${j === 1 ? 'w-3/4' : ''}`;
        lines.push(line);
      }
      
      const barcode = document.createElement('div');
      barcode.className = 'mt-auto flex justify-between';
      for (let k = 0; k < 6; k++) {
        const bar = document.createElement('div');
        bar.className = 'h-2 bg-gray-700 rounded';
        bar.style.width = `${Math.random() * 10 + 5}px`;
        barcode.appendChild(bar);
      }
      
      content.appendChild(header);
      lines.forEach(line => content.appendChild(line));
      content.appendChild(barcode);
      block.appendChild(content);
      
      container.appendChild(block);
      
      // Float animation
      block.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
      block.style.animationDelay = `${Math.random() * 5}s`;
    }
    
    // Create blockchain connections
    const blocks = document.querySelectorAll('.floating-block');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'absolute inset-0 w-full h-full pointer-events-none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    
    container.appendChild(svg);
    
    const animateConnections = () => {
      // Clear previous connections
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }
      
      // Draw new connections
      blocks.forEach((block1, i) => {
        blocks.forEach((block2, j) => {
          if (i < j && Math.random() > 0.7) {
            const rect1 = block1.getBoundingClientRect();
            const rect2 = block2.getBoundingClientRect();
            
            const x1 = rect1.left + rect1.width/2 - container.getBoundingClientRect().left;
            const y1 = rect1.top + rect1.height/2 - container.getBoundingClientRect().top;
            const x2 = rect2.left + rect2.width/2 - container.getBoundingClientRect().left;
            const y2 = rect2.top + rect2.height/2 - container.getBoundingClientRect().top;
            
            const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            
            if (distance < 300) {
              const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
              line.setAttribute('x1', x1);
              line.setAttribute('y1', y1);
              line.setAttribute('x2', x2);
              line.setAttribute('y2', y2);
              line.setAttribute('stroke', 'rgba(99, 102, 241, 0.2)');
              line.setAttribute('stroke-width', '1');
              line.setAttribute('stroke-dasharray', '5,3');
              svg.appendChild(line);
            }
          }
        });
      });
      
      requestAnimationFrame(animateConnections);
    };
    
    animateConnections();
    
    return () => {
      // Cleanup
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      {/* Decentralized network background */}
      <div 
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Central node representing the blockchain */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-xl z-10">
          <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80 z-1"></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Blockchain chain visualization */}
          <div className="relative mb-12 h-16 w-full max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-1 w-full bg-gradient-to-r from-purple-500/20 via-blue-500/50 to-purple-500/20"></div>
            </div>
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i}
                className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full border-2 border-blue-400 bg-gray-900 flex items-center justify-center ${
                  i === 0 ? 'left-[10%]' : 
                  i === 1 ? 'left-[40%]' : 
                  i === 2 ? 'left-[70%]' : 
                  'left-[90%]'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
              </div>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Decentralized</span> Medical Records
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Secure, immutable health data stored across a distributed blockchain network
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
  className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
  onClick={() => navigate('/pauth')}
>
  Get Started
</button>
            <button className="px-8 py-4 rounded-lg border-2 border-gray-600 text-white font-medium hover:bg-white/10 transition-all duration-300">
              How It Works
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        .floating-block {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;