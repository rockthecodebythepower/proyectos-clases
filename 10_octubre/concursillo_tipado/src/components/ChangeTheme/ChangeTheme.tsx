import { useContext } from "react";
import { themeContext } from "../../providers/ThemeProvider/ThemeProvider";
import "./ChangeTheme.css";

const ChangeTheme = () => {

    const { theme, setTheme } = useContext(themeContext);

  return (
    <div
      className="changeTheme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌑" : "🌕"}
    </div>
  );
};

export default ChangeTheme;
