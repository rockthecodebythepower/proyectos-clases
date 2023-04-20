import {render, screen} from "@testing-library/react"
import App from "../App"
import {BrowserRouter} from "react-router-dom"

test("The main app should contain a header tag", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  expect(screen.getByTestId("header")).toBeInTheDocument()
})
