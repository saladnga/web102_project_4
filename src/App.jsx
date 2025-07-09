import React, { useState, useEffect } from "react";
import CatCard from "./components/CatCard";
import BanList from "./components/BanList";
import "./App.css";

const API = "https://api.thecatapi.com/v1/images/search?has_breeds=1";

function App() {
  const [cat, setCat] = useState(null);
  const [banList, setBanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  const fetchCat = async (attempt = 0) => {
    if (attempt > 10) {
      setLoading(false);
      alert("Too many banned results. Please clear your ban list.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(API, {
        headers: {
          "x-api-key":
            process.env.REACT_APP_CAT_API_KEY,
        },
      });

      const data = await res.json();
      const result = data[0];
      const breed = result.breeds?.[0];

      if (!breed) {
        fetchCat(attempt + 1);
        return;
      }

      const temperamentList = breed.temperament
        ? breed.temperament.split(", ").map((t) => t.trim())
        : [];

      const isBanned =
        banList.includes(breed.origin) ||
        temperamentList.some((t) => banList.includes(t));

      if (isBanned) {
        fetchCat(attempt + 1);
        return;
      }

      setCat(result);
      setHistory((prev) => [...prev, result]);
    } catch (err) {
      console.error("Error fetching cat:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleBan = (value) => {
    setBanList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="container">
      <h1>Veni Vici: Cat Discovery</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        cat && <CatCard cat={cat} onBanClick={toggleBan} />
      )}

      <button onClick={() => fetchCat()} className="btn">
        Discover More
      </button>

      <BanList banList={banList} onBanClick={toggleBan} />

      <h3>History</h3>
      <div className="history">
        {history.map((c, i) => (
          <img key={i} src={c.url} alt={`cat-${i}`} className="history-img" />
        ))}
      </div>
    </div>
  );
}

export default App;
