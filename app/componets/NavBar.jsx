import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav className="nav_bar">
        <div className="container">
          <div className="nav_wraper">
            <div className="logoWaper">
              <div className="logo">T</div>
              <p>Trafalgar</p>
            </div>
            <div className="navigation_links_wraper">
              <ul className="navigation_links">
                <li>Home</li>
                <li>Find a doctor</li>
                <li>Apps</li>
                <li>Testimonials</li>
                <li>About us</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
