import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// ADD JSON OBJECT IMPORT AND PASS INTO APP as a prop

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

