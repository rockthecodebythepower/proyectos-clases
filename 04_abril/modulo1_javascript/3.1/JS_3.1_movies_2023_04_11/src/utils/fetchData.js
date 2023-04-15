const MOVIESTHEATERS_URL = "https://imdb-api.com/en/API/InTheaters/k_df9zix78"

export const getMovies = async () => {
  const res = await fetch(MOVIESTHEATERS_URL)
  const data = await res.json()
  return data.items
}
