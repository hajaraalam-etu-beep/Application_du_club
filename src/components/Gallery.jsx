import React from "react";
function Gallery() {

  const photos = [
    "https://picsum.photos/300?1",
    "https://picsum.photos/300?2",
    "https://picsum.photos/300?3"
  ];

  return (
    <section className="container mt-5">

      <h2>Galerie</h2>

      <div className="row">

        {photos.map((photo, index) => (

          <div
            key={index}
            className="col-md-4"
          >

            <img
              src={photo}
              alt="event"
              className="img-fluid rounded shadow"
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;