// Archivo: src/components/TestMap.tsx
import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, ZoomControl, Polygon, Tooltip } from 'react-leaflet';
import L, { LatLngBounds, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importaciones de archivos externos
import { estacionamientos, edificiosData, areasDeportivas, areasVerdesupec } from '../data/coordinatesData';
import { 
  BuildingFloorOverlay, 
  EstacionamientoInfoComponent, 
  EdificioInfo, 
  AreaDeportivaInfo,
  AreaVerdeIn,
  EdificiosAreasRenderer // 🔥 NUEVA IMPORTACIÓN UNIVERSAL
} from './mapComponents';
import Slider from './common/Slider/Slider';
import { useSlider } from './SliderContext';

// Importar estilos
import '../styles/mapStyles.css';

const TestMap: React.FC = () => {
  // Dimensiones de la imagen del mapa
  const bounds = new LatLngBounds([0, 0], [7383, 8153]);
  
  // Referencias para la animación
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
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

  // 🔥 ACTUALIZAR LA IMAGEN DEL MAPA - MODIFICADO PARA MÚLTIPLES EDIFICIOS
  useEffect(() => {
    if (selectedItem && selectedItemType === 'edificio' && selectedItem.pisos && selectedItem.pisos[activeFloor]) {
      // Lógica específica para el Edificio 4
      if (selectedItem.id === 'edificio4') {
        const pisoNum = selectedItem.pisos[activeFloor].numero;
        if (pisoNum === 0) {
          setCurrentMapImage('/assets/images/edificio4-plantabaja.jpg');
        } else if (pisoNum === 1) {
          setCurrentMapImage('/assets/images/edificio4-piso1.jpg');
        } else if (pisoNum === 2) {
          setCurrentMapImage('/assets/images/edificio4-piso2.jpg');
        } else {
          setCurrentMapImage('/assets/images/campus-map.jpg');
        }
      }
      // Lógica específica para el Edificio 3
      else if (selectedItem.id === 'edificio3') {
        const pisoNum = selectedItem.pisos[activeFloor].numero;
        if (pisoNum === 0) {
          setCurrentMapImage('/assets/images/edificio3-plantabaja.jpg');
        } else if (pisoNum === 1) {
          setCurrentMapImage('/assets/images/edificio3-piso1.jpg');
        } else if (pisoNum === 2) {
          setCurrentMapImage('/assets/images/edificio3-piso2.jpg');
        } else {
          setCurrentMapImage('/assets/images/campus-map.jpg');
        }
      }
      // Lógica específica para el Edificio 2
      else if (selectedItem.id === 'edificio2') {
        const pisoNum = selectedItem.pisos[activeFloor].numero;
        if (pisoNum === 0) {
          setCurrentMapImage('/assets/images/edificio2-plantabaja.jpg');
        } else if (pisoNum === 1) {
          setCurrentMapImage('/assets/images/edificio2-piso1.jpg');
        } else if (pisoNum === 2) {
          setCurrentMapImage('/assets/images/edificio2-piso2.jpg');
        } else {
          setCurrentMapImage('/assets/images/campus-map.jpg');
        }
      }
      // Lógica específica para el Edificio 1
      else if (selectedItem.id === 'edificio1') {
        const pisoNum = selectedItem.pisos[activeFloor].numero;
        if (pisoNum === 0) {
          setCurrentMapImage('/assets/images/edificio1-plantabaja.jpg');
        } else if (pisoNum === 1) {
          setCurrentMapImage('/assets/images/edificio1-piso1.jpg');
        } else if (pisoNum === 2) {
          setCurrentMapImage('/assets/images/edificio1-piso2.jpg');
        } else {
          setCurrentMapImage('/assets/images/campus-map.jpg');
        }
      }
      // Lógica para otros edificios
      else if (selectedItem.pisos[activeFloor].imagen) {
        setCurrentMapImage(selectedItem.pisos[activeFloor].imagen);
      } else {
        setCurrentMapImage('/assets/images/campus-map.jpg');
      }
    } else {
      // Si no hay elemento seleccionado, mostrar el mapa general
      setCurrentMapImage('/assets/images/campus-map.jpg');
    }
  }, [selectedItem, selectedItemType, activeFloor]);

  // Efecto para mostrar notificación de cambio de piso
  useEffect(() => {
    if (selectedItem && selectedItemType === 'edificio' && selectedItem.pisos && selectedItem.pisos[activeFloor]) {
      setFloorNoticeName(selectedItem.pisos[activeFloor].nombre);
      setShowFloorNotice(true);
      
      // 🔥 NOTIFICACIÓN ESPECIAL PARA EDIFICIOS CON ÁREAS ESPECÍFICAS
      if ((selectedItem.id === 'edificio4' || selectedItem.id === 'edificio3' || selectedItem.id === 'edificio2' || selectedItem.id === 'edificio1')) {
          const edificioNombre = selectedItem.id === 'edificio4'
            ? 'Edificio 4'
            : selectedItem.id === 'edificio3'
            ? 'Edificio 3'
            : selectedItem.id === 'edificio2'
            ? 'Edificio 2'
            : 'Edificio 1';
          setFloorNoticeName(`${edificioNombre} - ${selectedItem.pisos[activeFloor].nombre} - Áreas específicas activas`);
        }
      
      // Ocultar la notificación después de 3 segundos (más tiempo para leer)
      const timer = setTimeout(() => {
        setShowFloorNotice(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [activeFloor, selectedItem, selectedItemType]);

  // Efecto para ajustar el mapa cuando cambia el estado del slider
  useEffect(() => {
    const adjustMap = () => {
      if (!mapContainerRef.current) return;
      
      const leafletContainer = mapContainerRef.current.querySelector('.leaflet-container') as HTMLElement;
      if (!leafletContainer) return;
      
      if (isSliderOpen) {
        // Añadir margen derecho al mapa
        leafletContainer.style.width = 'calc(100% - 380px)';
        leafletContainer.style.marginRight = '380px';
        
        // Actualizar el tamaño del mapa para que se redibuje correctamente
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 300);
      } else {
        // Quitar margen cuando se cierra
        leafletContainer.style.width = '100%';
        leafletContainer.style.marginRight = '0';
        
        // Actualizar el tamaño después de la transición
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 300);
      }
    };
    
    adjustMap();
  }, [isSliderOpen]);

  // Función para seleccionar un estacionamiento
  const handleEstacionamientoClick = (estacionamiento: typeof estacionamientos[0]) => {
    if (isTransitioning) return;
    
    // Actualizamos el elemento seleccionado sin cerrar el panel
    setSelectedItem(estacionamiento);
    setSelectedItemType('estacionamiento');
    
    // Si el slider no está abierto, lo abrimos
    if (!isSliderOpen) {
      setIsSliderOpen(true);
    }
    
    // Actualizar el contexto
    openSlider(estacionamiento, 'estacionamiento');
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
    
    // Actualizamos el elemento seleccionado sin cerrar el panel
    setSelectedItem(edificio);
    setSelectedItemType('edificio');
    setActiveFloor(floorIndex);
    
    // Si el slider no está abierto, lo abrimos
    if (!isSliderOpen) {
      setIsSliderOpen(true);
    }
    
    // Actualizar el contexto
    openSlider(edificio, 'edificio');
  };
  
  // Función para seleccionar un área deportiva
  const handleDeportivoClick = (area: typeof areasDeportivas[0]) => {
    if (isTransitioning) return;
    
    setSelectedItem(area);
    setSelectedItemType('deportivo');
    
    // Cambiar al plano si existe
    if (area.plano) {
      setCurrentMapImage(area.plano);
    } else {
      setCurrentMapImage('/assets/images/campus-map.jpg');
    }
    
    if (!isSliderOpen) {
      setIsSliderOpen(true);
    }
    
    openSlider(area, { type: 'deportivo' });
  };

  // Función para seleccionar un área verde
  const handleAreaverdeClick = (area: typeof areasVerdesupec[0]) => {
    if (isTransitioning) return;
    
    // Actualizamos el elemento seleccionado sin cerrar el panel
    setSelectedItem(area);
    setSelectedItemType('areasverdes');
    
    // Si el slider no está abierto, lo abrimos
    if (!isSliderOpen) {
      setIsSliderOpen(true);
    }
    
    // Actualizar el contexto
    openSlider(area, 'areasverdes');
  };

  // 🔥 NUEVA FUNCIÓN PARA MANEJAR CLICK EN ÁREAS ESPECÍFICAS
  const handleEdificioAreaClick = (area: any) => {
    console.log('Área específica seleccionada:', area.nombre);
    // Aquí puedes añadir lógica adicional, como mostrar información específica del área
    // Por ejemplo, podrías abrir un modal o actualizar el slider con información específica
    
    // Ejemplo: mostrar alert con información del área
    let mensaje = `📍 ${area.nombre}\n`;
    mensaje += `🏷️ Categoría: ${area.categoria}\n`;
    if (area.direccion) {
      mensaje += `👤 Director: ${area.direccion}\n`;
    }
    alert(mensaje);
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

  // 🔥 FUNCIÓN HELPER PARA DETERMINAR SI MOSTRAR ÁREAS ESPECÍFICAS
  const shouldShowEspecificAreas = () => {
    return selectedItem && 
           (selectedItem.id === 'edificio4' || selectedItem.id === 'edificio3' || selectedItem.id === 'edificio1' || selectedItem.id === 'edificio2') && 
           selectedItemType === 'edificio';
  };

  return (
    <div className="map-test-container" ref={mapContainerRef}>
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
          <BuildingFloorOverlay 
            floorImage={currentMapImage} 
            bounds={bounds} 
            isBuilding={selectedItemType === 'edificio' && currentMapImage !== '/assets/images/campus-map.jpg'}
          />

          {/* 🔥 COMPONENTE UNIVERSAL PARA ÁREAS ESPECÍFICAS DE EDIFICIOS */}
          <EdificiosAreasRenderer
            edificioId={selectedItem?.id || ''}
            activeFloor={activeFloor}
            onAreaClick={handleEdificioAreaClick}
          />

          {/* Polígonos para los estacionamientos - Siempre visibles */}
          {estacionamientos &&
            estacionamientos.map((est) => {
              const isSelected = selectedItem?.nombre === est.nombre;
              const isHovered = hoveredItem?.nombre === est.nombre;

              return (
                <Polygon
                  key={est.nombre}
                  positions={est.coordenadas as LatLngTuple[]}
                  pathOptions={{
                    color: isSelected || isHovered ? 'rgba(249, 249, 249, 0)': 'transparent', // Borde gris visible solo en hover/selección
                    fillColor: 'rgba(255, 250, 104, 0.55)', // Color de relleno siempre el mismo
                    fillOpacity: isSelected ? 0.7 : isHovered ? 0.15: 0.08, // Muy transparente siempre
                    weight: isSelected ? 2 : isHovered ? 1.5 : 1 // Grosor del borde
                  }}
                  eventHandlers={{
                    mouseover: () => handleHover(est),
                    mouseout: () => handleHoverOut(),
                    click: () => handleEstacionamientoClick(est)
                  }}
                >
                  <Tooltip
                    sticky
                    className={`parking-tooltip ${isHovered ? 'visible' : ''}`}
                    direction="top"
                    offset={[0, -10]}
                    opacity={0.9}
                  >
                    <div className="tooltip-content">
                      <strong>{est.nombre}</strong>
                      <div className="tooltip-details">
                        <span>Capacidad: {est.capacidad} vehículos</span>
                      </div>
                    </div>
                  </Tooltip>
                </Polygon>
              );
            })}   
          
          {/* Polígonos para las áreas deportivas - Siempre visibles */}
          {areasDeportivas && areasDeportivas.map((area) => (
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
                mouseover: () => {
                  handleHover(area);
                },
                mouseout: () => {
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
          
          {/* Polígonos para los edificios - Siempre visibles */}
          {edificiosData.map((edificio) => {
            const customColor = getColorByElementType(edificio.tipo);
            
            // 🔥 OCULTAR EL POLÍGONO DEL EDIFICIO CUANDO ESTAMOS VIENDO SU PLANO INTERNO
            const isShowingInternalFloor = selectedItem === edificio && 
                                         selectedItemType === 'edificio' && 
                                         currentMapImage !== '/assets/images/campus-map.jpg';
            
            return (
              <Polygon
                key={edificio.id}
                positions={edificio.coordenadas as LatLngTuple[]}
                pathOptions={{
                  color: customColor,
                  fillColor: customColor,
                  // 🔥 Si estamos mostrando el plano interno, ocultar completamente el polígono
                  fillOpacity: isShowingInternalFloor ? 0 : 
                              selectedItem === edificio ? 0.8 : 
                              hoveredItem === edificio ? 0.7 : 
                              elementsVisible ? 0.2 : 0,
                  // 🔥 También ocultar el borde cuando mostramos el plano interno
                  weight: isShowingInternalFloor ? 0 :
                          selectedItem === edificio ? 2 : 
                          hoveredItem === edificio ? 1 : 0,
                  className: `map-element building
                            ${elementsVisible ? 'visible' : ''}
                            ${hoveredItem === edificio ? 'hovered' : ''}
                            ${selectedItem === edificio ? 'selected' : ''}
                            ${isShowingInternalFloor ? 'hidden-internal' : ''}`
                }}
                eventHandlers={{
                  mouseover: () => {
                    // 🔥 No mostrar hover si estamos en vista interna
                    if (!isShowingInternalFloor) {
                      handleHover(edificio);
                    }
                  },
                  mouseout: () => {
                    if (!isShowingInternalFloor) {
                      handleHoverOut();
                    }
                  },
                  click: () => handleEdificioClick(edificio)
                }}
              >
                {/* 🔥 Solo mostrar tooltip si no estamos en vista interna */}
                {!isShowingInternalFloor && (
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
                )}
              </Polygon>
            );
          })}

          {/* Polígonos para las áreas verdes - Siempre visibles */}
          {areasVerdesupec &&
            areasVerdesupec.map((area) => {
              const isSelected = selectedItem?.nombre === area.nombre;
              const isHovered = hoveredItem?.nombre === area.nombre;

              return (
                <Polygon
                  key={area.nombre}
                  positions={area.coordenadas as LatLngTuple[][]}
                  pathOptions={{
                    color: isSelected ? '#00aa00' : area.color.border,
                    fillColor: isSelected ? '#66ff66' : area.color.fill,
                    fillOpacity: isSelected ? 0.8 : isHovered ? 0.7 : elementsVisible ? 0.2 : 0,
                    weight: isSelected ? 2 : isHovered ? 1 : 0
                  }}
                  eventHandlers={{
                    mouseover: () => handleHover(area),
                    mouseout: () => handleHoverOut(),
                    click: () => handleAreaverdeClick(area)
                  }}
                >
                  <Tooltip
                    sticky
                    className={`greenarea-tooltip ${isHovered ? 'visible' : ''}`}
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
              );
            })}

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

        {/* 🔥 NOTIFICACIÓN MEJORADA DE CAMBIO DE PISO */}
        {showFloorNotice && (
          <div className="floor-change-notice" style={{
            backgroundColor: shouldShowEspecificAreas() ? '#e8f5e8' : undefined,
            border: shouldShowEspecificAreas() ? '2px solid #4caf50' : undefined,
            color: shouldShowEspecificAreas() ? '#2e7d32' : undefined
          }}>
            {shouldShowEspecificAreas() ? (
              <>
                <span style={{ fontSize: '16px', marginRight: '8px' }}>✨</span>
                Mostrando: {floorNoticeName}
                <div style={{ fontSize: '12px', marginTop: '4px' }}>
                  Áreas específicas activas - Haz clic en ellas
                </div>
              </>
            ) : (
              <>Mostrando: Piso {selectedItem?.pisos[activeFloor]?.numero} - {floorNoticeName}</>
            )}
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
          ) : selectedItemType === 'areasverdes' ? (
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
