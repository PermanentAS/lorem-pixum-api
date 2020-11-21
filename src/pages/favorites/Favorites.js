import React, { useState, useEffect } from "react";
import { Card } from "./../../components/card/card";
import { Navbar } from "./../../components/navbar/navbar";

export const Favorites = () => {
  const [images, setImages] = useState([]);
  const [togglerUpdate, setTogglerUpdate] = useState(false);

  useEffect(() => {
    setImages(JSON.parse(localStorage.getItem("favorites")));
    setTogglerUpdate(false);
  }, [togglerUpdate]);

  return (
    <>
      <Navbar />
      <section className="home-page">
        <div className="cards-block">
          <h1 className="title">Favorites</h1>
          <div className="cards-section">
            {!images.length
              ? "There are no photos yet"
              : images.map((image) => (
                  <Card
                    image={image}
                    key={image.url}
                    updateFavorites={setTogglerUpdate}
                  />
                ))}
          </div>
        </div>
      </section>
    </>
  );
};
