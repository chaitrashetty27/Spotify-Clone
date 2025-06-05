import React from 'react'
import "./Reset.css";
const Reset = () => {
  return (
    <div className="reset-container">
      <div className="image">
        <img src="Spotify-Logo.jpg" alt="Spotify-Logo"/>
        </div>
        <div className="reset-container">
            <h1>Reset your password</h1>
            <br/>
            <h3>Enter the email address or username
                <br/> linked to your Spotify account and
                 we'll <br/>send you an email.</h3>
                 <label className="label">Email address or username</label>
                < input type="email" placeholder="name@domain.com" className="input-box" />
        </div>
        <button className="sendlink-btn">SendLink</button>
    </div>
  )
}

export default Reset;
