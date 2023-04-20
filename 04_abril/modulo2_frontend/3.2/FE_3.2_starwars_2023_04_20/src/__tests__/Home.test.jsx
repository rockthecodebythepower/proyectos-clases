/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import Home from '../pages/Home/Home';

describe('Home', () => {
  test('Home should render an iframe', () => {
    render(<Home />);
    expect(screen.getByTestId('video')).toBeInTheDocument();
  });
  test('Video should have the correct source', () => {
    render(<Home />);
    expect(screen.getByTestId('video')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/HnzNZ0Mdx4I?controls=0&mute=1&showinfo=0&rel=0&autoplay=1&loop=1',
    );
  });
  test('Heading should contain the correct text', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toHaveTextContent('Home');
  });
});
