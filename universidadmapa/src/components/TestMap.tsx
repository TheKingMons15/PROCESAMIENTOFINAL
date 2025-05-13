// Archivo: src/components/TestMap.tsx
import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, ZoomControl, Polygon, Tooltip } from 'react-leaflet';
import L, { LatLngBounds, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importaciones de archivos externos
import { estacionamientos, edificiosData, areasDeportivas, areasVerdesupec } from '../data/coordinatesData';
import { 
  FloorImageUpdater, 
  EstacionamientoInfoComponent, 
  EdificioInfo, 
  AreaDeportivaInfo,
  AreaVerdeIn
} from './mapComponents';
import Slider from './common/Slider/Slider';
import { useSlider } from '../contexts/SliderContext';

// Importar estilos
import '../styles/mapStyles.css';

const TestMap: React.FC = () => {
  // Dimensiones de la imagen del mapa
  const bounds = new LatLngBounds([0, 0], [7383, 8153]);
  
  // Referencias para la animación
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  // Estados
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedItemType, setSelectedItemType] = useState<'estacionamiento' | 'edificio' | 'deportivo' | 'areasverdes' | null>(null);
  const [activeFloor, setActiveFloor] = useState(0);
  const [currentMapImage, setCurrentMapImage] = useState('/assets/images/campus-map.jpg');
  const [showFloorNotice, setShowFloorNotice] = useState(false);
  const [floorNoticeName, setFloorNoticeName] = useState('');
  const [elementsVisible, setElementsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<any>(null);
  const [showInfoMessage, setShowInfoMessage] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Usar el contexto del slider
  const { openSlider, closeSlider } = useSlider();

  // Verificar si la imagen se carga correctamente
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      
      // Activar la animación de entrada de los elementos después de cargar la imagen
      setTimeout(() => {
        setElementsVisible(true);
      }, 300);
      
      // Ocultar el mensaje informativo después de unos segundos
      setTimeout(() => {
        setShowInfoMessage(false);
      }, 7000);
    };
    img.onerror = () => {
      console.error("Error cargando la imagen del mapa");
    };
    img.src = currentMapImage;
  }, [currentMapImage]);

  // Actualizar la imagen del mapa cuando cambia el piso
  useEffect(() => {
    if (selectedItem && selectedItemType === 'edificio' && selectedItem.pisos && selectedItem.pisos[activeFloor]) {
      // Si existe una imagen para este piso, la usamos
      if (selectedItem.pisos[activeFloor].imagen) {
        setCurrentMapImage(selectedItem.pisos[activeFloor].imagen);
      } else {
        // Si no hay imagen específica para este piso, mantener el mapa general
        setCurrentMapImage('/assets/images/campus-map.jpg');
      }
    } else {
      // Si no hay elemento seleccionado o no hay imagen para este piso, mostrar el mapa general
      setCurrentMapImage('/assets/images/campus-map.jpg');
    }
  }, [selectedItem, selectedItemType, activeFloor]);

  // Efecto para mostrar notificación de cambio de piso
  useEffect(() => {
    if (selectedItem && selectedItemType === 'edificio' && selectedItem.pisos && selectedItem.pisos[activeFloor]) {
      setFloorNoticeName(selectedItem.pisos[activeFloor].nombre);
      setShowFloorNotice(true);
      
      // Ocultar la notificación después de 2 segundos
      const timer = setTimeout(() => {
        setShowFloorNotice(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [activeFloor, selectedItem, selectedItemType]);

  // Función para seleccionar un estacionamiento
  const handleEstacionamientoClick = (estacionamiento: typeof estacionamientos[0]) => {
    if (isTransitioning) return;
    
    setSelectedItem(estacionamiento);
    setSelectedItemType('estacionamiento');
    setIsSliderOpen(true);
    // También actualizar el contexto
    openSlider(estacionamiento, { type: 'estacionamiento' });
  };


  // Función para seleccionar un edificio
  const handleEdificioClick = (edificio: typeof edificiosData[0]) => {
    if (isTransitioning) return;
    
    // El piso por defecto podría ser 0 pero algunos edificios tienen pisos negativos
    // Vamos a buscar el piso con el número más bajo para empezar
    const firstFloorIndex = edificio.pisos.findIndex(piso => 
      piso.numero === Math.min(...edificio.pisos.map(p => p.numero))
    );
    const floorIndex = firstFloorIndex >= 0 ? firstFloorIndex : 0;
    
    setSelectedItem(edificio);
    setSelectedItemType('edificio');
    setActiveFloor(floorIndex);
    setIsSliderOpen(true);
    
    // También actualizar el contexto
    openSlider(edificio, { 
      type: 'edificio',
      floorIndex: floorIndex
    });
  };
  
  // Función para seleccionar un área deportiva
  const handleDeportivoClick = (area: typeof areasDeportivas[0]) => {
    if (isTransitioning) return;
    
    setSelectedItem(area);
    setSelectedItemType('deportivo');
    setIsSliderOpen(true);
    
    // También actualizar el contexto
    openSlider(area, { type: 'deportivo' });
  };

  // Función para seleccionar un earea verde
  const handleAreaverdeClick = (area: typeof areasVerdesupec[0]) => {

    if (isTransitioning) return;

    setSelectedItem(area);
    setSelectedItemType('areasverdes');
    setIsSliderOpen(true);

    // Actualizar el contexto o mostrar el slider
    openSlider([area], { type: 'areasverdes' });
  };

  // Función para cerrar el slider con animación de transición
  const handleCloseSlider = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Limpiar el estado de hover y selección antes de la animación
    setHoveredItem(null);
    
    // Comprobar si tenemos acceso a los refs
    if (overlayRef.current && progressBarRef.current) {
      // Mostrar overlay de transición
      overlayRef.current.classList.add('active');
      
      // Reiniciar la barra de progreso
      progressBarRef.current.style.transition = 'none';
      progressBarRef.current.style.width = '0%';
      
      // Forzar un reflow para asegurar que el cambio se aplique
      void progressBarRef.current.offsetWidth;
      
      // Iniciar la animación de la barra de progreso
      progressBarRef.current.style.transition = 'width 1.5s linear';
      progressBarRef.current.style.width = '100%';
      
      // Esperar a que termine la animación
      setTimeout(() => {
        // Cerrar el slider y limpiar todos los estados
        setIsSliderOpen(false);
        setSelectedItem(null);
        setSelectedItemType(null);
        setHoveredItem(null); // Asegurar que no quede ningún elemento activo
        setCurrentMapImage('/assets/images/campus-map.jpg');
        closeSlider();
        
        // Ocultar el overlay después de un breve retraso
        setTimeout(() => {
          if (overlayRef.current) {
            overlayRef.current.classList.remove('active');
          }
          setIsTransitioning(false);
        }, 300);
      }, 1500);
    } else {
      // Fallback si los refs no están disponibles
      setIsSliderOpen(false);
      setSelectedItem(null);
      setSelectedItemType(null);
      setHoveredItem(null); // Asegurar que no quede ningún elemento activo
      setCurrentMapImage('/assets/images/campus-map.jpg');
      closeSlider();
      setIsTransitioning(false);
    }
  };

  // Función para cambiar de piso
  const changeFloor = (index: number) => {
    if (isTransitioning) return;
    setActiveFloor(index);
  };
  
  // Función para el hover sobre un elemento
  const handleHover = (item: any) => {
    if (isTransitioning) return;
    setHoveredItem(item);
  };
  
  // Función para salir del hover
  const handleHoverOut = () => {
    if (isTransitioning) return;
    setHoveredItem(null);
  };

  // Establecer colores según el tipo de elemento
  const getEstacionamientoColors = (estacionamiento: typeof estacionamientos[0]) => {
    return {
      fill: '#FFCE00',
      border: '#006633'
    };
  };

  const getColorByElementType = (type: string) => {
    switch (type.toUpperCase()) {
      case 'ACADÉMICO':
        return '#006633'; // Verde primario
      case 'DEPORTIVO':
        return '#00A878'; // Verde secundario
      case 'ADMINISTRATIVO':
        return '#1E8449'; // Verde oscuro
      case 'CIENTÍFICO':
        return '#FFCE00'; // Amarillo primario
      default:
        return '#006633'; // Verde por defecto
    }
  };

  return (
    <div className="map-test-container">
      {/* Mensaje informativo que se muestra al inicio */}
      {showInfoMessage && (
        <div className="info-message">
          <div className="info-content">
            <h3>¡Bienvenido al Mapa Interactivo de la UPEC!</h3>
            <p>Haz clic en los edificios, estacionamientos o áreas deportivas para obtener más información.</p>
            <button onClick={() => setShowInfoMessage(false)}>Entendido</button>
          </div>
        </div>
      )}
      
      {/* Contenedor del mapa */}
      <div className="map-wrapper">
        
        <MapContainer
          center={[0, 0]} // Centro en la esquina superior izquierda
          zoom={-2}  // Nivel de zoom más alejado
          style={{ height: '100%', width: '100%' }}
          crs={L.CRS.Simple}
          maxBounds={bounds}
          minZoom={-2}  // Zoom mínimo (más alejado)
          maxZoom={2}   // Limitar el zoom máximo
          zoomControl={false} // Desactivamos el control de zoom predeterminado
          className="map-container"
        >
          {/* Añadimos el control de zoom en otra posición */}
          <ZoomControl position="bottomright" />
          
          {/* Imagen del mapa - Cambia dinámicamente según el piso seleccionado */}
          <FloorImageUpdater floorImage={currentMapImage} bounds={bounds} />
          
          {/* Polígonos para los estacionamientos - Solo visibles en el mapa general */}
          {currentMapImage === '/assets/images/campus-map.jpg' && estacionamientos.map((estacionamiento) => {
            const customColors = getEstacionamientoColors(estacionamiento);
            return (
              <Polygon
                key={estacionamiento.nombre}
                positions={estacionamiento.coordenadas as LatLngTuple[]}
                pathOptions={{
                  color: customColors.border,
                  fillColor: customColors.fill,
                  // Aplicar transparencia por defecto, color completo al hover/seleccionado
                  fillOpacity: selectedItem === estacionamiento ? 0.8 : 
                              hoveredItem === estacionamiento ? 0.7 : 
                              elementsVisible ? 0.2 : 0,
                  // Ocultar bordes por defecto, mostrarlos solo en hover/seleccionado
                  weight: selectedItem === estacionamiento ? 2 : 
                          hoveredItem === estacionamiento ? 1 : 0,
                  dashArray: hoveredItem === estacionamiento || selectedItem === estacionamiento ? '' : '5,3',
                  className: `map-element parking
                            ${elementsVisible ? 'visible' : ''}
                            ${hoveredItem === estacionamiento ? 'hovered' : ''}
                            ${selectedItem === estacionamiento ? 'selected' : ''}`
                }}
                eventHandlers={{
                  mouseover: (e) => {
                    handleHover(estacionamiento);
                  },
                  mouseout: (e) => {
                    handleHoverOut();
                  },
                  click: () => handleEstacionamientoClick(estacionamiento)
                }}
              >
                <Tooltip 
                  sticky 
                  className={`parking-tooltip ${hoveredItem === estacionamiento ? 'visible' : ''}`}
                  direction="top"
                  offset={[0, -10]}
                  opacity={0.9}
                >
                  <div className="tooltip-content">
                    <strong>{estacionamiento.nombre}</strong>
                    <div className="tooltip-details">
                      <span>Capacidad: {estacionamiento.capacidad} vehículos</span>
                    </div>
                  </div>
                </Tooltip>
              </Polygon>
            );
          })}

          
          {/* Polígonos para las áreas deportivas - Solo visibles en el mapa general */}
          {currentMapImage === '/assets/images/campus-map.jpg' && areasDeportivas && areasDeportivas.map((area) => (
            <Polygon
              key={area.id}
              positions={area.coordenadas as LatLngTuple[]}
              pathOptions={{
                color: '#006633',
                fillColor: '#00A878',
                fillOpacity: selectedItem === area ? 0.8 : 
                             hoveredItem === area ? 0.7 : 
                             elementsVisible ? 0.2 : 0,
                // Ocultar bordes por defecto, mostrarlos solo en hover/seleccionado
                weight: selectedItem === area ? 2 : 
                        hoveredItem === area ? 1 : 0,
                className: `map-element sports-area
                           ${elementsVisible ? 'visible' : ''}
                           ${hoveredItem === area ? 'hovered' : ''}
                           ${selectedItem === area ? 'selected' : ''}`
              }}
              eventHandlers={{
                mouseover: (e) => {
                  handleHover(area);
                },
                mouseout: (e) => {
                  handleHoverOut();
                },
                click: () => handleDeportivoClick(area)
              }}
            >
              <Tooltip 
                sticky 
                className={`sports-tooltip ${hoveredItem === area ? 'visible' : ''}`}
                direction="top"
                offset={[0, -10]}
                opacity={0.9}
              >
                <div className="tooltip-content">
                  <strong>{area.nombre}</strong>
                  <div className="tooltip-details">
                    <span>{area.descripcion}</span>
                  </div>
                </div>
              </Tooltip>
            </Polygon>
          ))}
          
          {/* Polígonos para los edificios - Solo visibles en el mapa general */}
          {currentMapImage === '/assets/images/campus-map.jpg' && edificiosData.map((edificio) => {
            const customColor = getColorByElementType(edificio.tipo);
            return (
              <Polygon
                key={edificio.id}
                positions={edificio.coordenadas as LatLngTuple[]}
                pathOptions={{
                  color: customColor,
                  fillColor: customColor,
                  fillOpacity: selectedItem === edificio ? 0.8 : 
                              hoveredItem === edificio ? 0.7 : 
                              elementsVisible ? 0.2 : 0,
                  // Ocultar bordes por defecto, mostrarlos solo en hover/seleccionado
                  weight: selectedItem === edificio ? 2 : 
                          hoveredItem === edificio ? 1 : 0,
                  className: `map-element building
                            ${elementsVisible ? 'visible' : ''}
                            ${hoveredItem === edificio ? 'hovered' : ''}
                            ${selectedItem === edificio ? 'selected' : ''}`
                }}
                eventHandlers={{
                  mouseover: (e) => {
                    handleHover(edificio);
                  },
                  mouseout: (e) => {
                    handleHoverOut();
                  },
                  click: () => handleEdificioClick(edificio)
                }}
              >
                <Tooltip 
                  sticky 
                  className={`building-tooltip ${hoveredItem === edificio ? 'visible' : ''}`}
                  direction="top"
                  offset={[0, -10]}
                  opacity={0.9}
                >
                  <div className="tooltip-content">
                    <strong>{edificio.nombre}</strong>
                    <div className="tooltip-details">
                      <span className="building-type">{edificio.tipo}</span>
                    </div>
                  </div>
                </Tooltip>
              </Polygon>
            );
          })}

          {/* Polígonos para las áreas verdes - Solo visibles en el mapa general */}
        {currentMapImage === '/assets/images/campus-map.jpg' && 
          areasVerdesupec &&
          areasVerdesupec?.map((area) => (
            <Polygon
              key={area.nombre} // o usa un ID si lo tienes
              positions={area.coordenadas as LatLngTuple[]}
              pathOptions={{
                color: area.color.border,
                fillColor: area.color.fill,
                fillOpacity:
                  selectedItem === area ? 0.8 :
                  hoveredItem === area ? 0.7 :
                  elementsVisible ? 0.2 : 0,
                weight:
                  selectedItem === area ? 2 :
                  hoveredItem === area ? 1 : 0,
                className: `
                  map-element green-area
                  ${elementsVisible ? 'visible' : ''}
                  ${hoveredItem === area ? 'hovered' : ''}
                  ${selectedItem === area ? 'selected' : ''}
                `
              }}
              eventHandlers={{
                mouseover: () => handleHover(area),
                mouseout: handleHoverOut,
                click: () => handleAreaverdeClick(area)
              }}
            >
              <Tooltip
                sticky
                className={`green-tooltip ${hoveredItem === area ? 'visible' : ''}`}
                direction="top"
                offset={[0, -10]}
                opacity={0.9}
              >
                <div className="tooltip-content">
                  <strong>{area.nombre}</strong>
                  <div className="tooltip-details">
                    <span>{area.tipo}</span><br />
                    <span>{area.ubicacion}</span>
                  </div>
                </div>
              </Tooltip>
            </Polygon>
        ))}

        </MapContainer>
        
        

        {/* Mensaje de estado de carga con animación */}
        {!imageLoaded && (
          <div className="map-loader">
            <div className="loader-spinner"></div>
            <span>Cargando mapa interactivo</span>
            <div className="loader-progress-container">
              <div 
                className="loader-progress-bar" 
                style={{ width: '0%' }}
                ref={(el) => {
                  if (el) {
                    // Animación de progreso del 0 al 100%
                    setTimeout(() => {
                      el.style.width = '100%';
                    }, 100);
                  }
                }}
              />
            </div>
          </div>
        )}
        
        {/* Overlay de transición al cerrar el slider */}
        <div 
          className="transition-overlay" 
          ref={overlayRef}
        >
          <span>Volviendo al mapa principal</span>
          <div className="loader-progress-container">
            <div 
              className="loader-progress-bar" 
              ref={progressBarRef}
              style={{ width: '0%' }}
            />
          </div>
        </div>
        
        {/* Notificación de cambio de piso */}
        {showFloorNotice && (
          <div className="floor-change-notice">
            Mostrando: Piso {selectedItem?.pisos[activeFloor]?.numero} - {floorNoticeName}
          </div>
        )}
      </div>
      
      {/* Slider lateral - Ahora se muestra a la derecha */}
      <Slider 
        isOpen={isSliderOpen} 
        onClose={handleCloseSlider} 
        title={selectedItem?.nombre || "Información"}
      >
        {selectedItem ? (
          selectedItemType === 'estacionamiento' ? (
            <EstacionamientoInfoComponent estacionamiento={selectedItem} />
          ) : selectedItemType === 'deportivo' ? (
            <AreaDeportivaInfo area={selectedItem} />
          )  : selectedItemType === 'areasverdes' ? (
            <AreaVerdeIn area={selectedItem} />
          ) : (
            <EdificioInfo 
              edificio={selectedItem} 
              activeFloor={activeFloor} 
              changeFloor={changeFloor} 
            />
          )
        ) : (
          <div className="slider-content-wrapper">
            <p style={{ textAlign: 'center', padding: '2rem', color: '#9D9D9C' }}>
              Selecciona un edificio, estacionamiento o área deportiva para ver su información detallada.
            </p>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default TestMap;