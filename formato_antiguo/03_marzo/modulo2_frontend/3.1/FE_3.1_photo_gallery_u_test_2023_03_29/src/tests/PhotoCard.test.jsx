import { describe, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import PhotoCard from "../components/PhotoCard/PhotoCard";

/**
 * @vitest-environment jsdom
 */

describe("PhotoCard", () => {
  test("li element should have a nested img, p and anchor", () => {
    render(<PhotoCard />);
    waitFor(() => {
      const img = document.querySelector("li > img");
      expect(img).toBeInTheDocument();
    });
    waitFor(() => {
      const p = document.querySelector("li > p");
      expect(p).toBeInTheDocument();
    });
    waitFor(() => {
      const a = document.querySelector("li > a");
      expect(a).toBeInTheDocument();
    });
  });

  test("all imgs should have an alt text", () => {
    render(<PhotoCard />);
    waitFor(() => {
      expect(screen.getByRole("img")).toHaveAttribute("alt");
    });
  });

  test("all anchor should have an href attr", () => {
    render(<PhotoCard />);
    waitFor(() => {
      expect(screen.getByRole("link")).toHaveAttribute("href");
    });
  });
});
