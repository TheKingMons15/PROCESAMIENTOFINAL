// Guarda este archivo como src/utils/mapCoordinatesHelper.tsx

import React, { useEffect, useRef } from 'react';
import { MapContainer, ImageOverlay, useMapEvents } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';

// Componente auxiliar para capturar clics y obtener coordenadas
const CoordinateLogger = () => {
  useMapEvents({
    click: (e) => {
      // Mostrar en consola las coordenadas donde se hizo clic
      console.log(`Coordenadas: { lat: ${e.latlng.lat.toFixed(6)}, lng: ${e.latlng.lng.toFixed(6)} },`);
    },
    contextmenu: (e) => {
      // Alternativa: mostrar un mensaje con las coordenadas
      alert(`Coordenadas: { lat: ${e.latlng.lat.toFixed(6)}, lng: ${e.latlng.lng.toFixed(6)} }`);
    }
  });
  return null;
};

// Límites del mapa (ajusta según tu imagen)
const MAP_BOUNDS = new LatLngBounds(
  [0, 0],           // Esquina superior izquierda
  [1000, 1000]      // Esquina inferior derecha (usar valores grandes para abarcar toda la imagen)
);

// Componente para ayudar a obtener coordenadas
const CoordinateHelper: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h2 style={{ 
        position: 'absolute', 
        top: '10px', 
        left: '10px', 
        zIndex: 1000, 
        backgroundColor: 'white', 
        padding: '10px',
        borderRadius: '5px'
      }}>
        Haz clic en el mapa para obtener coordenadas (ver consola o clic derecho)
      </h2>
      
      <MapContainer
        center={[500, 500]}
        zoom={0}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        crs={L.CRS.Simple}  // Sistema de coordenadas simple
      >
        <ImageOverlay
          url="/assets/images/campus-map.jpg" // Asegúrate de que la imagen esté en esta ruta
          bounds={MAP_BOUNDS}
        />
        <CoordinateLogger />
      </MapContainer>
    </div>
  );
};

export default CoordinateHelper;

// INSTRUCCIONES DE USO:
// 1. Importa este componente en una ruta temporal: 
//    En src/App.tsx agrega una ruta:
//    <Route path="/coordinates" element={<CoordinateHelper />} />
// 2. Navega a /coordinates en tu aplicación
// 3. Haz clic en los vértices de cada edificio para obtener sus coordenadas
// 4. Copia las coordenadas desde la consola y úsalas en buildingData.ts
// 5. Una vez terminado, elimina la ruta temporal