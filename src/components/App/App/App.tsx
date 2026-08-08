import { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import css from "./App.module.css";
import { fetchMovies } from "../../../services/movieService";
import type { Movie } from "../../../types/movie";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSubmit = async (topic: string) => {
    const results = await fetchMovies(topic);

    if (results.length === 0) {
      toast("No movies found for your request.");
    }
    setMovies(results);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />
    </>
  );
}

export default App;
