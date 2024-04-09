import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jokesApi = createApi({
  reducerPath: "jokes",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://official-joke-api.appspot.com/",
  }),
  endpoints(builder) {
    return {
      fetchAllJokes: builder.query({
        query: () => {
          return {
            url: "random_joke",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAllJokesQuery } = jokesApi;
export { jokesApi };
