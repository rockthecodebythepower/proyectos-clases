import { useState } from "react"
import "./Project.css"

const Project = ({ project }) => {

    const [abierto, setAbierto] = useState(false);

    return (
        <div className={`project ${abierto ? "abierto" : "cerrado"}`}>
            <div className="infoPrev" onClick={() => setAbierto(!abierto)}>
                <h2>{project.nombre}</h2>
                <div className={`estado ${project.estado}`}></div>
            </div>
            <div className="detail">
                {project.estado !== "espera" ? <></> :
                    (<form id="subirProyecto" onSubmit={() => console.log("pepe")}>
                        <div>
                            <label>Enlace a github</label>
                            <input />
                        </div>
                        <div>
                            <label>Enlace del despliegue</label>
                            <input type="password" />
                        </div>
                        <button>Entregar</button>
                    </form>
                    )}
            </div>
        </div>
    )
}

export default Project