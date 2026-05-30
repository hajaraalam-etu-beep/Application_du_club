import React from "react";
import { useState, useEffect } from "react";
import eventsData from "../data/events";
function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    setEvents(eventsData);
  }, []);
  return (
    <section id="events" className="container mt-5">
      <h2>Événements</h2>
      <div className="row">
        {events.map((event) => (
          <div
            key={event.id}
            className="col-md-4"
          >
            <div className="card shadow mb-3">
              <div className="card-body">
                <h5>{event.titre}</h5>
                <p>{event.date}</p>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Events;