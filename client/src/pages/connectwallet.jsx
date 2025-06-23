import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [network, setNetwork] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.ethereum) {
      checkConnection();
      getNetwork();
      
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    }
  }, []);

  const checkConnection = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
      setIsConnected(true);
      setAccount(accounts[0]);
    }
  };

  const getNetwork = async () => {
    if (!window.ethereum) return;
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    switch (chainId) {
      case '0x1': setNetwork('Ethereum Mainnet'); break;
      case '0x5': setNetwork('Goerli Testnet'); break;
      case '0xaa36a7': setNetwork('Sepolia Testnet'); break;
      case '0x89': setNetwork('Polygon Mainnet'); break;
      case '0x13881': setNetwork('Mumbai Testnet'); break;
      default: setNetwork('Unknown Network');
    }
  };

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      if (!window.ethereum) throw new Error('Please install MetaMask!');
      
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setIsConnected(true);
      setAccount(accounts[0]);
      await getNetwork();
      
      // Redirect to dashboard after successful connection
      navigate('/dashboard');
      
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0] || '');
        if (!accounts.length) setIsConnected(false);
      });
    } catch (err) {
      alert(err.message);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccount('');
    setNetwork('');
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              rotate: Math.random() * 360
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              rotate: Math.random() * 360,
              transition: {
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>

      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        animate={{
          background: [
            'linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981)',
            'linear-gradient(45deg, #8b5cf6, #10b981, #3b82f6)',
            'linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 py-20 z-10">
        {/* Animated Metamask logo */}
        <motion.div 
          className="w-64 h-64 mb-8 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 0.8,
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut"
            }
          }}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" 
            alt="MetaMask Logo" 
            className="w-full h-full object-contain hover:rotate-6 transition-transform duration-300"
          />
        </motion.div>
        
        {/* Unique tagline with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Web3 Gateway
          </h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your portal to decentralized finance
          </motion.p>
        </motion.div>
        
        {/* Enhanced connection description */}
        <motion.p
          className="text-lg text-gray-400 mb-10 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Securely connect your wallet to explore the decentralized web
        </motion.p>
        
        {/* Enhanced connect button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
        >
          <button
            onClick={isConnected ? disconnectWallet : connectWallet}
            disabled={isConnecting}
            className={`px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-3 transition-all duration-300 shadow-lg ${
              isConnected 
                ? 'bg-emerald-600/90 hover:bg-emerald-700/90'
                : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-700/90 hover:to-purple-700/90'
            } ${isHovered ? 'hover:shadow-xl' : ''} ${isConnecting ? 'opacity-80' : ''}`}
          >
            {isConnecting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </motion.div>
                <span>Connecting...</span>
              </>
            ) : isConnected ? (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#627EEA"/>
                  <path d="M12.498 3V9.652L17.996 12.165L12.498 3Z" fill="white" fillOpacity="0.602"/>
                  <path d="M12.498 3L7 12.165L12.498 9.652V3Z" fill="white"/>
                  <path d="M12.498 16.476V20.996L18 13.212L12.498 16.476Z" fill="white" fillOpacity="0.602"/>
                  <path d="M12.498 20.996V16.475L7 13.212L12.498 20.996Z" fill="white"/>
                  <path d="M12.498 15.43L17.996 12.165L12.498 9.654V15.43Z" fill="white" fillOpacity="0.2"/>
                  <path d="M7 12.165L12.498 15.43V9.654L7 12.165Z" fill="white" fillOpacity="0.602"/>
                </svg>
                <span>{`Connected: ${account.slice(0, 6)}...${account.slice(-4)}`}</span>
              </>
            ) : (
              <>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#627EEA"/>
                    <path d="M12.498 3V9.652L17.996 12.165L12.498 3Z" fill="white" fillOpacity="0.602"/>
                    <path d="M12.498 3L7 12.165L12.498 9.652V3Z" fill="white"/>
                    <path d="M12.498 16.476V20.996L18 13.212L12.498 16.476Z" fill="white" fillOpacity="0.602"/>
                    <path d="M12.498 20.996V16.475L7 13.212L12.498 20.996Z" fill="white"/>
                    <path d="M12.498 15.43L17.996 12.165L12.498 9.654V15.43Z" fill="white" fillOpacity="0.2"/>
                    <path d="M7 12.165L12.498 15.43V9.654L7 12.165Z" fill="white" fillOpacity="0.602"/>
                  </svg>
                </motion.div>
                <span>Connect Wallet</span>
              </>
            )}
          </button>
        </motion.div>

        {isConnected && network && (
          <motion.div 
            className="mt-6 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-emerald-400 font-medium">Network: <span className="text-white">{network}</span></p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;