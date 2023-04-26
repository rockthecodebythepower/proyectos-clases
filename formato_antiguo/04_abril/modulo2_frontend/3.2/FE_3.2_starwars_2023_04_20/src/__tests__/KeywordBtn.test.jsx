/**
 * @vitest-environment jsdom
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, vi } from 'vitest';

import KeywordBtn from '../components/KeywordBtn/KeywordBtn';

const mockKeyword = 'characters';
const mockFunction = vi.fn(() => {});

describe('KeywordBtn', () => {
  test('Button tag should appear on screen', () => {
    render(<KeywordBtn keyword={mockKeyword} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('Button should render the correct inner text', () => {
    render(<KeywordBtn keyword={mockKeyword} />);
    expect(screen.getByRole('button')).toHaveTextContent('characters');
  });
  test('Button should trigger the changeKeyword function', () => {
    render(<KeywordBtn keyword={mockKeyword} changeKeyword={mockFunction} />);
    userEvent.click(screen.getByRole('button'));
    waitFor(() => expect(mockFunction).toHaveBeenCalled());
  });
});
