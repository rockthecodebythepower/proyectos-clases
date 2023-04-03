import { render, fireEvent, screen } from '@testing-library/react'
import App from '../App'
import Theme from '../styles/Theme'
import GlobalStyle from '../styles/Global'
import { describe, expect } from 'vitest'

describe('Test App on Screen', () => {
  test('renders the title of the app', () => {
    render(
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>)
    const titleElement = screen.getByText('Emoji!')
    expect(titleElement).toBeDefined()
  })
  test('filter emoji by text input', () => {
    render(
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>)
    const textInputElement = screen.getByPlaceholderText('Filter...⚙️')
    fireEvent.change(textInputElement, { target: { value: 'Ukraine' } })
    const filteredEmoji = screen.getByText("Flags (country-flag)")
    expect(filteredEmoji).toBeDefined()

  })
})