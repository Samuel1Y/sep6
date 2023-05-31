import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootRouter from './RootRouter';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
