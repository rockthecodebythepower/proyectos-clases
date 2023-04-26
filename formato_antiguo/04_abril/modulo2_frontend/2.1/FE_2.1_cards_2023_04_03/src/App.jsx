import "./App.css"
import {useState} from "react"
import {v4 as uuidv4} from "uuid"
import ImagePreview from "./components/ImagePreview"
import Form from "./components/Form"
import Card from "./components/Card"
import Grid from "./components/Grid"

function App() {
  const INITIAL_VALUE = {
    name: "",
    price: "",
  }
  const [articles, setArticles] = useState([])
  const [image, setImage] = useState(null)
  const [video, setVideo] = useState(null)
  const [item, setItem] = useState(INITIAL_VALUE)

  const create = () => {
    const newArticle = {
      name: item.name,
      price: item.price,
      media: image !== null ? image : video,
      id: uuidv4(),
      type: image !== null ? "image" : "video",
    }
    setArticles([...articles, newArticle])
    setImage(null)
    setVideo(null)
    setItem(INITIAL_VALUE)
    console.log(articles)
  }
  return (
    <div className="App">
      <Form item={item} setItem={setItem} />
      <ImagePreview
        video={video}
        setVideo={setVideo}
        image={image}
        setImage={setImage}
      />
      <button onClick={create}>Create</button>
      <Grid>
        {articles.length > 0 &&
          articles.map((art) => <Card key={art.id} article={art} />)}
      </Grid>
    </div>
  )
}

export default App
