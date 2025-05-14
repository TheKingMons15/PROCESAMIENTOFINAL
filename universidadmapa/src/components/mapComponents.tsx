// Archivo: src/components/mapComponents.tsx
import React, { useEffect } from 'react';
import { useMap, ImageOverlay } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
import { Edificio, EstacionamientoInfo, AreaDeportiva, Ubicacion, AreaVerdeInfo} from '../data/coordinatesData';

// Componente para renderizar la información de un área verde
export const AreaVerdeInfoComponent: React.FC<{ 
  area: { nombre: string; descripcion: string; tipo: string } 
}> = ({ area }) => {
  return (
    <div className="slider-content-wrapper">
      <div className="slider-header-section">
        <h2 className="item-title">{area.nombre}</h2>
        <span className="item-badge">Área Verde</span>
      </div>
      
      <p className="item-description animated-fade-in">{area.descripcion}</p>
      
      <div className="area-verde-info animated-fade-in">
        <div className="info-item">
          <div className="info-icon">🌳</div>
          <div className="info-text">
            <div className="info-label">Tipo</div>
            <div className="info-value">{area.tipo}</div>
          </div>
        </div>
      </div>
      
      <div className="area-verde-recomendaciones animated-fade-in-delayed">
        <h3>Recomendaciones</h3>
        <ul>
          <li>No pisar el césped.</li>
          <li>Evite dejar basura.</li>
          <li>Disfrute de un entorno limpio y natural.</li>
          <li>Respete la flora del lugar.</li>
        </ul>
      </div>
    </div>
  );
};


// Componente para actualizar la imagen del mapa cuando cambia el piso
export const FloorImageUpdater: React.FC<{ 
  floorImage: string, 
  bounds: LatLngBounds 
}> = ({ floorImage, bounds }) => {
  const map = useMap();
  // Este efecto se ejecuta cuando cambia la imagen del piso
  useEffect(() => {
    // Forzamos una actualización del tamaño del mapa después de cambiar la imagen
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map, floorImage]);
  return (
    <ImageOverlay
      url={floorImage}
      bounds={bounds}
      opacity={1}
      zIndex={10}
    />
  );
};
// Componente para renderizar la información de estacionamiento en el slider
export const EstacionamientoInfoComponent: React.FC<{ 
  estacionamiento: EstacionamientoInfo 
}> = ({ estacionamiento }) => {
  return (
    <div className="slider-content-wrapper">
      <div className="slider-header-section">
        <h2 className="item-title">{estacionamiento.nombre}</h2>
        <span className="item-badge">Estacionamiento</span>
      </div>
      <div className="estacionamiento-image-wrapper">
  {/* Imagen del Estacionamiento con estilo de fondo tipo 'floor-image' */}
  <div
    className="floor-image"
    style={{
      backgroundImage: estacionamiento.imagen
        ? `url(${estacionamiento.imagen})`
        : undefined,
      width: '10cm',
      height: '7cm',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}
  >
    {/* Mostrar ícono si no hay imagen */}
    {!estacionamiento.imagen && <span style={{ fontSize: '3rem' }}>🅿️</span>}

    <div className="floor-image-text" style={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      textAlign: 'center',
      fontSize: '0.9rem',
      padding: '0.2cm'
    }}>
      Estacionamiento {estacionamiento.nombre}
    </div>
  </div>
</div>
      <style>
{`
  .tarjeta-info, .tarjeta-recomendaciones {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    padding: 20px;
    margin: 20px 0;
    transition: all 0.3s ease-in-out;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .info-icon {
    font-size: 1.8rem;
    margin-right: 12px;
  }

  .reloj-animado {
    animation: pulse 1.5s infinite ease-in-out;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .info-text .info-label {
    font-weight: bold;
    color: #333;
    font-size: 1rem;
  }

  .info-text .info-value {
    color: #555;
    font-size: 0.95rem;
  }

  .destacado {
    font-weight: 600;
    color: #007bff;
  }

  .horario-estilo {
    background: linear-gradient(90deg, #e3f2fd 0%, #f1f8e9 100%);
    border-left: 4px solid #2196f3;
    border-radius: 8px;
    padding: 10px;
  }

  .hora-texto {
    font-size: 1.05rem;
    color: #0d47a1;
  }

  .tarjeta-recomendaciones h3 {
    margin-bottom: 10px;
    color: #37474f;
  }

  .tarjeta-recomendaciones ul {
    padding-left: 20px;
    list-style-type: none;
  }

  .tarjeta-recomendaciones li {
    margin-bottom: 8px;
    position: relative;
    padding-left: 1em;
  }
`}
</style>

<div className="estacionamiento-info animated-fade-in tarjeta-info">
  <div className="info-item">
    <div className="info-icon">📍</div>
    <div className="info-text">
      <div className="info-label">Ubicación</div>
      <div className="info-value destacado">{estacionamiento.ubicacion}</div>
    </div>
  </div>
  <div className="info-item">
    <div className="info-icon">🚗</div>
    <div className="info-text">
      <div className="info-label">Capacidad</div>
      <div className="info-value">{estacionamiento.capacidad} vehículos</div>
    </div>
  </div>
  <div className="info-item horario-estilo">
    <div className="info-icon reloj-animado">⏰</div>
    <div className="info-text">
      <div className="info-label">Horario de atención</div>
      <div className="info-value">
        <strong>Lunes a sábado</strong><br />
        <span className="hora-texto">6:30 AM - 8:30 AM</span>
      </div>
    </div>
  </div>
  {estacionamiento.espaciosDiscapacitados && (
    <div className="info-item">
      <div className="info-icon">♿</div>
      <div className="info-text">
        <div className="info-label">Espacios para discapacitados</div>
        <div className="info-value">{estacionamiento.espaciosDiscapacitados} espacios</div>
      </div>
    </div>
  )}
  {estacionamiento.espaciosMotocicletas && (
    <div className="info-item">
      <div className="info-icon">🏍️</div>
      <div className="info-text">
        <div className="info-label">Espacios para motocicletas</div>
        <div className="info-value">{estacionamiento.espaciosMotocicletas} espacios</div>
      </div>
    </div>
  )}
  {estacionamiento.edificiosCercanos && (
    <div className="info-item">
      <div className="info-icon">🏢</div>
      <div className="info-text">
        <div className="info-label">Edificios cercanos</div>
        <div className="info-value">{estacionamiento.edificiosCercanos.join(', ')}</div>
      </div>
    </div>
  )}
</div>

<div className="estacionamiento-recomendaciones animated-fade-in-delayed tarjeta-recomendaciones">
  <h3>🚦 Recomendaciones</h3>
  <ul>
    <li>⚠️ Respete las señales de tránsito y los límites de velocidad.</li>
    <li>🔒 No deje objetos de valor visibles en su vehículo.</li>
    <li>📏 Estacione correctamente dentro de las líneas demarcadas.</li>
    <li>🅿️ Utilice los espacios designados según corresponda.</li>
  </ul>
</div>
</div>
  );
};
// Componente para renderizar información de ubicación
const UbicacionItem: React.FC<{
  ubicacion: Ubicacion,
  index: number
}> = ({ ubicacion, index }) => {
  // Determinar el icono según el tipo de ubicación
  const getIcon = (tipo: string) => {
    switch (tipo.toUpperCase()) {
      case 'AULA':
        return '🏫';
      case 'AULAS':
        return '🏫';
      case 'ADMINISTRATIVO':
        return '🏢';
      case 'LABORATORIO':
        return '🧪';
      case 'SERVICIO':
        return '🛎️';
      case 'TÉCNICO':
        return '🔧';
      case 'SEGURIDAD':
        return '🔒';
      case 'ALMACÉN':
        return '📦';
      case 'ARCHIVO':
        return '📁';
      case 'INVESTIGACIÓN':
        return '🔬';
      case 'COMUNIDAD':
        return '👥';
      default:
        return '📍';
    }
  };

  return (
    <li className="facility-item animated-item" style={{animationDelay: `${index * 100}ms`}}>
      <span className="facility-icon">{getIcon(ubicacion.tipo)}</span>
      <div className="facility-content">
        <span className="facility-name">{ubicacion.nombre}</span>
        {ubicacion.descripcion && (
          <span className="facility-description">{ubicacion.descripcion}</span>
        )}
      </div>
    </li>
  );
};

// Componente para renderizar la información de edificio en el slider
export const EdificioInfo: React.FC<{ 
  edificio: Edificio,
  activeFloor: number,
  changeFloor: (index: number) => void
}> = ({ edificio, activeFloor, changeFloor }) => {
  const currentPiso = edificio.pisos[activeFloor];
  const hasLados = currentPiso.ladoIzquierdo || currentPiso.ladoDerecho;
  
  return (
    <div className="slider-content-wrapper">
      <div className="slider-header-section">
        <h2 className="item-title">{edificio.nombre}</h2>
        <span className="item-badge">Edificio {edificio.tipo}</span>
      </div>
      
      <p className="item-description animated-fade-in">{edificio.descripcion}</p>
      
      {/* Navegación entre pisos */}
      <div className="floors-navigation animated-fade-in">
        {edificio.pisos.map((piso, index) => (
          <button 
            key={index} 
            className={`floor-button ${index === activeFloor ? 'active' : ''}`}
            onClick={() => changeFloor(index)}
            style={{
              borderBottomColor: index === activeFloor ? '#006633' : 'transparent'
            }}
          >
            {piso.numero}
          </button>
        ))}
      </div>
      
      {/* Información del piso activo */}
      {edificio.pisos[activeFloor] && (
        <div className="floor-info animated-fade-in">
          <div 
            className="floor-image"
            style={{
              backgroundImage: edificio.pisos[activeFloor].imagen ? 
                `url(${edificio.pisos[activeFloor].imagen})` : undefined
            }}
          >
            {!edificio.pisos[activeFloor].imagen && <span>🏢</span>}
            <div className="floor-image-text">
              Piso {edificio.pisos[activeFloor].numero}
            </div>
          </div>
          
          <div className="floor-details">
            <h3 className="floor-name">
              {edificio.pisos[activeFloor].nombre}
            </h3>
            
            {/* Renderizar instalaciones si están disponibles en el formato antiguo */}
            {currentPiso.instalaciones && currentPiso.instalaciones.length > 0 && (
              <ul className="facilities-list">
                {currentPiso.instalaciones.map((instalacion, index) => (
                  <li key={index} className="facility-item animated-item" style={{animationDelay: `${index * 100}ms`}}>
                    <span className="facility-icon">{instalacion.icono}</span>
                    <span className="facility-name">{instalacion.nombre}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Renderizar la disposición por lados si está disponible */}
            {hasLados && (
              <div className="floor-sides-container animated-fade-in">
                {currentPiso.ladoIzquierdo && currentPiso.ladoIzquierdo.length > 0 && (
                  <div className="floor-side">
                    <h4 className="side-title">Lado Izquierdo</h4>
                    <ul className="facilities-list">
                      {currentPiso.ladoIzquierdo.map((ubicacion, index) => (
                        <UbicacionItem 
                          key={`left-${index}`}
                          ubicacion={ubicacion}
                          index={index}
                        />
                      ))}
                    </ul>
                  </div>
                )}
                
                {currentPiso.ladoDerecho && currentPiso.ladoDerecho.length > 0 && (
                  <div className="floor-side">
                    <h4 className="side-title">Lado Derecho</h4>
                    <ul className="facilities-list">
                      {currentPiso.ladoDerecho.map((ubicacion, index) => (
                        <UbicacionItem 
                          key={`right-${index}`}
                          ubicacion={ubicacion}
                          index={index}
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para renderizar la información de área deportiva en el slider
// Componente para renderizar la información de área deportiva en el slider
export const AreaDeportivaInfo: React.FC<{ 
  area: AreaDeportiva 
}> = ({ area }) => {
  return (
    <div className="slider-content-wrapper">
      <div className="slider-header-section">
        <h2 className="item-title">{area.nombre}</h2>
        <span className="item-badge">Área Deportiva</span>
      </div>
      
      <p className="item-description animated-fade-in">{area.descripcion}</p>
      
      <div className="area-deportiva-info animated-fade-in">
        <div className="info-item">
          <div className="info-icon">🏆</div>
          <div className="info-text">
            <div className="info-label">Tipo</div>
            <div className="info-value">{area.tipo}</div>
          </div>
        </div>
      </div>
      
      {/* Sección de imágenes demostrativas */}
      <div className="demo-images-section animated-fade-in-delayed">
        <h3>Demostración del Área</h3>
        <div className="image-grid">
          <div className="demo-image-container">
            <img 
              src="/assets/images/CanchaFutbol2.jpg" 
              alt="Vista aérea de la cancha de fútbol" 
              className="demo-image"
            />
            <p className="image-caption">Vista completa de la cancha</p>
          </div>
          <div className="demo-image-container">
            <img 
              src="/images/cancha-futbol-en-uso.jpg" 
              alt="Partido en la cancha de fútbol" 
              className="demo-image"
            />
            <p className="image-caption">Partido en progreso</p>
          </div>
        </div>
      </div>
      
      {/* Sección de equipamiento requerido */}
      <div className="equipment-section animated-fade-in-delayed">
        <h3>Equipamiento Requerido</h3>
        <div className="equipment-grid">
          <div className="equipment-item">
            <img 
              src="/images/uniforme-futbol.jpg" 
              alt="Uniforme de fútbol" 
              className="equipment-image"
            />
            <div className="equipment-details">
              <h4>Uniforme</h4>
              <p>Camiseta, pantalón corto y medias deportivas. Preferiblemente en materiales transpirables.</p>
            </div>
          </div>
          <div className="equipment-item">
            <img 
              src="/images/balon-futbol.jpg" 
              alt="Balón de fútbol" 
              className="equipment-image"
            />
            <div className="equipment-details">
              <h4>Balón</h4>
              <p>Balón oficial tamaño 5 para adultos, tamaño 4 para juveniles.</p>
            </div>
          </div>
          <div className="equipment-item">
            <img 
              src="/images/zapatos-futbol.jpg" 
              alt="Zapatos para fútbol" 
              className="equipment-image"
            />
            <div className="equipment-details">
              <h4>Calzado</h4>
              <p>Tacos adecuados para superficie de césped sintético. No se permiten tacos metálicos.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Instalaciones disponibles */}
      {area.instalaciones && area.instalaciones.length > 0 && (
        <div className="area-facilities animated-fade-in-delayed">
          <h3>Instalaciones</h3>
          <ul className="facilities-list">
            {area.instalaciones.map((instalacion, index) => (
              <li key={index} className="facility-item animated-item" style={{animationDelay: `${index * 100}ms`}}>
                <span className="facility-icon">{instalacion.icono}</span>
                <span className="facility-name">{instalacion.nombre}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="area-deportiva-recomendaciones animated-fade-in-delayed">
        <h3>Horarios</h3>
        <ul>
          <li><strong>Lunes a Viernes:</strong> 7:00 AM - 8:00 PM</li>
          <li><strong>Sábados:</strong> 8:00 AM - 6:00 PM</li>
          <li><strong>Domingos y Feriados:</strong> 9:00 AM - 2:00 PM</li>
        </ul>
        
        <h3>Recomendaciones</h3>
        <ul>
          <li>Utilice ropa y calzado adecuado para la actividad deportiva.</li>
          <li>Traiga su propia hidratación.</li>
          <li>Respete las normas específicas de cada área deportiva.</li>
          <li>Coordine la reserva del espacio con anticipación si es necesario.</li>
        </ul>
      </div>
    </div>
  );
};

// Componente para renderizar la información de área verdes en el slider
export const AreaVerdeIn: React.FC<{ area: AreaVerdeInfo }> = ({ area }) => {
  
  return (
    <div className="slider-content-wrapper">
      <div className="slider-header-section">
        <h2 className="item-title">{area.nombre}</h2>
        <span className="item-badge">Área Verde</span>
      </div>

      {/* Imagen de la zona verde */}
      {area.fotografia && (
        <div className="area-verde-imagen">
          <img
            src={area.fotografia}
            alt={`Fotografía de ${area.nombre}`}
            className="area-verde-foto"
            style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }}
          />
        </div>
      )}

      <p className="item-description animated-fade-in">{area.descripcion}</p>

      <div className="area-verde-info animated-fade-in">
        <div className="info-item">
          <div className="info-icon">🌳</div>
          <div className="info-text">
            <div className="info-label">Tipo</div>
            <div className="info-value">{area.tipo}</div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">📍</div>
          <div className="info-text">
            <div className="info-label">Ubicación</div>
            <div className="info-value">{area.ubicacion}</div>
          </div>
        </div>

        {area.nombre && (
          <div className="info-item">
            <div className="info-icon">🍀</div>
            <div className="info-text">
              <div className="info-label">Vegetación</div>
              <div className="info-value">{area.nombre}</div>
            </div>
          </div>
        )}
      </div>
      {/* Renderizar imágenes si existen */}
      {area.imagenes && area.imagenes.length > 0 && (
        <div className="area-verde-imagenes">
          {area.imagenes.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Imagen ${index + 1} de ${area.nombre}`}
              className="area-verde-foto"
              style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }}
            />
          ))}
        </div>
      )}


      <div className="area-verde-recomendaciones animated-fade-in-delayed">
        <h3>Recomendaciones</h3>
        <ul>
          <li>No arroje basura; utilice los tachos designados.</li>
          <li>Evite pisar áreas reforestadas o sensibles.</li>
          <li>No arranque plantas ni flores.</li>
          <li>Disfrute del espacio respetando la tranquilidad del entorno.</li>
        </ul>
      </div>
    </div>
  );
};
