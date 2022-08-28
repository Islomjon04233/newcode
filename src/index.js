import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/footer/Footer';
// import Animation from './pages/Animation_btn/Animation'
import { BrowserRouter, Routes, Route } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <App />
    <Navbar />
    <Main />
    {/* <Animation /> */}

    <Footer />


  </React.StrictMode>
);


reportWebVitals();
