import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Navbar from "./Components/Navbar"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"

function App2() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App2 />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
