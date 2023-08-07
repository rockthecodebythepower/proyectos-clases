import "./Alert.css";

const icons = {
    success: "https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png",
    warning: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/OOjs_UI_icon_notice-warning.svg/2048px-OOjs_UI_icon_notice-warning.svg.png",
    error: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/alert-circle-red-512.png",
    info: "https://icons-for-free.com/iconfiles/png/512/info-131964752893297302.png"
}

const Alert = ({ status = "info", title = "titulo por defecto", description = "descripción por defecto" }) => {

    const comprobarStatus = (status) => {

        let statusComprobado = "info"

        Object.keys(icons).includes(status) ? statusComprobado = status : null;
        
        return statusComprobado;
    }

  return (
    <div className={`alert ${comprobarStatus(status)}`}>
        <img src={icons[comprobarStatus(status)]}/>
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
    </div>
  )
}

export default Alert