// Archivo: src/components/Edificio4AreasRenderer.tsx
import React from 'react';
import { Polygon, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';

// Datos específicos del Edificio 4 - Planta Baja
const areasEdificio4PlantaBaja = [
  {
    id: 'sala-docentes-computacion',
    nombre: 'Sala Docentes Computación',
    tipo: 'polygon',
    coordenadas: [
      [4693, 7228], [4651, 7280], [4770, 7410], [4705, 7472],
      [4658, 7458], [4475, 7271], [4465, 7230], [4593, 7103]
    ],
    icono: '👨‍💻',
    color: { fill: 'rgba(52, 152, 219, 0.3)', border: '#3498db' }
  },
  {
    id: 'decanato',
    nombre: 'Decanato',
    tipo: 'polygon',
    coordenadas: [
      [4492, 6974], [4617, 7099], [4483, 7223], [4360, 7108]
    ],
    icono: '🏛️',
    color: { fill: 'rgba(155, 89, 182, 0.3)', border: '#9b59b6' }
  },
  {
    id: 'sala-docentes-turismo',
    nombre: 'Sala Docentes Turismo',
    tipo: 'polygon',
    coordenadas: [
      [4255, 7452], [4304, 7397], [4367, 7334], [4356, 7320],
      [4360, 7297], [4356, 7289], [4380, 7266], [4399, 7244],
      [4299, 7137], [4272, 7171], [4263, 7206], [4209, 7261], [4147, 7327]
    ],
    icono: '🏖️',
    color: { fill: 'rgba(46, 204, 113, 0.3)', border: '#2ecc71' }
  },
  {
    id: 'datalab',
    nombre: 'SMART DATA LAB',
    tipo: 'polygon',
    coordenadas: [
      [4429, 7307], [4371, 7323], [4273, 7428], [4377, 7547], [4519, 7408]
    ],
    icono: '🔬',
    color: { fill: 'rgba(231, 76, 60, 0.3)', border: '#e74c3c' }
  },
  {
    id: 'laboratorio-redes',
    nombre: 'Laboratorio de Redes',
    tipo: 'polygon',
    coordenadas: [
      [4525, 7412], [4379, 7546], [4476, 7671], [4596, 7571], [4602, 7505]
    ],
    icono: '🌐',
    color: { fill: 'rgba(241, 196, 15, 0.3)', border: '#f1c40f' }
  },
  {
    id: 'observatorio-turismo',
    nombre: 'Observatorio Turismo',
    tipo: 'polygon',
    coordenadas: [
      [4599, 7564], [4703, 7573], [4703, 7691], [4571, 7803], [4479, 7674]
    ],
    icono: '🔭',
    color: { fill: 'rgba(230, 126, 34, 0.3)', border: '#e67e22' }
  },
  {
    id: 'secretaria-planta-baja',
    nombre: 'Secretaría Planta Baja',
    tipo: 'polygon',
    coordenadas: [
      [5328, 7711], [5229, 7587], [5110, 7587], [5101, 7710], [5210, 7830]
    ],
    icono: '📝',
    color: { fill: 'rgba(142, 68, 173, 0.3)', border: '#8e44ad' }
  },
  {
    id: 'aula-1',
    nombre: 'Aula 1',
    tipo: 'polygon',
    coordenadas: [
      [5312, 7446], [5453, 7600], [5334, 7709], [5224, 7589], [5224, 7530]
    ],
    icono: '🏫',
    color: { fill: 'rgba(52, 73, 94, 0.3)', border: '#34495e' }
  },
  {
    id: 'aula-2',
    nombre: 'Aula 2',
    tipo: 'polygon',
    coordenadas: [
      [5437, 7362], [5402, 7363], [5309, 7448], [5452, 7607], [5564, 7493]
    ],
    icono: '🏫',
    color: { fill: 'rgba(52, 73, 94, 0.3)', border: '#34495e' }
  },
  {
    id: 'aula-3',
    nombre: 'Aula 3',
    tipo: 'polygon',
    coordenadas: [
      [5578, 7273], [5468, 7358], [5474, 7388], [5583, 7521], [5697, 7411]
    ],
    icono: '🏫',
    color: { fill: 'rgba(52, 73, 94, 0.3)', border: '#34495e' }
  },
  {
    id: 'sala-docentes-agropecuaria',
    nombre: 'Sala Docentes Agropecuaria',
    tipo: 'polygon',
    coordenadas: [
      [5339, 7008], [5474, 7165], [5498, 7157], [5537, 7195],
      [5429, 7290], [5378, 7238], [5350, 7261], [5209, 7122]
    ],
    icono: '🌾',
    color: { fill: 'rgba(39, 174, 96, 0.3)', border: '#27ae60' }
  },
  {
    id: 'aula-computacion',
    nombre: 'Aula Computación',
    tipo: 'polygon',
    coordenadas: [
      [5231, 7137], [5367, 7277], [5355, 7318], [5267, 7397], [5116, 7241]
    ],
    icono: '💻',
    color: { fill: 'rgba(41, 128, 185, 0.3)', border: '#2980b9' }
  },
  {
    id: 'oficina',
    nombre: 'Oficina',
    tipo: 'polygon',
    coordenadas: [
      [5117, 7243], [5257, 7400], [5170, 7483], [5112, 7483], [5052, 7414], [5047, 7243]
    ],
    icono: '🏢',
    color: { fill: 'rgba(127, 140, 141, 0.3)', border: '#7f8c8d' }
  }
];

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
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        font-family: Arial, sans-serif;
      ">
        ${icono}
      </div>
    `,
    className: 'custom-edificio4-icon',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
  });
};

// Componente principal
interface Edificio4AreasRendererProps {
  edificioId: string;
  activeFloor: number;
  onAreaClick?: (area: any) => void;
}

export const Edificio4AreasRenderer: React.FC<Edificio4AreasRendererProps> = ({
  edificioId,
  activeFloor,
  onAreaClick
}) => {
  // Solo mostrar si estamos en edificio4 y piso 0 (planta baja)
  if (edificioId !== 'edificio4' || activeFloor !== 0) {
    return null;
  }

  return (
    <>
      {areasEdificio4PlantaBaja.map((area) => {
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
              <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                <div style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  padding: '4px 8px',
                  maxWidth: '120px'
                }}>
                  <div style={{ fontSize: '14px', marginBottom: '2px' }}>
                    {area.icono}
                  </div>
                  <div style={{ fontSize: '11px', lineHeight: '1.2' }}>
                    {area.nombre}
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
              <Tooltip direction="top" offset={[0, -25]} opacity={1}>
                <div style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  padding: '6px 10px',
                  maxWidth: '140px'
                }}>
                  <div style={{ fontSize: '16px', marginBottom: '4px' }}>
                    {area.icono}
                  </div>
                  <div style={{ fontSize: '12px', lineHeight: '1.3' }}>
                    {area.nombre}
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

export default Edificio4AreasRenderer;