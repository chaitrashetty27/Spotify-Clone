import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Reset from './components/pages/Reset';
import AlbumList from './components/pages/cards/AlbumList';
import ArtistList from './components/pages/cards/ArtistList';
import Trending from './components/pages/cards/Trending';
import Playlist from './components/pages/Playlist';
import Pritham from './components/pages/artists/Pritham';
import Arjith from './components/pages/artists/Arjith';
import Rahman from './components/pages/artists/Rahman';
import AdminLogin from './components/pages/AdminLogin';
import AdminUpload from './components/pages/AdminUpload';
import SingleSong from './components/pages/SingleSong';
import Shreya from './components/pages/artists/Shreya';
import Sonu from './components/pages/artists/Sonu';
import Sanam from './components/pages/cards/albums/Sanam';
import AllSongs from './components/data/AllSongs';
function App() {
  return ( 
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/albumlist" element={<AlbumList />} />
          <Route path="/artistlist" element={<ArtistList />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/artist/pritham" element={<Pritham />} />
          <Route path="/artist/arjith" element={<Arjith />} />
          <Route path="/artist/rahman" element={<Rahman />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin-upload" element={<AdminUpload />} />
          <Route path="/playlist/:id" element={<SingleSong />} />
          <Route path="/artist/shreya" element={<Shreya />} />

          <Route path="/artist/sonu" element={<Sonu />} />
          <Route path="/sanam" element={<Sanam />} />
          <Route path="/allsongs" element={<AllSongs />} />
          


          <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
