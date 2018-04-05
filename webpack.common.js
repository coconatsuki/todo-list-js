"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//ES6 version of: const path = require('path')
var _default = {
  // ES6 version of module.exports
  name: 'app',
  // optional
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: _path.default.resolve(__dirname, 'dist') // resolve slash incompatibility with Windows.

  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader' // use babel to transform ES6 into ES5
      // it's better to write Babel config in its own file .babelrc, to use it outsite of webpack.

    }]
  }
};
exports.default = _default;

