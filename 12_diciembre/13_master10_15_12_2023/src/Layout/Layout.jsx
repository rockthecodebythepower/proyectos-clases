import SideBar from "../components/organisms/SideBar/SideBar";
import "./Layout.css";

const Layout = ({ children }) => {

  return (
    <div className="layout">
      <SideBar/>
      {children}
    </div>
  );
};

export default Layout;