import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, Copy, Share2, HardDrive, Users, Clock, X, Menu, FolderOpen, ChevronDown, ChevronUp, Lock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const PDashboardpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('recent');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [files, setFiles] = useState([
    { name: 'blood-test-results.pdf', cid: 'QmXyZ1234UtNxGuqRGGgw3s2mf', shared: true },
    { name: 'x-ray-scan.png', cid: 'QmAbC5678UtNxGuqRGGgw3s2mf', shared: false },
    { name: 'prescription-0423.pdf', cid: 'QmDeF9012UtNxGuqRGGgw3s2mf', shared: true },
    { name: 'allergy-test.pdf', cid: 'QmGhI3456UtNxGuqRGGgw3s2mf', shared: false },
    { name: 'medical-history.pdf', cid: 'QmJkL7890UtNxGuqRGGgw3s2mf', shared: true },
    { name: 'vaccine-record.pdf', cid: 'QmMnO1234UtNxGuqRGGgw3s2mf', shared: false },
    { name: 'ultrasound-scan.png', cid: 'QmPrS5678UtNxGuqRGGgw3s2mf', shared: true },
    { name: 'doctor-notes.pdf', cid: 'QmTuV9012UtNxGuqRGGgw3s2mf', shared: false }
  ]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [shareDays, setShareDays] = useState(7);
  const [shareDescription, setShareDescription] = useState('');
  const [showContactsDropdown, setShowContactsDropdown] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const fileInputRef = useRef(null);

  const contacts = [
    { id: 1, name: 'Dr. Sarah Johnson', role: 'Cardiologist', address: '0x3f5CE...3d4f', avatar: '❤️' },
    { id: 2, name: 'Dr. Michael Chen', role: 'Neurologist', address: '0x1a2B3...5e6f', avatar: '🧠' },
    { id: 3, name: 'Dr. Emily Wilson', role: 'Pediatrician', address: '0x7c8D9...1b2c', avatar: '👶' },
    { id: 4, name: 'St. Mary Hospital', role: 'Healthcare Provider', address: '0x4e5F6...7d8e', avatar: '🏥' }
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate file upload with progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            // Add the new file to the list
            const newFile = {
              name: file.name,
              cid: `Qm${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
              shared: false
            };
            setFiles(prevFiles => [newFile, ...prevFiles]);
            setUploadProgress(0);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const openShareModal = (file) => {
    setSelectedFile(file);
    setShowShareModal(true);
    setSelectedContacts([]);
    setShareDays(7);
    setShareDescription('');
  };

  const closeShareModal = () => {
    setShowShareModal(false);
    setSelectedFile(null);
  };

  const toggleContactSelection = (contact) => {
    setSelectedContacts(prev => {
      if (prev.some(c => c.id === contact.id)) {
        return prev.filter(c => c.id !== contact.id);
      } else {
        return [...prev, contact];
      }
    });
  };

  const confirmShare = () => {
    if (!selectedFile || selectedContacts.length === 0) return;
    
    // Simulate sharing with encryption and time limit
    const sharedFiles = files.map(file => 
      file.cid === selectedFile.cid 
        ? { ...file, shared: true, sharedWith: selectedContacts.map(c => c.id) }
        : file
    );
    
    setFiles(sharedFiles);
    
    // Show success message
    alert(`Successfully shared ${selectedFile.name} with ${selectedContacts.length} contact(s) for ${shareDays} days`);
    
    closeShareModal();
  };

  const renderFileIcon = (fileName) => {
    return fileName.includes('blood') ? '🩸' : 
           fileName.includes('x-ray') ? '🩻' :
           fileName.includes('prescription') ? '💊' :
           fileName.includes('allergy') ? '🤧' :
           fileName.includes('history') ? '📋' :
           fileName.includes('vaccine') ? '💉' :
           fileName.includes('ultrasound') ? '👶' : '📝';
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex">
      {/* Hidden file input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        className="hidden" 
        accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
      />
      
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 rounded-lg text-white"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Navigation */}
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40 md:static md:translate-x-0 border-r border-gray-200`}
      >
        <div className="p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            MedChain
          </h2>
          
          <nav className="space-y-2 flex-1">
            <button
              onClick={() => setActiveView('recent')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'recent' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Clock className="text-indigo-600" size={20} />
              Recent Records
            </button>
            <button
              onClick={() => setActiveView('uploads')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'uploads' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <UploadCloud className="text-indigo-600" size={20} />
              My Uploads
            </button>
            <button
              onClick={() => setActiveView('records')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'records' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <HardDrive className="text-indigo-600" size={20} />
              Saved Records
            </button>
            <button
              onClick={() => setActiveView('contacts')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'contacts' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Users className="text-indigo-600" size={20} />
              Contacts
            </button>
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-200">
            <button className="w-full flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
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
      </motion.div>

      {/* Main Content */}
      <div className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  {activeView === 'recent' && 'Recent Records'}
                  {activeView === 'uploads' && 'My Uploads'}
                  {activeView === 'records' && 'Saved Records'}
                  {activeView === 'contacts' && 'Contacts'}
                </h1>
                <p className="text-gray-500">
                  {activeView === 'recent' && 'Your most recent uploads stored securely on IPFS'}
                  {activeView === 'uploads' && 'All files you have uploaded to the network'}
                  {activeView === 'records' && 'Your complete medical records history'}
                  {activeView === 'contacts' && 'Your trusted medical contacts and providers'}
                </p>
              </div>
              <button
                onClick={triggerFileInput}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <UploadCloud size={18} />
                Upload
              </button>
            </div>
          </motion.div>

          {/* Upload Progress Bar */}
          {isUploading && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6 bg-gray-100 rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Uploading file...</span>
                  <span className="text-sm text-gray-500">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${uploadProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Files Grid - Only shown for recent and uploads views */}
          {(activeView === 'recent' || activeView === 'uploads') && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8"
            >
              {files.map((file, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-2xl mb-2">
                        {renderFileIcon(file.name)}
                      </div>
                      <p className="font-medium text-sm truncate">{file.name}</p>
                      <p className="text-xs text-gray-500 mt-1">CID: {file.cid.substring(0, 8)}...</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => copyToClipboard(file.cid, index)}
                        className="text-gray-400 hover:text-indigo-600 transition-colors"
                        title="Copy CID"
                      >
                        <Copy size={16} />
                      </button>
                      <button 
                        onClick={() => openShareModal(file)}
                        className="text-gray-400 hover:text-indigo-600 transition-colors"
                        title="Share"
                      >
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                  {copiedIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-indigo-600 mt-2"
                    >
                      CID copied to clipboard!
                    </motion.div>
                  )}
                  {file.shared && (
                    <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                      <Users size={12} />
                      Shared
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Saved Records View */}
          {activeView === 'records' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 border border-gray-200 mb-10"
            >
              <h2 className="text-xl font-semibold mb-4">Complete Medical History</h2>
              <div className="space-y-3">
                {files.map((file, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">
                        {renderFileIcon(file.name)}
                      </div>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-xs text-gray-500">Uploaded: {new Date().toLocaleDateString()}</p>
                        {file.shared && (
                          <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                            <Users size={12} />
                            Shared with {file.sharedWith ? file.sharedWith.length : 0} contacts
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => copyToClipboard(file.cid, index)}
                        className="text-gray-400 hover:text-indigo-600 transition-colors"
                        title="Copy CID"
                      >
                        <Copy size={16} />
                      </button>
                      <button 
                        onClick={() => openShareModal(file)}
                        className="text-gray-400 hover:text-indigo-600 transition-colors"
                        title="Share"
                      >
                        <Share2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contacts View */}
          {activeView === 'contacts' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 border border-gray-200 mb-10"
            >
              <h2 className="text-xl font-semibold mb-4">Trusted Contacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contacts.map((contact, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">
                        {contact.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-xs text-gray-500">{contact.role}</p>
                        <p className="text-xs text-gray-400 mt-1">{contact.address}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(contact.address, index)}
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                      title="Copy address"
                    >
                      <Copy size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Share Modal */}
          {showShareModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl p-6 w-full max-w-md"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Share Medical Record</h3>
                  <button onClick={closeShareModal} className="text-gray-400 hover:text-gray-600">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">
                      {selectedFile && renderFileIcon(selectedFile.name)}
                    </div>
                    <div>
                      <p className="font-medium">{selectedFile?.name}</p>
                      <p className="text-xs text-gray-500">CID: {selectedFile?.cid.substring(0, 8)}...</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Share with contacts</label>
                  <div className="relative">
                    <button 
                      onClick={() => setShowContactsDropdown(!showContactsDropdown)}
                      className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-lg bg-white"
                    >
                      <span>
                        {selectedContacts.length > 0 
                          ? `${selectedContacts.length} selected` 
                          : "Select contacts"}
                      </span>
                      {showContactsDropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    
                    {showContactsDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                        {contacts.map(contact => (
                          <div 
                            key={contact.id}
                            onClick={() => toggleContactSelection(contact)}
                            className={`p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3 ${selectedContacts.some(c => c.id === contact.id) ? 'bg-indigo-50' : ''}`}
                          >
                            <input 
                              type="checkbox" 
                              checked={selectedContacts.some(c => c.id === contact.id)}
                              readOnly
                              className="rounded text-indigo-600"
                            />
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{contact.avatar}</span>
                              <div>
                                <p className="font-medium text-sm">{contact.name}</p>
                                <p className="text-xs text-gray-500">{contact.role}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Access Duration (days)</label>
                  <input
                    type="number"
                    min="1"
                    max="365"
                    value={shareDays}
                    onChange={(e) => setShareDays(Math.max(1, Math.min(365, parseInt(e.target.value) || 1)))}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description (optional)</label>
                  <textarea
                    value={shareDescription}
                    onChange={(e) => setShareDescription(e.target.value)}
                    placeholder="Add a note about this shared record..."
                    className="w-full p-2 border border-gray-300 rounded-lg h-20"
                  />
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Lock size={16} className="text-indigo-500" />
                  <span>This record will be encrypted and accessible only to selected contacts</span>
                </div>
                
                <div className="flex justify-end gap-3">
                  <button
                    onClick={closeShareModal}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmShare}
                    disabled={selectedContacts.length === 0}
                    className={`px-4 py-2 rounded-lg text-white transition-colors ${selectedContacts.length === 0 ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                  >
                    Share Record
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDashboardpage;