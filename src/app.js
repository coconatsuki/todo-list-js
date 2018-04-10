//import "@babel/polyfill"; //import polyfills for unsupported ES6 methods in old browsers. Babel only cares about syntax, not methods.
import $ from 'jquery';
import './main.scss'; // To take the css from /src into /dist, it's necessary to import it here first,
// so that css-loader (or style-loader) can be able to load it and make it available to the extract plugin
// which will extract it from here to make a separate css file, or put it in the html head.
import './css/coffee-note.jpg'
import 'bootstrap';


console.log("rien");

Array.from([1, 2, 3]);
