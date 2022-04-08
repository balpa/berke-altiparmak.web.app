import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// REACT v18 - createRoot()

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

// REACT versions below v18 - render()

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,

//   document.getElementById('root')
// );


