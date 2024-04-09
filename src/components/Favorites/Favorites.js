import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import "./Favorites.css";

function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="favorites-container">
      <h2>Mine Favoritter</h2>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((joke) => <FavoriteCard key={joke.id} joke={joke} />)
        ) : (
          <p style={{ textAlign: "center" }}>Du har ingen favoritter endnu.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
