import {render, screen} from "@testing-library/react"
import DateFormat from "../components/DateFormat"

const mockDate = "2023-04-18"

test("It renders the correct formatted date", () => {
  render(<DateFormat iso={mockDate} />)
  expect(screen.getByTestId("dateheading")).toHaveTextContent(
    "martes, 18 de abril"
  )
})
