import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landingpage";
import PAuth from "./pages/PAuth";
import ConnectWallet from './pages/connectwallet';
import PDashboardpage from "./pages/PDashboardpage";
import useAutoLoginRedirect from './hooks/useAutoLoginRedirect';

function App() {
  return (
    <Router>
      <AutoLoginWrapper />
    </Router>
  );
}

function AutoLoginWrapper() {
  useAutoLoginRedirect(); // ✅ Now safely inside Router context

  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pauth" element={<PAuth />} />
        <Route path="/connectwallet" element={<ConnectWallet />} />
        <Route path="/PDashboardpage" element={<PDashboardpage />} />
      </Routes>
    </div>
  );
}

export default App;
