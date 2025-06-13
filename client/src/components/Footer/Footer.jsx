import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; 2025 MedChain. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
