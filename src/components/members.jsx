import React from "react";
import members from "../data/members";
function Members() {
  return (
    <section id="members" className="container mt-5">
      <h2>Membres du bureau</h2>

      <div className="row">
        {members.map((member) => (
          <div
            key={member.id}
            className="col-md-3"
          >
            <div className="card shadow mb-3">
              <div className="card-body text-center">
                <h5>{member.nom}</h5>
                <p>{member.poste}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Members;