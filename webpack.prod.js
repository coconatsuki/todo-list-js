"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webpackMerge = _interopRequireDefault(require("webpack-merge"));

var _extractTextWebpackPlugin = _interopRequireDefault(require("extract-text-webpack-plugin"));

var _webpack = _interopRequireDefault(require("./webpack.common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// needs to be installed with yarn, with -D
var client = {
  mode: 'production',
  output: {
    filename: './js/[name].[chunkhash].js' // We cache the JS file with a hashcode name in prod so that the client doesn't have to DL it everytime.

  },
  devtool: 'source-map',
  plugins: [new _extractTextWebpackPlugin.default({
    // This will tell the Plugin which name to give the css file it will extract from the app.js fil
    filename: './css/[name].[hash].css',
    // So, we tell it to use the original name, AND use a hash code inside of it as well.
    allChunks: true //with a hash, the css file will have a cache, and be reloaded only if the content has changed.

  })]
};

var _default = (0, _webpackMerge.default)(_webpack.default, client); // will export the result of merging this file with the .common config file.
// the difference with the dev is the source-map method, and the mode: 'production'. The 'dev-server' is not necessary here.


exports.default = _default;

