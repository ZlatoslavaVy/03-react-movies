import axios from "axios";
import type { AxiosInstance } from "axios";
import type { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;
export const MOVIE_IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const tmdbApi: AxiosInstance = axios.create({
  baseURL: " https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer  ${API_KEY}`,
    accept: "application/json",
  },
});

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await tmdbApi.get<MoviesResponse>(`/search/movie`, {
    params: { query },
  });

  return response.data.results;
};
