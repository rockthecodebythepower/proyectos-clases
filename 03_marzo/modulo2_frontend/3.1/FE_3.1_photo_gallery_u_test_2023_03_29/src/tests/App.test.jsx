import { describe, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import App from "../App";

/**
 * @vitest-environment jsdom
 */

describe("App", () => {
  test("main component should have header, main and footer tags", () => {
    render(<App />);
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
