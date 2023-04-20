/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import About from '../pages/About/About';

const mockText =
  'The Star Wars Databank API is a REST API based on the galatic saga Star Wars. You will have access to hundreds of characters, droids, species, locations, organizations, vehicles and more. The Star Wars Databank API is filled with the official information from the Databank.';

describe('About', () => {
  test('Paragraph should contain the correct text', () => {
    render(<About />);
    expect(screen.getByTestId('about-content')).toHaveTextContent(mockText);
  });
  test('Heading should have the correct text', () => {
    render(<About />);
    expect(screen.getByRole('heading')).toHaveTextContent('About');
  });
});
