import "./Main.css"

const Main = ({ nombre, otraCosa = "valor por defecto" }) => {

  return (
    <>
        <main>
            <h1>Buenas {nombre}!</h1>
            <p></p>
        </main>
        <p></p>
    </>
  )
}

export default Main;