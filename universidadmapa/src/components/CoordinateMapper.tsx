// Archivo: src/components/CoordinateMapper.tsx
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, ImageOverlay, useMapEvents, Polygon, Marker, Tooltip } from 'react-leaflet';
import L, { LatLngBounds, LatLngTuple, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Estilos para el modo editor
const styles = `
.coordinate-mapper {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.map-container {
  flex-grow: 1;
  position: relative;
}

.controls-panel {
  padding: 15px;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.action-btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.primary-btn {
  background-color: #3498db;
  color: white;
}

.primary-btn:hover {
  background-color: #2980b9;
}

.danger-btn {
  background-color: #e74c3c;
  color: white;
}

.danger-btn:hover {
  background-color: #c0392b;
}

.success-btn {
  background-color: #2ecc71;
  color: white;
}

.success-btn:hover {
  background-color: #27ae60;
}

.default-btn {
  background-color: #95a5a6;
  color: white;
}

.default-btn:hover {
  background-color: #7f8c8d;
}

.coordinates-display {
  margin-top: 15px;
  font-family: monospace;
  white-space: pre-wrap;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.mode-indicator {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: 600;
}

.notification {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  z-index: 1000;
  animation: fadeOut 3s forwards;
}

@keyframes fadeOut {
  0% { opacity: 1; }
  70% { opacity: 1; }
  100% { opacity: 0; }
}
`;

// Componente para capturar clics en el mapa
const CoordinateCapture = ({ 
  addPoint, 
  mode, 
  setMode, 
  clearPoints, 
  completePolygon 
}: { 
  addPoint: (coord: LatLngTuple) => void,
  mode: 'point' | 'polygon' | 'view',
  setMode: (mode: 'point' | 'polygon' | 'view') => void,
  clearPoints: () => void,
  completePolygon: () => void
}) => {
  const [notification, setNotification] = useState<string | null>(null);
  
  const map = useMapEvents({
    click: (e) => {
      if (mode === 'view') return;
      
      const { lat, lng } = e.latlng;
      addPoint([lat, lng]);
      
      setNotification(`Añadido punto: [${Math.round(lat)}, ${Math.round(lng)}]`);
      setTimeout(() => setNotification(null), 3000);
    },
    keydown: (e) => {
      // Tecla Escape para cancelar
      if (e.originalEvent.key === 'Escape') {
        clearPoints();
        setNotification('Puntos borrados');
        setTimeout(() => setNotification(null), 3000);
      }
      
      // Tecla Enter para completar polígono
      if (e.originalEvent.key === 'Enter' && mode === 'polygon') {
        completePolygon();
        setNotification('Polígono completado');
        setTimeout(() => setNotification(null), 3000);
      }
    }
  });
  
  useEffect(() => {
    // Hacemos que el mapa pueda recibir eventos de teclado
    map.getContainer().focus();
  }, [map]);
  
  return (
    <>
      <div className="mode-indicator">
        Modo: {mode === 'point' ? 'Puntos' : mode === 'polygon' ? 'Polígono' : 'Visualización'}
      </div>
      {notification && (
        <div className="notification">{notification}</div>
      )}
    </>
  );
};

// Componente principal
const CoordinateMapper: React.FC = () => {
  const [points, setPoints] = useState<LatLngTuple[]>([]);
  const [polygons, setPolygons] = useState<LatLngTuple[][]>([]);
  const [mode, setMode] = useState<'point' | 'polygon' | 'view'>('point');
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Límites del mapa basados en el tamaño de la imagen
  const bounds = new LatLngBounds([0, 0], [7383, 8153]);
  
  // Personalizar icono del marcador
  const markerIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  // Verificar si la imagen se carga correctamente
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      console.log("Imagen cargada correctamente. Dimensiones:", img.width, "x", img.height);
      setImageLoaded(true);
    };
    img.onerror = (error) => {
      console.error("Error cargando la imagen:", error);
    };
    img.src = '/assets/images/campus-map.jpg';
  }, []);
  
  // Funciones para manipular puntos y polígonos
  const addPoint = (coord: LatLngTuple) => {
    if (mode === 'point') {
      setPoints(prev => [...prev, coord]);
    } else if (mode === 'polygon') {
      setPoints(prev => [...prev, coord]);
    }
  };
  
  const clearPoints = () => {
    setPoints([]);
  };
  
  const completePolygon = () => {
    if (points.length >= 3) {
      setPolygons(prev => [...prev, [...points]]);
      setPoints([]);
    }
  };
  
  const clearAll = () => {
    setPoints([]);
    setPolygons([]);
  };
  
  // Generar formato de código para coordenadas
  const generateCode = () => {
    let code = "";
    
    if (points.length > 0) {
      code += "// Puntos individuales\n";
      code += "const points = [\n";
      points.forEach((point, index) => {
        code += `  [${Math.round(point[0])}, ${Math.round(point[1])}]${index < points.length - 1 ? ',' : ''}\n`;
      });
      code += "];\n\n";
    }
    
    if (polygons.length > 0) {
      code += "// Polígonos\n";
      code += "const polygons = [\n";
      polygons.forEach((polygon, pIndex) => {
        code += "  [\n";
        polygon.forEach((point, index) => {
          code += `    [${Math.round(point[0])}, ${Math.round(point[1])}]${index < polygon.length - 1 ? ',' : ''}\n`;
        });
        code += `  ]${pIndex < polygons.length - 1 ? ',' : ''}\n`;
      });
      code += "];\n";
    }
    
    return code;
  };
  
  // Copiar al portapapeles
  const copyToClipboard = () => {
    const code = generateCode();
    navigator.clipboard.writeText(code)
      .then(() => {
        alert('Coordenadas copiadas al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar: ', err);
      });
  };
  
  return (
    <div className="coordinate-mapper">
      <style>{styles}</style>
      
      <div className="map-container">
        <MapContainer
          center={[3691, 4076]}
          zoom={-1}
          style={{ height: '100%', width: '100%' }}
          crs={L.CRS.Simple}
          maxBounds={bounds}
          minZoom={-2}
          maxZoom={2}
        >
          <ImageOverlay
            url="/assets/images/campus-map.jpg"
            bounds={bounds}
          />
          
          <CoordinateCapture 
            addPoint={addPoint} 
            mode={mode} 
            setMode={setMode} 
            clearPoints={clearPoints}
            completePolygon={completePolygon}
          />
          
          {/* Mostrar los puntos actuales */}
          {points.map((point, index) => (
            <Marker 
              key={`point-${index}`} 
              position={point}
              icon={markerIcon}
            >
              <Tooltip permanent>
                {index + 1}: [{Math.round(point[0])}, {Math.round(point[1])}]
              </Tooltip>
            </Marker>
          ))}
          
          {/* Mostrar línea que une los puntos del polígono actual */}
          {mode === 'polygon' && points.length > 1 && (
            <Polygon 
              positions={points} 
              pathOptions={{ 
                color: 'blue', 
                weight: 2, 
                opacity: 0.7, 
                fill: false,
                dashArray: '5, 5' 
              }} 
            />
          )}
          
          {/* Mostrar polígonos completados */}
          {polygons.map((polygon, index) => (
            <Polygon 
              key={`polygon-${index}`} 
              positions={polygon} 
              pathOptions={{ 
                color: '#3498db', 
                weight: 2, 
                fillColor: '#3498db', 
                fillOpacity: 0.3 
              }}
            >
              <Tooltip>Polígono {index + 1}</Tooltip>
            </Polygon>
          ))}
        </MapContainer>
      </div>
      
      <div className="controls-panel">
        <div className="button-group">
          <button 
            className={`action-btn ${mode === 'point' ? 'primary-btn' : 'default-btn'}`}
            onClick={() => setMode('point')}
          >
            Modo Puntos
          </button>
          <button 
            className={`action-btn ${mode === 'polygon' ? 'primary-btn' : 'default-btn'}`}
            onClick={() => setMode('polygon')}
          >
            Modo Polígono
          </button>
          <button 
            className={`action-btn ${mode === 'view' ? 'primary-btn' : 'default-btn'}`}
            onClick={() => setMode('view')}
          >
            Modo Visualización
          </button>
        </div>
        
        <div className="button-group">
          <button 
            className="action-btn danger-btn" 
            onClick={clearPoints}
          >
            Borrar Puntos
          </button>
          {mode === 'polygon' && (
            <button 
              className="action-btn success-btn" 
              onClick={completePolygon}
              disabled={points.length < 3}
            >
              Completar Polígono
            </button>
          )}
          <button 
            className="action-btn danger-btn" 
            onClick={clearAll}
          >
            Borrar Todo
          </button>
          <button 
            className="action-btn primary-btn" 
            onClick={copyToClipboard}
            disabled={points.length === 0 && polygons.length === 0}
          >
            Copiar Coordenadas
          </button>
        </div>
        
        <div className="coordinates-display">
          {generateCode() || "No hay coordenadas para mostrar. Haz clic en el mapa para añadir puntos."}
        </div>
      </div>
    </div>
  );
};

export default CoordinateMapper;