import React from 'react';
import ReactDOM from 'react-dom/client'; // Ubah impor ini
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
// import store from './store'; // Impor Redux store Anda

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
