import { describe, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import Footer from "../components/Footer/Footer";

/**
 * @vitest-environment jsdom
 */

describe("Footer", () => {
  test("should render a footer tag", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("heading should have the correct content", () => {
    render(<Footer />);
    expect(screen.getByRole("heading"))
      .toHaveTextContent("Created by Rock the Code")
      .toBeInTheDocument();
  });
});
