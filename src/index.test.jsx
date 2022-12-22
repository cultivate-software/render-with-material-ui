import { createTheme, useTheme } from '@material-ui/core/styles'
import { render } from '@render-with/decorators'
import { screen } from '@testing-library/react'
import { configureWithTheme, withTheme } from './index'

const ThemedButton = ({ children, ...otherProps }) => {
  const theme = useTheme()
  return <button {...otherProps} style={{ padding: `${theme.spacing()}px` }}>{children}</button>
}

describe('withTheme', () => {
  it('decorates component that requires theme using default theme', () => {
    render(<ThemedButton>Submit</ThemedButton>, withTheme())
    expect(screen.getByRole('button', { name: /submit/i })).toHaveStyle('padding: 8px')
  })

  it('decorates component that requires theme using given theme', () => {
    render(<ThemedButton>Submit</ThemedButton>, withTheme(createTheme({ spacing: 42 })))
    expect(screen.getByRole('button', { name: /submit/i })).toHaveStyle('padding: 42px')
  })
})

describe('configureWithTheme', () => {
  it('creates withTheme decorator using default theme', () => {
    const withTheme = configureWithTheme()
    render(<ThemedButton>Submit</ThemedButton>, withTheme())
    expect(screen.getByRole('button', { name: /submit/i })).toHaveStyle('padding: 8px')
  })

  it('creates withTheme decorator using given theme', () => {
    const withTheme = configureWithTheme(createTheme({ spacing: 42 }))
    render(<ThemedButton>Submit</ThemedButton>, withTheme())
    expect(screen.getByRole('button', { name: /submit/i })).toHaveStyle('padding: 42px')
  })

  it('creates withTheme decorator ignoring default theme when theme is given', () => {
    const withTheme = configureWithTheme()
    render(<ThemedButton>Submit</ThemedButton>, withTheme(createTheme({ spacing: 42 })))
    expect(screen.getByRole('button', { name: /submit/i })).toHaveStyle('padding: 42px')
  })
})