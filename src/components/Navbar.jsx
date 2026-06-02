import React from "react";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        <img
          src="/image/logo.jpg"
          alt="logo"
          width="50"
          className="logo"
        />

        <span className="navbar-brand ms-2 fw-bold">
          Club Aidev_communityfsbm
        </span>

        <div className="navbar-nav ms-auto">
          <a className="nav-link custom-link" href="#members">
            Membres
          </a>

          <a className="nav-link custom-link" href="#events">
            Événements
          </a>

          <a className="nav-link custom-link" href="#gallery">
            Galerie
          </a>

          <a className="nav-link custom-link" href="#join">
            Rejoindre
          </a>

          <a className="nav-link custom-link" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;