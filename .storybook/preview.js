import { RouterContext } from 'next/dist/shared/lib/router-context'
import '../src/styles/globals.css'

const preview = {
  darkMode: {
    // Set the initial theme
    current: 'dark'
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: '/',
    asPath: '/',
    query: {},
    push: () => {}
    //   can override any method in the router
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
