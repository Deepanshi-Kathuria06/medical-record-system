import React, { useState } from 'react';
import { UploadCloud, Copy, FolderOpen, HardDrive, Users, Clock, X, Menu } from 'lucide-react';

const PDashboardpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('recent');

  const files = [
    { name: 'blue-chick.png', cid: 'QnxUFlxUUtNxGuqRGGgw3s2mf' },
    { name: 'green-chick.png', cid: 'QnxUFlxUUtNxGuqRGGgw3s2mf' },
    { name: 'orange-chick.png', cid: 'QnxUFlxUUtNxGuqRGGgw3s2mf' },
    { name: 'pink-chick.png', cid: 'QnxUFlxUUtNxGuqRGGgw3s2mf' },
    { name: 'yellow-chick.png', cid: 'QnxUFlxUUtNxGuqRGGgw3s2mf' },
    { name: 'blue-cqq.png', cid: 'QnxUFlxUUtNxGuqRGGgw3s2mf' },
    { name: 'green-cqq.png', cid: 'QnxUFlxUUtNxGuqRGGgw3s2mf' },
    { name: 'orange-cqq.png', cid: 'QnxUFlxUUtNxGuqRGGgw3s2mf' },
    { name: 'pink-cqq.png', cid: 'QnxUFlxUUtNxGuqRGGgw3s2mf' },
    { name: 'yellow-cqq.png', cid: 'QnxUFlxUUtNxGuqRGGgw3s2mf' }
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white flex">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600/80 rounded-lg backdrop-blur-sm"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Navigation */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-slate-800/90 backdrop-blur-lg z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out border-r border-indigo-500/20`}>
        <div className="p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            MedChain
          </h2>
          
          <nav className="space-y-2 flex-1">
            <button
              onClick={() => setActiveView('recent')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'recent' ? 'bg-indigo-600/50 text-white' : 'text-slate-300 hover:bg-indigo-500/20'}`}
            >
              <Clock className="text-cyan-400" size={20} />
              Recent Records
            </button>
            <button
              onClick={() => setActiveView('uploads')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'uploads' ? 'bg-indigo-600/50 text-white' : 'text-slate-300 hover:bg-indigo-500/20'}`}
            >
              <UploadCloud className="text-indigo-300" size={20} />
              My Uploads
            </button>
            <button
              onClick={() => setActiveView('records')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'records' ? 'bg-indigo-600/50 text-white' : 'text-slate-300 hover:bg-indigo-500/20'}`}
            >
              <HardDrive className="text-emerald-300" size={20} />
              Saved Records
            </button>
            <button
              onClick={() => setActiveView('contacts')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'contacts' ? 'bg-indigo-600/50 text-white' : 'text-slate-300 hover:bg-indigo-500/20'}`}
            >
              <Users className="text-blue-300" size={20} />
              Contacts
            </button>
          </nav>

          <div className="mt-auto pt-4 border-t border-indigo-500/20">
            <button className="w-full flex items-center gap-2 px-4 py-3 text-slate-300 hover:bg-indigo-500/20 rounded-lg transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#627EEA"/>
                <path d="M12.498 3V9.652L17.996 12.165L12.498 3Z" fill="white" fillOpacity="0.602"/>
                <path d="M12.498 3L7 12.165L12.498 9.652V3Z" fill="white"/>
                <path d="M12.498 16.476V20.996L18 13.212L12.498 16.476Z" fill="white" fillOpacity="0.602"/>
                <path d="M12.498 20.996V16.475L7 13.212L12.498 20.996Z" fill="white"/>
                <path d="M12.498 15.43L17.996 12.165L12.498 9.654V15.43Z" fill="white" fillOpacity="0.2"/>
                <path d="M7 12.165L12.498 15.43V9.654L7 12.165Z" fill="white" fillOpacity="0.602"/>
              </svg>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {activeView === 'recent' && 'Recent Records'}
              {activeView === 'uploads' && 'My Uploads'}
              {activeView === 'records' && 'Saved Records'}
              {activeView === 'contacts' && 'Contacts'}
            </h1>
            <p className="text-slate-300">
              {activeView === 'recent' && 'Your most recent uploads stored securely on IPFS'}
              {activeView === 'uploads' && 'All files you have uploaded to the network'}
              {activeView === 'records' && 'Your complete medical records history'}
              {activeView === 'contacts' && 'Your trusted medical contacts and providers'}
            </p>
          </div>

          {/* Files Grid - Only shown for recent and uploads views */}
          {(activeView === 'recent' || activeView === 'uploads') && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {files.map((file, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800/50 rounded-lg p-4 hover:bg-indigo-500/20 transition-colors border border-indigo-500/20 backdrop-blur-sm"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-2xl mb-2">
                        {file.name.includes('blue') ? '🔷' : 
                         file.name.includes('green') ? '🟩' :
                         file.name.includes('orange') ? '🟧' :
                         file.name.includes('pink') ? '🟪' : '🟨'}
                      </div>
                      <p className="font-medium text-sm truncate">{file.name}</p>
                      <p className="text-xs text-slate-400 mt-1">CID: {file.cid.substring(0, 8)}...</p>
                    </div>
                    <button className="text-slate-400 hover:text-white transition-colors">
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between items-center mb-10">
            <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white px-4 py-2 rounded-lg transition-all shadow-lg hover:shadow-xl">
              <UploadCloud size={18} />
              Upload Files
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-4 py-2 rounded-lg transition-all shadow-lg hover:shadow-xl">
              <FolderOpen size={18} />
              Open Folder
            </button>
          </div>

          {/* Saved Records View */}
          {activeView === 'records' && (
            <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-500/20 backdrop-blur-sm mb-10">
              <h2 className="text-xl font-semibold mb-4">Complete Medical History</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">📄</div>
                    <div>
                      <p className="font-medium">Blood Test Results</p>
                      <p className="text-xs text-slate-400">Uploaded: 15 Jan 2023</p>
                    </div>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300">
                    <Copy size={16} />
                  </button>
                </div>
                {/* More records... */}
              </div>
            </div>
          )}

          {/* Contacts View */}
          {activeView === 'contacts' && (
            <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-500/20 backdrop-blur-sm mb-10">
              <h2 className="text-xl font-semibold mb-4">Trusted Contacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl">👨‍⚕️</div>
                  <div>
                    <p className="font-medium">Dr. Smith</p>
                    <p className="text-xs text-slate-400">Cardiologist</p>
                  </div>
                </div>
                {/* More contacts... */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDashboardpage;