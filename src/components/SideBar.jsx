import React from 'react'
import '../styles/SideBar.css'
import logo from '../assets/logo.png'

function SideBar() {
  return (
    <div>
      <nav>
        <div className="sidebar-wrapper">
          <div className="sidebar-container"></div>
            <div className="logo">
                <a href=''>
                    <img src={logo} alt="tai" />
                </a>
            </div>
            <div className="menu">
                <ul>
                    <li>
                      <span></span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default SideBar
