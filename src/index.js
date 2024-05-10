import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { App } from './components/App';
import carList from './data/cars.json';


// ADD JSON OBJECT IMPORT AND PASS INTO APP as a prop

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App props={carList} />
  </React.StrictMode>
);

