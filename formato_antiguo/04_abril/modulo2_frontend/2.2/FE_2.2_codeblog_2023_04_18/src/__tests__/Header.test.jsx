import {render, screen} from "@testing-library/react"
import {BrowserRouter} from "react-router-dom"
import Header from "../components/Header"

test("It should contain a header tag", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  expect(screen.getByRole("banner")).toBeInTheDocument()
})

test("It should render the correct title", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  expect(screen.getByRole("heading")).toHaveTextContent("Code Blog")
})
