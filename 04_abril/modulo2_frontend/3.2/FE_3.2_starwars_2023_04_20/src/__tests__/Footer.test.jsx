/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import Footer from '../components/Footer/Footer';

describe('Footer', () => {
  test('Footer tag should be in screen', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
  test('Footer h4 should contain the correct text', () => {
    render(<Footer />);
    expect(screen.getByRole('heading')).toHaveTextContent(
      'TM & © Lucasfilm Ltd. All Rights Reserved',
    );
  });
});
