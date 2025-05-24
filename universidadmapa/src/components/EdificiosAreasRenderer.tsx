// Archivo: src/components/EdificiosAreasRenderer.tsx
import React from 'react';
import { Polygon, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { getAreasEspecificas, type AreaEspecifica } from '../data/edificiosEspecificos';

interface EdificiosAreasRendererProps {
  edificioId: string;
  activeFloor: number;
  onAreaClick?: (area: AreaEspecifica) => void;
}

// Función para obtener el centro de un polígono
const getCentroPoligono = (coordenadas: number[][]): [number, number] => {
  const sumX = coordenadas.reduce((sum, [x]) => sum + x, 0);
  const sumY = coordenadas.reduce((sum, [, y]) => sum + y, 0);
  return [sumX / coordenadas.length, sumY / coordenadas.length];
};

// Crear icono personalizado
const createCustomIcon = (icono: string, borderColor: string) => {
  return L.divIcon({
    html: `
      <div style="
        background-color: white;
        border: 2px solid ${borderColor};
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        font-family: Arial, sans-serif;
        font-weight: bold;
      ">
        ${icono}
      </div>
    `,
    className: 'custom-area-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
};

const EdificiosAreasRenderer: React.FC<EdificiosAreasRendererProps> = ({
  edificioId,
  activeFloor,
  onAreaClick
}) => {
  // Obtener las áreas específicas para el edificio y piso actual
  const areas = getAreasEspecificas(edificioId, activeFloor);
  
  // Si no hay áreas definidas para este edificio y piso, no renderizar nada
  if (!areas || areas.length === 0) {
    return null;
  }

  return (
    <>
      {areas.map((area) => {
        const centro = getCentroPoligono(area.coordenadas);
        
        return (
          <React.Fragment key={area.id}>
            {/* Polígono del área */}
            <Polygon
              positions={area.coordenadas as [number, number][]}
              pathOptions={{
                color: area.color.border,
                fillColor: area.color.fill,
                fillOpacity: 0.6,
                weight: 2,
                opacity: 0.8
              }}
              eventHandlers={{
                click: () => {
                  if (onAreaClick) {
                    onAreaClick(area);
                  }
                  console.log(`Clicked on: ${area.nombre}`);
                }
              }}
            >
              <Tooltip 
                direction="top" 
                offset={[0, -10]} 
                opacity={1} 
                permanent={false}
                className="area-tooltip"
              >
                <div style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  padding: '6px 10px',
                  maxWidth: '140px'
                }}>
                  <div style={{ fontSize: '16px', marginBottom: '3px' }}>
                    {area.icono}
                  </div>
                  <div style={{ fontSize: '12px', 
                    lineHeight: '1.3', 
                    marginBottom: '3px',
                    whiteSpace: 'pre-line',
                    wordBreak: 'normal',
                    overflowWrap: 'break-word',
                    maxWidth: '160px',
                    minWidth: '120px',
                    maxHeight: '100px',
                    overflow: 'auto',
                    textAlign: 'center'}}>
                    {area.nombre}
                  </div>
                  {area.direccion && (
                    <div style={{ 
                      fontSize: '10px', 
                      color: '#666',
                      marginTop: '2px',
                      fontStyle: 'italic'
                    }}>
                      {area.direccion}
                    </div>
                  )}
                  <div style={{ 
                    fontSize: '9px', 
                    color: '#888',
                    marginTop: '2px',
                    textTransform: 'uppercase'
                  }}>
                    {area.categoria}
                  </div>
                </div>
              </Tooltip>
            </Polygon>

            {/* Marcador en el centro del área */}
            <Marker
              position={centro}
              icon={createCustomIcon(area.icono, area.color.border)}
              eventHandlers={{
                click: () => {
                  if (onAreaClick) {
                    onAreaClick(area);
                  }
                  console.log(`Marker clicked: ${area.nombre}`);
                }
              }}
            >
              <Tooltip 
                direction="top" 
                offset={[0, -25]} 
                opacity={1}
                className="marker-tooltip"
              >
                <div style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  padding: '8px 12px',
                  maxWidth: '160px'
                }}>
                  <div style={{ fontSize: '18px', marginBottom: '4px' }}>
                    {area.icono}
                  </div>
                  <div style={{ 
                    fontSize: '13px', 
                    lineHeight: '1.3', 
                    marginBottom: '3px',
                    whiteSpace: 'pre-line',
                    wordBreak: 'normal',
                    overflowWrap: 'break-word',
                    maxWidth: '160px',
                    minWidth: '120px',
                    maxHeight: '100px',
                    overflow: 'auto',
                    textAlign: 'center'  }}>
                    {area.nombre}
                  </div>
                  {area.direccion && (
                    <div style={{ 
                      fontSize: '11px', 
                      color: '#555',
                      marginTop: '3px',
                      fontStyle: 'italic',
                      borderTop: '1px solid #eee',
                      paddingTop: '3px'
                    }}>
                      <strong>Director:</strong><br />
                      {area.direccion}
                    </div>
                  )}
                  <div style={{ 
                    fontSize: '10px', 
                    color: '#777',
                    marginTop: '3px',
                    textTransform: 'uppercase',
                    fontWeight: 'normal'
                  }}>
                    {area.categoria}
                  </div>
                </div>
              </Tooltip>
            </Marker>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default EdificiosAreasRenderer;