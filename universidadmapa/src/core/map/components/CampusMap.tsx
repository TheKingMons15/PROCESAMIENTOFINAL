import React, { useEffect, useState } from 'react';
import { MapContainer, ImageOverlay, Polygon, Tooltip, useMap, ZoomControl } from 'react-leaflet';
import L, { LatLngBounds, LatLngTuple } from 'leaflet';
import { useMap as useMapContext } from '../context/MapContext';
import { useSlider } from '../../../core/slider/context/SliderContext';
import { Building, GeoCoordinate, MapEventType } from '../../../types';
import 'leaflet/dist/leaflet.css';


// Componente para ajustar la vista del mapa cuando cambian las coordenadas
const MapViewUpdater = ({ center, zoom }: { center: GeoCoordinate; zoom: number }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView([center.lat, center.lng], zoom);
  }, [map, center, zoom]);
  
  return null;
};

// Define los límites del mapa para la imagen personalizada
// Ajustado para reflejar las dimensiones reales de la imagen
const CAMPUS_BOUNDS: LatLngBounds = new LatLngBounds(
  [0, 0],           // Esquina superior izquierda
  [7383, 8153]      // Esquina inferior derecha - dimensiones reales de la imagen
);

// Componente para el polígono del edificio
interface BuildingPolygonProps {
  building: Building;
}

const BuildingPolygon: React.FC<BuildingPolygonProps> = ({ building }) => {
  const { handleMapEvent, highlightedBuilding, selectedBuilding } = useMapContext();
  const { openSlider } = useSlider();
  const [isHovered, setIsHovered] = useState(false);

  // Convertir coordenadas al formato de Leaflet
  const positions: LatLngTuple[] = building.coordinates.map(coord => [coord.lat, coord.lng]);

  // Determinar estilos basados en el estado
  const isHighlighted = highlightedBuilding?.id === building.id;
  const isSelected = selectedBuilding?.id === building.id;
  
  // Color base del edificio o el predeterminado
  const baseColor = building.color || '#27ae60';

  // Estilos para el polígono basado en su estado
  const polygonOptions = {
    color: isSelected ? '#f1c40f' : isHighlighted || isHovered ? '#2ecc71' : baseColor,
    fillColor: isSelected ? '#f1c40f' : isHighlighted || isHovered ? '#2ecc71' : baseColor,
    fillOpacity: isSelected ? 0.7 : isHighlighted || isHovered ? 0.6 : 0.4,
    weight: isSelected || isHighlighted ? 3 : 1,
  };

  // Manejadores de eventos
  const handleMouseOver = () => {
    setIsHovered(true);
    handleMapEvent({
      type: MapEventType.HOVER,
      buildingId: building.id,
      coordinates: building.center,
    });
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    handleMapEvent({
      type: MapEventType.LEAVE,
      buildingId: building.id,
      coordinates: building.center,
    });
  };

  const handleClick = () => {
    handleMapEvent({
      type: MapEventType.CLICK,
      buildingId: building.id,
      coordinates: building.center,
    });

    // Abrir el slider con la información del edificio
    openSlider(building, {
      title: building.name,
      description: building.description,
    });
  };

  return (
    <Polygon
      positions={positions}
      pathOptions={polygonOptions}
      eventHandlers={{
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
        click: handleClick,
      }}
    >
      <Tooltip sticky>{building.name}</Tooltip>
    </Polygon>
  );
};

interface CampusMapProps {
  initialZoom?: number;
}

const CampusMap: React.FC<CampusMapProps> = ({
  initialZoom = 0, // Reducido para ajustarse a la imagen grande
}) => {
  const { buildings, mapCenter, mapZoom } = useMapContext();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Punto central del mapa
  const center: LatLngTuple = [mapCenter.lat, mapCenter.lng];
  
  // Verificar si la imagen se carga correctamente
  useEffect(() => {
    console.log("Intentando cargar la imagen del mapa...");
    const img = new Image();
    img.onload = () => {
      console.log("¡Imagen cargada correctamente! Dimensiones:", img.width, "x", img.height);
      setImageLoaded(true);
    };
    img.onerror = (error) => {
      console.error("Error cargando la imagen del mapa:", error);
    };
    img.src = '/assets/images/campus-map.jpg';
  }, []);

  // Estilos modernos
  const modernStyles = `
    /* Configuración de fuente OSCINE */
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    
    .map-container {
      width: 100%;
      height: 100%;
      position: relative;
      font-family: 'OSCINE', 'Open Sans', sans-serif;
      --primary-color: #27ae60;
      --accent-color: #3498db;
      --light-gray: #f8f9fa;
      --text-color: #333;
      --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      --transition: all 0.3s ease;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: var(--transition);
    }
    
    .map-container * {
      box-sizing: border-box;
    }
    
    .map-container:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    
    /* Personalizar controles de Leaflet */
    .map-container .leaflet-control-zoom {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }
    
    .map-container .leaflet-control-zoom a {
      background-color: white;
      color: var(--text-color);
      transition: var(--transition);
    }
    
    .map-container .leaflet-control-zoom a:hover {
      background-color: var(--primary-color);
      color: white;
    }
    
    /* Tooltip personalizado */
    .map-container .leaflet-tooltip {
      background-color: white;
      border: none;
      box-shadow: var(--shadow);
      border-radius: 8px;
      font-family: 'OSCINE', 'Open Sans', sans-serif;
      font-weight: 600;
      padding: 8px 12px;
    }
    
    /* Loader */
    .map-loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1.2rem 2rem;
      background-color: white;
      border-radius: 12px;
      box-shadow: var(--shadow);
      z-index: 1000;
      color: var(--text-color);
      font-weight: 600;
      display: flex;
      align-items: center;
      animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
      0% { opacity: 0.8; }
      50% { opacity: 1; }
      100% { opacity: 0.8; }
    }
    
    .map-loader:before {
      content: '';
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-right: 12px;
      border: 3px solid var(--primary-color);
      border-radius: 50%;
      border-top-color: transparent;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;

  console.log("Renderizando CampusMap con:", {
    buildings: buildings?.length,
    mapCenter,
    center,
    mapZoom,
    initialZoom
  });

  return (
    <div className="map-container">
      {/* Añadir los estilos modernos */}
      <style>{modernStyles}</style>
      
      <MapContainer
        center={center}
        zoom={initialZoom}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false} // Desactivamos para colocarlo en una posición mejor
        crs={L.CRS.Simple} // Sistema de coordenadas simple para trabajar con imágenes
        maxBounds={CAMPUS_BOUNDS}
        maxBoundsViscosity={1.0} // Evita que el usuario se desplace fuera de los límites
        minZoom={-2} // Permitir suficiente zoom out para ver la imagen completa
        maxZoom={2}  // Limitar el zoom máximo para evitar pixelación
      >
        {/* Control de zoom en mejor posición */}
        <ZoomControl position="bottomright" />
        
        {/* Actualizador de vista cuando cambia el centro o zoom */}
        <MapViewUpdater center={mapCenter} zoom={mapZoom} />
        
        {/* Imagen personalizada del campus como capa base */}
        <ImageOverlay
          url="/assets/images/campus-map.jpg" // CORREGIDO: Ruta correcta sin el punto
          bounds={CAMPUS_BOUNDS}
        />
        
        {/* Renderizar edificios */}
        {buildings && buildings.map((building) => (
          <BuildingPolygon key={building.id} building={building} />
        ))}
      </MapContainer>
      
      {/* Mensaje de estado de carga con animación */}
      {!imageLoaded && (
        <div className="map-loader">
          Cargando mapa del campus
        </div>
      )}
    </div>
  );
};

export default CampusMap;