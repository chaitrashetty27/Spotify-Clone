import React from "react";
import "./AlbumList.css";

const albums = [
  { id: 1, title: "Sanam Teri Kasam", image: "/photos/Albums/1.jpg" },
  { id: 2, title: "Yeh Jawani Hai Deewani", image: "/photos/Albums/2.jpg" },
  { id: 3, title: "Mismatched", image: "/photos/Albums/3.jpg" },
  { id: 4, title: "Jab We Met", image: "/photos/Albums/4.jpg" },
  { id: 5, title: "Kantara", image: "/photos/Albums/5.jpg" },
  { id: 6, title: "Manjumal Boys", image: "/photos/Albums/6.jpg" },
  { id: 7, title: "Atrangi Re", image: "/photos/Albums/7.jpg" },
  { id: 8, title: "Amaran", image: "/photos/Albums/8.jpg" },
  { id: 9, title: "Kabir Singh", image: "/photos/Albums/9.jpeg" },
  { id: 10, title: "Hamari Adhuri Kahani", image: "/photos/Albums/10.jpeg" },
  { id: 11, title: "Aashiqui 2", image: "/photos/Albums/11.jpeg" },
  { id: 12, title: "Glory", image: "/photos/Albums/12.jpeg" },
  { id: 13, title: "Young G.O.A.T", image: "/photos/Albums/13.jpeg" },
  { id: 14, title: "Pushpa 2", image: "/photos/Albums/14.jpeg" },
  { id: 15, title: "Hi Nanna", image: "/photos/Albums/15.jpeg" },
  { id: 16, title: "Bangalore Days", image: "/photos/Albums/16.jpeg" },
  { id: 17, title: "Sita Ramam", image: "/photos/Albums/17.jpeg" },
  { id: 18, title: "SaptaSagarada Ache Yello ", image: "/photos/Albums/18.jpeg" },
  { id: 19, title: "Garuda Gamana Vrishaba Vahana", image: "/photos/Albums/19.jpeg" },
  { id: 20, title: "Devara Part 1", image: "/photos/Albums/20.jpeg" }
];

const AlbumList = () => {
  return (
    <div className="list-container">
      <div className="heading">
        <h1>Popular Albums</h1>
      </div>
      <div className="singers-container">
        {albums.map((album) => (
          <div className="album-wrapper" key={album.id}>
            <div className="singers">
              <img src={album.image} alt={album.title} className="mov-img" />
            </div>
            <p className="album-title">{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;