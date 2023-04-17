import {createApi} from "unsplash-js"

const unsplash = createApi({
  accessKey: import.meta.env.VITE_API_KEY,
})

export const searchPhotos = async (target) => {
  const photos = await unsplash.search.getPhotos({
    query: target,
    page: 1,
    perPage: 35,
  })
  return photos
}

//color -> HEX
//alt_description -> alt
//urls.regular -> imagen
