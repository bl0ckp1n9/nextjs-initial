const path = require('path')

const config = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@/components'] = path.resolve(__dirname, 'src/components')
    config.resolve.alias['@/pages'] = path.resolve(__dirname, 'src/pages')
    config.resolve.alias['@/hooks'] = path.resolve(__dirname, 'src/hooks')
    config.resolve.alias['@/atoms'] = path.resolve(__dirname, 'src/components/ui/atoms')
    config.resolve.alias['@/molecules'] = path.resolve(__dirname, 'src/components/ui/molecules')
    config.resolve.alias['@/organisms'] = path.resolve(__dirname, 'src/components/ui/organisms')
    config.resolve.alias['@/templates'] = path.resolve(__dirname, 'src/components/ui/templates')
    config.resolve.alias['@/data'] = path.resolve(__dirname, 'src/data')
    config.resolve.alias['@/types'] = path.resolve(__dirname, 'src/types')
    config.resolve.alias['@/context'] = path.resolve(__dirname, 'src/context')
    return config
  },
  babel: async (options) => {
    return {
      ...options,
      plugins: [
        ...options.plugins,
        'babel-plugin-twin',
        'babel-plugin-macros',
        'babel-plugin-styled-components'
      ]
    }
  }
}
export default config
