import "./Figure.css"

export const Figure = (res) => {
  return `
    <figure>
    <a href=${res.original} target="_blank">
    <img src=${res.thumbnail} alt=${res.source}/>
    </a>
    <a href=${res.link} target="_blank">
    <h4>${res.source}</h4>
    <figcaption>${res.title}</figcaption>
    </a>
    </figure>`
}
