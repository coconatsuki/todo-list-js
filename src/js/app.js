import "@babel/polyfill"; // import polyfills for unsupported ES6 methods in old browsers. Babel only cares about syntax, not methods.
import React from "react";
import { render } from "react-dom";

import "bootstrap";
import "./../css/main.scss"; // To take the css from /src into /dist, it's necessary to import it here first,
// so that css-loader (or style-loader) can be able to load it and make it available to the extract plugin
// which will extract it from here to make a separate css file, or put it in the html head.
import App from "./component/app";
import "./../images/coffee-note.jpg";

render(<App />, document.getElementById("app"));
