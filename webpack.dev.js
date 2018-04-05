"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webpackMerge = _interopRequireDefault(require("webpack-merge"));

var _webpack = _interopRequireDefault(require("./webpack.common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// needs to be installed with yarn, with -D
var client = {
  mode: 'development',
  output: {
    filename: 'js/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    // Use files in /src to generate a virtual bundle.js, and show /dist content (index.html) on localhost:8080 by default (here, 8081)
    contentBase: './dist' // Now, bundle.js won't be in /dist anymore. devServer is quickier (it uses the ram) and make debugging easier.

  } // Needs to be launched with 'webpack-dev-server' => see package.json script.

};

var _default = (0, _webpackMerge.default)(_webpack.default, client); // will merge this file and the .common one.
// the difference with the prod is the source-map, the dev-server, and the mode: 'development'.


exports.default = _default;

