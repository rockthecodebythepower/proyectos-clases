import userEvent from "@testing-library/user-event"
import {render, screen} from "@testing-library/react"
import ThemeBtn from "../components/ThemeBtn"

test("The button click triggers the function", async () => {
  let mockIsDark = true
  const mockSetIsDark = jest.fn()
  render(<ThemeBtn setIsDark={mockSetIsDark} isDark={mockIsDark} />)
  await userEvent.click(screen.getByTestId("themebtn"))
  expect(mockSetIsDark).toHaveBeenCalled()
})
