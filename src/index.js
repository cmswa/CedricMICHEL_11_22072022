import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'typeface-montserrat';
<link href="https://fr.allfont.net/allfont.css?fonts=montserrat" rel="stylesheet" type="text/css" />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // document.getElementById('root')
);

