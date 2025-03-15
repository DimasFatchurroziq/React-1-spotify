import React from 'react'
import '../../styles/SideBar.css'
import logo from '../../assets/logo.png'
import home from '../../assets/icon/home.png'
import SideBarMenu from './subcomponents/SideBarMenu'
import { sideBarHomeList, sideBarDiscoverList, sideBarAlbumsList, sideBarArtistList } from '../../data/SideBarSection'

function SideBar() {
  return (
    <div>
      <nav>
        <div className="sidebar-wrapper">
          <div className="sidebar-container">
            <div className="logo">
                <a href=''>
                    <img src={logo} alt="tai" />
                </a>
            </div>
            {/* Menu */}
            <SideBarMenu />
            {/* Library */}
            <div className="menu-section"> 
              <h2>Library</h2>
              <ul>
                  <li>
                    <button className="btn">
                      <img src={home} alt="" />
                      <span>Recently Added</span>
                    </button>
                  </li>
                  <li>
                    <button className="btn">
                      <img src={home} alt="" />
                      <span>Most Played</span>
                    </button>
                  </li>
              </ul>
            </div>
            {/* Playlist and favottite */}
            <div className="menu-section">
              <h2>Playlist and Favourite</h2>
              <ul>
                  <li>
                    <button className="btn">
                      <img src={home} alt="" />
                      <span>Your favorites</span>
                    </button>
                  </li>
                  <li>
                    <button className="btn">
                      <img src={home} alt="" />
                      <span>Your playlists</span>
                    </button>
                  </li>
                  <li>
                    <button className="btn">
                      <img src={home} alt="" />
                      <span>Add playlists</span>
                    </button>
                  </li>
              </ul>
            </div>
            {/* general */}
            <div className="menu-section">
              <h2>general</h2>
              <ul>
                  <li>
                    <button className="btn">
                      <img src={home} alt="" />
                      <span>Setting</span>
                    </button>
                  </li>
                  <li>
                    <button className="btn">
                      <img src={home} alt="" />
                      <span>Logout</span>
                    </button>
                  </li>
              </ul>
            </div>
          </div>
        </div>
    </nav>
    </div>
  )
}

export default SideBar
