import React from 'react'
import home from '../../../assets/icon/home.png'
// import '../../../styles/SideBar.css'

function SideBarMenu() {
  return (
    <div className="menu-section"> 
                  <h2>Menu</h2>
                  <ul>
                      <li>
                        <button className="btn">
                          <img src={home} alt="" />
                          <span>Home</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn">
                          <img src={home} alt="" />
                          <span>Discover</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn">
                          <img src={home} alt="" />
                          <span>Albums</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn">
                          <img src={home} alt="" />
                          <span>Artists</span>
                        </button>
                      </li>
                  </ul>
                </div>
  )
}

export default SideBarMenu
