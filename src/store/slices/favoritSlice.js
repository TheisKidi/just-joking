import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const jokeExists = state.favorites.some(
        (joke) => joke.setup === action.payload.setup
      );
      if (!jokeExists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (joke) => joke.setup !== action.payload.setup
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
