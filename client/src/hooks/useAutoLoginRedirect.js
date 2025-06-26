import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAutoLoginRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkWallet = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            navigate('/PDashboardpage');
          }
        } catch (err) {
          console.error('Error checking wallet:', err);
        }
      }
    };

    checkWallet();
  }, [navigate]);
};

export default useAutoLoginRedirect;
