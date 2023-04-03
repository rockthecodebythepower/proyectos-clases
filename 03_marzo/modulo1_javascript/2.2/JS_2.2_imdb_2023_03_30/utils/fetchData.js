const TOP_MOVIES_URL =
  "https://imdb-api.com/en/API/MostPopularMovies/k_z2444fu0"

export const getData = async () => {
  const res = await fetch(TOP_MOVIES_URL)
  const data = await res.json()
  return data.items
}

export const searchMovies = async (title) => {
  const res = await fetch(
    `https://imdb-api.com/en/API/Search/k_z2444fu0/${title}`
  )
  const data = await res.json()
  return data.results
}

searchMovies("Spiderman")
