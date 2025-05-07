import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';       // Ya existente en tu estructura
import './App.css';         // Ya existente en tu estructura
import './styles/variables.css';
import './styles/globals.css';
import './styles/app.css';
import 'leaflet/dist/leaflet.css'; // Importante para Leaflet

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);