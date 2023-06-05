import { useState } from 'react'
import './App.css'
import Quotes from './components/Quotes/Quotes'
import Tasks from './components/Tasks/Tasks'

function App() {

  return (
    <div className='app'>
      {/* <Quotes /> */}
      <Tasks/>
    </div>
  )
}

export default App
