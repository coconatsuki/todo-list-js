import path from 'path' //ES6 version of: const path = require('path')
import webpack from 'webpack' // We need to import it here to use the "webpack.optimize.OccurrenceOrderPlugin()" below.
import CleanWebpackPlugin from 'clean-webpack-plugin' // Clean dist content before each build.
import HtmlWebpackPlugin from 'html-webpack-plugin' // Will import content in the html file.
import ExtractTextPlugin from 'extract-text-webpack-plugin' // Will extract css & scss from the app.js file

export default { // ES6 version of module.exports
  name: 'app', // optional
  entry: "./src/app.js",
  output: {
    // filename: 'bundle.js', => We don't need this anymore. We'll use the ones in the dev & prod config files.
    path: path.resolve(__dirname, 'dist') // resolve slash incompatibility with Windows.
  },
  // we moved devserver in the dev config file.
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // use babel to transform ES6 into ES5
      }, // it's better to write Babel config in its own file .babelrc, to use it outsite of webpack.
      {
        test: /\.(html)$/, // Will load the html from src and make it available to the html plugins to transform them.
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg)$/, // Will load these files from /src
        loader: 'url-loader',  // if the file < 8192 bytes (like an icon) it will use url-loader
        options: { // which transform it in a string directly into the html (avoiding a request to fetch it).
          limit: 8192, // if the file is bigger
          fallback: 'file-loader', // We'll use 'file-loader' instead, which will create a separated file, and cache it using a hashcode as a name.
          name: './css/[hash]-[name].[ext]',
        } // We can also use file-loader only, and make requests for each image.
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ // By default, the css will be loaded in the js file, where we imported it.
          use: [{ // This plugin will try to extract it
            loader: 'css-loader', // This loader will try to make a separate css file.
            // (We have to precise in DEV & PROD which name it musts give the file)
            options: {
              minimize: true, // On ajoute des options pour le minifier
              sourceMap: true // et pour ajouter des sourceMap.
            },
          },
          {
            loader: 'sass-loader', // We also add a loader for the sass
            options: {
              sourceMap: true // with sourceMaps
            }
          }],
          fallback: 'style-loader', // If it doesn't work, this loader extracts it from the JSfile and put in the html Head instead.
        }),
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
}
