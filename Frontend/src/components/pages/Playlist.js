import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Playlist.css';

const Playlist = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/songs");
            setSongs(response.data);
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="playlist-container">
            <h2>Playlist</h2>
            <div className="song-grid">
                {songs.map((song) => (
                    <div key={song._id} className="song-card">
                        <div className="image-container">
                            <img
                                src={song.imageUrl || "default.jpg"}
                                alt={song.title}
                                className="song-artwork"
                            />
                            <div className="play-overlay">
                                <FaPlay className="play-icon" />
                            </div>
                        </div>

                        <div className="song-info">
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                            <p>{formatDuration(song.duration)}</p>
                        </div>

                        <div className="song-actions">
                            <Link to={`/playlist/${song._id}`}>
                                <button>View</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Playlist;
