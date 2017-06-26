import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import './index.css';

const renderApp = () => render(<App />, document.getElementById('app'));

renderApp();
