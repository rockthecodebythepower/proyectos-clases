import "./Form2.css";

const Form2 = ({ userData, setUserData }) => {
  //! el defaultValue del conseguirá que no perdiéramos los datos cuando nos vamos entre los pasos

  return (
    <div className="form2">
      <h1>¿Cuál es tu objetivo?</h1>
      <select
        onChange={(e) => setUserData({ ...userData, objetivo: e.target.value })}
        defaultValue={userData.objetivo}
      >
        <option value="perder peso">Perder peso</option>
        <option value="ganar masa muscular">Ganar masa muscular</option>
        <option value="mantenerse en forma">Mantenerse en forma</option>
      </select>
    </div>
  );
};

export default Form2;
