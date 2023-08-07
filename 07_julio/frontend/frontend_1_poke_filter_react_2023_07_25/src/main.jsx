import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

const root$$ = document.querySelector("#root");
// <div id="root"></div>

ReactDOM.createRoot(root$$).render(<App />);