import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, Copy, Share2, HardDrive, Users, Clock, X, Menu, FolderOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PDashboardpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const fileInputRef = useRef(null);

  const contacts = [
    { name: 'Dr. Sarah Johnson', role: 'Cardiologist', address: '0x3f5CE...3d4f', avatar: '❤️' },
    { name: 'Dr. Michael Chen', role: 'Neurologist', address: '0x1a2B3...5e6f', avatar: '🧠' },
    { name: 'Dr. Emily Wilson', role: 'Pediatrician', address: '0x7c8D9...1b2c', avatar: '👶' },
    { name: 'St. Mary Hospital', role: 'Healthcare Provider', address: '0x4e5F6...7d8e', avatar: '🏥' }
  ];

  const sliderData = [
    {
      title: "Shared Records",
      icon: <Share2 size={20} className="text-indigo-300" />,
      items: files.filter(file => file.shared),
      type: "files"
    },
    {
      title: "Medical Contacts",
      icon: <Users size={20} className="text-blue-300" />,
      items: contacts,
      type: "contacts"
    },
    {
      title: "History Records",
      icon: <Clock size={20} className="text-cyan-400" />,
      items: [...files].reverse().slice(0, 4),
      type: "files"
    },
    {
      title: "All Uploads",
      icon: <HardDrive size={20} className="text-emerald-300" />,
      items: files,
      type: "files"
    }
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const shareFile = (file) => {
    if (navigator.share) {
      navigator.share({
        title: 'Medical Record',
        text: `Check out this medical record: ${file.name}`,
        url: `https://ipfs.io/ipfs/${file.cid}`
      }).catch(err => console.log('Error sharing:', err));
    } else {
      copyToClipboard(`https://ipfs.io/ipfs/${file.cid}`);
    }
  };

  const shareContact = (contact) => {
    if (navigator.share) {
      navigator.share({
        title: 'Medical Contact',
        text: `Contact: ${contact.name} (${contact.role})`,
        url: `https://medchain.xyz/contact/${contact.address}`
      }).catch(err => console.log('Error sharing:', err));
    } else {
      copyToClipboard(contact.address);
    }
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

  const openFolder = () => {
    alert('This would open your file system in a real application');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderSliderItem = (item, index, type) => {
    if (type === 'files') {
      return (
        <motion.div 
          key={index}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-slate-800/50 rounded-lg p-3 hover:bg-indigo-500/20 transition-all border border-indigo-500/20 backdrop-blur-sm"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-2xl mb-1">
                {item.name.includes('blood') ? '🩸' : 
                 item.name.includes('x-ray') ? '🩻' :
                 item.name.includes('prescription') ? '💊' :
                 item.name.includes('allergy') ? '🤧' :
                 item.name.includes('history') ? '📋' :
                 item.name.includes('vaccine') ? '💉' :
                 item.name.includes('ultrasound') ? '👶' : '📝'}
              </div>
              <p className="font-medium text-xs truncate">{item.name}</p>
              <p className="text-xs text-slate-400 mt-1">CID: {item.cid.substring(0, 6)}...</p>
            </div>
            <div className="flex gap-1">
              <button 
                onClick={() => copyToClipboard(item.cid, index)}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                title="Copy CID"
              >
                <Copy size={14} />
              </button>
              <button 
                onClick={() => shareFile(item)}
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                title="Share"
              >
                <Share2 size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      );
    } else {
      return (
        <motion.div 
          key={index}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-slate-800/50 rounded-lg p-3 hover:bg-indigo-500/20 transition-all border border-indigo-500/20 backdrop-blur-sm"
        >
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="text-xl">{item.avatar}</div>
              <div>
                <p className="font-medium text-xs">{item.name}</p>
                <p className="text-xs text-slate-400">{item.role}</p>
              </div>
            </div>
            <button 
              onClick={() => shareContact(item)}
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              title="Share contact"
            >
              <Share2 size={14} />
            </button>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white flex">
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
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600/80 rounded-lg backdrop-blur-sm"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Navigation */}
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed inset-y-0 left-0 w-64 bg-slate-800/90 backdrop-blur-lg z-40 md:translate-x-0 border-r border-indigo-500/20`}
      >
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
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
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
          </motion.div>

          {/* Upload Progress Bar */}
          {isUploading && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6 bg-slate-800/50 rounded-lg overflow-hidden border border-indigo-500/20"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Uploading file...</span>
                  <span className="text-sm text-slate-400">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                  <motion.div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${uploadProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Slider Component */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-10 bg-slate-800/50 rounded-xl p-6 border border-indigo-500/20 backdrop-blur-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                {sliderData[currentSlide].icon}
                <h2 className="text-xl font-semibold">{sliderData[currentSlide].title}</h2>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="p-1 rounded-full bg-slate-700/50 hover:bg-indigo-500/30 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-1 rounded-full bg-slate-700/50 hover:bg-indigo-500/30 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="overflow-hidden">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
              >
                {sliderData[currentSlide].items.slice(0, 4).map((item, index) => 
                  renderSliderItem(item, index, sliderData[currentSlide].type)
                )}
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-4 gap-2">
              {sliderData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-indigo-400 w-4' : 'bg-slate-600'}`}
                />
              ))}
            </div>
          </motion.div>

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
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-800/50 rounded-lg p-4 hover:bg-indigo-500/20 transition-all border border-indigo-500/20 backdrop-blur-sm"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-2xl mb-2">
                        {file.name.includes('blood') ? '🩸' : 
                         file.name.includes('x-ray') ? '🩻' :
                         file.name.includes('prescription') ? '💊' :
                         file.name.includes('allergy') ? '🤧' :
                         file.name.includes('history') ? '📋' :
                         file.name.includes('vaccine') ? '💉' :
                         file.name.includes('ultrasound') ? '👶' : '📝'}
                      </div>
                      <p className="font-medium text-sm truncate">{file.name}</p>
                      <p className="text-xs text-slate-400 mt-1">CID: {file.cid.substring(0, 8)}...</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => copyToClipboard(file.cid, index)}
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                        title="Copy CID"
                      >
                        <Copy size={16} />
                      </button>
                      <button 
                        onClick={() => shareFile(file)}
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
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
                      className="text-xs text-cyan-400 mt-2"
                    >
                      CID copied to clipboard!
                    </motion.div>
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
              className="bg-slate-800/50 rounded-xl p-6 border border-indigo-500/20 backdrop-blur-sm mb-10"
            >
              <h2 className="text-xl font-semibold mb-4">Complete Medical History</h2>
              <div className="space-y-4">
                {files.map((file, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">
                        {file.name.includes('blood') ? '🩸' : 
                         file.name.includes('x-ray') ? '🩻' :
                         file.name.includes('prescription') ? '💊' :
                         file.name.includes('allergy') ? '🤧' :
                         file.name.includes('history') ? '📋' :
                         file.name.includes('vaccine') ? '💉' :
                         file.name.includes('ultrasound') ? '👶' : '📝'}
                      </div>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-xs text-slate-400">Uploaded: {new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => copyToClipboard(file.cid, index)}
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                        title="Copy CID"
                      >
                        <Copy size={16} />
                      </button>
                      <button 
                        onClick={() => shareFile(file)}
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
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
              className="bg-slate-800/50 rounded-xl p-6 border border-indigo-500/20 backdrop-blur-sm mb-10"
            >
              <h2 className="text-xl font-semibold mb-4">Trusted Contacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contacts.map((contact, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between gap-3 p-4 bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">
                        {contact.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-xs text-slate-400">{contact.role}</p>
                        <p className="text-xs text-slate-500 mt-1">{contact.address}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => shareContact(contact)}
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                      title="Share contact"
                    >
                      <Share2 size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Share Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentSlide(1)} // Set to contacts slide
            className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full shadow-xl flex items-center justify-center z-30"
          >
            <Share2 size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PDashboardpage;