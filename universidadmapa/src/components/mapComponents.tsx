// Archivo: src/components/mapComponents.tsx
import React, { useEffect, useState, useRef } from 'react';
import { useMap, ImageOverlay } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
import { Edificio, EstacionamientoInfo, AreaDeportiva, Ubicacion, AreaVerdeInfo} from '../data/coordinatesData';

// 🔥 IMPORTAR EL NUEVO SISTEMA UNIVERSAL
import EdificiosAreasRenderer from './EdificiosAreasRenderer';

// Componente mejorado para mostrar imágenes de pisos con transparencia
export const BuildingFloorOverlay: React.FC<{ 
  floorImage: string, 
  bounds: LatLngBounds,
  isBuilding: boolean 
}> = ({ floorImage, bounds, isBuilding }) => {
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
      opacity={isBuilding ? 0.85 : 1} // Si es un piso de edificio, aplicamos transparencia
      zIndex={isBuilding ? 9 : 10} // Si es un piso, lo ponemos por debajo de los polígonos
      className={isBuilding ? 'building-floor' : ''}
    />
  );
};

// Componente para actualizar la imagen del mapa cuando cambia el piso (Mantener por compatibilidad)
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

// 🔥 COMPONENTE UNIVERSAL PARA ÁREAS ESPECÍFICAS DE EDIFICIOS
export { default as EdificiosAreasRenderer } from './EdificiosAreasRenderer';

// Componente para el modal de fotos
export const PhotoModal: React.FC<{
  isOpen: boolean;
  photos: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ isOpen, photos, currentIndex, onClose, onNext, onPrev }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Bloquear el scroll cuando el modal está abierto
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  // Click fuera del modal para cerrar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen || photos.length === 0) return null;
  
  const currentPhoto = photos[currentIndex];
  
  return (
    <div className="photo-modal-overlay">
      <div 
        ref={modalRef}
        className="photo-modal-container"
      >
        <div className="photo-modal-header">
          <span className="photo-counter">{`${currentIndex + 1} / ${photos.length}`}</span>
          <button 
            onClick={onClose}
            className="modal-close-button"
            aria-label="Cerrar imagen"
          >
            ✕
          </button>
        </div>
        
        <div className="photo-display-container">
          <img 
            src={currentPhoto} 
            alt={`Imagen ${currentIndex + 1}`}
            className="full-size-photo"
          />
          
          {photos.length > 1 && (
            <>
              <button 
                onClick={onPrev}
                className="nav-button prev-button"
                aria-label="Imagen anterior"
              >
                ‹
              </button>
              
              <button 
                onClick={onNext}
                className="nav-button next-button"
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente para el carrusel de fotos
export const PhotoCarousel: React.FC<{
  photos: string[];
  onPhotoClick: (index: number) => void;
}> = ({ photos, onPhotoClick }) => {
  if (!photos || photos.length === 0) return null;
  
  return (
    <div className="photo-carousel-container">
      <h3 className="carousel-title">Fotografías</h3>
      
      <div className="photo-grid">
        {photos.slice(0, 9).map((photo, index) => (
          <div 
            key={index}
            onClick={() => onPhotoClick(index)}
            className="photo-thumbnail"
            role="button"
            aria-label={`Ver imagen ${index + 1}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onPhotoClick(index);
              }
            }}
          >
            <img 
              src={photo} 
              alt={`Imagen ${index + 1}`}
              className="thumbnail-image"
            />
            {index === 8 && photos.length > 9 && (
              <div className="more-photos-overlay">
                +{photos.length - 9}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

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

// Componente para renderizar la información de estacionamiento en el slider
export const EstacionamientoInfoComponent: React.FC<{ 
  estacionamiento: EstacionamientoInfo 
}> = ({ estacionamiento }) => {
  const imagen = estacionamiento.imagen || ''; // Solo una imagen

  return (
    <div className="slider-content-wrapper">
      <div className="slider-header-section">
        <h2 className="item-title">{estacionamiento.nombre}</h2>
        <span className="item-badge">Estacionamiento</span>
      </div>

      {/* Imagen fija con tamaño específico */}
      <div className="estacionamiento-image-wrapper">
        <div
          className="imagen-fija"
          style={{
            width: '9.5cm',
            height: '6.5cm',
            backgroundImage: imagen ? `url(${imagen})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          {!imagen && <span style={{ fontSize: '3rem' }}>🅿️</span>}
          <div style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            textAlign: 'center',
            padding: '0.3cm',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px'
          }}>
            {estacionamiento.nombre}
          </div>
        </div>
      </div>

      {/* Info del estacionamiento */}
      <div className="estacionamiento-info tarjeta-info">
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

      {/* Recomendaciones */}
      <div className="estacionamiento-recomendaciones tarjeta-recomendaciones">
        <h3>🚦 Recomendaciones</h3>
        <ul>
          <li>⚠️ Respete las señales de tránsito y los límites de velocidad.</li>
          <li>🔒 No deje objetos de valor visibles en su vehículo.</li>
          <li>📏 Estacione correctamente dentro de las líneas demarcadas.</li>
          <li>🅿️ Utilice los espacios designados según corresponda.</li>
        </ul>
      </div>

      {/* Estilos internos */}
      <style>{`
        .tarjeta-info, .tarjeta-recomendaciones {
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
          padding: 20px;
          margin: 20px 0;
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
      `}</style>
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
      case 'BAÑOS':
        return '🧻';
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
  
  // Determinar qué imagen mostrar en el encabezado
  const getHeaderImage = () => {
    if (edificio.id === 'edificio4') {
      return '/assets/images/Aulas4.jpg';
    } else if (edificio.id === 'edificio3') {
      return '/assets/images/Aulas3.jpg';
    } else if (edificio.id === 'edificio2') {
      return '/assets/images/Aulas2.jpg';
    }
    return undefined;
  };
  
  // Determinar qué imagen mostrar para el piso seleccionado
  const getFloorImage = () => {
    // Imágenes específicas para el Edificio 4
    if (edificio.id === 'edificio4') {
      const pisoNum = currentPiso.numero;
      if (pisoNum === 0) {
        return '/assets/images/AULAS4-PLANTABAJA.jpg';
      } else if (pisoNum === 1) {
        return '/assets/images/AULAS4-planta1.jpg';
      } else if (pisoNum === 2) {
        return '/assets/images/AULAS4-planta2.jpg';
      }
    }
    // Imágenes específicas para el Edificio 3
    else if (edificio.id === 'edificio3') {
      const pisoNum = currentPiso.numero;
      if (pisoNum === 0) {
        return '/assets/images/AULAS3-PLANTABAJA.jpg';
      } else if (pisoNum === 1) {
        return '/assets/images/AULAS3-planta1.jpg';
      } else if (pisoNum === 2) {
        return '/assets/images/AULAS3-planta2.jpg';
      }
    }
    // Imágenes específicas para el Edificio 2
    else if (edificio.id === 'edificio2') {
      const pisoNum = currentPiso.numero;
      if (pisoNum === 0) {
        return '/assets/images/AULAS2-PLANTABAJA.jpg';
      } else if (pisoNum === 1) {
        return '/assets/images/AULAS2-planta1.jpg';
      } else if (pisoNum === 2) {
        return '/assets/images/AULAS2-planta2.jpg';
      }
    }
    
    // Para otros edificios o si no hay imagen específica, usar la imagen por defecto del piso
    return currentPiso.imagen ? currentPiso.imagen : undefined;
  };
  
  return (
    <div className="slider-content-wrapper">
      <div className="slider-header-section">
        <h2 className="item-title">{edificio.nombre}</h2>
        <span className="item-badge">Edificio {edificio.tipo}</span>
        
        {/* Imagen debajo del título */}
        {getHeaderImage() && (
          <div className="edificio-header-image">
            <img 
              src={getHeaderImage()} 
              alt={`Vista general de ${edificio.nombre}`}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '180px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          </div>
        )}
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
      
      {/* INDICADOR PARA EDIFICIOS CON ÁREAS ESPECÍFICAS */}
      {(edificio.id === 'edificio4' || edificio.id === 'edificio3') && (
        <div className="edificio-areas-indicator animated-fade-in" style={{
          marginTop: '15px',
          marginBottom: '15px',
          padding: '12px',
          backgroundColor: '#e8f5e8',
          border: '2px solid #4caf50',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '18px', marginBottom: '5px' }}>
            ✨ 🗺️ ✨
          </div>
          <div style={{ fontSize: '14px', color: '#2e7d32', fontWeight: 'bold' }}>
            Áreas específicas disponibles
          </div>
          <div style={{ fontSize: '12px', color: '#555', marginTop: '5px' }}>
            {edificio.id === 'edificio4' && activeFloor === 0 && 'Planta Baja - Haz clic en las áreas marcadas'}
            {edificio.id === 'edificio4' && activeFloor === 1 && 'Primer Piso - Aulas y direcciones'}
            {edificio.id === 'edificio4' && activeFloor === 2 && 'Segundo Piso - Aulas y direcciones'}
            {edificio.id === 'edificio3' && activeFloor === 0 && 'Planta Baja - Aulas y laboratorios TICS'}
            {edificio.id === 'edificio3' && activeFloor === 1 && 'Primer Piso - Aulas numeradas'}
            {edificio.id === 'edificio3' && activeFloor === 2 && 'Segundo Piso - Aulas y nivelación'}
          </div>
        </div>
      )}
      
      {/* Información del piso activo - IMAGEN MÁS ANCHA */}
      {edificio.pisos[activeFloor] && (
        <div className="floor-info animated-fade-in">
          <div 
            className="floor-image"
            style={{
              backgroundImage: getFloorImage() ? 
                `url(${getFloorImage()})` : undefined,
              width: '110%', // Imagen más ancha
              marginLeft: '-5%', // Margen negativo para centrar
              height: '280px', // Altura fija para consistencia
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)' // Sombra para mejor apariencia
            }}
          >
            {!getFloorImage() && <span>🏢</span>}
            <div className="floor-image-text" style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              textAlign: 'center',
              fontSize: '0.95rem',
              padding: '8px',
              borderRadius: '0 0 8px 8px',
              fontWeight: 'bold'
            }}>
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
      {area.imagenes && area.imagenes.length > 0 && (
  <div className="demo-images-section animated-fade-in-delayed">
    <h3>Demostración del Área</h3>
    <div className="image-grid">
      {area.imagenes.map((imagen, index) => (
        <div className="demo-image-container" key={`${area.id}-img-${index}`}>
          <div className="image-aspect-ratio">
            <img 
              src={imagen.url} 
              alt={imagen.alt} 
              className="demo-image"
              loading="lazy"
              // Añade tamaño máximo opcional
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          </div>
          <p className="image-caption">{imagen.descripcion}</p>
        </div>
      ))}
    </div>
  </div>
)}
      
      {/* Sección de equipamiento requerido */}
      {area.equipamiento && area.equipamiento.length > 0 && (
        <div className="equipment-section animated-fade-in-delayed">
          <h3>Equipamiento Requerido</h3>
          <div className="equipment-grid">
            {area.equipamiento.map((item, index) => (
              <div className="equipment-item" key={`${area.id}-eq-${index}`}>
                <div className="equipment-image-container">
                  <img 
                    src={item.imagen} 
                    alt={item.nombre}
                    className="equipment-image"
                    loading="lazy"
                  />
                </div>
                <div className="equipment-details">
                  <h4>{item.nombre}</h4>
                  <p>{item.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Instalaciones disponibles */}
      {area.instalaciones && area.instalaciones.length > 0 && (
        <div className="area-facilities animated-fade-in-delayed">
          <h3>Instalaciones</h3>
          <ul className="facilities-list">
            {area.instalaciones.map((instalacion, index) => (
              <li 
                key={`${area.id}-fac-${index}`} 
                className="facility-item animated-item" 
                style={{animationDelay: `${index * 100}ms`}}
              >
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

// Componente para renderizar la información de área verdes en el slider (MEJORADO)

export const AreaVerdeIn: React.FC<{ area: AreaVerdeInfo }> = ({ area }) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [allPhotos, setAllPhotos] = useState<string[]>([]);

  useEffect(() => {
    // Cargar todas las imágenes sin filtrar
    if (area.imagenes && area.imagenes.length > 0) {
      setAllPhotos(area.imagenes);
    } else {
      setAllPhotos([]);
    }
  }, [area]);

  const handlePhotoClick = (index: number) => {
    setCurrentPhotoIndex(index + 1); // +1 porque la fotografía principal va primero
    setIsPhotoModalOpen(true);
  };

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
  };

  const nextPhoto = () => {
    const total = [area.fotografia, ...allPhotos].length;
    setCurrentPhotoIndex((prev) => (prev + 1) % total);
  };

  const prevPhoto = () => {
    const total = [area.fotografia, ...allPhotos].length;
    setCurrentPhotoIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="slider-content-wrapper">
      <div className="slider-header-section">
        <h2 className="item-title">{area.nombre}</h2>
        <span className="item-badge"
          style={{
            color: '#000000',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >Área Verde</span>
      </div>

      <p className="item-description animated-fade-in"
        style={{
          color: '#000000',                 
          fontFamily: 'Times New Roman, serif',
          fontSize: '16px',               
          lineHeight: '1.4'                 
        }}
      >{area.descripcion}</p>

      {/* Imagen principal destacada */}
      {area.fotografia && (
        <div className="main-photo-container animated-fade-in">
          <img
            src={area.fotografia}
            alt={`Fotografía principal de ${area.nombre}`}
            className="main-photo"
            onClick={() => {
              setCurrentPhotoIndex(0); // Mostrar primero la imagen principal en el modal
              setIsPhotoModalOpen(true);
            }}
            style={{
              cursor: "pointer",
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "1rem",
            }}
          />
        </div>
      )}

      <div className="area-verde-info animated-fade-in">
        <div className="info-item">
          <div className="info-icon">🌳</div>
          <div className="info-text">
            <div className="info-label"
              style={{
                color: '#000000',
                fontFamily: 'Times New Roman, serif',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >Tipo</div>
            <div className="info-value"
            style={{
              color: '#000000',
              fontFamily: 'Times New Roman, serif',
              fontSize: '16px',
              lineHeight: '1.4'
            }}
            >{area.tipo}</div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">📍</div>
          <div className="info-text">
            <div className="info-label"
              style={{
                color: '#000000',
                fontFamily: 'Times New Roman, serif',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >Ubicación</div>
            <div className="info-value" 
            style={{
              color: '#000000',
              fontFamily: 'Times New Roman, serif',
              fontSize: '16px',
              lineHeight: '1.4'
            }}
            >{area.ubicacion}</div>
          </div>
        </div>

        {area.instalaciones && area.instalaciones.length > 0 && (
          <div className="info-item">
            <div className="info-icon">📋</div>
            <div className="info-text">
              <div className="info-label" 
                style={{
                  color: '#000000',
                  fontFamily: 'Times New Roman, serif',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >Elementos del Paisaje Natural</div>
              <div className="info-values">
                {area.instalaciones.map((inst, idx) => (
                  <span key={idx} className="badge"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#000000',
                      fontSize: '14px',
                      fontFamily: 'Times New Roman, serif',
                      fontWeight: 'normal'
                    }}
                  >
                    {inst.icono} {inst.nombre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Carrusel de fotos adicionales */}
      {allPhotos.length > 0 && (
        <PhotoCarousel photos={allPhotos} onPhotoClick={handlePhotoClick} />
      )}

      <div
        className="area-verde-recomendaciones animated-fade-in-delayed"
        style={{
          fontFamily: 'Times New Roman, serif',  
          fontSize: '15px',              
          color: '#000000',              
          lineHeight: '1.5'             
        }}
      >
        <h3>Recomendaciones</h3>
        <ul>
          <li>No arroje basura; utilice los tachos designados.</li>
          <li>Evite pisar áreas reforestadas o sensibles.</li>
          <li>No arranque plantas ni flores.</li>
          <li>Disfrute del espacio respetando la tranquilidad del entorno.</li>
          <li>Mantenga mascotas con correa y recoja sus desechos.</li>
        </ul>
      </div>


      {/* Modal para ver fotos ampliadas */}
      <PhotoModal
        isOpen={isPhotoModalOpen}
        photos={[area.fotografia, ...allPhotos]} // El modal contiene todas las fotos, empezando por la principal
        currentIndex={currentPhotoIndex}
        onClose={closePhotoModal}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </div>
  );
};
