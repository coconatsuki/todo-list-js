import merge from 'webpack-merge' // needs to be installed with yarn, with -D
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import common from './webpack.common'

const client = {
  mode: 'development',
  output: {
    filename: './js/[name].js', // Use the original name (from /src) for the JS output file. We don't need to use caching in dev.
  },
  devtool: 'inline-source-map',
  devServer: { // Use files in /src to generate a virtual bundle.js, and show /dist content (index.html) on localhost:8080 by default (here, 8081)
    contentBase: './dist', // Now, bundle.js won't be in /dist anymore. devServer is quickier (it uses the ram) and make debugging easier.
  }, // Needs to be launched with 'webpack-dev-server' => see package.json script.
  plugins: [
    new ExtractTextPlugin({ // This will tell the Plugin which name to give the css file it will extract from the app.js file.
      filename: './[name].css', // So, we tell it to use the original name (from the /src folder).
      allChunks: true // ?
    }),
  ]
}

export default merge(common, client) // will export the result of merging this file with the .common config file.

// the difference with the prod is the source-map, the dev-server, and the mode: 'development'.
