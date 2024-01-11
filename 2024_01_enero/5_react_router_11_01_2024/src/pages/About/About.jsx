import { useEffect, useState } from "react"
import "./About.css"

const About = () => {

    const [interruptor, setInterruptor] = useState(false)

    //! montaje
    useEffect(() => {
        //! acciones que sólo queremos que ocurran al principio del ciclo de vida del componente, es decir, cada vez que se monta y únicamente esa vez - ARRAY DE DEPENDENCIAS VACÍO
        console.log("Me he montado!");
    }, []);

    //? actualización
    useEffect(() => {
        //? DEPENDO de que interruptor se actualice
        console.log("Este código sólo debería ejecutarse cuando se monta el componente y cuando interruptor cambia");
    }, [interruptor]);

    //* desmontaje
    useEffect(() => {
        //* acciones que sólo queremos que ocurran cuando el componente se desmonta - CON EL USO DEL RETURN DENTRO DEL USEEFFECT - esto es muy útil cuando queremos realizar ciertas acciones cuando el componente desaparece
        return () => {
            console.log("Me he desmontado!");
        }
    }, []);

  return (
    <div className="about" onClick={() => setInterruptor(!interruptor)}>{interruptor ? "Es true" : "Es false"}</div>
  )
}

export default About