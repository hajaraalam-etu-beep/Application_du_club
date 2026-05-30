import React from "react";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <img
          src="../image/logo.jpg"
          alt="logo"
          width="50"
        />
        <span className="navbar-brand ms-2">
          Club Informatique
        </span>
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#members">
            Membres
          </a>
          <a className="nav-link" href="#events">
            Événements
          </a>
          <a className="nav-link" href="#join">
            Rejoindre
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;