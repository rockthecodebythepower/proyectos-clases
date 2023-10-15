import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import GetShows from "./GetShows";

/**
* @vitest-environment jsdom
*/

describe('GetShows', () => {
    test('is GetShows rendering?', () => {
        render(<GetShows />)

        expect(screen.getByText("Las mejores series y películas")).toBeInTheDocument();
    })
});