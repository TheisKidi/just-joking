import React from "react";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../store/slices/favoritSlice";
import "./FavoriteCard.css";
import "../JokeCard/JokeCard.css";

function FavoriteCard({ joke }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFavorite(joke));
  };

  return (
    <div className="favorite-card">
      <div className="favorite-card-title">
        <h3 className="setup">{joke.setup}</h3>
      </div>
      <p className="punchline">{joke.punchline}</p>
      <button className="my-btn" onClick={handleRemove}>
        Fjern fra Favoritter
      </button>
    </div>
  );
}

export default FavoriteCard;
