import merge from 'webpack-merge' // needs to be installed with yarn, with -D
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import common from './webpack.common'

const client = {
  mode: 'production',
  output: {
    filename: './js/[name].[chunkhash].js', // We cache the JS file with a hashcode name in prod so that the client doesn't have to DL it everytime.
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({ // This will tell the Plugin which name to give the css file it will extract from the app.js fil
      filename: './css/[name].[hash].css', // So, we tell it to use the original name, AND use a hash code inside of it as well.
      allChunks: true //with a hash, the css file will have a cache, and be reloaded only if the content has changed.
    }),
  ]
}

export default merge(common, client)  // will export the result of merging this file with the .common config file.
 // the difference with the dev is the source-map method, and the mode: 'production'. The 'dev-server' is not necessary here.
