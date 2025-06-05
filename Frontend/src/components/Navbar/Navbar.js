import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import  allFrontendSongs  from "../data/AllSongs";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      try {
        
        const response = await axios.get(`http://localhost:5000/api/songs/search?query=${searchQuery}`);
        const backendResults = response.data;
  
        
        const frontendResults = allFrontendSongs.filter(song =>
          song.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
  
        // Combine both
        const allResults = [...backendResults, ...frontendResults];
  
        console.log("Combined Search Results:", allResults);
  
        // Show combined results (render in UI)
      } catch (error) {
        console.error("Error searching songs:", error);
      }
    }
  };
 

  return (
    <nav>
      <div className='navbar'>
        <h2>Spotify Music</h2>
      </div>

      <div className='search-box'>
        <input 
          type='text' 
          placeholder='What do you want to Play'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/aboutus">About</Link></li>
        <li className="dropdown">
          <span>Login</span>
          <div className="dropdown-content">
            <Link to="/login">User Login</Link>
            <Link to="/adminlogin">Admin Login</Link>
          </div>
        </li>
        <li><Link to="/playlist">Playlist</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
