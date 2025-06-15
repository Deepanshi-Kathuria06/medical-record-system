import React from 'react';

export default function ContactUs() {
  return (
    <section className="relative py-20 bg-gray-900">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Medical icons */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
              <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 flex flex-col items-center">
                <div className="w-14 h-14 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-300 text-center">Blockchain Security</span>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-300 text-center">Medical Records</span>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 flex flex-col items-center">
                <div className="w-14 h-14 bg-teal-600/20 rounded-full flex items-center justify-center text-teal-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-300 text-center">Mobile Access</span>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 flex flex-col items-center">
                <div className="w-14 h-14 bg-cyan-600/20 rounded-full flex items-center justify-center text-cyan-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-300 text-center">Data Protection</span>
              </div>
            </div>
          </div>

          {/* Right side - Compact form */}
          <div className="lg:w-7/12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">Contact Our Team</h2>
              <p className="text-gray-400 mb-6">Get in touch for more information</p>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-900 outline-none transition-all text-white text-sm"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-white text-sm"
                  />
                </div>
                
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows="3"
                    className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-900 outline-none transition-all text-white text-sm"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-4 py-2.5 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white transition-all duration-300 text-sm"
                >
                  Send  us a Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}