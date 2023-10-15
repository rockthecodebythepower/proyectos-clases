import { useContext } from 'react';
import './App.css'
import ChangeTheme from './components/ChangeTheme/ChangeTheme';
import { themeContext } from './providers/ThemeProvider/ThemeProvider';
import Game from './components/Game/Game';

function App() {

  const { theme } = useContext(themeContext);

  return (
    <div id='app' className={theme}>
      <ChangeTheme/>
      <Game/>
    </div>
  )
}

export default App;