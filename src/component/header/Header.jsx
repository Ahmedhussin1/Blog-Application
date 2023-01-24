import React from 'react'
import './header.css'
function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">YEEZY</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://media.gq.com/photos/55f9bdb32de2e54e38607636/master/pass/GettyImages-488589090.jpg"
        alt=""
      />
    </div>
  );
}

export default Header