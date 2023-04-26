import "./Gallery.css"

const Gallery = ({results, text}) => {
  return (
    <div className="gallery">
      {results.map((res) => (
        <figure key={res.id}>
          <img src={res.images.preview_gif.url} alt={`${text} animated`} />
          <a
            href={res.images.original.url}
            download="giphy.gif"
            target="_blank"
          >
            <span className="material-symbols-outlined">download</span>
          </a>
        </figure>
      ))}
    </div>
  )
}

export default Gallery
