import Button from "../styled/Button"

const ThemeBtn = ({setIsDark, isDark}) => {
  return (
    <Button onClick={() => setIsDark(!isDark)} data-testid="themebtn">
      {isDark ? (
        <span className="material-symbols-outlined">dark_mode</span>
      ) : (
        <span className="material-symbols-outlined">light_mode</span>
      )}
    </Button>
  )
}

export default ThemeBtn
