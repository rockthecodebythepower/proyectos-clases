import './App.css'
import ChangeTheme from './components/ChangeTheme/ChangeTheme'
import Header from './components/Header/Header'
import Theme from './providers/Theme/Theme'

function App() {

  return (
    <>
      <Theme>
        <ChangeTheme></ChangeTheme>
        <Header/>
      </Theme>
    </>
  )
}

export default App