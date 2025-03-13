import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UploadPage from "./pages/UploadPage";
import BrowsePage from "./pages/BrowsePage";
import Navbar from "./components/Navbar";
import "./styles.css";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/browse" element={<BrowsePage />} />
      </Routes>
    </Router>
  );
};

export default App;