import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const MapPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Efecto para la animación de las partículas
  useEffect(() => {
    // Crear partículas en el fondo
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
      // Posición aleatoria
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      (particle as HTMLElement).style.left = `${x}%`;
      (particle as HTMLElement).style.top = `${y}%`;
      
      // Tamaño aleatorio
      const size = Math.random() * 10 + 5;
      (particle as HTMLElement).style.width = `${size}px`;
      (particle as HTMLElement).style.height = `${size}px`;
      
      // Duración aleatoria de la animación
      const duration = Math.random() * 10 + 10;
      (particle as HTMLElement).style.animationDuration = `${duration}s`;
      
      // Retraso aleatorio
      const delay = Math.random() * 5;
      (particle as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, []);
  
  // Navegar al mapa
  const handleGoToMap = () => {
    navigate('/test-map');
  };
  
  return (
    <div className="home-page">
      {/* Partículas de fondo */}
      {[...Array(20)].map((_, index) => (
        <div key={index} className="particle"></div>
      ))}
      
      <div className="home-content">
        <div className="campus-logo">
          <img src="/Logo_Principal.png" alt="Logo UPEC" />
        </div>
        
        <h1 className="title">
          <span className="text-animated">Mapa Interactivo</span>
          <span className="subtitle">Universidad Politécnica Estatal del Carchi</span>
        </h1>
        
        <div className="description">
          <p>Explora el campus universitario de manera interactiva. Localiza edificios, estacionamientos y áreas deportivas con facilidad.</p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🏢</div>
              <div className="feature-text">
                <h3>Edificios</h3>
                <p>Navega entre los diferentes pisos de cada edificio y encuentra aulas, oficinas y laboratorios.</p>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🚗</div>
              <div className="feature-text">
                <h3>Estacionamientos</h3>
                <p>Consulta la capacidad y ubicación de los estacionamientos disponibles en el campus.</p>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-icon">⚽</div>
              <div className="feature-text">
                <h3>Áreas Deportivas</h3>
                <p>Encuentra las zonas deportivas y recreativas disponibles para estudiantes y personal.</p>
              </div>
            </div>
          </div>
          
          <button className="map-button" onClick={handleGoToMap}>
            <span>Explorar Mapa</span>
            <div className="map-button-effect"></div>
          </button>
        </div>
        
        <div className="tech-info">
          <h3>Tecnologías Utilizadas</h3>
          <div className="tech-icons">
            <div className="tech-icon">
              <span className="tech-label">React</span>
              <div className="tech-dot" style={{ backgroundColor: '#006633' }}></div>
            </div>
            <div className="tech-icon">
              <span className="tech-label">TypeScript</span>
              <div className="tech-dot" style={{ backgroundColor: '#FFCE00' }}></div>
            </div>
            <div className="tech-icon">
              <span className="tech-label">Leaflet</span>
              <div className="tech-dot" style={{ backgroundColor: '#006633' }}></div>
            </div>
            <div className="tech-icon">
              <span className="tech-label">CSS3</span>
              <div className="tech-dot" style={{ backgroundColor: '#FFCE00' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;