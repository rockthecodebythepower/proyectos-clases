import './App.css'
import CSSFilters from './components/CSSFilters/CSSFilters';
import FilterEmojis from './components/FilterEmojis/FilterEmojis';
import Transformer from './components/Transformer/Transformer';

function App() {

  return (
    <div className='playground'>
      <CSSFilters/>
      <FilterEmojis/>
      <Transformer/>
    </div>
  )
}

export default App;