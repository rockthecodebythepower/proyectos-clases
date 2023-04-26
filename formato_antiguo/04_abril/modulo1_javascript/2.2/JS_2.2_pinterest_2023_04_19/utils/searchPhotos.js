import {createApi} from "unsplash-js"

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
})

export const searchPhotos = async (keyword) => {
  const images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30,
  })
  //localStorage
  localStorage.setItem("images", JSON.stringify(images.response.results))
  return images
}
