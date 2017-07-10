import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import './css/index.css';

const renderApp = () => render(<App />, document.getElementById('app'));

renderApp();
const e = { age: 2, name: 'dan' };
const e2 = { ...e };
console.log(e2);
