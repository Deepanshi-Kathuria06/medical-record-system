import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landingpage";
import PAuth from "./pages/PAuth"; // Make sure to import your PAuth component
import ConnectWallet from './pages/connectwallet';
import PDashboardpage from "./pages/PDashboardpage";
import DDashboard from "./pages/DDashboard";


function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pauth" element={<PAuth />} />
           <Route path="/connectwallet" element={<ConnectWallet />} />
           <Route path="/DDashboard" element={<DDashboard/>} />
    
        </Routes>
      </div>
    </Router>
  );
}

export default App;