import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to BadgerNote</h1>
      <p>Your one-stop platform to share and discover class notes.</p>

      <div className="buttons">
        <Link to="/browse">
          <button>Browse Notes</button>
        </Link>
        <Link to="/upload">
          <button>Upload Notes</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;