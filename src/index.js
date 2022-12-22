import { createTheme, ThemeProvider } from '@material-ui/core'

export const withTheme = (theme = createTheme()) => ui => <ThemeProvider theme={theme}>{ui}</ThemeProvider>

export const configureWithTheme = defaultTheme => (theme = defaultTheme) => withTheme(theme)