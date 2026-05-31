import React from "react";
import { useState } from "react";

function JoinClub() {
  const [showForm, setShowForm] = useState(false);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [filiere, setFiliere] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Merci ${prenom} ${nom}, votre demande a été envoyée.`
    );

    setNom("");
    setPrenom("");
    setEmail("");
    setFiliere("");
  };

  return (
    <section
      id="join"
      className="container mt-5 text-center"
    >
      <h2 className="fw-bold mb-4">
        Rejoindre le club
      </h2>

      <button  className="btn" style={{ backgroundColor: "#4FC3F7",color: "white",padding: "10px 25px",
        borderRadius: "10px"}}
         onClick={() => setShowForm(!showForm)}>Rejoindre
     </button>
      {showForm && (
        <form
          className="mt-4 mx-auto"
          style={{ maxWidth: "500px" }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Nom"
            className="form-control mb-3"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />

          <input
            type="text"
            placeholder="Prénom"
            className="form-control mb-3"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Filière"
            className="form-control mb-3"
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
          />

           <button className="btn" style={{backgroundColor: "#4FC3F7",color: "white",padding: "10px 25px",
            borderRadius: "10px"}}onClick={() => setShowForm(!showForm)}>  Envoyer
           </button>
        </form>
      )}
    </section>
  );
}

export default JoinClub;