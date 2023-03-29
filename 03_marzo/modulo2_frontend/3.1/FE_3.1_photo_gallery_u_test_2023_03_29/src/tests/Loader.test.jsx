import { describe, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import Loader from "../components/Loader/Loader";

/**
 * @vitest-environment jsdom
 */

describe("Loader", () => {
  test("should have the correct text content", () => {
    render(<Loader />);
    expect(screen.getByRole("heading"))
      .toHaveTextContent("Loading...")
      .toBeInTheDocument();
  });
});
