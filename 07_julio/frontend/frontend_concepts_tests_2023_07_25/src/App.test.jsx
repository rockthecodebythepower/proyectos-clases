import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import App from "./App";
import { datos } from "../data";
import userEvent from "@testing-library/user-event";
import { click } from "@testing-library/user-event";

/**
 * @vitest-environment jsdom
 */


describe("App", () => {

    test("El h1 funciona correctamente", () => {

        render(<App datos={datos}/>);

        expect(screen.getByText("Hola mundo")).toBeInTheDocument();

    });

    test("El select renderiza bien las opciones", () => {

        render(<App datos={datos}/>);

        let select$$ = screen.getByTestId("select");

        expect(select$$).toBeInTheDocument();

        userEvent.type(click, select$$);

        for (const dato of datos) {
            expect(screen.getByText(dato)).toBeInTheDocument();
        }

    })

})