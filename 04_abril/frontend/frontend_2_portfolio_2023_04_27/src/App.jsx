import "./App.css"
import GlobalLayout from "./layout/GlobalLayout/GlobalLayout"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {Outlet} from "react-router-dom"

const App = () => {
  return (
    <GlobalLayout>
      <Header />
      <Outlet />
      <Footer />
    </GlobalLayout>
  )
}

export default App
