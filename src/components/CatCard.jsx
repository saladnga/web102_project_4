import React from "react";
import "./CatCard.css";

function CatCard({ cat, onBanClick }) {
  const breed = cat.breeds[0];

  return (
    <div className="cat-card">
      <img src={cat.url} alt={breed.name} className="cat-img" />
      <h2>{breed.name}</h2>
      <p>
        <strong>Temperament:</strong>{" "}
        {breed.temperament.split(", ").map((temp) => (
          <span
            key={temp}
            onClick={() => onBanClick(temp)}
            className="clickable"
            style={{ marginRight: 6 }}
          >
            {temp}
          </span>
        ))}
      </p>
    </div>
  );
}

export default CatCard;
