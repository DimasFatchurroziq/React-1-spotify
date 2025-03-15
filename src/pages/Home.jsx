import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <nav className='navbar'>
          <div className="search-wrapper">
            <input type="search" placeholder="Search For Musics, Artists, ..."/>
          </div>
          <div className="nav-list">
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Premium</a></li>
            </ul>
          </div>
          <div className="buttons">
              <a href="#" className="login">Login</a>
              <a href="#" className="signup">Sign Up</a>
          </div>
        </nav>
        <div className="conten">
          <div className="header">
            <h1>All The <span>Best Songs</span> in One Place</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit minima error aliquam dolor voluptatem nobis dolore! Dolorem inventore, obcaecati corrupti quam voluptas maxime, nam magnam pariatur repellendus libero sed?</p>
          </div>
          <div className="buttons">
              <a href="#" className="disnow">Discover Now</a>
              <a href="#" className="playlist">Create Playlist</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
