/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PluginCreator } from 'postcss'

const config = {
  plugins: {
    '@tailwindcss/postcss': {} as PluginCreator<any>,
    autoprefixer: {} as PluginCreator<any>,
  },
}

export default config