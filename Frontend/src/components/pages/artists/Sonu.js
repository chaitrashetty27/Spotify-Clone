import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Sonu.css";

const songs = {
  sonu: [
    { id: 1, title: "Tum Se Hi", albums: "Jab Me Met", duration: "5:21", image: "/photos/songs/7.jpeg" },
    { id: 2, title: "Ye Tune Kya Kiya", albums: "once upon a time in bombay ", duration: "5:14", image: "/photos/songs/15.jpeg" },
    { id: 3, title: "O Maahi", albums: "Dunki", duration: "3:53", image: "/photos/songs/16.jpeg" },
    { id: 4, title: "Subhanallah", albums: "Ye Jawani Hai Deewani", duration: "4:09", image: "/photos/songs/17.jpeg" },
    { id: 5, title: "Kesariya", albums: "Bramastra", duration: "4:28", image: "/photos/songs/18.jpeg" },
    { id: 6, title: "Shayad", albums: "Love Aaj Kal", duration: "4:07", image: "/photos/songs/19.jpeg" },
    { id: 7, title: "Tum Kya Mile", albums: "Roky or Rani Ki Prem Kahani", duration: "4:37", image: "/photos/songs/20.jpeg" },
  ],
};

const Sonu = () => {
  const artistName = " Sonu nigam ";
  const artistSongs = songs["sonu"] || [];

  return (
    <div className="sonu-page">
     
           <div className="sonu-header">
        <FontAwesomeIcon icon={faPlay} className="play-icon" />
        <h2>{artistName}</h2>
      </div>

      
      <ul className="song-list">
        {artistSongs.map((song, index) => (
          <li key={song.id} className="song-item">
            <span className="song-rank">{index + 1}</span>
            <img src={song.image} alt={song.title} className="song-image" />
            <span className="song-tit">{song.title}</span>
            <span className="song-streams">{song.albums}</span>
            <span className="song-duration">{song.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sonu;
