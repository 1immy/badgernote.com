import React, { useState } from "react";
import axios from "axios";

interface AuthModalProps {
  onClose: () => void;
}

const API_URL = process.env.REACT_APP_BACKEND_URL + "/api/auth"; 

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");  
    const endpoint = isLogin ? "/login" : "/signup";

    try {
      const res = await axios.post(`${API_URL}${endpoint}`, { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Success!");
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          placeholder="Email (@wisc.edu)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={!email || !password}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer", color: "blue" }}>
          {isLogin ? "No account? Sign up" : "Already have an account? Login"}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AuthModal;