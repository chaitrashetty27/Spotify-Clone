import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleSong = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/songs/${id}`);
        setSong(res.data);
      } catch (err) {
        console.error("Error fetching song", err);
        setError("Failed to load song.");
      }
    };

    fetchSong();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!song) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", color: "black", marginTop: "20px" }}>
      <h2>{song.title}</h2>
      {song.imageUrl && (
        <img
          src={song.imageUrl}
          alt={song.title}
          style={{ width: "200px", borderRadius: "10px" }}
        />
      )}
      <p>Artist: {song.artist}</p>
      <p>Duration: {song.duration} seconds</p>

      {song.audioUrl ? (
        <audio controls style={{ marginTop: "10px" }}>
          <source src={song.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>Audio not available.</p>
      )}
    </div>
  );
};

export default SingleSong;
