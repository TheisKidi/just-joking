import { createSlice } from "@reduxjs/toolkit";
import jokesData from "../../json/index.json";

const initialState = {
  searchTerm: "",
  filteredJokes: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.toLowerCase();
      state.filteredJokes = jokesData.filter(
        (joke) =>
          joke.setup.toLowerCase().includes(state.searchTerm) ||
          joke.punchline.toLowerCase().includes(state.searchTerm)
      );
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
