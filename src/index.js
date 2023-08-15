import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/custom.scss'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const port = 3001; // Change to the desired port number

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
