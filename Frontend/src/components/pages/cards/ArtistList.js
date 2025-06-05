import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ArtistList.css";

const artists = [
  { id: 1, name: "Pritham", image: "/photos/Artists/1.jpg" },
  { id: 2, name: "Arjith Singh", image: "/photos/Artists/2.jpg" },
  { id: 3, name: "A.R Rahman", image: "/photos/Artists/3.jpg" },
  { id: 4, name: "Shreya Ghoshal", image: "/photos/Artists/4.jpg" },
  { id: 5, name: "Sonu Nigam", image: "/photos/Artists/5.jpg" },
  { id: 6, name: "Sachin-Nigar", image: "/photos/Artists/6.jpeg" },
  { id: 7, name: "Vishal-Shekar", image: "/photos/Artists/7.jpeg" },
  { id: 8, name: "Atif Aslam", image: "/photos/Artists/8.jpeg" },
  { id: 9, name: "Anirudh Ravichander", image: "/photos/Artists/9.jpeg" },
  { id: 10, name: "Yo Yo Honey-Singh", image: "/photos/Artists/10.jpeg" },
  { id: 11, name: "Udit Narayan", image: "/photos/Artists/11.jpeg" },
  { id: 12, name: "Vishal Mishra", image: "/photos/Artists/12.jpeg" },
  { id: 13, name: "Jasleen Royal", image: "/photos/Artists/14.jpeg" },
  { id: 14, name: "Shankar Mahadevan", image: "/photos/Artists/15.jpeg" },
  { id: 15, name: "Bashah", image: "/photos/Artists/16.jpeg" },
  { id: 16, name: "Vijay Prakash", image: "/photos/Artists/17.jpeg" },
  { id: 17, name: "Sanjith Hegde", image: "/photos/Artists/18.jpeg" },
  { id: 18, name: "Neha Kakkar", image: "/photos/Artists/19.jpeg" },
  { id: 19, name: "Anuv Jain", image: "/photos/Artists/20.jpeg" },
  { id: 20, name: "Amith Trivedi", image: "/photos/Artists/13.jpeg" }
];

const ArtistList = () => {
  const navigate = useNavigate();

  const handleArtistClick = (artist) => {
    const artistName = artist.name.toLowerCase().trim();
  
    if (artistName === "pritham") {
      navigate("/artist/pritham");
    } else if (artistName === "arjith singh") {
      navigate("/artist/arjith");
    } else if (artistName === "a.r rahman") {
      navigate("/artist/rahman");
    } else if (artistName === "shreya ghoshal") {
      navigate("/artist/shreya");
    } else {
      navigate(`/artist/${artist.id}`);
    }
  };
  
  
  

  return (
    <div className="lists-container">
      <div className="heading1">
        <h1>Popular Artists</h1>
      </div>
      
      <div className="artists-container">
        {artists.map((artist) => (
          <div 
            className="artist-wrapper" 
            key={artist.id} 
            onClick={() => handleArtistClick(artist)}
            style={{ cursor: "pointer" }}
          >
            <div className="artists">
              <img src={artist.image} alt={artist.name} className="artists-img" />
            </div>
            <p className="artist-name">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
