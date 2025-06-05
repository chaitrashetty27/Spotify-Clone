import React, { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom"; 
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
       method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
     const data = await response.json();
       if (response.ok) {
      localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        alert("Login successful!");
         navigate("/home");
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="login-container">
      <div className="photo">
        <img src="Spotify-Logo.jpg" alt="Spotify Logo" />
      </div>
      <div className="login-box">
        <h1>Log in to Spotify</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email or Username</label>
          <br />
          <input
            type="text"
            id="email"
            placeholder="Email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit" className="next-btn">LOGIN</button>
          <br />
        </form>

        
        <p className="forgot-password">
          <Link to="/reset">Forgot your Password?</Link>
        </p>

        
        <p className="signup-text">
          Don't have an account?  
          <Link to="/signup" className="signup-link"> Sign up for Spotify</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
