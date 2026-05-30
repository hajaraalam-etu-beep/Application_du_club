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
      className="container mt-5"
    >

      <h2>Rejoindre le club</h2>

      <button
        className="btn btn-success"
        onClick={() =>
          setShowForm(!showForm)
        }
      >
        Rejoindre
      </button>

      {showForm && (

        <form
          className="mt-4"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Nom"
            className="form-control mb-3"
            value={nom}
            onChange={(e) =>
              setNom(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Prénom"
            className="form-control mb-3"
            value={prenom}
            onChange={(e) =>
              setPrenom(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Filière"
            className="form-control mb-3"
            value={filiere}
            onChange={(e) =>
              setFiliere(e.target.value)
            }
          />

          <button
            className="btn btn-primary"
            type="submit"
          >
            Envoyer
          </button>

        </form>

      )}

    </section>
  );
}

export default JoinClub;