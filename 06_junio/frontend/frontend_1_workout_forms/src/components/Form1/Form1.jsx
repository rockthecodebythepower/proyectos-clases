import "./Form1.css";

const Form1 = ({ userData, setUserData }) => {
  //! el defaultValue de los inputs conseguirá que no perdiéramos los datos cuando nos vamos entre los pasos

  return (
    <div className="form1">
      <h1>Danos un poco de tu información corpórea</h1>

      <div>
        <label>Altura (cm)</label>
        <input
          placeholder="Introduce tu altura en cm"
          type="number"
          defaultValue={userData.altura}
          onInput={(e) =>
            setUserData({ ...userData, altura: parseInt(e.target.value) })
          }
        />
      </div>

      <div>
        <label>Peso (kg)</label>
        <input
          placeholder="Introduce tu peso en kg"
          type="number"
          defaultValue={userData.peso}
          onInput={(e) =>
            setUserData({ ...userData, peso: parseInt(e.target.value) })
          }
        />
      </div>

      <div>
        <label>Edad</label>
        <input
          placeholder="Introduce tu edad"
          type="number"
          defaultValue={userData.edad}
          onInput={(e) =>
            setUserData({ ...userData, edad: parseInt(e.target.value) })
          }
        />
      </div>
    </div>
  );
};

export default Form1;
