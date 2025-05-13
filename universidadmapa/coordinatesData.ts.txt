// Archivo: src/data/coordinatesData.ts
// Información sobre instalaciones dentro de la zona verde
export interface InstalacionZonaVerde {
  nombre: string;
  descripcion?: string;
}

// Información principal de la zona verde
export interface zonaVerdes {
  nombre: string;
  descripcion: string;
  tipo: string;
  coordenadas: number[][];
  instalaciones: InstalacionZonaVerde[];
  acceso: string;
  tiposPlantas: string[];
  color: {
    fill: string;
    border: string;
  };
}
// Función para transformar coordenadas
const transformPoint = (point: number[]): number[] => {
  const [x, y] = point;
  return [x, y];
};
// Función para transformar todas las coordenadas de un polígono
const transformPolygon = (coordinates: number[][]): number[][] => {
  return coordinates.map(point => transformPoint(point));
};
// Definición de tipos para los estacionamientos
export interface EstacionamientoInfo {
  nombre: string;
  coordenadas: number[][];
  color: {
    fill: string;
    border: string;
  };
  capacidad: number;
  ubicacion: string;
  edificiosCercanos?: string[];
  espaciosDiscapacitados?: number;
  espaciosMotocicletas?: number;
}
//cordenadas para las zonas verdes
export const zonaVerdePrincipal: zonaVerdes = {
  nombre: "Zona Verde Principal",
  descripcion: "Área ornamental de espacio abierto para actividades recreativas",
  tipo: "Abierto",
  coordenadas: transformPolygon([
    [4964, 594],
    [4904, 606],
    [4919, 326],
    [5002, 328],
  ]),
  instalaciones: [
    { nombre: "Espacio verde", descripcion: "Área con césped y sombra natural" },
    { nombre: "Bancas", descripcion: "Asientos para descanso de estudiantes" }
  ],
  acceso: "Acceso libre para estudiantes",
  tiposPlantas: ["Ornamentales", "Frutales", "Aromáticas"],
  color: {
    fill: "#A0D995",
    border: "#3C8031"
  }
};

// Coordenadas originales de los estacionamientos con información actualizada
const estacionamientosOriginales = [
  {
    nombre: "Estacionamiento Edificio 1 y 3",
    coordenadas: [
      [3874, 1688], [4067, 1848], [4332, 2120], [4171, 2284],
      [4044, 2432], [4131, 2724], [4120, 3376], [4036, 3456],
      [4152, 3656], [4208, 3588], [4312, 3752], [3988, 3960]
    ],
    color: {
      fill: '#fb9a99',
      border: '#e31a1c'
    },
    capacidad: 43,
    ubicacion: "Parte frontal de la universidad, lateral derecho de los Edificios 1 y 3, ingreso por calle Antisana.",
    edificiosCercanos: ["Edificio 1", "Edificio 3"],
    espaciosDiscapacitados: 2,
    espaciosMotocicletas: 4
  },
  {
    nombre: "Estacionamiento de Posgrados",
    coordenadas: [
      [5696, 140], [4973, 322], [4966, 612], [5634, 622], [5700, 436]
    ],
    color: {
      fill: '#a6cee3',
      border: '#1f78b4'
    },
    capacidad: 7,
    ubicacion: "Entrada lateral izquierda del campus, junto a la puerta principal de esa entrada. Se encuentra entre la avenida Julio Robles y la calle Zangai.",
    edificiosCercanos: ["Posgrados"],
    espaciosDiscapacitados: 2,
    espaciosMotocicletas: 4
  },
  {
    nombre: "Area Verde 3",
    coordenadas: [
      [4040, 1490],
      [4030, 1724],
      [4141, 1828],
      [4356, 2058],
      [4558, 1896],
      [4696, 1764],
      [4725, 1580],
      [4455, 1562]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 2",
    coordenadas: [
      [4004, 558],
      [3909, 1006],
      [3970, 974],
      [4038, 620],
      [4528, 600],
      [4550, 438]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"]
  },
  {
    nombre: "Area Verde 4",
    coordenadas: [
      [5208, 1542],
      [4798, 1550],
      [4776, 1750],
      [5116, 1772],
      [5172, 1810],
      [5218, 1770]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 5",
    coordenadas: [
      [5278, 1372],
      [5374, 1386],
      [5337, 1710],
      [5400, 1742],
      [5329, 1804],
      [5256, 1868]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 6",
    coordenadas: [
      [3930, 1282],
      [3901, 1294],
      [3887, 1634],
      [3969, 1648],
      [3966, 1508],
      [3904, 1502]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 8",
    coordenadas: [
      [6208, 1330],
      [6170, 1588],
      [6167, 1752],
      [6172, 1984],
      [6369, 1986]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 7",
    coordenadas: [
      [4204, 2612],
      [4524, 2892],
      [4516, 3008],
      [4172, 3300]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 9",
    coordenadas: [
      [5449, 1798],
      [5537, 1850],
      [5531, 1952],
      [5487, 2050],
      [5321, 1916]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 10",
    coordenadas: [
      [5925, 2620],
      [5925, 2492],
      [5460, 2868],
      [5877, 2876],
      [5932, 2710]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 11",
    coordenadas: [
      [5472, 2972],
      [5915, 2970],
      [5921, 3260],
      [5736, 3276]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 12",
    coordenadas: [
      [4631, 3934],
      [4685, 3988],
      [4203, 3956],
      [4364, 3778],
      [4553, 3974]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 13",
    coordenadas: [
      [5715, 3628],
      [5795, 3716],
      [5739, 3852],
      [5583, 3900],
      [5485, 4072],
      [5481, 4112],
      [5483, 4160],
      [5527, 4200],
      [5579, 4236],
      [5643, 4270],
      [5627, 4360],
      [5465, 4368],
      [5379, 4372],
      [5191, 4368],
      [5191, 4058],
      [5193, 3968],
      [5259, 4014]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 14",
    coordenadas: [
      [5121, 4046],
      [4861, 4062],
      [4809, 4006],
      [4779, 4004],
      [4747, 4336],
      [4853, 4362],
      [5127, 4358]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 15",
    coordenadas: [
      [5965, 4200],
      [6053, 4258],
      [6039, 4318],
      [5965, 4318],
      [5951, 4378],
      [5907, 4420],
      [5801, 4416],
      [5781, 4286],
      [5879, 4266]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 16",
    coordenadas: [
      [3929, 4096],
      [4041, 4108],
      [4017, 4254],
      [3967, 4382],
      [3953, 4428],
      [3955, 4476],
      [3959, 4560],
      [3975, 4612],
      [3911, 4610]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 17",
    coordenadas: [
      [4845, 4422],
      [5335, 4422],
      [5331, 4628],
      [5245, 4610],
      [5239, 4488],
      [4766, 4486]
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Area Verde 18",
    coordenadas: [
      [6234, 4394],
      [6158, 4390],
      [6139, 4864],
      [6238, 4846]
  
    ],
    color: {
      fill: '#ffcc99',
      border: '#ff9933'
    },
    capacidad: 25,
    ubicacion: "A ambos lados del acceso principal del bloque norte",
    edificiosCercanos: ["Edificio 3", "Edificio 1"],
    EstacionamientoInfoComponent: 1,
    espaciosMotocicletas: 3
  },
  {
    nombre: "Estacionamiento Edificio 2 y 4",
    coordenadas: [
      [3995, 5644], [4219, 5664], [4508, 6008], [4219, 6240],
      [4144, 6404], [4255, 6516], [4248, 7072], [4104, 7332],
      [4196, 7464], [4356, 7668], [4176, 7904], [4068, 7820]
    ],
    color: {
      fill: '#b2df8a',
      border: '#33a02c'
    },
    capacidad: 46,
    ubicacion: "Parte frontal de la universidad, acceso por calle Antisana. Ubicado al lado derecho del edificio principal, junto a los Edificios 2 y 4.",
    edificiosCercanos: ["Edificio 2", "Edificio 4"],
    espaciosDiscapacitados: 2,
    espaciosMotocicletas: 5
  },
  {
    nombre: "Estacionamiento Coliseo",
    coordenadas: [
      [5635, 7756], [7292, 7784], [7312, 8092], [5627, 8064]
    ],
    color: {
      fill: '#fdbf6f',
      border: '#ff7f00'
    },
    capacidad: 29,
    ubicacion: "Frente a la entrada principal del coliseo, entre la calle Sumaco y la avenida Julio Robles.",
    edificiosCercanos: ["Coliseo 05 de Abril"],
    espaciosDiscapacitados: 2,
    espaciosMotocicletas: 4
  },
  {
    nombre: "Estacionamiento Centro Deportivo",
    coordenadas: [
      [3359, 264], [3063, 408], [3036, 1964], [3363, 1968]
    ],
    color: {
      fill: '#cab2d6',
      border: '#6a3d9a'
    },
    capacidad: 46,
    ubicacion: "Entrada por la esquina superior derecha del campus, acceso desde la calle Cayambe.",
    edificiosCercanos: ["Centro Deportivo, Recreativo y Cultural"],
    espaciosDiscapacitados: 2,
    espaciosMotocicletas: 4
  }
];

// Crear estacionamientos con coordenadas transformadas
export const estacionamientos: EstacionamientoInfo[] = estacionamientosOriginales.map(est => ({
  ...est,
  coordenadas: transformPolygon(est.coordenadas)
}));

// Tipos para las áreas deportivas
export interface AreaDeportiva {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  color: string;
  coordenadas: number[][];
  instalaciones: {
    nombre: string;
    icono: string;
  }[];
}

// Coordenadas originales de las áreas deportivas
const areasDeportivasOriginales: AreaDeportiva[] = [
  {
    id: 'cancha1-futbol',
    nombre: 'Cancha de Fútbol 1',
    descripcion: 'Cancha principal de fútbol',
    tipo: 'DEPORTIVO',
    color: '#2ecc71',
    coordenadas: [
      [1955, 900], [1622, 1432], [2404, 2192], [2763, 1684]
    ],
    instalaciones: [
      { nombre: 'Campo de juego', icono: '⚽' },
      { nombre: 'Graderías', icono: '👥' },
      { nombre: 'Vestidores', icono: '🚿' }
    ]
  },
  {
    id: 'cancha2-futbol',
    nombre: 'Cancha de Fútbol 2',
    descripcion: 'Cancha secundaria de fútbol',
    tipo: 'DEPORTIVO',
    color: '#27ae60',
    coordenadas: [
      [1590, 1500], [2367, 2248], [2036, 2768], [1210, 2016]
    ],
    instalaciones: [
      { nombre: 'Campo de juego', icono: '⚽' },
      { nombre: 'Zona de calentamiento', icono: '🏃' }
    ]
  },
  {
    id: 'cancha1-basket',
    nombre: 'Cancha de Baloncesto 1',
    descripcion: 'Cancha principal de baloncesto',
    tipo: 'DEPORTIVO',
    color: '#3498db',
    coordenadas: [
      [1071, 2264], [874, 2592], [1352, 3048], [1551, 2772]
    ],
    instalaciones: [
      { nombre: 'Cancha', icono: '🏀' },
      { nombre: 'Bancas', icono: '🪑' }
    ]
  },
  {
    id: 'cancha2-basket',
    nombre: 'Cancha de Baloncesto 2',
    descripcion: 'Cancha secundaria de baloncesto',
    tipo: 'DEPORTIVO',
    color: '#2980b9',
    coordenadas: [
      [566, 1716], [1002, 2168], [828, 2468], [373, 2022]
    ],
    instalaciones: [
      { nombre: 'Cancha', icono: '🏀' },
      { nombre: 'Zona de espectadores', icono: '👥' }
    ]
  },
  {
    id: 'cancha-interna',
    nombre: 'Cancha Múltiple Interna',
    descripcion: 'Cancha deportiva para actividades internas como baloncesto, vóley y ecuavóley.',
    tipo: 'DEPORTIVO',
    color: '#16a085',
    coordenadas: [
      [6916, 4408], [6400, 4408], [6340, 5504], [6900, 5464]
    ],
    instalaciones: [
      { nombre: 'Cancha Multiusos', icono: '⚽' },
      { nombre: 'Graderías', icono: '👥' },
      { nombre: 'Piso pavimentado', icono: '🧱' }
    ]
  },
  {
    id: 'area-techada',
    nombre: 'Área Techada para Actividad Física',
    descripcion: 'Espacio cubierto para clases y prácticas de cultura física.',
    tipo: 'DEPORTIVO',
    color: '#1abc9c',
    coordenadas: [
      [7000, 5600], [6500, 5600], [6500, 6100], [7000, 6100]
    ],
    instalaciones: [
      { nombre: 'Estructura metálica', icono: '🏗️' },
      { nombre: 'Espacio adaptable', icono: '🤸' },
      { nombre: 'Material deportivo', icono: '🏋️' }
    ]
  },
  {
    id: 'zona-verde',
    nombre: 'Zona Verde de Recreación',
    descripcion: 'Área al aire libre para actividades recreativas y pausas activas.',
    tipo: 'DEPORTIVO',
    color: '#2ecc71',
    coordenadas: [
      [5127, 2660],
      [5359, 2874],
      [5351, 2992],
      [5117, 3214],
      [4861, 3210],
      [4651, 2976],
      [4637, 2880],
      [4861, 2640]
    ],
    instalaciones: [
      { nombre: 'Espacio verde', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ]
  },
  {
    id: 'coliseo',
    nombre: 'Coliseo 05 de Abril',
    descripcion: 'Coliseo deportivo para eventos y competencias.',
    tipo: 'DEPORTIVO',
    color: '#8e44ad',
    coordenadas: [
      [7200, 6236], [6700, 6268], [6440, 6480], [6387, 7432],
      [6592, 7636], [7180, 7624], [7366, 7440], [7354, 6352]
    ],
    instalaciones: [
      { nombre: 'Cancha Central', icono: '🏀' },
      { nombre: 'Tribuna Norte', icono: '👥' },
      { nombre: 'Tribuna Sur', icono: '👥' },
      { nombre: 'Vestuarios', icono: '🚿' },
      { nombre: 'Sala de Prensa', icono: '🎤' },
      { nombre: 'Baños', icono: '🚻' }
    ]
  }
];

// Crear áreas deportivas con coordenadas transformadas
export const areasDeportivas: AreaDeportiva[] = areasDeportivasOriginales.map(area => ({
  ...area,
  coordenadas: transformPolygon(area.coordenadas)
}));

// Tipos para los edificios
export interface Instalacion {
  nombre: string;
  icono: string;
}

export interface Ubicacion {
  nombre: string;
  tipo: string;
  descripcion?: string;
}

export interface Piso {
  numero: number;
  nombre: string;
  imagen: string;
  instalaciones?: Instalacion[];
  ladoIzquierdo?: Ubicacion[];
  ladoDerecho?: Ubicacion[];
}

export interface Edificio {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  color: string;
  pisos: Piso[];
  coordenadas: number[][];
}

// Coordenadas originales de los edificios con información detallada de cada edificio
const edificiosOriginales = [
  {
    id: 'edificio1',
    nombre: 'Edificio Aulas 1',
    descripcion: 'Edificio principal con aulas y oficinas administrativas.',
    tipo: 'ACADÉMICO',
    color: '#3498db',
    coordenadas: [
      [5392, 3060], [5135, 3340], [4696, 3344], [4451, 3064],
      [4060, 3472], [4547, 3964], [4708, 3860], [5096, 3860],
      [5272, 3996], [5800, 3496]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Planta Baja',
        imagen: '/assets/images/edificio1-plantabaja.jpg',
        ladoIzquierdo: [
          { nombre: 'Laboratorio Asuntos públicos y de gobierno', tipo: 'LABORATORIO' },
          { nombre: 'Cafetería', tipo: 'SERVICIO' },
          { nombre: 'Laboratorio de informática 04', tipo: 'LABORATORIO' },
          { nombre: 'Aula Virtual 003', tipo: 'AULA' },
          { nombre: 'Sala de Profesores de comercio', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Secretaria FCIIAEE', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Decanato FCIIAEE', tipo: 'ADMINISTRATIVO' }
        ],
        ladoDerecho: [
          { nombre: 'Dirección de Comercio Exterior y Negosiacion Internacional', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Sala de Profesores Comercio Exterior', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Dependencia', tipo: 'OTRO' },
          { nombre: 'Sala de Profesores Administración de empresas y Marketing', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Secretaria de Administración y Marketing', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Dirección', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Sala de Profesores Escuela de Administración de Empresas y Marketing', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Archivo F.C.I.I.A.E.E', tipo: 'ARCHIVO' }
        ]
      },
      {
        numero: 1,
        nombre: 'Primer Piso',
        imagen: '/assets/images/edificio1-piso1.jpg',
        ladoDerecho: [
          { nombre: 'Ascensor', tipo: 'SERVICIO' },
          { nombre: 'Servidores', tipo: 'TÉCNICO' },
          { nombre: 'Archivo Escuela de Comercio', tipo: 'ARCHIVO' },
          { nombre: 'Aula 101', tipo: 'AULA' },
          { nombre: 'Aula 102', tipo: 'AULA' },
          { nombre: 'Aula 103', tipo: 'AULA' },
          { nombre: 'Baños', tipo: 'SERVICIO' },
          { nombre: 'Aula 104', tipo: 'AULA' },
          { nombre: 'Aula 105', tipo: 'AULA' },
          { nombre: 'Aula 106', tipo: 'AULA' }
        ],
        ladoIzquierdo: [
          { nombre: 'Sala ADUPEC', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Sala de estudiantes', tipo: 'SERVICIO' },
          { nombre: 'Aula 112', tipo: 'AULA' },
          { nombre: 'Aula 111', tipo: 'AULA' },
          { nombre: 'Aula 110', tipo: 'AULA' },
          { nombre: 'Baños', tipo: 'SERVICIO' },
          { nombre: 'Aula 109', tipo: 'AULA' },
          { nombre: 'Aula 108', tipo: 'AULA' },
          { nombre: 'Aula 107', tipo: 'AULA' }
        ]
      },
      {
        numero: 2,
        nombre: 'Segundo Piso',
        imagen: '/assets/images/edificio1-piso2.jpg',
        ladoDerecho: [
          { nombre: 'Ascensor', tipo: 'SERVICIO' },
          { nombre: 'Dirección Administración Publica', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Aula 201', tipo: 'AULA' },
          { nombre: 'Aula 202', tipo: 'AULA' },
          { nombre: 'Aula 203', tipo: 'AULA' },
          { nombre: 'Baños', tipo: 'SERVICIO' },
          { nombre: 'Aula 204', tipo: 'AULA' },
          { nombre: 'Aula 205', tipo: 'AULA' },
          { nombre: 'Sala de docentes Carrera de Administración Publica', tipo: 'ADMINISTRATIVO' }
        ],
        ladoIzquierdo: [
          { nombre: 'Coordinación de Area', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Aula 212', tipo: 'AULA' },
          { nombre: 'Aula 211', tipo: 'AULA' },
          { nombre: 'Aula 210', tipo: 'AULA' },
          { nombre: 'Baños', tipo: 'SERVICIO' },
          { nombre: 'Aula 209', tipo: 'AULA' },
          { nombre: 'Aula 208', tipo: 'AULA' },
          { nombre: 'Aula 207', tipo: 'AULA' }
        ]
      }
    ]
  },
  {
    id: 'edificio2',
    nombre: 'Edificio Aulas 2',
    descripcion: 'Edificio con aulas y laboratorios.',
    tipo: 'ACADÉMICO',
    color: '#e67e22',
    coordenadas: [
      [5311, 5940], [4658, 5908], [4164, 6380], [4582, 6756],
      [4780, 6560], [5151, 6560], [5412, 6760], [5836, 6448]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Planta Baja',
        imagen: '/assets/images/edificio2-plantabaja.jpg',
        ladoDerecho: [
          { nombre: 'Empresa pública', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Sala de docentes', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Sala de docentes de educación', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Laboratorio de informática 7', tipo: 'LABORATORIO' },
          { nombre: 'Laboratorio de informática 6', tipo: 'LABORATORIO' },
          { nombre: 'Laboratorio de informática 5', tipo: 'LABORATORIO', descripcion: 'Al lado del ascensor' }
        ],
        ladoIzquierdo: [
          { nombre: 'Cámara de transformación', tipo: 'TÉCNICO' },
          { nombre: 'Baños', tipo: 'SERVICIO' },
          { nombre: 'Guardianía', tipo: 'SEGURIDAD' },
          { nombre: 'Bodega', tipo: 'ALMACÉN' },
          { nombre: 'Fab lab', tipo: 'LABORATORIO' },
          { nombre: 'Laboratorio de cyber seguridad', tipo: 'LABORATORIO' },
          { nombre: 'Aula 203', tipo: 'ADMINISTRATIVO', descripcion: 'Dirección de la facultad de las ciencias de la salud y de la educación' }
        ]
      },
      {
        numero: 1,
        nombre: 'Primer Piso',
        imagen: '/assets/images/edificio2-piso1.jpg',
        ladoDerecho: [
          { nombre: 'Carreras de Educación inicial y Actividad física', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Aulas de la 104 a la 109', tipo: 'AULAS' },
          { nombre: 'Dirección de la carrera de educación inicial', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Aula 106', tipo: 'ADMINISTRATIVO', descripcion: 'Sala de docentes Educación inicial' }
        ],
        ladoIzquierdo: [
          { nombre: 'Carrera de Educación básica', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Aulas de la 110 a la 115', tipo: 'AULAS' },
          { nombre: 'Aula 113', tipo: 'AULA', descripcion: 'Comparte con enfermería' },
          { nombre: 'Sala de docentes Educación básica', tipo: 'ADMINISTRATIVO', descripcion: 'Al lado del aula 116' },
          { nombre: 'Dirección de carrera educación básica', tipo: 'ADMINISTRATIVO', descripcion: 'Al lado de la sala de docentes' }
        ]
      },
      {
        numero: 2,
        nombre: 'Segundo Piso',
        imagen: '/assets/images/edificio2-piso2.jpg',
        ladoDerecho: [
          { nombre: 'Carrera de Enfermería', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Aulas de la 202 a la 206', tipo: 'AULAS' },
          { nombre: 'Aula 201', tipo: 'ADMINISTRATIVO', descripcion: 'Dirección de la carrera de enfermería' },
          { nombre: 'Aula 207', tipo: 'ADMINISTRATIVO', descripcion: 'Sala de docentes de la carrera de enfermería al lado de las escaleras a mano derecha' }
        ],
        ladoIzquierdo: [
          { nombre: 'Carrera de Laboratorio clínico', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Aulas de la 208 a la 213', tipo: 'AULAS' },
          { nombre: 'Aulas 212 y 213', tipo: 'AULAS', descripcion: 'Comparten con enfermería' },
          { nombre: 'Sala de docentes laboratorio clínico', tipo: 'ADMINISTRATIVO', descripcion: 'Al lado de la aula 213' }
        ]
      }
    ]
  },
  {
    id: 'edificio3',
    nombre: 'Edificio Aulas 3',
    descripcion: 'Parte de la Facultad de Ingeniería y Ciencias Aplicadas.',
    tipo: 'ACADÉMICO',
    color: '#e74c3c',
    coordenadas: [
      [4110, 2404], [4546, 1984], [4696, 2192], [5139, 2168],
      [5324, 1984], [5811, 2400], [5364, 2812], [5252, 2664],
      [5152, 2548], [4724, 2576], [4456, 2828]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Planta Baja',
        imagen: '/assets/images/edificio3-plantabaja.jpg',
        ladoIzquierdo: [
          { nombre: 'Laboratorio clases de tics', tipo: 'LABORATORIO' },
          { nombre: 'Observatorio Binacional de Frontera', tipo: 'INVESTIGACIÓN' },
          { nombre: 'Laboratorio de Neuromarketing', tipo: 'LABORATORIO' },
          { nombre: 'Oficina de centros o materias complementarias', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Laboratorios', tipo: 'LABORATORIO' },
          { nombre: 'Servicios higiénicos', tipo: 'SERVICIO' },
          { nombre: 'Sala de docentes', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Ascensor lado izquierdo', tipo: 'SERVICIO' }
        ],
        ladoDerecho: [
          { nombre: 'Aulas de Logística y Transporte', tipo: 'AULA' }
        ]
      },
      {
        numero: 1,
        nombre: 'Primer Piso',
        imagen: '/assets/images/edificio3-piso1.jpg',
        ladoIzquierdo: [
          { nombre: 'Aulas de Idiomas', tipo: 'AULA' },
          { nombre: 'Oficinas administrativas', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Servicios higiénicos', tipo: 'SERVICIO' },
          { nombre: 'Ascensor lado izquierdo', tipo: 'SERVICIO' }
        ],
        ladoDerecho: [
          { nombre: 'Aulas de Logística y Transporte', tipo: 'AULA' }
        ]
      },
      {
        numero: 2,
        nombre: 'Segundo Piso',
        imagen: '/assets/images/edificio3-piso2.jpg',
        ladoIzquierdo: [
          { nombre: 'Aulas de Nivelación', tipo: 'AULA' },
          { nombre: 'Dirección de Enfermería', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Servicios higiénicos', tipo: 'SERVICIO' },
          { nombre: 'Ascensor lado izquierdo', tipo: 'SERVICIO' }
        ]
      }
    ]
  },
  {
    id: 'edificio4',
    nombre: 'Edificio Aulas 4',
    descripcion: 'Edificio con aulas y oficinas de la facultad.',
    tipo: 'ACADÉMICO',
    color: '#9b59b6',
    coordenadas: [
      [4119, 7304], [4459, 6904], [4668, 7200], [5071, 7224],
      [5324, 6956], [5716, 7444], [5572, 7552], [5192, 7928],
      [5080, 7816], [4668, 7760], [4532, 7864]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Planta Baja',
        imagen: '/assets/images/edificio4-plantabaja.jpg',
        ladoIzquierdo: [
          { nombre: 'Observatorio Turismo', tipo: 'INVESTIGACIÓN' },
          { nombre: 'Laboratorio de Redes', tipo: 'LABORATORIO' },
          { nombre: 'Laboratorio SMART DATA LAB', tipo: 'LABORATORIO' },
          { nombre: 'Sala de docentes carrera de Turismo', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Decanato', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Sala de docentes Computación', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Baños generales', tipo: 'SERVICIO' }
        ],
        ladoDerecho: [
          { nombre: 'Dirección Agropecuaria', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Aulas 1 y 2', tipo: 'AULAS' },
          { nombre: 'Sala de docentes Carrera de Alimentos', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Sala de docentes carrera de Agropecuaria', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Aulas 3', tipo: 'AULA' },
          { nombre: 'Archivo', tipo: 'ARCHIVO' },
          { nombre: 'Baños generales', tipo: 'SERVICIO' }
        ]
      },
      {
        numero: 1,
        nombre: 'Primer Piso',
        imagen: '/assets/images/edificio4-piso1.jpg',
        ladoIzquierdo: [
          { nombre: 'UPEC Microsoft Community', tipo: 'COMUNIDAD' },
          { nombre: 'Dirección de carrera de Alimentos', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Área de servicios', tipo: 'SERVICIO' },
          { nombre: 'Aulas 101-106', tipo: 'AULAS' },
          { nombre: 'Baños Generales', tipo: 'SERVICIO' }
        ],
        ladoDerecho: [
          { nombre: 'Dirección carrera de Computación', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Centro de investigación y Networking', tipo: 'INVESTIGACIÓN' },
          { nombre: 'Aulas 107-112', tipo: 'AULAS' },
          { nombre: 'Baños generales', tipo: 'SERVICIO' }
        ]
      },
      {
        numero: 2,
        nombre: 'Segundo Piso',
        imagen: '/assets/images/edificio4-piso2.jpg',
        ladoIzquierdo: [
          { nombre: 'Dirección carrera de Turismo', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Aulas 201-206', tipo: 'AULAS' },
          { nombre: 'Baños generales', tipo: 'SERVICIO' }
        ],
        ladoDerecho: [
          { nombre: 'Aulas 208-212', tipo: 'AULAS' },
          { nombre: 'Dirección carrera de veterinaria', tipo: 'ADMINISTRATIVO' },
          { nombre: 'Baños generales', tipo: 'SERVICIO' }
        ]
      }
    ]
  },
  {
    id: 'posgrados',
    nombre: 'Edificio Posgrados',
    descripcion: 'Área de estudios de posgrado y servicios académicos.',
    tipo: 'ACADÉMICO',
    color: '#2ecc71',
    coordenadas: [
      [3961, 1020], [3970, 898], [3950, 899], [3964, 781],   
      [4085, 785], [4084, 800], [4183, 798], [4184, 789],
      [4479, 795], [4486, 696], [4792, 701], [4785, 803],
      [4883, 805], [5072, 817], [5079, 799], [5213, 806],
      [5208, 926], [5199, 931], [5197, 1053], [5236, 1055],
      [5223, 1308], [5177, 1307], [5174, 1424], [5169, 1556],
      [5027, 1552], [5026, 1533], [4856, 1529], [4834, 1547],
      [4833, 1567], [4595, 1556], [4586, 1566], [4459, 1560],
      [4449, 1550], [4127, 1531], [4128, 1491], [4034, 1485],
      [4028, 1503], [3904, 1496], [3910, 1373], [3928, 1370],
      [3935, 1253], [3953, 1246], [3971, 1031]
    ],
    pisos: [
      {
        numero: -1,
        nombre: 'Piso -1',
        imagen: '/assets/images/posgrados-piso-1.jpg',
        instalaciones: [
          { nombre: 'Set de ping pong', icono: '🏓' },
          { nombre: 'Set de Ajedrez', icono: '♟️' },
          { nombre: 'Cafetería', icono: '☕' },
          { nombre: 'Muebles de descanso', icono: '🛋️' },
          { nombre: 'Baños generales', icono: '🚻' }
        ]
      },
      {
        numero: 0,
        nombre: 'Planta Baja',
        imagen: '/assets/images/posgrados-piso0.jpg',
        instalaciones: [
          { nombre: 'Desarrollo de software', icono: '💻' },
          { nombre: 'Soporte TÉCNICO', icono: '🔧' },
          { nombre: 'Dirección de TICS', icono: '📊' },
          { nombre: 'Depósitos de desechos electrónicos', icono: '🗑️' },
          { nombre: 'Mantenimiento técnico TICS', icono: '🔨' },
          { nombre: 'Baños generales', icono: '🚻' },
          { nombre: 'Deposito', icono: '📦' }
        ]
      },
      {
        numero: 1,
        nombre: 'Primer Piso',
        imagen: '/assets/images/posgrados-piso1.jpg',
        instalaciones: [
          { nombre: 'Centro de Emprendimiento', icono: '🚀' },
          { nombre: 'Sub-Dirección académica posgrado', icono: '🎓' },
          { nombre: 'Baños generales', icono: '🚻' },
          { nombre: 'Dirección posgrado', icono: '📋' },
          { nombre: 'Sala de docentes Doctorado', icono: '👨‍🏫' },
          { nombre: 'Secretaría de Maestrías', icono: '📝' },
          { nombre: 'Dirección de Doctorado', icono: '🎓' },
          { nombre: 'Sala de Reuniones', icono: '👥' },
          { nombre: 'Unidad de Tecnología Educativa', icono: '💻' },
          { nombre: 'Sala de Sustentaciones', icono: '🎤' },
          { nombre: 'Aula de Clases Doctorado', icono: '🏫' },
          { nombre: 'Deposito', icono: '📦' }
        ]
      },
      {
        numero: 2,
        nombre: 'Segundo Piso',
        imagen: '/assets/images/posgrados-piso2.jpg',
        instalaciones: [
          { nombre: 'Sala de Estudiantes doctorado', icono: '👨‍🎓' },
          { nombre: 'Secretaría Posgrado', icono: '📝' },
          { nombre: 'Sala de Docentes Carrera de Contabilidad y Auditoría', icono: '👨‍🏫' },
          { nombre: 'Carrera de Contabilidad y Auditoría', icono: '💼' },
          { nombre: 'Sala de Reuniones Carrera de Contabilidad y Auditoría', icono: '👥' },
          { nombre: 'Aulas de Clases En Línea', icono: '🖥️' },
          { nombre: 'Baños generales', icono: '🚻' },
          { nombre: 'Deposito', icono: '📦' }
        ]
      },
      {
        numero: 3,
        nombre: 'Tercer Piso - Biblioteca "Luciano Coral"',
        imagen: '/assets/images/posgrados-piso3.jpg',
        instalaciones: [
          { nombre: 'Sala de reuniones', icono: '👥' },
          { nombre: 'Salas de Tutorías 1', icono: '👨‍🏫' },
          { nombre: 'Sala Multimedia', icono: '🎬' },
          { nombre: 'Salas de Tutorías 2', icono: '👨‍🏫' },
          { nombre: 'Secretaría', icono: '📝' },
          { nombre: 'Casilleros', icono: '🗄️' },
          { nombre: 'Baños generales', icono: '🚻' },
          { nombre: 'Deposito', icono: '📦' }
        ]
      },
      {
        numero: 4,
        nombre: 'Cuarto Piso - Telecomunicaciones',
        imagen: '/assets/images/posgrados-piso4.jpg',
        instalaciones: [
          { nombre: 'Información', icono: 'ℹ️' },
          { nombre: 'OZIFEC (Observatorio de la Zona de Integración Fronteriza Ecuador-Colombia)', icono: '🔭' },
          { nombre: 'Comunicación y Relaciones Públicas', icono: '📢' },
          { nombre: 'Estudio de Radio 2 (MINDALAE)', icono: '🎙️' },
          { nombre: 'Estudio de Televisión 1', icono: '📺' },
          { nombre: 'Estudio de Radio 1', icono: '🎙️' },
          { nombre: 'Baños generales', icono: '🚻' },
          { nombre: 'Deposito', icono: '📦' }
        ]
      }
    ]
  },
  {
    id: 'laboratorios',
    nombre: 'Laboratorios',
    descripcion: 'Complejo de laboratorios científicos.',
    tipo: 'CIENTÍFICO',
    color: '#f1c40f',
    coordenadas: [
      [6175, 1232], [5623, 1220], [5596, 2060], [5851, 2076], [6116, 2036]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Planta Baja',
        imagen: '/assets/images/laboratorios-piso0.jpg',
        instalaciones: [
          { nombre: 'Recepción', icono: '🏢' },
          { nombre: 'Almacén de Equipos', icono: '🧰' },
          { nombre: 'Laboratorio de Química', icono: '⚗️' }
        ]
      },
      {
        numero: 1,
        nombre: 'Primer Piso',
        imagen: '/assets/images/laboratorios-piso1.jpg',
        instalaciones: [
          { nombre: 'Laboratorio de Física', icono: '🔬' },
          { nombre: 'Laboratorio de Materiales', icono: '🧪' }
        ]
      },
      {
        numero: 2,
        nombre: 'Segundo Piso',
        imagen: '/assets/images/laboratorios-piso2.jpg',
        instalaciones: [
          { nombre: 'Laboratorio de Biología', icono: '🧬' },
          { nombre: 'Sala de Investigación', icono: '📋' }
        ]
      }
    ]
  },
  {
    id: 'edificio-central',
    nombre: 'Edificio Central',
    descripcion: 'Edificio administrativo central del campus.',
    tipo: 'ADMINISTRATIVO',
    color: '#34495e',
    coordenadas: [
      [4607, 4140], [4139, 4100], [4032, 4204], [4031, 4668],
      [4004, 5032], [4091, 5504], [4580, 5532], [4696, 5196],
      [4920, 5184], [4920, 4628], [4560, 4628]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Planta Baja',
        imagen: '/assets/images/edificio-central-piso0.jpg',
        instalaciones: [
          { nombre: 'Recepción', icono: '🏢' },
          { nombre: 'Atención al Estudiante', icono: '👥' },
          { nombre: 'Rectorado', icono: '👨‍💼' }
        ]
      },
      {
        numero: 1,
        nombre: 'Primer Piso',
        imagen: '/assets/images/edificio-central-piso1.jpg',
        instalaciones: [
          { nombre: 'Secretaría General', icono: '📝' },
          { nombre: 'Recursos Humanos', icono: '👥' }
        ]
      },
      {
        numero: 2,
        nombre: 'Segundo Piso',
        imagen: '/assets/images/edificio-central-piso2.jpg',
        instalaciones: [
          { nombre: 'Contabilidad', icono: '💰' },
          { nombre: 'Sala de Consejo', icono: '🏛️' }
        ]
      }
    ]
  }
];

// Crear edificios con coordenadas transformadas
export const edificiosData: Edificio[] = edificiosOriginales.map(ed => ({
  ...ed,
  coordenadas: transformPolygon(ed.coordenadas)
}));