import React from "react";

const AboutSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0gMCwwIEwgMTAwLDAgTCAxMDAsMTAwIEwgMCwxMDAgWiIgZmlsbD0idXJsKCNncmFkKSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojODA0MGZmO3N0b3Atb3BhY2l0eTowLjMiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDdiZmY7c3RvcC1vcGFjaXR5OjAuMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] 
          animate-mesh-move"></div>
      </div>
      
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-transparent blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-blue-600/10 to-transparent blur-[120px]"></div>
      
      <div className="absolute inset-0 opacity-20 bg-[length:100px_100px] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] animate-grid-drift"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* 3D Icons/Images - Left Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px]">
              {/* Blockchain Network Visualization */}
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/30 flex items-center justify-center animate-float shadow-lg shadow-purple-500/20">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-[url('https://cdn-icons-png.flaticon.com/512/4787/4787926.png')] bg-contain bg-no-repeat bg-center filter brightness-0 invert opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  Nodes
                </div>
              </div>
              
              {/* Medical Records Icon */}
              <div className="absolute top-1/2 right-0 w-56 h-56 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent border border-blue-500/30 flex items-center justify-center animate-float-delay shadow-lg shadow-blue-500/20">
                <div className="relative w-28 h-28">
                  <div className="absolute inset-0 bg-[url('https://cdn-icons-png.flaticon.com/512/2965/2965879.png')] bg-contain bg-no-repeat bg-center filter brightness-0 invert opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  Records
                </div>
              </div>
              
              {/* Security Shield */}
              <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-gradient-to-bl from-green-600/20 to-transparent border border-green-500/30 flex items-center justify-center animate-float shadow-lg shadow-green-500/20">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-[url('https://cdn-icons-png.flaticon.com/512/1061/1061370.png')] bg-contain bg-no-repeat bg-center filter brightness-0 invert opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-green-500/30 to-transparent rounded-full"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  Secure
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                About Our
              </span> Platform
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              We're revolutionizing healthcare data management through blockchain technology, giving patients full control over their medical records.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-purple-400">
                  <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Decentralized Architecture</h3>
                  <p className="text-gray-400">No single point of failure with our distributed ledger technology ensuring 99.99% uptime</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-blue-400">
                  <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-500/50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Patient-Centric Design</h3>
                  <p className="text-gray-400">You control who accesses your health data with granular permissions and real-time tracking</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-green-400">
                  <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center border border-green-500/50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Military-Grade Security</h3>
                  <p className="text-gray-400">End-to-end encryption and zero-knowledge proofs protect your data with bank-level security</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
              Learn More About Our Technology
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes mesh-move {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        @keyframes grid-drift {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-mesh-move {
          animation: mesh-move 60s linear infinite;
        }
        .animate-grid-drift {
          animation: grid-drift 120s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;