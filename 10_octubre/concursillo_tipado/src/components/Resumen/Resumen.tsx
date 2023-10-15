import "./Resumen.css"

const Resumen = ({ aciertos, posibles }) => {
  return (
    <div className="resultado">
        <h2>Resultado: {aciertos} de {posibles} </h2>
    </div>
  )
}

export default Resumen