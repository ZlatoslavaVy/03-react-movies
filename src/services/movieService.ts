import axios from "axios";

const response = await axios.get(
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
  {
    params: { query },
  },
);

async function getMovies(query) {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        // твої параметри
      },
      headers: {
        Authorization: `Bearer  ${import.meta.env.VITE_API_KEY}`,
      },
    },
  );
}
