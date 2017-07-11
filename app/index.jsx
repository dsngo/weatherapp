import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import './css/index.css';

const renderApp = () => render(<App />, document.getElementById('app'));

renderApp();
// =======
class Bork {
  //Property initializer syntax
  // instanceProperty = "bork";
  boundFunction = () => {
    return this.instanceProperty;
  }

  //Static class properties
  static staticProperty = "babelIsCool";
  static staticFunction = function() {
    return Bork.staticProperty;
  }
}

let myBork = new Bork;

//Property initializers are not on the prototype.
// console.log(myBork.prototype.boundFunction); // > undefined

//Bound functions are bound to the class instance.
console.log(myBork.boundFunction.call(undefined)); // > "bork"

//Static function exists on the class.
console.log(Bork.staticFunction()); // > "babelIsCool"
