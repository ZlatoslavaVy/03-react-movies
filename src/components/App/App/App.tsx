import { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import css from "./App.module.css";
import { fetchMovies } from "../../../services/movieService";
import type { Movie } from "../../../types/movie";
import toast, { Toaster } from "react-hot-toast";
import MovieGrid from "../../MovieGrid/MovieGrid";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSubmit = async (topic: string) => {
    const results = await fetchMovies(topic);

    if (results.length === 0) {
      toast("No movies found for your request.");
    }
    setMovies(results);
  };

  const handleSelect = (movie: Movie) => {
    console.log("Selected movie:", movie);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />
      <MovieGrid movies={movies} onSelect={handleSelect} />
    </>
  );
}

export default App;
