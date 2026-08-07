import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

async function getMovies(query) {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: { query },
      headers: {
        Authorization: `Bearer  ${API_KEY}`,
      },
    },
  );
  console.log(response.data);
}
