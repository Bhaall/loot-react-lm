import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Docs />,
  document.getElementById('root')
);

serviceWorker.unregister();
