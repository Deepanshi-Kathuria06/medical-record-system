import React, { useEffect } from "react";
import bgImage from "../../assets/bg.png"; // Your background image

const HeroSection = () => {
  useEffect(() => {
    // Blob animation with mouse follow
    const blobs = document.querySelectorAll('.gradient-blob');
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      blobs.forEach((blob, index) => {
        const xOffset = index === 0 ? 30 : -40;
        const yOffset = index === 0 ? 20 : -30;
        blob.style.transform = `translate(${x * xOffset}px, ${y * yOffset}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      {/* ===== POLYGON-STYLE ANIMATED BACKGROUND ===== */}
      
      {/* Your background image with reduced opacity */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-20" />
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 opacity-60 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0gMCwwIEwgMTAwLDAgTCAxMDAsMTAwIEwgMCwxMDAgWiIgZmlsbD0idXJsKCNncmFkKSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojODA0MGZmO3N0b3Atb3BhY2l0eTowLjMiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDdiZmY7c3RvcC1vcGFjaXR5OjAuMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] 
        animate-mesh-move"></div>

      {/* Floating Gradient Blobs */}
      <div className="gradient-blob absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/15 to-transparent blur-[100px] transition-transform duration-1000 ease-out"></div>
      <div className="gradient-blob absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-blue-600/15 to-transparent blur-[120px] transition-transform duration-1000 ease-out"></div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-20 bg-[length:100px_100px] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] animate-grid-drift"></div>

      {/* ===== YOUR HERO CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white animate-fade-in">
            Own Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Medical Records</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in animate-delay-100">
            Empowering patients through decentralized health data on the blockchain.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-200">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-gray-600 text-white font-medium hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        /* Mesh background animation */
        @keyframes mesh-move {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        .animate-mesh-move {
          animation: mesh-move 60s linear infinite;
        }

        /* Grid drift animation */
        @keyframes grid-drift {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        .animate-grid-drift {
          animation: grid-drift 120s linear infinite;
        }

        /* Content fade-in */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-delay-100 {
          animation-delay: 0.1s;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;