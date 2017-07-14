import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import './css/index.css';

const renderApp = () => render(<App />, document.getElementById('app'));

renderApp();
// =======
class Bork {
  // Property initializer syntax
  instanceProperty = 'bork';
  boundFunction = () => this.instanceProperty;

  // Static class properties
  static staticProperty = 'babelIsCool';
  static staticFunction = () => Bork.staticProperty;
}

const myBork = new Bork();

// Property initializers are not on the prototype.
// console.log(myBork.prototype.boundFunction); // > undefined

// Bound functions are bound to the class instance.
console.log(myBork.boundFunction.call()); // > "bork"

// Static function exists on the class.
console.log(Bork.staticFunction()); // > "babelIsCool"
