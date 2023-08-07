import './App.css'

function App({ datos }) {

  return (
    <>
      <h1>Hola mundoç</h1>
      <select data-testid="select">
        {datos && datos.map((dato) => <option key={dato}>{dato}</option>)}
      </select>
    </>
  )
}

export default App