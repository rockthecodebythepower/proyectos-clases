import "./State.css"

const State = () => {

    // me llegan 800 clientes
    // ordenación
    // yo sólo quiero ejecutar la ordenación cuando mis clientes cambien
    // en el resto de casos NO
    useMemo(() => {
        // ordenación
    }, [clients])

  return (
    <div>State</div>
  )
}

export default State;