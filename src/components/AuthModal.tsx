import React, { useState } from "react";
import axios from "axios";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async () => {
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
    try {
      const res = await axios.post(`http://localhost:5000${endpoint}`, { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Success!");
      onClose();
    } catch (err) {
      alert("Error: " + err.response.data.message);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <input type="email" placeholder="Email (@wisc.edu)" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>{isLogin ? "Login" : "Sign Up"}</button>
        <p onClick={() => setIsLogin(!isLogin)}>{isLogin ? "No account? Sign up" : "Already have an account? Login"}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AuthModal;