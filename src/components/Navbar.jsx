import React from "react";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom navbar">
      <div className="container">
        <img src="/image/logo.jpg" alt="logo" width="50" className="logo" />

        <span className="navbar-brand ms-2 fw-bold">
          Club Aidev_communityfsbm
        </span>

        <div className="navbar-nav ms-auto">
          <a
            className="nav-link custom-link"
            href="#members"
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "black",
            }}
          >
            Membres
          </a>

          <a
            className="nav-link custom-link"
            href="#events"
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "black",
            }}
          >
            Événements
          </a>

          <a
            className="nav-link custom-link"
            href="#gallery"
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "black",
            }}
          >
            Galerie
          </a>

          <a
            className="nav-link custom-link"
            href="#join"
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "black",
            }}
          >
            Rejoindre
          </a>

          <a
            className="nav-link custom-link"
            href="#contact"
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "black",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
import { useState } from "react";
export default Navbar;