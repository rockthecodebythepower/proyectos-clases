export const searchImages = async (keyword) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${keyword}&location=Spain&tbm=isch&ijn=0&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  )
  const data = await res.json()
  return data.images_results
}
