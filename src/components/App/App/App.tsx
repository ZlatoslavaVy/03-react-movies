// import { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import css from "./App.module.css";

function App() {
  const handleSubmit = (topic: string) => {
    console.log("Query:", topic);
  };
  return <SearchBar onSubmit={handleSubmit} />;
}

export default App;
