import React from 'react'
import './sidebar.css'
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT YE</span>
        <img
          className="sidebarImg"
          src="https://media1.popsugar-assets.com/files/thumbor/8p7yoGvVqUngP2voggr1GKRbJrs/718x0:3790x3072/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/10/04/645/n/1922564/270fa3d8633c4351bb2320.55541618_/i/kanye-west-white-lives-matter-shirt-controversy.jpg"
          alt=""
        />
        <p>
          Kanye West, legal name Ye, (born June 8, 1977, Atlanta, Georgia,
          U.S.), American producer, rapper, and fashion designer who parlayed
          his production success in the late 1990s and early 2000s into a career
          as a popular, critically acclaimed solo artist.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Career</li>
          <li className="sidebarListItem">Family</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <div className="socialContainer">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar