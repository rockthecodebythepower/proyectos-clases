import {render, screen} from "@testing-library/react"
import About from "../pages/About"

test("It renders the correct heading", () => {
  render(<About />)
  const h2 = screen.getByRole("heading")
  expect(h2).toBeInTheDocument()
  const text = screen.getByText("About our website:")
  expect(text).toBeInTheDocument()
})
