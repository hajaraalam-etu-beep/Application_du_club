import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <img
          src="/image/logo.jpg"
          alt="logo"
          width="50"
        />

        <span className="navbar-brand ms-2">
          Club Aidev_communityfsbm
        </span>

        <div className="navbar-nav ms-auto">
          <a
            className="nav-link"
            href="#members"
            style={{ transition: "all 0.3s ease" }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            Membres
          </a>

          <a
            className="nav-link"
            href="#events"
            style={{ transition: "all 0.3s ease" }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            Événements
          </a>

          <a
            className="nav-link"
            href="#join"
            style={{ transition: "all 0.3s ease" }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            Rejoindre
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;