import { useState } from 'react'
import Header from './components/Header/Header';
import { ChangeOption } from './components/ChangeOption/ChangeOption';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  const [page, setPage] = useState("home");

  return (
    <>
      {/* cambiar de valor un estado */}
      <Header setPage={setPage}/>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
 */}
      {/* mirando el valor de ese estado */}
      <ChangeOption page={page}/>
    </>
  )
}

export default App