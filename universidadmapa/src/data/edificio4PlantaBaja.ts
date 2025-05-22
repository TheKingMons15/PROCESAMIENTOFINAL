// Archivo: src/data/edificio4PlantaBaja.ts

export interface AreaEdificio4 {
  id: string;
  nombre: string;
  tipo: 'polygon' | 'points';
  coordenadas: number[][];
  icono: string;
  color: {
    fill: string;
    border: string;
  };
  categoria: 'AULA' | 'LABORATORIO' | 'ADMINISTRATIVO' | 'SERVICIO';
}

// Coordenadas específicas del Edificio 4 - Planta Baja
export const areasEdificio4PlantaBaja: AreaEdificio4[] = [
  {
    id: 'sala-docentes-computacion',
    nombre: 'Sala Docentes Computación',
    tipo: 'polygon',
    coordenadas: [
      [4693, 7228],
      [4651, 7280],
      [4770, 7410],
      [4705, 7472],
      [4658, 7458],
      [4475, 7271],
      [4465, 7230],
      [4593, 7103]
    ],
    icono: '👨‍💻',
    color: {
      fill: 'rgba(52, 152, 219, 0.3)',
      border: '#3498db'
    },
    categoria: 'ADMINISTRATIVO'
  },
  {
    id: 'decanato',
    nombre: 'Decanato',
    tipo: 'points',
    coordenadas: [
      [4492, 6974],
      [4617, 7099],
      [4483, 7223],
      [4360, 7108]
    ],
    icono: '🏛️',
    color: {
      fill: 'rgba(155, 89, 182, 0.3)',
      border: '#9b59b6'
    },
    categoria: 'ADMINISTRATIVO'
  },
  {
    id: 'sala-docentes-turismo',
    nombre: 'Sala Docentes Turismo',
    tipo: 'points',
    coordenadas: [
      [4255, 7452],
      [4304, 7397],
      [4367, 7334],
      [4356, 7320],
      [4360, 7297],
      [4356, 7289],
      [4380, 7266],
      [4399, 7244],
      [4299, 7137],
      [4272, 7171],
      [4263, 7206],
      [4209, 7261],
      [4147, 7327]
    ],
    icono: '🏖️',
    color: {
      fill: 'rgba(46, 204, 113, 0.3)',
      border: '#2ecc71'
    },
    categoria: 'ADMINISTRATIVO'
  },
  {
    id: 'datalab',
    nombre: 'SMART DATA LAB',
    tipo: 'points',
    coordenadas: [
      [4429, 7307],
      [4371, 7323],
      [4273, 7428],
      [4377, 7547],
      [4519, 7408]
    ],
    icono: '🔬',
    color: {
      fill: 'rgba(231, 76, 60, 0.3)',
      border: '#e74c3c'
    },
    categoria: 'LABORATORIO'
  },
  {
    id: 'laboratorio-redes',
    nombre: 'Laboratorio de Redes',
    tipo: 'points',
    coordenadas: [
      [4525, 7412],
      [4379, 7546],
      [4476, 7671],
      [4596, 7571],
      [4602, 7505]
    ],
    icono: '🌐',
    color: {
      fill: 'rgba(241, 196, 15, 0.3)',
      border: '#f1c40f'
    },
    categoria: 'LABORATORIO'
  },
  {
    id: 'observatorio-turismo',
    nombre: 'Observatorio Turismo',
    tipo: 'points',
    coordenadas: [
      [4599, 7564],
      [4703, 7573],
      [4703, 7691],
      [4571, 7803],
      [4479, 7674]
    ],
    icono: '🔭',
    color: {
      fill: 'rgba(230, 126, 34, 0.3)',
      border: '#e67e22'
    },
    categoria: 'LABORATORIO'
  },
  {
    id: 'secretaria-planta-baja',
    nombre: 'Secretaría Planta Baja',
    tipo: 'points',
    coordenadas: [
      [5328, 7711],
      [5229, 7587],
      [5110, 7587],
      [5101, 7710],
      [5210, 7830]
    ],
    icono: '📝',
    color: {
      fill: 'rgba(142, 68, 173, 0.3)',
      border: '#8e44ad'
    },
    categoria: 'ADMINISTRATIVO'
  },
  {
    id: 'aula-1',
    nombre: 'Aula 1',
    tipo: 'points',
    coordenadas: [
      [5312, 7446],
      [5453, 7600],
      [5334, 7709],
      [5224, 7589],
      [5224, 7530]
    ],
    icono: '🏫',
    color: {
      fill: 'rgba(52, 73, 94, 0.3)',
      border: '#34495e'
    },
    categoria: 'AULA'
  },
  {
    id: 'aula-2',
    nombre: 'Aula 2',
    tipo: 'points',
    coordenadas: [
      [5437, 7362],
      [5402, 7363],
      [5309, 7448],
      [5452, 7607],
      [5564, 7493]
    ],
    icono: '🏫',
    color: {
      fill: 'rgba(52, 73, 94, 0.3)',
      border: '#34495e'
    },
    categoria: 'AULA'
  },
  {
    id: 'aula-3',
    nombre: 'Aula 3',
    tipo: 'points',
    coordenadas: [
      [5578, 7273],
      [5468, 7358],
      [5474, 7388],
      [5583, 7521],
      [5697, 7411]
    ],
    icono: '🏫',
    color: {
      fill: 'rgba(52, 73, 94, 0.3)',
      border: '#34495e'
    },
    categoria: 'AULA'
  },
  {
    id: 'sala-docentes-agropecuaria',
    nombre: 'Sala Docentes Agropecuaria',
    tipo: 'points',
    coordenadas: [
      [5339, 7008],
      [5474, 7165],
      [5498, 7157],
      [5537, 7195],
      [5429, 7290],
      [5378, 7238],
      [5350, 7261],
      [5209, 7122]
    ],
    icono: '🌾',
    color: {
      fill: 'rgba(39, 174, 96, 0.3)',
      border: '#27ae60'
    },
    categoria: 'ADMINISTRATIVO'
  },
  {
    id: 'aula-computacion',
    nombre: 'Aula Computación',
    tipo: 'points',
    coordenadas: [
      [5231, 7137],
      [5367, 7277],
      [5355, 7318],
      [5267, 7397],
      [5116, 7241]
    ],
    icono: '💻',
    color: {
      fill: 'rgba(41, 128, 185, 0.3)',
      border: '#2980b9'
    },
    categoria: 'AULA'
  },
  {
    id: 'oficina',
    nombre: 'Oficina',
    tipo: 'points',
    coordenadas: [
      [5117, 7243],
      [5257, 7400],
      [5170, 7483],
      [5112, 7483],
      [5052, 7414],
      [5047, 7243]
    ],
    icono: '🏢',
    color: {
      fill: 'rgba(127, 140, 141, 0.3)',
      border: '#7f8c8d'
    },
    categoria: 'ADMINISTRATIVO'
  }
];

// Función para obtener el área por ID
export const getAreaEdificio4PorId = (id: string): AreaEdificio4 | undefined => {
  return areasEdificio4PlantaBaja.find(area => area.id === id);
};

// Función para obtener áreas por categoría
export const getAreasPorCategoria = (categoria: AreaEdificio4['categoria']): AreaEdificio4[] => {
  return areasEdificio4PlantaBaja.filter(area => area.categoria === categoria);
};

// Función para transformar coordenadas si es necesario
export const transformarCoordinadas = (coordenadas: number[][]): number[][] => {
  return coordenadas.map(([x, y]) => [x, y]);
};

// Función para obtener el centro de un polígono (para colocar el marcador)
export const getCentroPoligono = (coordenadas: number[][]): [number, number] => {
  const sumX = coordenadas.reduce((sum, [x]) => sum + x, 0);
  const sumY = coordenadas.reduce((sum, [, y]) => sum + y, 0);
  return [sumX / coordenadas.length, sumY / coordenadas.length];
};

// Configuración de estilos para diferentes categorías
export const estilosPorCategoria = {
  AULA: {
    fill: 'rgba(52, 73, 94, 0.3)',
    border: '#34495e',
    icono: '🏫'
  },
  LABORATORIO: {
    fill: 'rgba(231, 76, 60, 0.3)',
    border: '#e74c3c',
    icono: '🔬'
  },
  ADMINISTRATIVO: {
    fill: 'rgba(155, 89, 182, 0.3)',
    border: '#9b59b6',
    icono: '🏛️'
  },
  SERVICIO: {
    fill: 'rgba(149, 165, 166, 0.3)',
    border: '#95a5a6',
    icono: '🛎️'
  }
};