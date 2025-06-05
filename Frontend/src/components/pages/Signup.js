import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful! Please log in.");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="logo">
        <img src="Spotify-Logo.jpg" alt="Spotify-Logo" />
      </div>
      <h1>Sign up to 
        start listening</h1>
      <form onSubmit={handleSignup}>
        <label>Email address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="next-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
