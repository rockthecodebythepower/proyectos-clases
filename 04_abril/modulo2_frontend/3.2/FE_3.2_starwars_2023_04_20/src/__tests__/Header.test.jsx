/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test } from 'vitest';

import Header from '../components/Header/Header';

describe('Header', () => {
  test('Logo image should have the correct alt text', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Star Wars logo');
  });
  test('Header should render a navigator', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('header-navigator')).toBeInTheDocument();
  });
  test('List should have three list item elements', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const listitems = container.querySelectorAll('li');
    expect(listitems).toHaveLength(3);
    listitems.forEach((li) => {
      expect(li).toBeInTheDocument();
    });
  });
  test('All three anchors should have an href attribute', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const anchors = container.querySelectorAll('a');
    expect(anchors).toHaveLength(3);
    anchors.forEach((anchor) => {
      expect(anchor).toHaveAttribute('href');
    });
  });
});
