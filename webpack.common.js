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
  entry: "./src/app.js",
  output: {
    // filename: 'bundle.js', => We don't need this anymore. We'll use the ones in the dev & prod config files.
    path: _path.default.resolve(__dirname, 'dist') // resolve slash incompatibility with Windows.

  },
  // we moved devserver in the dev config file.
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

