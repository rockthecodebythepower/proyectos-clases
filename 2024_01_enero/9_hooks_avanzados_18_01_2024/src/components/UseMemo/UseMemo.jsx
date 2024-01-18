import { useEffect, useMemo, useState } from "react";
import "./UseMemo.css";

//! useMemo va a ser una herramienta que tenga una SINTAXIS parecida a la de un useEffect, con el array de dependencias, con una función callback.
//! useMemo va a ser una herramienta que me permita memoizar unos calculos complejos (al equipo cliente le cueste un esfuerzo cualcular, ordenar)
//! aquí no irán peticiones - irían en un useEffect (es para efectos secundarios de nuestra página)
const UseMemo = () => {
  const [personas, setPersonas] = useState([
    { nombre: "Ana", edad: 25, ciudad: "Madrid" },
    { nombre: "Carlos", edad: 30, ciudad: "Barcelona" },
    { nombre: "Elena", edad: 22, ciudad: "Valencia" },
    { nombre: "David", edad: 28, ciudad: "Sevilla" },
  ]);
  const [personasSorted, setPersonasSorted] = useState([...personas]);

  useMemo(() => {
    setPersonasSorted(personas.toSorted((a, b) => a.edad - b.edad));
    console.log("Ordenar");
  }, [personas]); // este array de dependencias nos indica que el contenido de ordenación sólo se volverá a ejecutar en caso de que las personas cambien

  useEffect(() => {
    setTimeout(() => {
      setPersonas([
        ...personas,
        { nombre: "Alexis", edad: 19, ciudad: "Palencia" },
      ]);
    }, 5000);
  }, []);

  return (
    <div className="usememo">
      {personasSorted.map((persona) => {
        return (
          <div key={persona.nombre}>
            <p>nombre: {persona.nombre}</p>
            <p>edad: {persona.edad}</p>
            <p>ciudad: {persona.ciudad}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UseMemo;
