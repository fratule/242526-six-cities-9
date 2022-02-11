import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

// Temp data
const placesCount = 312;

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={placesCount} />
  </React.StrictMode>,
  document.getElementById('root'),
);
