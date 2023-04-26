import {GiphyFetch} from "@giphy/js-fetch-api"
import {useState} from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Search from "./components/Search/Search"
import Gallery from "./components/Gallery/Gallery"
import MainLayout from "./components/MainLayout/MainLayout"
import Error from "./components/Error/Error"

const giphy = new GiphyFetch(import.meta.env.VITE_API_KEY)

const App = () => {
  const [text, setText] = useState("")
  const [results, setResults] = useState([])
  const [error, setError] = useState(false)

  const giphyCall = async () => {
    //Si cambiamos animated por search buscamos gifs en vez de generar texto animado
    const res = await giphy.search(text)
    console.log(res)
    setResults(res.data)
  }

  const handleInput = (ev) => {
    setText(ev.target.value)
  }

  const handleSubmit = (ev) => {
    if (text.length === 0) {
      setError(true)
      return
    }
    giphyCall()
    setText("")
    setError(false)
  }

  return (
    <MainLayout>
      <Header />
      <main>
        <Search
          text={text}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
        <Gallery results={results} text={text} />
        <Error error={error} />
      </main>
      <Footer />
    </MainLayout>
  )
}

export default App
