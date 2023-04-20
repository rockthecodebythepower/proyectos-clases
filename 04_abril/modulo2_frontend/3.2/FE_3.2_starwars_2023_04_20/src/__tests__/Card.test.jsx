/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test } from 'vitest';

import Card from '../components/Card/Card';

const mockItem = {
  _id: 1234,
  image: 'obiwan.jpg',
  name: 'Obi-Wan Kenobi',
};

describe('Card', () => {
  test('Card should render an anchor', () => {
    render(
      <BrowserRouter>
        <Card item={mockItem} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  test('Figure element should have the correct className', () => {
    render(
      <BrowserRouter>
        <Card item={mockItem} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('figure')).toHaveClass('card');
  });
  test('Image element should have the alt attribute with the object.name value', () => {
    render(
      <BrowserRouter>
        <Card item={mockItem} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Obi-Wan Kenobi');
  });
  test('Heading element should render the correct text', () => {
    render(
      <BrowserRouter>
        <Card item={mockItem} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Obi-Wan Kenobi');
  });
});
