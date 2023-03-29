import { describe, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import Header from "../components/Header/Header";

/**
 * @vitest-environment jsdom
 */

describe("Header", () => {
  test("should render a header tag", () => {
    render(<Header />);
    //La etiqueta header tiene el role de banner
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("header should have an h2 and a img nested elements", () => {
    render(<Header />);
    const h1 = document.querySelector("header > h1");
    const img = document.querySelector("header > img");
    expect(h1).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  test("title should have the correct text", () => {
    render(<Header />);
    expect(screen.getByRole("heading"))
      .toHaveTextContent("Photo Gallery")
      .toBeInTheDocument();
  });

  test("logo should have the correct alt and src info", () => {
    render(<Header />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Camera icon");
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/4197/4197975.png"
    );
  });
});
