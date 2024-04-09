import "./JokeCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/slices/favoritSlice";

function JokeCard({ joke, onMoreClick, isFavorite }) {
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
    <div className="card">
      <p className="setup">{joke.setup}</p>
      <p className="punchline">" {joke.punchline} "</p>
      <div className="btns">
        <button className="my-btn" onClick={onMoreClick}>
          More
        </button>
        <button className={favoriteBtnClass} onClick={handleAddFavorite}>
          Favorite
        </button>
      </div>
    </div>
  );
}

export default JokeCard;
