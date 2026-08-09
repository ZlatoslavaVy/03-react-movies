import { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import css from "./App.module.css";
import { fetchMovies } from "../../../services/movieService";
import type { Movie } from "../../../types/movie";
import toast, { Toaster } from "react-hot-toast";
import MovieGrid from "../../MovieGrid/MovieGrid";
import Loader from "../../Loader/Loader";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (topic: string) => {
    setIsLoading(true);
    const results = await fetchMovies(topic);

    if (results.length === 0) {
      toast("No movies found for your request.");
    }
    setMovies(results);
    setIsLoading(false);
  };

  const handleSelect = (movie: Movie) => {
    console.log("Selected movie:", movie);
  };
  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />

      {isLoading ? (
        <Loader />
      ) : (
        <MovieGrid movies={movies} onSelect={handleSelect} />
      )}
    </div>
  );
}

export default App;
