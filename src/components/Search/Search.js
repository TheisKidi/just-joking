import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/slices/searchSlice";
import SearchCard from "../SearchCard/SearchCard";
import "./Search.css";

function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const { filteredJokes } = useSelector((state) => state.search);
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleSearch = (e) => {
    const term = e.target.value;
    setInput(term);
    dispatch(setSearchTerm(term));
  };

  return (
    <div>
      <div className="container">
        <input
          className="search-bar"
          type="text"
          placeholder="søg efter joke"
          value={input}
          onChange={handleSearch}
        />
      </div>
      <div className="favorite-container">
        <div className="favorites-list">
          {filteredJokes.map((joke, index) => (
            <SearchCard
              key={index}
              joke={joke}
              isFavorite={favorites.some((fav) => fav.setup === joke.setup)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
