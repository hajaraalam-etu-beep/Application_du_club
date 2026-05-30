import React from "react";
function Hero() {
  return (
    <section className="bg-light text-center p-5">

      <h1>Club Informatique</h1>

      <p>
        Bienvenue dans notre club dédié au
        développement web et aux nouvelles technologies.
      </p>

      <a
        href="#join"
        className="btn btn-primary"
      >
        Rejoindre le club
      </a>

    </section>
  );
}

export default Hero;