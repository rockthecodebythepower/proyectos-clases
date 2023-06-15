import "./Form3.css";

const Form3 = ({ userData, setUserData }) => {
  //! el defaultValue del select conseguirá que no perdiéramos los datos cuando nos vamos entre los pasos

  return (
    <div className="form3">
      <h1>¿Cuál es tu nivel?</h1>
      <select
        onChange={(e) => setUserData({ ...userData, nivel: e.target.value })}
        defaultValue={userData.nivel}
      >
        <option value="principiante">Principiante</option>
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>
      </select>
    </div>
  );
};

export default Form3;
