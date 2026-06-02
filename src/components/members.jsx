import React from "react";
import members from "../data/members";
function Members() {
  return (
    <section id="members" className="container mt-5">
      <h2 className="text-center fw-bold mb-4">
        Membres du bureau
      </h2>

      <div className="row">
        {members.map((member) => (
          <div
            key={member.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
          >
            <div
              className="card shadow h-100"
              style={{
                minHeight: "220px",
                borderRadius: "15px",
                backgroundColor: "#0d9488"
              }}
            >
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5
                  className="fw-bold"
                  style={{ color: "white" }}
                >
                  {member.nom}
                </h5>
                <p
                  className="mb-0"
                  style={{ color: "black" }}
                >
                  {member.poste}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Members;