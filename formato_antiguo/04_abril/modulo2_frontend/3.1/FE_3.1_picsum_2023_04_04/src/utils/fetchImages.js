export const fetchImages = async (numPage) => {
  const res = await fetch(
    `https://picsum.photos/v2/list?page=${numPage}&limit=27`
  )
  const data = await res.json()
  return data
}
