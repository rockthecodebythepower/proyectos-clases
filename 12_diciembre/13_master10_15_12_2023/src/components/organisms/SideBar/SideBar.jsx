import "./SideBar.css";
import { useDoor } from "../../../utils/customHooks/useDoor";
import ImgWrp from "../../molecules/ImgWrp/ImgWrp";
import NavBar from "../../molecules/NavBar/NavBar";

let INITIAL_STATE = false;

if (window.innerWidth > 1110) {
  INITIAL_STATE = true;
}

const SideBar = () => {
  const { openned, alternate } = useDoor(INITIAL_STATE);

  return (
    <>
      <div className={`side-bar ${openned ? "openned" : "closed"}`}>
        <ImgWrp
          className="logo_wrp"
          alt="logo"
          src="/assets/logo_sin_fondo.png"
          imageStyles={{
            objectFit: "cover",
            transform: "scale(1.5)",
          }}
        />
        <NavBar />
      </div>
      <ImgWrp
        title="esto es la pestaña del sidebar"
        src="/assets/icons/right-arrow.png"
        alt="flecha hacia la derecha"
        className={`flap ${openned ? "openned" : "closed"}`}
        funct={alternate}
      />
    </>
  );
};

export default SideBar;