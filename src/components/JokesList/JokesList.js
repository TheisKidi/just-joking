import React from "react";
import { useSelector } from "react-redux";
import "../JokeCard/JokeCard.css";
import JokeCard from "../JokeCard/JokeCard";
import { useFetchAllJokesQuery } from "../../store";

function JokesList() {
  const { data: joke, error, isFetching, refetch } = useFetchAllJokesQuery();
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = joke && favorites.some((fav) => fav.id === joke.id);

  let content;
  if (isFetching) {
    content = (
      <div className="joke-container">
        <div className="card">Loading</div>
      </div>
    );
  } else if (error) {
    content = <div className="card">Error loading joke</div>;
  } else {
    content = (
      <JokeCard joke={joke} onMoreClick={refetch} isFavorite={isFavorite} />
    );
  }

  return <div>{content}</div>;
}

export default JokesList;
