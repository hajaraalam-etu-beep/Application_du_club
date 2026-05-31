import React, { useState, useEffect } from "react";
import eventsData from "../data/events";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <section id="events" className="container mt-5">
      <h2 className="text-center fw-bold mb-4">
        Événements
      </h2>

      <div className="row">
        {events.map((event) => (
          <div
            key={event.id}
            className="col-lg-4 col-md-6 col-12 mb-4"
          >
            <div
              className="card shadow h-100"
              style={{
                minHeight: "250px",
                borderRadius: "15px"
              }}
            >
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="fw-bold">
                  {event.titre}
                </h5>

                <p className="text-muted">
                  {event.date}
                </p>

                <p className="flex-grow-1">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;