import "./Error.css"

const Error = ({error}) => {
  if (!error) {
    return null
  }

  return <h3 className="error">Por favor, inserta un texto adecuado</h3>
}

export default Error
