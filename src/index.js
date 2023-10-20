import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './pages/header';
import Season from './pages/season';
import Legend from './pages/legend';
import Footer from './pages/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Season />
    <Legend />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals