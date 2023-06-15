import { useEffect, useState } from "react";
import { workouts } from "../../data/data";
import "./FinalStep.css";

const FinalStep = ({ userData }) => {
  const [workout, setWorkout] = useState();

  const finalWorkout = () => {

    //? aquí empieza mi filtro
    const posiblesWorkouts = workouts.filter((workout) => {

        //* obtenemos cada uno de los elementos y les llamamos workout

        //! por defecto ponemos una variable (interruptor) en true, es decir, por defecto todos los workouts posibles están bien, luego los iremos descartando
      let valido = true;

      //? "recorremos el objeto de los requisitos del ejercicio" para poder acceder a cada una de sus propiedades
      for (const clave in workout.requisitos) {

        //* en el forin usaremos algo muy útil que hemos visto muchas veces que es coger una propiedad de un objeto mediante los [];

        //! comprobamos si el requisito es de tipo numérico o no, puesto que así nos ahorramos comprobar cada uno de ellos y todos los números los comprobaremos de la misma manera
        if (typeof workout.requisitos[clave] === "number") {

            //? si el requisito es de tipo numérico voy a comprobar si el requisito es más grande que el dato del usuario
          if (workout.requisitos[clave] > userData[clave]) {

            //* de ser así deja de ser válido porque queremos que el los datos del usuario sean más grandes que el valor del requisito
            valido = false;
          }
        } else {

            //! si es de otro tipo que no sea numérico simplemente comprobaremos si el dato NO es idéntico
          if (workout.requisitos[clave] !== userData[clave]) {

            //? de no ser idéntico también deja de ser válido ese ejercicio para esa persona
            valido = false;
          }
        }
      }

      //* gracias a comprobar si es válido o no sabremos si devolver el ejercicio o no, puesto que el filter siempre necesita que se le retornen los elementos resultantes
      if (valido) {
        return workout;
      }
    });

    //* en el estado pongo el primer workout del array de posibles workouts que me han dado
    setWorkout(posiblesWorkouts[0]);
  };

  useEffect(() => {
    finalWorkout();
  }, []);

  return (
    <div>
      {workout &&
        workout.ejercicios.map((ejercicio) => {
          return (
            <div className="ejercicio" key={JSON.stringify(ejercicio)}>
              <h3>{ejercicio.nombre}</h3>
              <img src={ejercicio.imagen} />
              {ejercicio.tiempo && <p>{ejercicio.tiempo}´´</p>}
              {ejercicio.repeticiones && <p>{ejercicio.repeticiones} repeticiones</p>}
            </div>
          );
        })}
      {!workout && (
        <div className="not_found">
          <h1>
            No hemos podido encontrar un ejercicio que se adecue a tus
            necesidades, dentro de poco meteremos más contenido
          </h1>
        </div>
      )}
    </div>
  );
};

export default FinalStep;
