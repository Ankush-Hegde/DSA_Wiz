import React from "react";
import "../styles/components/Header.css"; // Import the separate CSS file for styling

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">My App Header</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;