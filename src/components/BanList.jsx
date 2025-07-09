import React from "react";
import "./BanList.css";

function BanList({ banList, onBanClick }) {
  return (
    <div className="ban-list">
      <h3>Ban List</h3>
      {banList.length === 0 && <p>No banned origins yet.</p>}
      {banList.map((origin) => (
        <span
          key={origin}
          onClick={() => onBanClick(origin)}
          className="ban-item"
        >
          {origin} ❌
        </span>
      ))}
    </div>
  );
}

export default BanList;
