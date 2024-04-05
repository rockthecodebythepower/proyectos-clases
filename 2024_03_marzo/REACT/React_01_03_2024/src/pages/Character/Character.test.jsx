import { render } from "react-dom";
import { describe, expect } from "vitest";
import Character from "./Character";
import { screen } from "@testing-library/react";

/*  */

describe("mi-primer-test", () => {
    render(<Character/>);
    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();
})