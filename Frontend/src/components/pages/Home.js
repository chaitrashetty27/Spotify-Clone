import React from 'react'
import "./Home.css";

import a from "../../assests/1.jpg"
import b from "../../assests/2.jpg"
import c from "../../assests/3.jpg"
import d from "../../assests/4.jpg"
import e from "../../assests/5.jpg"
import f from "../../assests/6.jpg"
import g from "../../assests/7.jpg"
import h from "../../assests/8.jpg"
import i from "../../assests/9.jpg"
import j from "../../assests/10.jpg"
import song1 from "../../assests/songs/1.jpeg"
import song2 from "../../assests/songs/2.jpeg"
import song3 from "../../assests/songs/3.jpeg"
import song4 from "../../assests/songs/4.jpeg"
import song5 from "../../assests/songs/6.jpeg"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
   
    <div className='home-container'>
      
       <div className='title'>
        <h2>Popular Artists</h2>
        </div>
        <p className='show'>
         <Link to ="/ArtistList" className='show-btn'>  Show All</Link> 
          </p>
        
        <div className='artist-container'>
        <div className='card'>
        <Link to="/artist/Pritham" className='link'>
            <img src={a} alt='' className='artist-img' />
            <p className='name'>Pritham</p>
            </Link>
        </div>
      <div className='card'>
      <Link to="/artist/Arjith" className='link'>
        <img src={b} alt='' className='artist-img'/>
        <p className='name'>Arjith Singh</p>
        </Link>

      </div>
      <div className='card'>
      <Link to="/artist/rahman" className='link'>
        <img src={c} alt='' className='artist-img'/>
        <p className='name'>A.R Rahman</p>
        </Link>
      </div>
      <div className='card'>
      <Link to="/artist/shreya" className='link'>
        <img src={d} alt='' className='artist-img'/>
        <p className='name'>Shreya Ghoshal</p>
        </Link>
      </div>
      <div className='card'>
      <Link to="/artist/sonu" className='link'>
        <img src={e} alt='' className='artist-img'/>
        </Link>
        <p className='name'>Sonu Nigam</p>
      </div>
     
      </div>
     
      
<div className='title-album'>
        <h2>Albums</h2>
      </div> 
      
      <p className='show'>
         <Link to ="/AlbumList" className='show-btn'>  Show All</Link> 
          </p>
      <div className='album-container'>
      <div className='card-albums'>
        <Link to="albums/sanam" className='link'>
        <img src= {f} alt='' className='album-img'/>
        </Link>
        <p className='name'>Sanam Teri Kasam</p>
       </div>
       <div className='card-albums'>
        <img src= {g} alt='' className='album-img'/>
        <p className='name'>Yeh jawani Hey Deewani</p>
       </div>
       <div className='card-albums'>
        <img src= {h} alt='' className='album-img'/>
        <p className='name'>Mismatched Season 3</p>
       </div>
       <div className='card-albums'>
        <img src= {i} alt='' className='album-img'/>
        <p className='name'>Jab We Met</p>
       </div>
       <div className='card-albums'>
        <img src= {j} alt='' className='album-img'/>
        <p className='name'>Kantara</p>
       </div>
       </div>
       <div className='music-title'>
        <h1>Trending Songs</h1>
       </div>
       <p className='show'>
         <Link to ="/Trending" className='show-btn'>  Show All</Link> 
          </p>
       <div className='songs-container'>
        <div className='card-song'>
          <img src ={song1} alt='' className='song-img'/>
          <p className='name'>Premalo</p>
        </div>
        <div className='card-song'>
          <img src ={song2} alt='' className='song-img'/>
          <p className='name'>Aashiq Tera</p>
        </div>
        <div className='card-song'>
          <img src ={song3} alt='' className='song-img'/>
          <p className='name'>Angels for Each Other</p>
        </div>
        <div className='card-song'>
          <img src ={song4} alt='' className='song-img'/>
          <p className='name'>Raanjan</p>
        </div>
        <div className='card-song'>
          <img src ={song5} alt='' className='song-img'/>
          <p className='name'>Sahiba</p>
        </div>
       </div>
       
    </div>
  )
}

export default Home
