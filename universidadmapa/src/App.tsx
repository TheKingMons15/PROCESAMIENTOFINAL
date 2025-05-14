import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { MapProvider } from './core/map/context/MapContext';
import { SliderProvider } from './components/SliderContext';
import MapPage from './pages/MapPage';
import TestMap from './components/TestMap';
import CoordinateMapper from './components/CoordinateMapper';
import './App.css';
import './styles/mapAdditional.css';


// Componente para el enlace activo
const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  );
};

// Componente para el header
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img 
          src="/Logo_Principal.png" 
          alt="Logo UPEC" 
          className="logo-image"
        />
      </div>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/test-map">Mapa Interactivo</NavLink></li>
          <li><NavLink to="/coordinate-mapper">Editor de Coordenadas</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <MapProvider>
        <SliderProvider>
          <div className="app">
            <Routes>
              <Route 
                path="*" 
                element={
                  <>
                    <Header />
                    <main className="app-content">
                      <Routes>
                        <Route path="/" element={<MapPage />} />
                        <Route path="/test-map" element={
                          <div className="test-map-container" style={{ height: 'calc(100vh - 66px)', width: '100%', position: 'relative' }}>
                            <TestMap />
                          </div>
                        } />
                        <Route path="/coordinate-mapper" element={<CoordinateMapper />} />
                        <Route path="/about" element={<div className="about-page">Página de información</div>} />
                        <Route path="*" element={<div className="not-found">Página no encontrada</div>} />
                      </Routes>
                    </main>
                    <footer className="app-footer">
                      <p>Universidad Politécnica Estatal del Carchi © {new Date().getFullYear()}</p>
                    </footer>
                  </>
                }
              />
            </Routes>
          </div>
        </SliderProvider>
      </MapProvider>
    </Router>
  );
};

export default App;