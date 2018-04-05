import merge from 'webpack-merge' // needs to be installed with yarn, with -D

import common from './webpack.common'

const client = {
  mode: 'production',
  output: {
    filename: 'js/index.js',
  },
  devtool: 'source-map',
}

export default merge(common, client)  // will merge this file and the .common one.

// the difference with the dev is the source-map method, and the mode: 'production'. The 'dev-server' is not necessary here.
