

// Archivo: src/data/coordinatesData.ts

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
    
  imagen?: string;  // Cambiado de imagenes?: string[]
  
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


// Coordenadas originales de los estacionamientos con información actualizada
// Coordenadas originales de los estacionamientos con información actualizada
const estacionamientosOriginales = [
  {
    imagen: '/assets/images/estacionamintos/estacionamiento1y3.jpg',
    nombre: "Estacionamiento Edificio 1 y 3",
    coordenadas: [
      [3992, 3926], [4134, 3948], [4328, 3740], [4208, 3582], [4173, 3614], [4056, 3462], [4141, 3374], [4173, 2512], [4107, 2432],
      [4228, 2294], [4388, 2152], [3959, 1684], [3881, 1674], [3889, 2032], [4019, 2042], [3979, 2566], [3989, 2678], [3947, 2918],
      [3955, 3214], [3964, 3714], [3969, 3920]
    ],
    color: {
      fill: '#fb9a99',
      border: '#e31a1c'
    },
    capacidad: 41,
    ubicacion: "Parte frontal de la universidad, lateral derecho de los Edificios 1 y 3, ingreso por calle Antisana.",
    edificiosCercanos: ["Edificio 1", "Edificio 3"],
    espaciosDiscapacitados: 2,
    espaciosMotocicletas: 4
  },
  {
    imagen: '/assets/images/estacionamintos/estacionamientoPosgrados.jpg',
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
    imagen: '/assets/images/estacionamintos/estacionamiento2y4.jpg',
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
    imagen: '/assets/images/estacionamintos/estacionamientoColiseo.jpg',
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
    imagen: '/assets/images/estacionamintos/EstacionamientoCentroDeportivo.jpg',
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

/* Tipos para las áreas deportivas*/
export interface PisoDeportivo {
  numero: number;
  nombre: string;
  imagen: string;
  descripcion?: string;
  instalaciones?: {
    nombre: string;
    icono: string;
  }[];
}

export interface AreaDeportiva {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  color: string;
  selectedColor?: string;
  coordenadas: number[][];
  plano?: string;
  pisos?: PisoDeportivo[]; // Nueva propiedad para los pisos
  instalaciones: {
    nombre: string;
    icono: string;
  }[];
  imagenes?: {
    url: string;
    alt: string;
    descripcion: string;
  }[];
  equipamiento?: {
    nombre: string;
    imagen: string;
    descripcion: string;
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
    plano: '/assets/images/Cancha_22.jpg',
    selectedColor: 'rgba(0, 100, 255, 0.5)',
    coordenadas: [
      [1955, 900], [1622, 1432], [2404, 2192], [2763, 1684]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Area Principal 1',
        imagen: '/assets/images/CANCHAS1P.jpg',
        descripcion: 'Vista panorámica completa de la cancha principal de fútbol',
        instalaciones: [
          { nombre: 'Campo de juego', icono: '⚽' },
          { nombre: 'Graderías', icono: '👥' },
          { nombre: 'Vestidores', icono: '🚿' }
        ]
      }
    ],
    instalaciones: [
      { nombre: 'Campo de juego', icono: '⚽' },
      { nombre: 'Graderías', icono: '👥' },
      { nombre: 'Vestidores', icono: '🚿' }
    ],
    imagenes: [
      {
        url: '/assets/images/VistaPanoramica.jpg',
        alt: 'Cancha principal de fútbol',
        descripcion: 'Vista panorámica de la cancha principal'
      },
      {
        url: '/assets/images/Cesped.jpg',
        alt: 'Detalle del césped sintético',
        descripcion: 'Detalle de la superficie de juego'
      }
    ],
    equipamiento: [
      {
        nombre: 'Arcos',
        imagen: '/assets/images/ArcoFutbol.jpg',
        descripcion: 'Arcos de fútbol reglamentarios con redes'
      },
      {
        nombre: 'Balones',
        imagen: '/assets/images/BALON.jpg',
        descripcion: 'Balones de fútbol oficiales para entrenamiento'
      }
    ]
  },
  {
    id: 'cancha2-futbol',
    nombre: 'Cancha de Fútbol 2',
    descripcion: 'Cancha secundaria de fútbol',
    tipo: 'DEPORTIVO',
    color: '#27ae60',
    plano: '/assets/images/Cancha_33.jpg',
    selectedColor: 'rgba(0, 100, 255, 0.5)',
    coordenadas: [
      [1590, 1500], [2367, 2248], [2036, 2768], [1210, 2016]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Area Principal 2',
        imagen: '/assets/images/CANCHAS1P.jpg',
        descripcion: 'Cancha secundaria de fútbol con césped sintético',
        instalaciones: [
          { nombre: 'Campo de juego', icono: '⚽' },
          { nombre: 'Zona de calentamiento', icono: '🏃' }
        ]
      },
    ],
    instalaciones: [
      { nombre: 'Campo de juego', icono: '⚽' },
      { nombre: 'Zona de calentamiento', icono: '🏃' }
    ],
    imagenes: [
      {
        url: '/assets/images/CanchaFutbol2.jpg',
        alt: 'Cancha secundaria de fútbol',
        descripcion: 'Vista panorámica de la cancha secundaria'
      },
      {
        url: '/assets/images/Cesped.jpg',
        alt: 'Detalle del césped sintético',
        descripcion: 'Detalle de la superficie de juego'
      }
      ],
    equipamiento: [
      {
        nombre: 'Arcos',
        imagen: '/assets/images/ArcoFutbol.jpg',
        descripcion: 'Arcos de futbol reglamentarios con redes'
      },
      {
        nombre: 'Balones',
        imagen: '/assets/images/BALON.jpg',
        descripcion: 'Balones de fútbol oficiales para entrenamiento'
      }
    ]
  },
  {
    id: 'cancha1-basket',
    nombre: 'Cancha de Baloncesto 1',
    descripcion: 'Cancha principal de baloncesto',
    tipo: 'DEPORTIVO',
    color: '#3498db',
    plano: '/assets/images/CanchaVasquet1.jpg',
    selectedColor: 'rgba(0, 100, 255, 0.5)',
    coordenadas: [
      [1071, 2264], [874, 2592], [1352, 3048], [1551, 2772]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Area Principal',
        imagen: '/assets/images/CANCHAS1V.jpg',
        descripcion: 'Cancha reglamentaria de baloncesto',
        instalaciones: [
          { nombre: 'Cancha', icono: '🏀' },
          { nombre: 'Bancas', icono: '🪑' },
          { nombre: 'Marcador', icono: '🔄' }
        ]
      },
    ],
    instalaciones: [
      { nombre: 'Cancha', icono: '🏀' },
      { nombre: 'Bancas', icono: '🪑' }
    ],
    imagenes: [
      {
        url: '/assets/images/basquetvista2.jpg',
        alt: 'Cancha principal de fútbol',
        descripcion: 'Vista panorámica de la cancha principal'
      },
      {
        url: '/assets/images/PLANOS2.jpg',
        alt: 'Detalle del césped sintético',
        descripcion: 'Detalle de la superficie de juego'
      }
    ],
    equipamiento: [
      {
        nombre: 'Aros',
        imagen: '/assets/images/ARO.jpg',
        descripcion: 'Aros de baloncesto reglamentarios con redes trenzadas'
      },
      {
        nombre: 'Balones',
        imagen: '/assets/images/BALON2.jpg',
        descripcion: 'Balones de baloncesto oficiales para entrenamiento'
      }
    ]
  },
  {
    id: 'cancha2-basket',
    nombre: 'Cancha de Baloncesto 2',
    descripcion: 'Cancha secundaria de baloncesto',
    tipo: 'DEPORTIVO',
    color: '#2980b9',
    plano: '/assets/images/CanchaVasquet2.jpg',
    selectedColor: 'rgba(0, 100, 255, 0.5)',
    coordenadas: [
      [566, 1716], [1002, 2168], [828, 2468], [373, 2022]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Area Secundaria',
        imagen: '/assets/images/CANCHAS1V.jpg',
        descripcion: 'Cancha de práctica de baloncesto',
        instalaciones: [
          { nombre: 'Cancha', icono: '🏀' },
          { nombre: 'Zona de espectadores', icono: '👥' }
        ]
      }
    ],
    instalaciones: [
      { nombre: 'Cancha', icono: '🏀' },
      { nombre: 'Zona de espectadores', icono: '👥' }
    ],
    imagenes: [
      {
        url: '/assets/images/basquetvista2.jpg',
        alt: 'Cancha principal de fútbol',
        descripcion: 'Vista panorámica de la cancha principal'
      },
      {
        url: '/assets/images/PLANOS2.jpg',
        alt: 'Detalle del césped sintético',
        descripcion: 'Detalle de la superficie de juego'
      }
    ],
    equipamiento: [
      {
        nombre: 'Aros',
        imagen: '/assets/images/ARO.jpg',
        descripcion: 'Aros de baloncesto reglamentarios con redes trenzadas'
      },
      {
        nombre: 'Balones',
        imagen: '/assets/images/BALON2.jpg',
        descripcion: 'Balones de baloncesto oficiales para entrenamiento'
      }
    ]
  },
 {
  id: 'cancha-interna',
  nombre: 'Cancha Múltiple Interna',
  descripcion: 'Cancha deportiva para actividades internas.',
  tipo: 'DEPORTIVO',
  color: '#16a085',
  plano: '/assets/images/Cancha_44.jpg',
  selectedColor: 'rgba(0, 100, 255, 0.5)',
  coordenadas: [
    [6916, 4408], [6400, 4408], [6340, 5504], [6900, 5464]
  ],
  pisos: [
    {
      numero: 0,
      nombre: 'Área Principal Interna',
      imagen: '/assets/images/CANCHA_3.jpg',
      descripcion: 'Vista completa de la cancha multiusos interna',
      instalaciones: [
        { nombre: 'Cancha Multiusos', icono: '⚽' },
        { nombre: 'Graderías', icono: '👥' },
        { nombre: 'Piso pavimentado', icono: '🧱' }
      ]
    }
  ],
  instalaciones: [
    { nombre: 'Cancha Multiusos', icono: '⚽' },
    { nombre: 'Graderías', icono: '👥' },
    { nombre: 'Piso pavimentado', icono: '🧱' }
  ],
  imagenes: [
    {
      url: '/assets/images/CANCHAvista1.jpg',
      alt: 'Cancha multiusos interna',
      descripcion: 'Vista general de la cancha interna'
    },
    {
      url: '/assets/images/Cesped.jpg', // (ejemplo, ajustar ruta real)
      alt: 'Superficie de juego',
      descripcion: 'Detalle del piso pavimentado'
    }
  ],
  equipamiento: [
    {
      nombre: 'Arcos',
      imagen: '/assets/images/ArcoFutbol.jpg', // (ejemplo, ajustar ruta real)
      descripcion: 'Arcos de futbol reglamentarios con redes'
    },
    {
      nombre: 'Balones',
      imagen: '/assets/images/BALON.jpg', // (ejemplo, ajustar ruta real)
      descripcion: 'Balones de fútbol oficiales para entrenamiento'
    }
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
    id: 'coliseo',
    nombre: 'Coliseo 05 de Abril',
    descripcion: 'Coliseo deportivo para eventos y competencias.',
    tipo: 'DEPORTIVO',
    color: '#8e44ad',
    plano: '/assets/images/COLISEOPLANO2.jpg',
    selectedColor: 'rgba(0, 100, 255, 0.5)',
    coordenadas: [
      [7200, 6236], [6700, 6268], [6440, 6480], [6387, 7432],
      [6592, 7636], [7180, 7624], [7366, 7440], [7354, 6352]
    ],
    pisos: [
      {
        numero: 0,
        nombre: 'Coliseo Deportivo',
        imagen: '/assets/images/COLISEO_PLANO1.jpg',
        descripcion: 'Área principal del coliseo con cancha multiusos',
        instalaciones: [
          { nombre: 'Cancha Central', icono: '🏀' },
          { nombre: 'Tribuna Norte', icono: '👥' },
          { nombre: 'Tribuna Sur', icono: '👥' }
        ]
      },
    ],
    instalaciones: [
      { nombre: 'Cancha Central', icono: '🏀' },
      { nombre: 'Tribuna Norte', icono: '👥' },
      { nombre: 'Tribuna Sur', icono: '👥' },
      { nombre: 'Vestuarios', icono: '🚿' },
      { nombre: 'Sala de Prensa', icono: '🎤' },
      { nombre: 'Baños', icono: '🚻' }
    ],
    imagenes: [
      {
        url: '/assets/images/COLIVISTA.jpg',
        alt: 'Cancha principal de fútbol',
        descripcion: 'Vista panorámica de la cancha principal'
      },
      {
        url: '/assets/images/PLANOS2.jpg',
        alt: 'Detalle del césped sintético',
        descripcion: 'Detalle de la superficie de juego'
      }
    ],
    equipamiento: [
      {
        nombre: 'Aros',
        imagen: '/assets/images/ARO.jpg',
        descripcion: 'Aros de baloncesto reglamentarios con redes trenzadas'
      },
      {
        nombre: 'Balones',
        imagen: '/assets/images/BALON2.jpg',
        descripcion: 'Balones de baloncesto oficiales para entrenamiento'
      },
      {
        nombre: 'Marcadores',
        imagen: '/assets/images/Marcador.jpg',
        descripcion: 'Sistema de marcación electrónico'
      }
    ]
  },
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
          { nombre: 'Laboratorio Asuntos públicos y de gobierno (LAB-GO)', tipo: 'LABORATORIOS' },
          { nombre: 'Bodega', tipo: 'ALMACÉN' },
          { nombre: 'Laboratorio de informática 04 (LAB-04)', tipo: 'LABORATORIOS' },
          { nombre: 'Aula Virtual 003 (AV-03)', tipo: 'AULA' },
          { nombre: 'Sala de Docentes de comercio ', tipo: 'DOCENTES' },
          { nombre: 'Secretaria de Comercio Exterior', tipo: 'SECRETARIA' },
          { nombre: 'Decanato F.C.I.I.A.E.E ', tipo: 'ADMINISTRATIVO' }
        ],
        ladoDerecho: [
          { nombre: 'Dirección de Comercio Exterior y Negociacion Internacional', tipo: 'DIRECCION' },
          { nombre: 'Sala de Docentes Comercio Exterior', tipo: 'DOCENTES' },
          { nombre: 'Dependencia ', tipo: 'ADMINISTRATIVOS' },
          { nombre: 'Salas de Docentes Administración de empresas', tipo: 'DOCENTES' },
          { nombre: 'Secretaria de Administración y Marketing', tipo: 'SECRETARIA' },
          { nombre: 'Dirección de Administracion de Empresas', tipo: 'DIRECCION' },
          { nombre: 'Archivo F.C.I.I.A.E.E', tipo: 'ARCHIVO' }
        ]
      },
      {
        numero: 1,
        nombre: 'Primer Piso',
        imagen: '/assets/images/edificio1-piso1.jpg',
        ladoDerecho: [
          { nombre: 'Archivo Comercio Exterior', tipo: 'ARCHIVO' },
          { nombre: 'Aula 101', tipo: 'AULA' },
          { nombre: 'Aula 102', tipo: 'AULA' },
          { nombre: 'Aula 103', tipo: 'AULA' },
          { nombre: 'Baños', tipo: 'BAÑOS' },
          { nombre: 'Aula 104', tipo: 'AULA' },
          { nombre: 'Aula 105', tipo: 'AULA' },
          { nombre: 'Aula 106', tipo: 'AULA' }
        ],
        ladoIzquierdo: [
          { nombre: 'Sala ADUPEC', tipo: 'ADMINISTRATIVOS' },
          { nombre: 'Aula 112', tipo: 'AULA' },
          { nombre: 'Aula 111', tipo: 'AULA' },
          { nombre: 'Aula 110', tipo: 'AULA' },
          { nombre: 'Baños', tipo: 'BAÑOS' },
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
          { nombre: 'Dirección Administración Publica', tipo: 'DIRECCION' },
          { nombre: 'Aula 201', tipo: 'AULA' },
          { nombre: 'Aula 202', tipo: 'AULA' },
          { nombre: 'Aula 203', tipo: 'AULA' },
          { nombre: 'Baños', tipo: 'BAÑOS' },
          { nombre: 'Aula 204', tipo: 'AULA' },
          { nombre: 'Aula 205', tipo: 'AULA' },
          { nombre: 'Sala de docentes Carrera de Administración Publica', tipo: 'DOCENTES' }
        ],
        ladoIzquierdo: [
          { nombre: 'Coordinación de Area', tipo: 'ADMINISTRATIVOS' },
          { nombre: 'Aula 212', tipo: 'AULA' },
          { nombre: 'Aula 211', tipo: 'AULA' },
          { nombre: 'Aula 210', tipo: 'AULA' },
          { nombre: 'Baños', tipo: 'BAÑOS' },
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
          { nombre: 'Aula 203', tipo: 'ADMINISTRATIVO', descripcion: 'Dirección de la facultad de las ciencias de la salud y de la educación' },
          { nombre: 'Servidor FAB LAB', tipo: 'SERVIDOR', descripcion: '💾 Contiene: Materias dictadas por el Ing. Jeffry Naranjo,📍Ubicacion: Dentro de FABLAB, Estado: inactivo 🔴'},
          { nombre: 'Servidor Laboratorio seguridad', tipo: 'SERVIDOR', descripcion: '💾 Contiene: Pendiente..... ,📍Ubicacion: Dentro laboratorio CyberSeguridad, Estado: Activo 🟢'}
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
        instalaciones: [
          { nombre: 'Lab. TICs', icono: '🖥️' },
          { nombre: 'Obs. Binacional', icono: '🌐' },
          { nombre: 'Lab. Neuro marketing', icono: '📊' },
          { nombre: 'Ofic. Complementarias', icono: '📋' },
          { nombre: 'Aulas Logística', icono: '📦' },
          { nombre: 'Labs. Izquierda', icono: '🔬' },
          { nombre: 'Restrooms', icono: '🚽' },
          { nombre: 'Sala Docentes', icono: '👥' },
          { nombre: 'Ascensor Izq.', icono: '⬆️' }
        ]
      },
      {
        numero: 1,
        nombre: 'Primer Piso',
        imagen: '/assets/images/edificio3-piso1.jpg',
        instalaciones: [
          { nombre: 'Aulas Idiomas', icono: '🔤' },
          { nombre: 'Aulas Logística', icono: '📦' },
          { nombre: 'Ofic. Admin.', icono: '📑' },
          { nombre: 'Restrooms', icono: '🚽' },
          { nombre: 'Ascensor Izq.', icono: '⬆️' }
        ]
      },
      {
        numero: 2,
        nombre: 'Segundo Piso',
        imagen: '/assets/images/edificio3-piso2.jpg',
        instalaciones: [
          { nombre: 'Aulas Nivelación', icono: '📐' },
          { nombre: 'Dir. Enfermería', icono: '🏥' },
          { nombre: 'Restrooms', icono: '🚽' },
          { nombre: 'Ascensor Izq.', icono: '⬆️' }
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
          { nombre: 'Baños generales', tipo: 'SERVICIO' },
          { nombre: 'Servidor Laboratorio Redes de Computación', tipo: 'SERVIDOR', descripcion: '💾 Contiene: Tesis monitoreo de camaras ,📍Ubicacion: Dentro laboratorio Redes, Estado: Activo 🟢'}
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
  descripcion: 'Complejo de laboratorios científicos para las Facultades de Ciencias de la Salud, Ciencias de la Educación, Industrias Agropecuarias y Ciencias Ambientales de la UPEC.',
  tipo: 'CIENTÍFICO',
  color: '#f1c40f',
  coordenadas: [
    [6175, 1232], [5623, 1220], [5596, 2060], [5851, 2076], [6116, 2036]
  ],
  pisos: [
    {
      numero: 0,
      nombre: 'Planta Baja',
      imagen: '/assets/images/laboratorios_piso_0.png',
      descripcion: 'En la Planta Baja se encuentran los laboratorios principales para las carreras técnicas y de salud. Este nivel alberga espacios especializados para prácticas en agropecuaria, alimentos, turismo y enfermería, así como áreas administrativas de servicio a estudiantes.',
      instalaciones: [
        { nombre: 'Laboratorios de Agropecuaria', icono: '🌱', facultad: 'Facultad de Industrias Agropecuarias y Ciencias Ambientales' },
        { nombre: 'Laboratorios de Alimentos', icono: '🍽', facultad: 'Facultad de Industrias Agropecuarias y Ciencias Ambientales' },
        { nombre: 'Laboratorios de Turismo', icono: '🏞', facultad: 'Facultad de Industrias Agropecuarias y Ciencias Ambientales' },
        { nombre: 'Laboratorios de Logística', icono: '🚚', facultad: 'Facultad de Industrias Agropecuarias y Ciencias Ambientales' },
        { nombre: 'Laboratorios de Enfermería', icono: '👩‍⚕', facultad: 'Facultad de Ciencias de la Salud y Ciencias de la Educación' },
        { nombre: 'Laboratorio Clínico', icono: '🧫', facultad: 'Facultad de Ciencias de la Salud y Ciencias de la Educación' },
        { nombre: 'Espacios para Educación Básica', icono: '📚', facultad: 'Facultad de Ciencias de la Salud y Ciencias de la Educación' },
        { nombre: 'Áreas Administrativas y Servicios', icono: '🏢', facultad: '' }
      ]
    },
    {
      numero: 1,
      nombre: 'Primer Piso',
      imagen: '/assets/images/laboratorios_piso_1.png',
      descripcion: 'El Primer Piso contiene laboratorios especializados con equipamiento avanzado. Aquí se encuentran instalaciones de alta tecnología para enfermería, análisis de alimentos y el Parque Softs donde se desarrollan competencias en informática y programación.',
      instalaciones: [
        { nombre: 'Laboratorios de Enfermería Especializados', icono: '🔬', facultad: 'Facultad de Ciencias de la Salud y Ciencias de la Educación' },
        { nombre: 'Laboratorios de Alimentos Avanzados', icono: '🧪', facultad: 'Facultad de Industrias Agropecuarias y Ciencias Ambientales' },
        { nombre: 'Parque Softs (Laboratorios de Informática)', icono: '💻', facultad: 'Facultad de Industrias Agropecuarias y Ciencias Ambientales' },
        { nombre: 'Aulas para Clases Teóricas', icono: '📝', facultad: '' }
      ]
    },
    {
      numero: 2,
      nombre: 'Segundo Piso',
      imagen: '/assets/images/laboratorios_piso_2.png',
      descripcion: 'El Segundo Piso está dedicado a la investigación avanzada y prácticas especializadas. Cuenta con un Laboratorio Clínico equipado con tecnología de punta, instalaciones para enfermería avanzada, espacios de investigación multidisciplinaria y un moderno laboratorio de veterinaria.',
      instalaciones: [
        { nombre: 'Laboratorio Clínico Especializado', icono: '🧬', facultad: 'Facultad de Ciencias de la Salud y Ciencias de la Educación' },
        { nombre: 'Instalaciones de Enfermería Avanzadas', icono: '🏥', facultad: 'Facultad de Ciencias de la Salud y Ciencias de la Educación' },
        { nombre: 'Laboratorios de Investigación', icono: '🔎', facultad: '' },
        { nombre: 'Laboratorio de Veterinaria', icono: '🐾', facultad: 'Facultad de Industrias Agropecuarias y Ciencias Ambientales' }
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
        { nombre: 'Unidad Pública', icono: '🏛️' }
      ]
    },
    {
      numero: 1,
      nombre: 'Primer Piso',
      imagen: '/assets/images/edificio-central-piso1.jpg',
      instalaciones: [
        { nombre: 'Enfermería', icono: '🏥' },
        { nombre: 'Odontología', icono: '🦷' },
        { nombre: 'Nutriólogo', icono: '🥗' },
        { nombre: 'Vinculación con la Sociedad', icono: '🤝' }
      ]
    },
    {
      numero: 2,
      nombre: 'Segundo Piso',
      imagen: '/assets/images/edificio-central-piso2.jpg',
      instalaciones: [
        { nombre: 'Talento Humano', icono: '👥' },
        { nombre: 'Oficina 1', icono: '🏢' },
        { nombre: 'Bienestar Universitario', icono: '🎓' },
        { nombre: 'Nutrición', icono: '🍎' }
      ],
      ladoIzquierdo: [
        { nombre: 'DataCenter', tipo: 'DATA', descripcion: '💾 Contiene: 10 Servidores de toda la Universidad,📍Ubicacion: Segunda Planta Edificio Principal , Estado: Activo 🟢'}
      ]
    },
    {
      numero: 3,
      nombre: 'Tercer Piso',
      imagen: '/assets/images/edificio-central-piso3.jpg',
      instalaciones: [
        { nombre: 'Rectorado', icono: '👨‍💼' },
        { nombre: 'Vicerrectorado', icono: '👩‍💼' }
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

// Función para transformar un punto individual
const transformAreaVerdePoint = (point: [number, number]): [number, number] => {
  const [x, y] = point;
  return [x, y]; // aquí puede aplicar transformaciones si desea
};

// Función para transformar las coordenadas de un solo polígono
const transformPolygono = (coordinates: [number, number][]): [number, number][] => {
  return coordinates.map(point => transformAreaVerdePoint(point));
};

// Función para transformar todos los polígonos de un área verde
const transformPolygons = (coordenadas: [number, number][][]): [number, number][][] => {
  return coordenadas.map(polygon => transformPolygono(polygon));
};

// tipos para las Areas verdes 
export interface AreaVerdeInfo {
  nombre: string;
  descripcion: string
  coordenadas: [number, number][][];
  color: {
    fill: string;
    border: string;
  };
  ubicacion: string;
  tipo: string;
  instalaciones: { nombre: string; icono: string }[];
  fotografia: string
  imagenes: string[];
}

// Coordenadas originales para las areas verdes
const areasVerdes: AreaVerdeInfo[] = [
  {
    nombre: "Area Verde 1",
    descripcion: "Jardín ornamental junto a los lectores biométricos, con diseño alineado para estética y paso peatonal.",
    coordenadas: [
      [ // Primer polígono
        [5577, 162],
        [5574, 208],
        [5023, 310],
        [5020, 284]
      ],
      [ // Segundo polígono
        [4964, 594],
        [4904, 606],
        [4919, 326],
        [5002, 328]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Entrada principal del edificio norte(Edificio de Postgrados)",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/Area1.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea1.jpg"
    ]
  },
  {
    nombre: "Area Verde 2",
    descripcion: "Franja vegetal con alineación simétrica de cinco árboles ornamentales, ideal para sombra y estética.",
    coordenadas: [
      [ //Polígono 1
        [4553, 426],
        [4535, 605],
        [4036, 603],
        [4024, 613],
        [4008, 634],
        [3993, 775],
        [3963, 776],
        [3947, 902],
        [3961, 904],
        [3951, 1014],
        [3924, 1013],
        [3958, 623],
        [3969, 592],
        [3978, 581],
        [4003, 564],
        [4037, 550]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Entrada principal del edificio norte(Edificio de Postgrados)",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/Area2.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea2.jpg",
    ]
  },
  {
    nombre: "Area Verde 3",
    descripcion: "Grupo de zonas verdes dispuestas en forma triangular, destacando letras gigantes 'UPEC' y áreas de descanso.",
    coordenadas: [
      [ //Polígono 1
        [4043, 1500],
        [4122, 1500],
        [4125, 1535],
        [4218, 1540],
        [4324, 1660],
        [4324, 1673],
        [4174, 1804],
        [4134, 1804],
        [4048, 1720]
      ],
      [ //Polígono 2
        [4553, 1893],
        [4529, 1864],
        [4508, 1856],
        [4379, 1715],
        [4363, 1713],
        [4211, 1847],
        [4207, 1885],
        [4323, 2011],
        [4341, 2007],
        [4350, 2020],
        [4347, 2023],
        [4373, 2054]
      ],
      [ // Polígono 3
        [4533, 1565],
        [4593, 1566],
        [4595, 1558],
        [4730, 1566],
        [4726, 1740],
        [4598, 1849],
        [4541, 1814],
        [4420, 1681],
        [4416, 1665]
      ],
      [
        [4452, 1559],
        [4379, 1625],
        [4366, 1623],
        [4287, 1548]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Frente al edificio de postgrados",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso bajo cubierta vegetal', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area3.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea3.jpg",
      "/assets/images/zonas/plantas/plantasarea3_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 4",
    descripcion: "Jardín central con zonas verdes bien definidas, punto de encuentro entre edificios académicos.",
    coordenadas: [
      [
        [5026, 1557],
        [5025, 1537],
        [4852, 1531],
        [4840, 1547],
        [4839, 1571],
        [4788, 1567],
        [4782, 1712],
        [4775, 1719],
        [4774, 1729],
        [4778, 1739],
        [4782, 1742],
        [5119, 1747],
        [5181, 1808],
        [5198, 1798],
        [5207, 1782],
        [5214, 1557],
        [5204, 1543],
        [5175, 1543],
        [5173, 1560]
      ],
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Por el edificio de postrgados al frente del edificio de laboratorios",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/Area4.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea4.jpg"
    ]
  },
  {
    nombre: "Area Verde 5",
    descripcion: "Espacio paisajístico con árboles y senderos curvos.",
    coordenadas: [
      [ //Poligono 1
        [5406, 1307],
        [5408, 1367],
        [5399, 1356],
        [5390, 1346],
        [5378, 1340],
        [5261, 1336],
        [5232, 1358],
        [5232, 1321],
        [5257, 1297]
      ],
      [ // Polígono 2
        [5349, 1382],
        [5274, 1381],
        [5253, 1880],
        [5382, 1755],
        [5337, 1719]
      ],
      [ // Polígono 3
        [5448, 1797],
        [5326, 1915],
        [5352, 1950],
        [5374, 1927],
        [5489, 2041],
        [5502, 2027],
        [5532, 2030],
        [5541, 1850]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Por el edificio de postrgados al frente del edificio de laboratorios",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Sendero interpretativo entre vegetación nativa', icono: '🚶‍♂️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area5.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea5.jpg"
    ]
  },
  {
    nombre: "Area Verde 6",
    descripcion: "Área ajardinada con caminos peatonales, rodeada de vegetación y diseñada para el descanso activo.",
    coordenadas: [
      [ //Polígono 1
        [3909, 1370],
        [3924, 1369],
        [3927, 1289],
        [3909, 1288],
        [3902, 1297],
        [3893, 1607],
        [3906, 1607],
        [3913, 1627],
        [3919, 1639],
        [3970, 1641],
        [3967, 1502],
        [3905, 1498]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Frente al edificio de postgrados",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/Area6.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea6.jpg"
    ]
  },
  {
    nombre: "Area Verde 7",
    descripcion: "Zona triangular con árboles en los extremos, ubicada entre bloques académicos, ideal para recreación ligera.",
    coordenadas: [
      [ //Polígono 7
        [4211, 2559],
        [4225, 2571],
        [4217, 2584],
        [4228, 2613],
        [4238, 2627],
        [4251, 2643],
        [4267, 2659],
        [4284, 2673],
        [4300, 2685],
        [4312, 2689],
        [4317, 2690],
        [4319, 2683],
        [4329, 2685],
        [4428, 2795],
        [4421, 2798],
        [4427, 2811],
        [4459, 2845],
        [4483, 2833],
        [4511, 2842],
        [4521, 2848],
        [4532, 2849],
        [4543, 2872],
        [4552, 2883],
        [4555, 2975],
        [4485, 3042],
        [4476, 3037],
        [4471, 3052],
        [4467, 3043],
        [4459, 3043],
        [4425, 3077],
        [4425, 3088],
        [4317, 3195],
        [4310, 3184],
        [4293, 3195],
        [4275, 3206],
        [4255, 3219],
        [4235, 3242],
        [4215, 3269],
        [4200, 3293],
        [4207, 3310],
        [4191, 3328]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "En medio de los edificios de aulas 1 y 3",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
    ],
    fotografia: "/assets/images/zonas/Area7.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea7.jpg",
      "/assets/images/zonas/plantas/plantasarea7_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 8",
    descripcion: "Espacio verde amplio, rodeado de árboles altos, diseñado para sombra y relajación al aire libre.",
    coordenadas: [
      [ // Polígono 8
        [6211, 1270],
        [6393, 2033],
        [6450, 2152],
        [6151, 2141],
        [6187, 1749],
        [6156, 1751],
        [6172, 1599],
        [6205, 1594]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Detras del edificio de Laboratorios",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' }
    ],
    fotografia: "/assets/images/zonas/Area8.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea8.jpg"
    ]
  },
  {
    nombre: "Area Verde 9",
    descripcion: "Área al aire libre para actividades recreativas y pausas activas.'",
    coordenadas: [
      [ // Polígono 1
        [5039, 2738],
        [5054, 2745],
        [5068, 2751],
        [5099, 2766],
        [5118, 2782],
        [5140, 2799],
        [5165, 2840],
        [5176, 2865],
        [5184, 2892],
        [5374, 2887],
        [5138, 2657],
        [5045, 2648]
      ],
      [ // Poligono 2
        [5181, 2966],
        [5376, 2966],
        [5129, 3205],
        [5036, 3210],
        [5033, 3107],
        [5065, 3102],
        [5097, 3083],
        [5126, 3060],
        [5159, 3025]
      ],
      [ // Polígono 3
        [4954, 3116],
        [4950, 3179],
        [4959, 3206],
        [4869, 3203],
        [4650, 2969],
        [4811, 2963],
        [4824, 3007],
        [4846, 3044],
        [4840, 3052],
        [4859, 3074],
        [4871, 3066],
        [4904, 3092]
      ],
      [ // Polígono 4
        [4963, 2652],
        [4963, 2740],
        [4932, 2752],
        [4904, 2768],
        [4878, 2788],
        [4859, 2802],
        [4838, 2830],
        [4821, 2862],
        [4805, 2893],
        [4655, 2886],
        [4878, 2649]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "En medio de los edificios de aulas 1 y 3",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
    ],
    fotografia: "/assets/images/zonas/Area29.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea29.jpg",
      "/assets/images/zonas/plantas/plantasarea29_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 10",
    descripcion: "Área abierta con senderos peatonales entre zonas de césped, ideal para circulación y descanso.",
    coordenadas: [
      [ // Polígono 1
        [5717, 2640],
        [5755, 2662],
        [5834, 2677],
        [5860, 2851],
        [5840, 2886],
        [5811, 2891],
        [5802, 2880],
        [5482, 2882]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto al edificio nuevo",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area10.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea11_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 11",
    descripcion: "Espacio lineal con senderos que conecta distintos sectores del campus, en medio de jardines amplios.",
    coordenadas: [
      [ // Polígono 1
        [5485, 2970],
        [5839, 2976],
        [5848, 3006],
        [5822, 3098],
        [5774, 3160],
        [5704, 3211]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto al edificio nuevo",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area11.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea11.jpg"
    ]
  },
  {
    nombre: "Area Verde 12",
    descripcion: "Zona con árboles nativos y vegetación baja, ubicada cerca de estacionamientos para aulas.",
    coordenadas: [
      [ // Polígono 1
        [4697, 4002],
        [4641, 3922],
        [4567, 3984],
        [4373, 3784],
        [4217, 3938],
        [4234, 3984]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto al Edificio de Aulas 1 cerca de su estacionamiento",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/Area12.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/area12.jpg",
      "/assets/images/zonas/plantas/area12plantas.jpg",
      "/assets/images/zonas/plantas/plantasarea12.jpg"
    ]
  },
  {
    nombre: "Area Verde 13",
    descripcion: "Gran extensión verde con abundante vegetación, caminos internos y árboles que rodean la plaza roja.",
    coordenadas: [
      [ // Polígono 1
        [5196, 4048],
        [5231, 4048],
        [5260, 4082],
        [5287, 4103],
        [5337, 4105],
        [5334, 4363],
        [5192, 4365]
      ],
      [ // Polígono 2
        [5416, 4097],
        [5397, 4097],
        [5393, 4366],
        [5412, 4366]
      ],
      [ // Polígono 3
        [5628, 3692],
        [5685, 3778],
        [5719, 3850],
        [5675, 3868],
        [5641, 3880],
        [5604, 3902],
        [5585, 3919],
        [5546, 3967],
        [5520, 4011],
        [5507, 4052],
        [5284, 4046],
        [5280, 4050],
        [5262, 4032],
        [5244, 4001],
        [5229, 3999],
        [5226, 4006],
        [5196, 4003],
        [5195, 3971],
        [5229, 3969],
        [5271, 4010]
      ],
      [ // Polígono 4
        [5475, 4099],
        [5495, 4144],
        [5531, 4193],
        [5555, 4224],
        [5598, 4251],
        [5631, 4268],
        [5653, 4274],
        [5623, 4358],
        [5611, 4365],
        [5464, 4366],
        [5462, 4097]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto a la concha acustica de la plaza roja",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area13.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea13.jpg",
      "/assets/images/zonas/plantas/plantasarea13_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 14",
    descripcion: "Área ajardinada cercana al edificio principal, con árboles y zonas sombreadas para estancia.",
    coordenadas: [
      [ // Polígono 1
        [5133, 4046],
        [5130, 4360],
        [4861, 4363],
        [4866, 4047]
      ],
      [ // Polígono 2
        [4810, 4001],
        [4780, 4000],
        [4771, 4332],
        [4799, 4330]
      ],
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto al edificio principal ",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/1.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea14.jpg",
      "/assets/images/zonas/plantas/plantasarea14_1.jpg",
      "/assets/images/zonas/plantas/plantasarea14_2.jpg",
      "/assets/images/zonas/plantas/plantasarea14_3.jpg"
    ]
  },
  {
    nombre: "Area Verde 15",
    descripcion: "Zona con árboles frondosos y caminos peatonales, pensada para el esparcimiento y circulación estudiantil.",
    coordenadas: [
      [ // Polígono 1
        [5963, 4186],
        [6053, 4296],
        [6047, 4308],
        [5966, 4305],
        [5952, 4318],
        [5951, 4388],
        [5898, 4418],
        [5801, 4418],
        [5788, 4294],
        [5849, 4271],
        [5895, 4239],
        [5923, 4220]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto a la concha acustica de la plaza roja",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/Area15.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea15.jpg"
    ]
  },
  {
    nombre: "Area Verde 16",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [4037, 4093],
        [4030, 4205],
        [4035, 4219],
        [4027, 4246],
        [4018, 4274],
        [4005, 4302],
        [3991, 4328],
        [3976, 4360],
        [3964, 4399],
        [3957, 4444],
        [3954, 4477],
        [3957, 4512],
        [3966, 4560],
        [3976, 4590],
        [3987, 4614],
        [3913, 4617],
        [3928, 4093]
      ],
      [ // Polígono 2
        [4036, 4334],
        [4031, 4611],
        [4019, 4598],
        [4011, 4568],
        [4004, 4553],
        [3999, 4524],
        [3995, 4491],
        [3997, 4454],
        [4002, 4416],
        [4011, 4381]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Al frente del edificio principal ",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌱' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Sendero interpretativo entre vegetación nativa', icono: '🚶‍♂️' }
    ],
    fotografia: "/assets/images/zonas/Area16.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea24.jpg",
      "/assets/images/zonas/plantas/plantasarea24_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 17",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [4849, 4416],
        [4768, 4487],
        [5251, 4473],
        [5248, 4608],
        [5307, 4621],
        [5334, 4618],
        [5339, 4423]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto al edificio principal",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/Area17.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea17.jpg"
    ]
  },
  {
    nombre: "Area Verde 18",
    descripcion: "Área con senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [6236, 4395],
        [6184, 4393],
        [6153, 4372],
        [6150, 4855],
        [6238, 4850]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto a la cancha A1 ",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/Area18y19.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea18y19.jpg"
    ]
  },
  {
    nombre: "Area Verde 19",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
      [
        [6235, 4931],
        [6148, 4929],
        [6144, 5397],
        [6226, 5481]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto a la coancha A1 y Plaza Roja",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/Area18y19.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea18y19.jpg"
    ]
  },
  {
    nombre: "Area Verde 20",
    descripcion: "Área verde de forma geometrica con Altar de Bnaderas",
    coordenadas: [
      [ // Polígono 1
        [5457, 5345],
        [5619, 5346],
        [5638, 5394],
        [5608, 5408],
        [5577, 5418],
        [5550, 5441],
        [5523, 5472],
        [5498, 5509],
        [5476, 5527],
        [5451, 5519]
      ],
      [ // Polígono 2
        [5533, 5570],
        [5521, 5602],
        [5514, 5634],
        [5512, 5664],
        [5515, 5693],
        [5522, 5716],
        [5528, 5738],
        [5539, 5758],
        [5552, 5780],
        [5567, 5800],
        [5579, 5812],
        [5598, 5831],
        [5612, 5842],
        [5635, 5858],
        [5658, 5869],
        [5690, 5877],
        [5708, 5879],
        [5734, 5882],
        [5767, 5879],
        [5793, 5874],
        [5813, 5867],
        [5828, 5857],
        [5847, 5849],
        [5861, 5840],
        [5875, 5827],
        [5890, 5811],
        [5910, 5788],
        [5923, 5770],
        [5933, 5748],
        [5940, 5729],
        [5946, 5707],
        [5951, 5680],
        [5952, 5655],
        [5951, 5631],
        [5951, 5620],
        [5944, 5599],
        [5935, 5574],
        [5932, 5551],
        [5929, 5531],
        [5886, 5469],
        [5868, 5453],
        [5851, 5437],
        [5832, 5422],
        [5812, 5409],
        [5795, 5400],
        [5773, 5396],
        [5794, 5345],
        [5877, 5349],
        [5917, 5394],
        [5965, 5439],
        [6017, 5491],
        [6032, 5501],
        [6052, 5505],
        [6094, 5546],
        [6155, 5611],
        [6233, 5690],
        [6295, 5755],
        [6330, 5792],
        [6322, 5944],
        [6314, 6299],
        [6277, 6296],
        [6235, 6290],
        [6189, 6281],
        [6164, 6279],
        [6142, 6268],
        [6136, 6282],
        [6073, 6277],
        [6038, 6271],
        [5986, 6269],
        [5928, 6263],
        [5893, 6260],
        [5438, 5790],
        [5458, 5770],
        [5471, 5755],
        [5486, 5731],
        [5492, 5707],
        [5491, 5684],
        [5493, 5571]
      ],
      [ // Polígono 3
        [5866, 5620],
        [5829, 5644],
        [5829, 5670],
        [5827, 5685],
        [5822, 5700],
        [5814, 5714],
        [5807, 5723],
        [5799, 5731],
        [5791, 5739],
        [5782, 5745],
        [5773, 5749],
        [5763, 5751],
        [5751, 5754],
        [5740, 5755],
        [5722, 5755],
        [5709, 5755],
        [5699, 5750],
        [5690, 5746],
        [5679, 5742],
        [5669, 5733],
        [5658, 5722],
        [5649, 5709],
        [5642, 5696],
        [5638, 5685],
        [5636, 5672],
        [5634, 5656],
        [5634, 5642],
        [5595, 5611],
        [5588, 5627],
        [5584, 5648],
        [5585, 5672],
        [5591, 5697],
        [5599, 5717],
        [5609, 5739],
        [5625, 5756],
        [5646, 5775],
        [5668, 5790],
        [5696, 5801],
        [5723, 5805],
        [5751, 5802],
        [5774, 5794],
        [5803, 5784],
        [5819, 5769],
        [5832, 5754],
        [5845, 5741],
        [5855, 5725],
        [5865, 5704],
        [5873, 5685],
        [5873, 5654],
        [5874, 5632]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto a la coancha A1, plaza roja y Edifico aulas  2",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area20.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea20.jpg",
      "/assets/images/zonas/plantas/plantasarea20_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 21",
    descripcion: "Área verde de árboles y senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [5337, 5024],
        [5309, 5023],
        [5308, 5030],
        [5302, 5032],
        [5301, 5038],
        [5277, 5035],
        [5278, 5023],
        [5269, 5024],
        [5266, 5017],
        [5237, 5016],
        [5237, 5116],
        [5167, 5115],
        [5159, 5127],
        [5154, 5134],
        [5144, 5141],
        [5133, 5146],
        [5122, 5150],
        [5112, 5154],
        [5104, 5155],
        [5094, 5156],
        [5083, 5158],
        [5074, 5158],
        [5065, 5157],
        [5060, 5158],
        [5060, 5174],
        [4961, 5171],
        [4945, 5202],
        [5257, 5203],
        [5337, 5221]
      ],
      [ // Polígono 2
        [5314, 5514],
        [5251, 5274],
        [5266, 5260],
        [5334, 5277],
        [5336, 5492]
      ],
      [ // Polígono 3
        [5208, 5263],
        [5186, 5262],
        [5181, 5543],
        [5240, 5541],
        [5256, 5464]
      ],
      [ // Polígono 4
        [5290, 5479],
        [5298, 5507],
        [5306, 5534],
        [5320, 5562],
        [5337, 5586],
        [5355, 5599],
        [5370, 5603],
        [5389, 5603],
        [5399, 5597],
        [5408, 5590],
        [5419, 5575],
        [5417, 5696],
        [5412, 5701],
        [5376, 5740],
        [5323, 5691],
        [5235, 5592],
        [5260, 5484],
        [5260, 5479]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "En medio del edificio central y edificio aulas 2",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
    ],
    fotografia: "/assets/images/zonas/Area21.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea21.jpg"
    ]
  },
  {
    nombre: "Area Verde 22",
    descripcion: "Área de forma cuadrada de árboles y senderos para caminar.",
    coordenadas: [
      [ // / Polígono 1
        [5128, 5266],
        [5123, 5259],
        [4857, 5250],
        [4851, 5257],
        [4855, 5527],
        [4866, 5533],
        [5125, 5539]
      ],
      [ // Polígono 2
        [4795, 5278],
        [4767, 5276],
        [4760, 5527],
        [4777, 5533],
        [4796, 5426]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto al edificio central y edificio aulas 2",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Sendero interpretativo entre vegetación nativa', icono: '🚶‍♂️' }
    ],
    fotografia: "/assets/images/zonas/Area22.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/area12.jpg",
      "/assets/images/zonas/plantas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 23",
    descripcion: "Área de forma triangular con árbol en el centro y senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [4718, 5644],
        [4773, 5645],
        [4774, 5705],
        [4521, 5954],
        [4280, 5672],
        [4288, 5632]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "En medio del edificio central y edificio aulas 2",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' }
    ],
    fotografia: "/assets/images/zonas/Area23.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea23.jpg",
      "/assets/images/zonas/plantas/plantasarea23_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 24",
    descripcion: "Área verde con abundante vegetacion",
    coordenadas: [
      [ // Polígono 1
        [3917, 4943],
        [3986, 4934],
        [3975, 4958],
        [3967, 4976],
        [3961, 5003],
        [3959, 5031],
        [3958, 5062],
        [3960, 5101],
        [3969, 5136],
        [3975, 5161],
        [3986, 5182],
        [3998, 5212],
        [4011, 5231],
        [4021, 5250],
        [4030, 5273],
        [4036, 5295],
        [4046, 5322],
        [4049, 5354],
        [4051, 5403],
        [4061, 5522],
        [4069, 5577],
        [4086, 5640],
        [4010, 5640],
        [4010, 5631],
        [3999, 5630],
        [4000, 5633],
        [3980, 5632],
        [3968, 5641]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Frente al edificio central",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Sendero interpretativo entre vegetación nativa', icono: '🚶‍♂️' },
    ],
    fotografia: "/assets/images/zonas/Area24y25.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea24.jpg",
      "/assets/images/zonas/plantas/plantasarea24_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 25",
    descripcion: "Área verde con abundante vegetacion",
    coordenadas: [
      [ // Polígono 1
        [4011, 4991],
        [4023, 5053],
        [4035, 5055],
        [4040, 5217],
        [4016, 5154],
        [4004, 5127],
        [3999, 5091],
        [3999, 5057],
        [4002, 5012]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Frente al edificio central con senderos para caminar",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Sendero interpretativo entre vegetación nativa', icono: '🚶‍♂️' }
    ],
    fotografia: "/assets/images/zonas/Area24y25.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea25.jpg"
    ]
  },
  {
    nombre: "Area Verde 26",
    descripcion: "Área Verde",
    coordenadas: [
      [ // Polígono 1
        [7294, 5718],
        [7319, 5897],
        [7323, 6029],
        [7247, 6019],
        [7245, 5913],
        [6936, 5928],
        [6940, 5842],
        [7086, 5841],
        [7087, 5731],
        [7098, 5723]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto al Coliseo 5 de Abril",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Árboles frutales de uso comunitario', icono: '🍊' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
    ],
    fotografia: "/assets/images/zonas/Area26.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea26.jpg",
      "/assets/images/zonas/plantas/plantasarea26_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 27",
    descripcion: "Área verde sin arboles",
    coordenadas: [
      [ // Polígono 1
        [7373, 4592],
        [7340, 4593],
        [7334, 4798],
        [7323, 4931],
        [7305, 5080],
        [7284, 5092],
        [7265, 5097],
        [7213, 5093],
        [7214, 5055],
        [7230, 4993],
        [7232, 4909],
        [7234, 4774],
        [7202, 4692],
        [7182, 4667],
        [7166, 4664],
        [7154, 5107],
        [7138, 5339],
        [7124, 5348],
        [7098, 5355],
        [7018, 5357],
        [7017, 5310],
        [6972, 5309],
        [6965, 5441],
        [7098, 5429],
        [7093, 5505],
        [7085, 5510],
        [7083, 5544],
        [7091, 5548],
        [7093, 5583],
        [7374, 5581]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto a la coancha A1",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area27.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea26.jpg",
      "/assets/images/zonas/plantas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 28",
    descripcion: "Área verde de y senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [6314, 6390],
        [6310, 6798],
        [5742, 6780],
        [5627, 6641],
        [5688, 6578],
        [5707, 6599],
        [5829, 6481],
        [5839, 6490],
        [5875, 6451],
        [5872, 6434],
        [5856, 6408],
        [5922, 6344],
        [6071, 6362],
        [6143, 6361],
        [6159, 6372],
        [6248, 6378]
      ],
      [ // Polígono 2
        [5596, 6669],
        [5686, 6773],
        [5519, 6772],
        [5484, 6734],
        [5526, 6691],
        [5552, 6705],
        [5558, 6697],
        [5554, 6686],
        [5562, 6679],
        [5577, 6691]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "En medio del edifico aulas 2 y Coliseo 5 de Abril",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Sendero interpretativo entre vegetación nativa', icono: '🚶‍♂️' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area28.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea34.jpg"
    ]
  },
  {
    nombre: "Area Verde 29",
    descripcion: "Área verde entre pileta. edificio aulas 2 y edificio aulas 4",
    coordenadas: [
      [ // Polígono 1
        [5043, 6611],
        [5048, 6583],
        [5204, 6574],
        [5365, 6730],
        [5360, 6776],
        [5182, 6771],
        [5172, 6737],
        [5160, 6704],
        [5144, 6679],
        [5107, 6647]
      ],
      [ // Polígono 2
        [5177, 6847],
        [5351, 6849],
        [5354, 6878],
        [5127, 7100],
        [5026, 7097],
        [5028, 7002],
        [5038, 6991],
        [5055, 6991],
        [5081, 6980],
        [5113, 6957],
        [5140, 6929],
        [5156, 6907],
        [5168, 6877]
      ],
      [ // Polígono 3
        [4959, 6996],
        [4956, 7093],
        [4855, 7092],
        [4690, 6871],
        [4701, 6823],
        [4822, 6827],
        [4836, 6859],
        [4845, 6882],
        [4853, 6906],
        [4861, 6916],
        [4857, 6923],
        [4874, 6944],
        [4881, 6936],
        [4911, 6965]
      ],
      [ // Polígono 4
        [4987, 6603],
        [4975, 6574],
        [4890, 6576],
        [4880, 6564],
        [4853, 6564],
        [4692, 6722],
        [4705, 6755],
        [4829, 6758],
        [4842, 6721],
        [4863, 6680],
        [4897, 6643],
        [4941, 6617]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "En medio del edificio aulas 2 y edificio aulas 4",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Sendero interpretativo entre vegetación nativa', icono: '🚶‍♂️' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
    ],
    fotografia: "/assets/images/zonas/Area29.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea29.jpg",
      "/assets/images/zonas/plantas/plantasarea29_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 30",
    descripcion: "Área verde de forma triangular con vegetacion y arbol en el cento",
    coordenadas: [
      [ // Polígono 1
        [4581, 6758],
        [4438, 6608],
        [4393, 6614],
        [4365, 6614],
        [4335, 6593],
        [4316, 6562],
        [4301, 6536],
        [4310, 6522],
        [4280, 6494],
        [4284, 6540],
        [4244, 7125],
        [4273, 7080],
        [4319, 7050],
        [4338, 7038],
        [4346, 7047],
        [4451, 6937],
        [4443, 6930],
        [4480, 6888],
        [4494, 6896],
        [4500, 6884],
        [4514, 6897],
        [4579, 6827]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto al edificio de aulas 2, edificio aulas 4 y parqueadero",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area7.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea30.jpg",
      "/assets/images/zonas/plantas/plantasarea30_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 31",
    descripcion: "Área verde y senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [6090, 6875],
        [6052, 6912],
        [6030, 6913],
        [5993, 6870]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Frente al Coliseo 5 de Abril",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Sendero interpretativo entre vegetación nativa', icono: '🚶‍♂️' },
      { nombre: 'Espacio natural con esculturas', icono: '🗿' }
    ],
    fotografia: "/assets/images/zonas/Area31.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea31.jpg",
      "/assets/images/zonas/plantas/plantasarea31_1.jpg"
    ]
  },
  {
    nombre: "Area Verde 32",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [6309, 6886],
        [6312, 6933],
        [6274, 6976],
        [6285, 6974],
        [6281, 7198],
        [6247, 7197],
        [6234, 7657],
        [6126, 7655],
        [5890, 7379],
        [5862, 7342],
        [5490, 6908],
        [5485, 6885],
        [5513, 6853],
        [5943, 6870],
        [6018, 6950],
        [6034, 6955],
        [6049, 6956],
        [6066, 6952],
        [6078, 6944],
        [6136, 6876]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "En medio del Coliseo 5 de Abril y Edifio de aulas 4",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Sendero interpretativo entre vegetación nativa', icono: '🚶‍♂️' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area32.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea32.jpg"
    ]
  },
  {
    nombre: "Area Verde 33",
    descripcion: "Área verde con vegetacion a su alrededor",
    coordenadas: [
      [ // Polígono 1
        [4401, 7687],
        [4228, 7884],
        [4227, 7897],
        [4232, 7903],
        [4624, 7961],
        [4624, 7835],
        [4616, 7837],
        [4615, 7828],
        [4554, 7887]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto al edifico de aulas 4 y parqueadero",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Jardinería ecológica de bajo mantenimiento', icono: '🧑‍🌾' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area33.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea33.jpg"
    ]
  },
  {
    nombre: "Area Verde 34",
    descripcion: "Área verde con senderos para caminar",
    coordenadas: [
      [ // Polígono 1
        [6045, 7717],
        [5798, 7415],
        [5334, 7885],
        [5615, 7698]
      ],
      [ // Polígono 2
        [5604, 7791],
        [5592, 8051],
        [5353, 8035],
        [5334, 8022],
        [5332, 7950],
        [5585, 7782],
        [5597, 7781]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "En medio de del edificio de aulas 4 y parqueadero de buses",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Presencia de vegetación nativa y adaptada', icono: '🌳' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Espacio natural para contemplación y relajación', icono: '🧘' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area34.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea34.jpg"
    ]
  },
  {
    nombre: "Area Verde 35",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [3368, 2048],
        [3023, 1996],
        [3008, 2044],
        [3119, 2080],
        [3168, 2120],
        [3187, 2188],
        [3232, 2260],
        [3264, 2328],
        [3292, 2379],
        [3301, 2429],
        [3305, 2473],
        [3306, 2514],
        [3306, 2549],
        [3303, 2584],
        [3301, 2603],
        [3299, 2612],
        [3297, 2622],
        [3295, 2635],
        [3293, 2647],
        [3287, 2677],
        [3283, 2694],
        [3279, 2702],
        [3276, 2712],
        [3273, 2722],
        [3268, 2737],
        [3266, 2746],
        [3277, 2748],
        [3275, 2765],
        [3274, 2793],
        [3274, 2851],
        [3234, 2939],
        [3163, 2994],
        [3070, 2991],
        [3022, 3010],
        [2979, 3023],
        [2924, 3031],
        [2881, 3032],
        [2844, 3031],
        [2814, 3024],
        [2779, 3016],
        [2747, 3004],
        [2704, 2985],
        [2681, 2971],
        [2659, 2957],
        [2636, 2937],
        [2636, 2937],
        [2616, 2914],
        [2599, 2895],
        [2579, 2869],
        [2557, 2836],
        [2543, 2811],
        [2526, 2779],
        [2512, 2751],
        [2497, 2715],
        [2490, 2687],
        [2487, 2673],
        [2465, 2682],
        [2440, 2721],
        [2245, 3014],
        [2278, 3047],
        [2277, 3117],
        [3302, 3101],
        [3340, 3082],
        [3357, 3024],
        [3404, 2050]
      ]
    ],
    color: {
      fill: '#2e7d32',     // verde fuerte (relleno)
      border: '#1b5e20'
    },
    ubicacion: "Junto a la concha acustica límites entre calle México y Avenida Universitaria",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Cobertura arbórea para conservación ambiental', icono: '🌿' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area35.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea35.jpg"
    ]
  },
  {
    nombre: "Area Verde 36",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [2123, 700],
        [2311, 880],
        [2595, 496],
        [2926, 784],
        [3037, 788],
        [3036, 415],
        [3053, 385],
        [3032, 318]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Junto a las aulas de aprendizaje cultural, contiguo al Parqueadero",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area36.jpeg",
    imagenes: [
    ]
  },
  {
    nombre: "Area Verde 37",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
      [ // Polígono 1
        [1598, 2749],
        [1900, 3034],
        [1909, 3115],
        [865, 3106],
        [864, 2996],
        [782, 2996],
        [758, 3101],
        [731, 3103],
        [123, 1697],
        [2112, 706],
        [2032, 826],
        [2048, 850],
        [2037, 866],
        [2006, 836],
        [2021, 818],
        [1996, 792],
        [1978, 812],
        [1965, 801],
        [1095, 2110],
        [1066, 2075],
        [1036, 2125],
        [562, 1660],
        [355, 2009],
        [819, 2492],
        [776, 2569],
        [825, 2560],
        [1368, 3086]
      ]
    ],
    color: {
      fill: '#2e7d32',
      border: '#1b5e20'
    },
    ubicacion: "Límites de las canchas de baloncesto y fútbol y cerramiento del Centro Cultural.",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Zona de descanso', icono: '🛋️' },
      { nombre: 'Cobertura de césped', icono: '🌾' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area37.jpeg",
    imagenes: [
      "/assets/images/zonas/plantas/plantasarea37.jpg"

    ]
  },
]

// Crear areas verdes con coordenadas transformadas
export const areasVerdesupec: AreaVerdeInfo[] = areasVerdes.map(area => ({
  ...area,
  coordenadas: transformPolygons(area.coordenadas)
}));



