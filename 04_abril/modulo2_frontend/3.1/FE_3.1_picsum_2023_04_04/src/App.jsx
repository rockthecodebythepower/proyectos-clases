import MainLayout from "./layout/MainLayout"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"

const App = () => {
  return (
    <MainLayout>
      <Header />
      <Main />
      <Footer />
    </MainLayout>
  )
}

export default App
