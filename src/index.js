import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// ADD JSON OBJECT IMPORT AND PASS INTO APP as a prop

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

