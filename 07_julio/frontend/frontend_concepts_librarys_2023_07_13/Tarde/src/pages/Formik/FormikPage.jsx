import { Formik, useFormik } from "formik";
import "./FormikPage.css";
import Form from "./Form";

const FormikPage = () => {
  /* const formik = useFormik({
    onSubmit: values => {
      console.log(values);
    }
  }) */

  return (
    <div id="formik">
      <h1>Crea tu perfil con Formik</h1>
      <Formik
        initialValues={{ email: '', profesion: 'medico', edad: 50, color: "#ffffff" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input name="email" onInput={handleChange} value={values.email}/>
            </div>
            <div>
              <label>Selecciona porfesion</label>
              <select name="profesion" onChange={handleChange} value={values.profesion}>
                <option value="medico">Médico</option>
                <option value="pescador">Pescador</option>
                <option value="programador">Programador</option>
                <option value="cientifico">Científico</option>
              </select>
            </div>
            <div>
              <label>Edad</label>
              <input type="range" name="edad" onChange={handleChange} value={values.edad}/>
            </div>
            <div>
              <label>Color favorito</label>
              <input type="color" name="color" onChange={handleChange} value={values.color}/>
            </div>
            <button type="submit">Enviar formulario</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikPage;
