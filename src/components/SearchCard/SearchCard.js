import React from "react";
import "./SearchCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/slices/favoritSlice";

function JokeCard({ joke, isFavorite }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleAddFavorite = () => {
    const jokeExists = favorites.some((fav) => fav.setup === joke.setup);

    dispatch(addFavorite(joke));
    if (jokeExists) {
      dispatch(removeFavorite(joke));
    } else {
      dispatch(addFavorite(joke));
    }
  };

  const favoriteBtnClass = isFavorite ? "my-btn favorite" : "my-btn";

  return (
    <div className="favorite-card">
      <h3 className="setup">{joke.setup}</h3>
      <p className="punchline">" {joke.punchline} "</p>
      <button className={favoriteBtnClass} onClick={handleAddFavorite}>
        Favorite
      </button>
    </div>
  );
}

export default JokeCard;
