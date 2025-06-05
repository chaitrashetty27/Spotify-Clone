import React from 'react'
import "./Trending.css"

const musics=[
  { id: 1, name: "Premalo", image: "/photos/Songs/1.jpeg" },
  { id: 2, name: "Aashiq Tera", image: "/photos/Songs/2.jpeg" },
  { id: 3, name: "Angels for Each Other", image: "/photos/Songs/3.jpeg" },
  { id: 4, name: "Raanjhan", image: "/photos/Songs/4.jpeg" },
  { id: 5, name: "Tera Chehra", image: "/photos/Songs/5.jpeg" },
  { id: 6, name: "Sahiba", image: "/photos/Songs/6.jpeg" },
  { id: 7, name: "Tu Se Hi", image: "/photos/Songs/7.jpeg" },
  { id: 8, name: "Munjane Manjalli", image: "/photos/Songs/13.jpeg" },
  { id: 9, name: "Humsafar", image: "/photos/Songs/10.jpeg" },
  { id: 10, name: "Finding Her", image: "/photos/Songs/8.jpeg" },
  { id: 11, name: "Saibo", image: "/photos/Songs/9.jpeg" },
  { id: 12, name: "Innunu Bekagide", image: "/photos/Songs/12.jpeg" },
  { id: 13, name: "Paravashanadenu", image: "/photos/Songs/14.jpeg" },
  { id: 14, name: "Unakku Thaan", image: "/photos/Songs/11.jpeg" },

];

const Trending = () => {
  return (
    <div className='trending-container'>
      <div className='head'>
        <h1> Trending Songs</h1>
      </div>
      <div className='song-container'>
      {musics.map((music) => (
        <div className='trending-wrapper'  key={music.id}>
            <div className='song'>
              <img src={music.image} alt={music.name} className='song-img'/>
            </div>
            <p className='song-name'>{music.name}</p>
            </div>
   ))}
      
    </div>
    </div>
  )
}

export default Trending
