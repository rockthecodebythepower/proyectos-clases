const API_KEY = import.meta.env.VITE_API_KEY

export const getTopAlbums = async (artist) => {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`
  )
  const data = await res.json()
  return data.topalbums.album
}

export const getArtistInfo = async (artist) => {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json`
  )
  const data = await res.json()
  return data.artist
}
