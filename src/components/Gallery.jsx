import React from "react";
function Gallery() {
  const photos = [
  "/image/image1.jpeg",
  "/image/image2.jpeg",
  "/image/image3.jpeg",
  "/image/image4.jpeg",
  "/image/image5.jpeg",
  "/image/image6.jpeg"
  ];

  return (
    <section id="gallery" className="container mt-5">
      <h2 className="text-center fw-bold mb-4">
        Galerie
      </h2>

      <div className="row">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="col-md-4 mb-4"
          >
            <img
               src={photo}
               alt={`Photo ${index + 1}`}
               className="img-fluid rounded shadow"
               style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover"
               }}
/>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;