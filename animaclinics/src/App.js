import React from 'react';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from 'styles/globalStyles.js';
import "react-toastify/dist/ReactToastify.css";
import './styles/fontProvider.css';

const App = () => (
  <>
      <GlobalStyle />
        <Routes />
      <ToastContainer />
  </>
);

export default App;