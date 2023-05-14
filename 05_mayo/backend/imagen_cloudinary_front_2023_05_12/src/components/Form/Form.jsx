import { useForm } from "react-hook-form"
import "./Form.css"
import { API } from "../../shared/API/API";

const array = ["lasdfjlkasdf", "lkasdmflka", "lkmasdlkfmlas"];

const Form = ({getAllRecords, setRecords, records}) => {

    const {register, handleSubmit} = useForm();

    const publicar = async (datos) => {

        const formData = new FormData();
        formData.append("nombre", datos.nombre);
        formData.append("record", datos.record[0]);

        const respuesta = await API.post("/records", formData);
        /* getAllRecords(); */
        const res = respuesta.data
        console.log(records);
        console.log(res);
        setRecords([...records, res]);
    }

  return (
    <div>
        <form onSubmit={handleSubmit(publicar)}>
            <div>   
                <label>Nombre</label>
                <input {...register("nombre")}/>
            </div>
            <div>   
                <label>Imagen</label>
                <input type="file" {...register("record")}/>
            </div>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form