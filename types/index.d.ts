import { Theme } from '@material-ui/core'
import { Decorator } from '@render-with/decorators'

export function withTheme(theme?: Partial<Theme> | ((outerTheme: Theme) => Theme)): Decorator

export function configureWithTheme(defaultTheme?: Partial<Theme> | ((outerTheme: Theme) => Theme)): typeof withTheme