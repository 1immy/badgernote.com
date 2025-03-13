import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal.tsx";

const Navbar: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <nav className="navbar">
      <h1>BadgerNote</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse Notes</Link>
        <Link to="/upload">Upload Notes</Link>
        <button onClick={() => setShowAuth(true)}>Login</button>
      </div>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </nav>
  );
};

export default Navbar;