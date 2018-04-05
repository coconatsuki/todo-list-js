import merge from 'webpack-merge' // needs to be installed with yarn, with -D

import common from './webpack.common'

const client = {
  mode: 'development',
  output: {
    filename: 'js/index.js',
  },
  devtool: 'inline-source-map',
  devServer: { // Use files in /src to generate a virtual bundle.js, and show /dist content (index.html) on localhost:8080 by default (here, 8081)
    contentBase: './dist', // Now, bundle.js won't be in /dist anymore. devServer is quickier (it uses the ram) and make debugging easier.
  }, // Needs to be launched with 'webpack-dev-server' => see package.json script.
}

export default merge(common, client) // will merge this file and the .common one.

// the difference with the prod is the source-map, the dev-server, and the mode: 'development'.
