import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jokesApi } from "./apis/jokesApi";
import favoritesReducer from "./slices/favoritSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    [jokesApi.reducerPath]: jokesApi.reducer,
    favorites: favoritesReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(jokesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchAllJokesQuery } from "./apis/jokesApi";
