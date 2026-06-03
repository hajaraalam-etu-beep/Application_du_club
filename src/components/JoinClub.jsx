import React, { useState } from "react";

function JoinClub() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const envoyer = () => {
    setMessage("Votre demande a été envoyée avec succès !");

    setNom("");
    setPrenom("");
    setEmail("");
  };

  return (
    <div id="join" className="container text-center mt-5">
      <h2>Rejoindre le club</h2>

      <button
        className="btn btn-primary"
        onClick={() => setShowForm(!showForm)}
      >
        Rejoindre
      </button>

      {showForm && (
        <form className="mt-4">
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

          <button type="button" className="btn btn-success" onClick={envoyer}>
            Envoyer
          </button>
        </form>
      )}

      {message && <p className="mt-3 text-success fw-bold">{message}</p>}
    </div>
  );
}

export default JoinClub;