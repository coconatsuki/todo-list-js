import path from 'path' //ES6 version of: const path = require('path')

export default { // ES6 version of module.exports
  name: 'app', // optional
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // resolve slash incompatibility with Windows.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // use babel to transform ES6 into ES5
      } // it's better to write Babel config in its own file .babelrc, to use it outsite of webpack.
    ]
  }
}
