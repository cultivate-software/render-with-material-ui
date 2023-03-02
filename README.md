# Render decorators 🪆 for Material UI (v4)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cultivate-software/render-with-material-ui/release.yml?branch=main)
![Code Coverage](docs/coverage-badge.svg)
![npm (scoped)](https://img.shields.io/npm/v/@render-with/material-ui)
![NPM](https://img.shields.io/npm/l/@render-with/material-ui)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-bright%20green)
[![All Contributors](https://img.shields.io/github/all-contributors/cultivate-software/render-with-decorators?color=orange)](#contributors)

Use the `withTheme(..)` decorator if your component under test requires a [Material UI (v4) `ThemeProvider`](https://v4.mui.com/getting-started/installation/):

Example:

```jsx
import { render, screen, withTheme } from './test-utils'

it('uses padding of custom theme', () => {
  render(<ThemedButton>Submit</ThemedButton>, withTheme(CustomTheme))
  expect(screen.getByRole('button', { name: /submit/i })).toHaveStyle('padding: 42px')
})
```

_Note: Refer to the [core library](https://github.com/cultivate-software/render-with-decorators) to learn more about how decorators can simplify writing tests for React components with [React Testing Library](https://www.npmjs.com/package/@testing-library/react)._

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Test Scenarios](#test-scenarios)
- [API](#api)
- [Issues](#issues)
- [Changelog](#changelog)
- [Contributors](#contributors)
- [LICENSE](#license)

## Installation

This library is distributed via [npm](https://www.npmjs.com/), which is bundled with [node](https://nodejs.org/) and should be installed as one of your project's `devDependencies`.

First, install the [core library](https://github.com/cultivate-software/render-with-decorators) with a render function that supports decorators:

```shell
npm install --save-dev @render-with/decorators
```

Next, install the Material UI decorators provided by this library:

```shell
npm install --save-dev @render-with/material-ui
```

or

for installation via [yarn](https://classic.yarnpkg.com/):

```shell
yarn add --dev @render-with/decorators
yarn add --dev @render-with/material-ui
```

This library has the following `peerDependencies`:

![npm peer dependency version](https://img.shields.io/npm/dependency-version/@render-with/material-ui/peer/@material-ui/core)

and supports the following `node` versions:

![node-current (scoped)](https://img.shields.io/node/v/@render-with/material-ui)

## Setup

In your test-utils file, re-export the render function that supports decorators and the Material UI decorators:

```javascript
// test-utils.js
// ...
export * from '@testing-library/react'   // makes all React Testing Library's exports available
export * from '@render-with/decorators'  // overrides React Testing Library's render function
export * from '@render-with/material-ui' // makes decorators like withTheme(..) available
```

Then, create a custom `withTheme` provider using `configureWithTheme`:

```javascript
// test-utils.js
// ...
const CustomTheme = createTheme({ spacing: 42 })

export const withTheme = configureWithTheme(CustomTheme)
```

And finally, use the Material UI decorators in your tests:

```jsx
import { render, screen, withTheme } from './test-utils'

it('uses padding of custom theme', () => {
  render(<ThemedButton>Submit</ThemedButton>, withTheme(CustomTheme))
  expect(screen.getByRole('button', { name: /submit/i })).toHaveStyle('padding: 42px')
})
```

## Test Scenarios

### Just need a `ThemeProvider`?

If your test does not care about the theme, you can use `withTheme(..)` without any arguments. The decorator will use the configured default theme:

```jsx
import { render, screen, withTheme } from './test-utils'

it('uses padding of default theme', () => {
  render(<ThemedButton>Submit</ThemedButton>, withTheme())
  expect(screen.getByRole('button', { name: /submit/i })).toHaveStyle('padding: 8px')
})
```

### Need a specific theme?

If your test does care about the theme, you can use `withTheme(..)` and pass a theme as argument:

```jsx
import { render, screen, withTheme } from './test-utils'

const CustomTheme = createTheme({ spacing: 42 })

it('uses padding of custom theme', () => {
  render(<ThemedButton>Submit</ThemedButton>, withTheme(CustomTheme))
  expect(screen.getByRole('button', { name: /submit/i })).toHaveStyle('padding: 42px')
})
```

## API

_Note: This API reference uses simplified types. You can find the full type specification [here](https://github.com/cultivate-software/render-with-material-ui/blob/main/types/index.d.ts)._

```
function configureWithTheme(defaultTheme?: Theme): typeof withTheme
```

Creates a `withTheme` decorator that wraps the component under test in a Material UI `ThemeProvider`.

```
function withTheme(theme?: Theme): Decorator
```

Wraps component under test in a Material UI `ThemeProvider`. Uses the given theme if provided or the configured default theme if non is provided.

## Issues

Looking to contribute? PRs are welcome. Checkout this project's [Issues](https://github.com/cultivate-software/render-with-material-ui/issues?q=is%3Aissue+is%3Aopen) on GitHub for existing issues.

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[See Bugs](https://github.com/cultivate-software/render-with-material-ui/issues?q=is%3Aissue+label%3Abug+is%3Aopen+sort%3Acreated-desc)

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding a 👍. This helps maintainers prioritize what to work on.

[See Feature Requests](https://github.com/cultivate-software/render-with-material-ui/issues?q=is%3Aissue+label%3Aenhancement+sort%3Areactions-%2B1-desc+is%3Aopen)

### 📚 More Libraries

Please file an issue on the core project to suggest additional libraries that would benefit from decorators. Vote on library support adding a 👍. This helps maintainers prioritize what to work on.

[See Library Requests](https://github.com/cultivate-software/render-with-decorators/issues?q=is%3Aissue+label%3Alibrary+sort%3Areactions-%2B1-desc+is%3Aopen)

### ❓ Questions

For questions related to using the library, file an issue on GitHub.

[See Questions](https://github.com/cultivate-software/render-with-material-ui/issues?q=is%3Aissue+label%3Aquestion+sort%3Areactions-%2B1-desc)

## Changelog

Every release is documented on the GitHub [Releases](https://github.com/cultivate-software/render-with-material-ui/releases) page.

## Contributors

Thanks goes to these people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://cultivate.software"><img src="https://avatars.githubusercontent.com/u/31018345?v=4?s=100" width="100px;" alt="cultivate(software)"/><br /><sub><b>cultivate(software)</b></sub></a><br /><a href="#business-cultivate(software)" title="Business development">💼</a> <a href="#financial-cultivate(software)" title="Financial">💵</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/davidbieder"><img src="https://avatars.githubusercontent.com/u/9366720?v=4?s=100" width="100px;" alt="David Bieder"/><br /><sub><b>David Bieder</b></sub></a><br /><a href="https://github.com/cultivate-software/render-with-decorators/commits?author=davidbieder" title="Code">💻</a> <a href="https://github.com/cultivate-software/render-with-decorators/commits?author=davidbieder" title="Tests">⚠️</a> <a href="https://github.com/cultivate-software/render-with-decorators/commits?author=davidbieder" title="Documentation">📖</a> <a href="https://github.com/cultivate-software/render-with-decorators/pulls?q=is%3Apr+reviewed-by%3Adavidbieder" title="Reviewed Pull Requests">👀</a> <a href="#infra-davidbieder" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-davidbieder" title="Maintenance">🚧</a> <a href="#ideas-davidbieder" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jeromeweiss"><img src="https://avatars.githubusercontent.com/u/59569084?v=4?s=100" width="100px;" alt="Jerome Weiß"/><br /><sub><b>Jerome Weiß</b></sub></a><br /><a href="https://github.com/cultivate-software/render-with-decorators/commits?author=jeromeweiss" title="Documentation">📖</a> <a href="#infra-jeromeweiss" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-jeromeweiss" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mauricereichelt"><img src="https://avatars.githubusercontent.com/u/31188606?v=4?s=100" width="100px;" alt="Maurice Reichelt"/><br /><sub><b>Maurice Reichelt</b></sub></a><br /><a href="https://github.com/cultivate-software/render-with-decorators/commits?author=mauricereichelt" title="Documentation">📖</a> <a href="#infra-mauricereichelt" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-mauricereichelt" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.
Contributions of any kind welcome!

## LICENSE

[MIT](LICENSE)