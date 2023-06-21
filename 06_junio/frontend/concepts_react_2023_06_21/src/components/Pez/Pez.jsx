import "./Pez.css"

const Pez = ({ pez, peces, setPeces, clase }) => {

    //setPeces lo único que quiere es un nuevo array
    
    const eliminarPez = () => {
        //! array
        //! tenemos el pez
        //! queremos eliminar el pez del array de peces

        //? splice -> (posicion del elemento donde quieres empezar a cortar, CUANTOS elementos cortas);

        // cual es el método que me sirve para conocer la posición de un elemento dentro de un array
        // peces.indexOf(pez);

        const pecesJS = [...peces];

        pecesJS.splice(pecesJS.indexOf(pez), 1);

        setPeces([...pecesJS])

    }

  return (
    <div className={clase}>
        <img src="https://definicion.de/wp-content/uploads/2021/09/eliminar.png" onClick={eliminarPez}/>
        <h3>{pez.name["name-EUes"]}</h3>
        <div>
            <img src={pez.image_uri}/>
        </div>
    </div>
  )
}

export default Pez