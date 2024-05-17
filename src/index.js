import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import carList from './data/cars.json';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'whatwg-fetch';
import { BrowserRouter } from 'react-router-dom';


// ADD JSON OBJECT IMPORT AND PASS INTO APP as a prop

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App props={carList} />
    </BrowserRouter>
  </React.StrictMode>
);

