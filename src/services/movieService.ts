import axios from "axios";

const response = await axios.get("", {
  params: { query },
});

async function getMovies(query) {
  const response = await axios.get("", {
    params: {
      // твої параметри
    },
    headers: {
      Authorization: `Bearer твійТокен`,
    },
  });
}
