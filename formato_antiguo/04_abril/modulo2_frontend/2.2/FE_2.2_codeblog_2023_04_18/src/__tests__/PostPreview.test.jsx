import {render, screen} from "@testing-library/react"
import PostPreview from "../components/PostPreview"

const mockPost = {
  id: 1,
  file: "js_filter",
  title: "Método filter de JavaScript",
  tech: "javascript",
  date: "2023-03-10",
}

test("It renders the correct card", () => {
  render(<PostPreview post={mockPost} />)
  expect(screen.getByTestId("postPreviewh3")).toHaveTextContent(
    "Método filter de JavaScript"
  )
  expect(screen.getByTestId("postPreviewspan")).toHaveTextContent("javascript")
})
