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
    capacidad: 42,
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
    capacidad: 40,
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
      [3991, 792], [3915, 1484], [5132, 1544], [5187, 824]
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

// tipos para las Areas verdes 
export interface AreaVerdeInfo {
  nombre: string;
  descripcion: string
  coordenadas: number[][];
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
    [4964, 594],
    [4904, 606],
    [4919, 326],
    [5002, 328],
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Entrada principal del edificio norte(Edificio de Postgrados)",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area1.jpeg",
    imagenes: [
      "/assets/images/zonas/Area1.jpeg",
      "/assets/images/zonas/Area2.jpeg"
    ]
  },
  {
    nombre: "Area Verde 2",
    descripcion: "Franja vegetal con alineación simétrica de cinco árboles ornamentales, ideal para sombra y estética.",
    coordenadas: [
      [4004, 558],
      [3909, 1006],
      [3970, 974],
      [4038, 620],
      [4528, 600],
      [4550, 438]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Entrada principal del edificio norte(Edificio de Postgrados)",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area2.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 3",
    descripcion: "Grupo de zonas verdes dispuestas en forma triangular, destacando letras gigantes 'UPEC' y áreas de descanso.",
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
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Frente al edificio de postgrados",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area3.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
    {
    nombre: "Area Verde 4",
    descripcion: "Jardín central con zonas verdes bien definidas, punto de encuentro entre edificios académicos.",
    coordenadas: [
      [5208, 1542],
      [4798, 1550],
      [4776, 1750],
      [5116, 1772],
      [5172, 1810],
      [5218, 1770]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Por el edificio de postrgados al frente del edificio de laboratorios",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area4.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
      {
    nombre: "Area Verde 5",
    descripcion: "Espacio paisajístico con árboles y senderos curvos.",
    coordenadas: [
    [5344, 1384],
    [5265, 1380],
    [5248, 1880],
    [5315, 1920],
    [5492, 2070],
    [5538, 2026],
    [5536, 1842],
    [5454, 1796],
    [5384, 1738],
    [5340, 1716]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Por el edificio de postrgados al frente del edificio de laboratorios",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area5.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
        {
    nombre: "Area Verde 6",
    descripcion: "Área ajardinada con caminos peatonales, rodeada de vegetación y diseñada para el descanso activo.",
    coordenadas: [
      [3930, 1282],
      [3901, 1294],
      [3887, 1634],
      [3969, 1648],
      [3966, 1508],
      [3904, 1502]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Frente al edificio de postgrados",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area6.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
          {
    nombre: "Area Verde 7",
    descripcion: "Zona triangular con árboles en los extremos, ubicada entre bloques académicos, ideal para recreación ligera.",
    coordenadas: [
      [4204, 2612],
      [4524, 2892],
      [4516, 3008],
      [4172, 3300]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "En medio de los edificios de aulas 1 y 3",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area7.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
            {
    nombre: "Area Verde 8",
    descripcion: "Espacio verde amplio, rodeado de árboles altos, diseñado para sombra y relajación al aire libre.",
    coordenadas: [
      [6208, 1330],
      [6170, 1588],
      [6167, 1752],
      [6172, 1984],
      [6369, 1986]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Detras del edificio de Laboratorios",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area8.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
              {
    nombre: "Area Verde 9",
    descripcion: "Área al aire libre para actividades recreativas y pausas activas.'",
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
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "En medio de los edificios de aulas 1 y 3",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area29.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
                {
    nombre: "Area Verde 10",
    descripcion: "Área abierta con senderos peatonales entre zonas de césped, ideal para circulación y descanso.",
    coordenadas: [
      [5925, 2620],
      [5925, 2492],
      [5460, 2868],
      [5877, 2876],
      [5932, 2710]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto al edificio nuevo",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area10.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
                  {
    nombre: "Area Verde 11",
    descripcion: "Espacio lineal con senderos que conecta distintos sectores del campus, en medio de jardines amplios.",
    coordenadas: [
      [5472, 2972],
      [5915, 2970],
      [5921, 3260],
      [5736, 3276]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto al edificio nuevo",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area11.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
                    {
    nombre: "Area Verde 12",
    descripcion: "Zona con árboles nativos y vegetación baja, ubicada cerca de estacionamientos para aulas.",
    coordenadas: [
      [4631, 3934],
      [4685, 3988],
      [4203, 3956],
      [4364, 3778],
      [4553, 3974]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto al Edificio de Aulas 1 cerca de su estacionamiento",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area12.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
     {
    nombre: "Area Verde 13",
    descripcion: "Gran extensión verde con abundante vegetación, caminos internos y árboles que rodean la plaza roja.",
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
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto a la concha acustica de la plaza roja",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area13.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
       {
    nombre: "Area Verde 14",
    descripcion: "Área ajardinada cercana al edificio principal, con árboles y zonas sombreadas para estancia.",
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
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto al edificio principal ",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/1.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
       {
    nombre: "Area Verde 15",
    descripcion: "Zona con árboles frondosos y caminos peatonales, pensada para el esparcimiento y circulación estudiantil.",
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
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto a la concha acustica de la plaza roja",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area15.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
         {
    nombre: "Area Verde 16",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
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
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Al frente del edificio principal ",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area16.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
           {
    nombre: "Area Verde 17",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
      [4845, 4422],
      [5335, 4422],
      [5331, 4628],
      [5245, 4610],
      [5239, 4488],
      [4766, 4486]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto al edificio principal",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area17.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
             {
    nombre: "Area Verde 18",
    descripcion: "Área con senderos para caminar.",
    coordenadas: [
      [6234, 4394],
      [6158, 4390],
      [6139, 4864],
      [6238, 4846]
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto a la cancha A1 ",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area18y19.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
 {
    nombre: "Area Verde 19",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
     [6232, 4923], [6146, 4927], [6136, 5393], [6222, 5469]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto a la coancha A1 y Plaza Roja",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area18y19.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 20",
    descripcion: "Área verde de forma geometrica con Altar de Bnaderas",
    coordenadas: [
     [5790, 5343], [5884, 5349], [6326, 5783], [6308, 6303], [5876, 6271], [5436, 5793], [5458, 5781], [5480, 5767], [5488, 5743], [5490, 5719], [5496, 5695], [5498, 5673], [5488, 5659], [5488, 5647], [5488, 5631], [5490, 5619], [5502, 5599], [5504, 5581], [5788, 5359], [5784, 5381], [5790, 5396], [5829, 5412], [5859, 5436], [5884, 5464], [5906, 5491], [5923, 5524], [5932, 5564], [5944, 5608], [5949, 5645], [5941, 5684], [5940, 5724], [5931, 5755], [5918, 5776], [5906, 5792], [5885, 5810], [5868, 5828], [5841, 5850], [5813, 5862], [5781, 5874], [5745, 5881], [5718, 5884], [5697, 5882], [5677, 5875], [5658, 5866], [5640, 5858], [5617, 5844], [5601, 5832], [5580, 5807], [5557, 5781], [5538, 5767]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto a la coancha A1, plaza roja y Edifico aulas  2",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N20', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area20.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 21",
    descripcion: "Área verde de árboles y senderos para caminar.",
    coordenadas: [
    [5337, 5014], [5243, 5018], [5235, 5132], [5163, 5112], [5067, 5164], [4969, 5174], [4947, 5198], [5177, 5208], [5175, 5262], [5167, 5548], [5251, 5534], [5241, 5592], [5375, 5742], [5413, 5698], [5417, 5578], [5381, 5594], [5337, 5578], [5325, 5532], [5337, 5498], [5323, 5408], [5333, 5292], [5341, 5144]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "En medio del edificio central y edificio aulas 2",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N21', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area21.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 22",
    descripcion: "Área de forma cuadrada de árboles y senderos para caminar.",
    coordenadas: [
    [5126, 5259], [4854, 5251], [4857, 5533], [5126, 5539] 
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto al edificio central y edificio aulas 2",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N22', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area22.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 23",
    descripcion: "Área de forma triangular con árbol en el centro y senderos para caminar.",
    coordenadas: [
   [4521, 5948], [4278, 5656], [4286, 5647], [4710, 5647], [4720, 5635], [4740, 5620], [4768, 5606], [4775, 5707]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "En medio del edificio central y edificio aulas 2",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N23', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area23.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
   {
    nombre: "Area Verde 24",
    descripcion: "Área verde con abundante vegetacion",
    coordenadas: [
   [4074, 5644], [3970, 5642], [3908, 4940], [3996, 4930], [4034, 5287], [4029, 5273], [4023, 5260], [4019, 5246], [4010, 5232], [4001, 5215], [3991, 5186], [3978, 5168], [3967, 5135], [3957, 5103], [3952, 5069], [3953, 5049], [3953, 5025], [3960, 5005], [3967, 4983], [3973, 4974], [3978, 4964], [3984, 4954], [3988, 4943]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Frente al edificio central",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N24', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area24y25.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
   {
    nombre: "Area Verde 25",
    descripcion: "Área verde con abundante vegetacion",
    coordenadas: [
   [4033, 5059], [4041, 5217], [4035, 5204], [4029, 5189], [4025, 5176], [4016, 5158], [4012, 5143], [4010, 5130], [4003, 5111], [4000, 5086], [3999, 5070], [3997, 5046], [3996, 5038], [3999, 5029], [4002, 5021], [4004, 5013], [4006, 5004], [4010, 4997]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Frente al edificio central con senderos para caminar",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N25', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area24y25.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 26",
    descripcion: "Área Verde",
    coordenadas: [
   [7246, 6020], [7317, 6033], [7285, 5730], [7290, 5751], [7296, 5773], [7301, 5793], [7304, 5815], [7303, 5840], [7306, 5869], [7313, 5895], [7316, 5921], [7317, 5946], [7317, 5963], [7319, 5984], [7321, 6010], [7318, 6021], [7242, 5921], [6935, 5930], [6936, 5846], [7073, 5839], [7087, 5836], [7088, 5830], [7087, 5737], [7095, 5727], [7281, 5728]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto al Coliseo 5 de Abril",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N26', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area26.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 27",
    descripcion: "Área verde sin arboles",
    coordenadas: [
    [7375, 5577], [7092, 5580], [7101, 5434], [6966, 5434], [6976, 5317], [7012, 5314], [7010, 5355], [7032, 5359], [7042, 5360], [7061, 5361], [7080, 5361], [7097, 5360], [7112, 5357], [7128, 5353], [7140, 5349], [7145, 5343], [7176, 4674], [7188, 4686], [7192, 4706], [7209, 4712], [7211, 4728], [7216, 4743], [7222, 4759], [7224, 4772], [7224, 4790], [7224, 4809], [7226, 4827], [7228, 4846], [7225, 4865], [7226, 4884], [7227, 4902], [7227, 4922], [7227, 4940], [7225, 4964], [7224, 4986], [7221, 5005], [7219, 5021], [7216, 5034], [7210, 5050], [7207, 5070], [7205, 5088], [7208, 5099], [7231, 5104], [7257, 5104], [7282, 5101], [7303, 5093], [7313, 5081], [7313, 5066], [7319, 5050], [7320, 5039], [7321, 5029], [7322, 5029], [7324, 5021], [7325, 5014], [7325, 5008], [7325, 5002], [7326, 4995], [7326, 4989], [7327, 4983], [7328, 4976], [7328, 4969], [7328, 4963], [7328, 4958], [7328, 4951], [7328, 4944], [7328, 4938], [7330, 4934], [7330, 4930], [7330, 4924], [7331, 4920], [7332, 4916], [7332, 4912], [7332, 4908], [7332, 4904], [7332, 4900], [7332, 4895], [7332, 4891], [7332, 4886], [7332, 4884], [7332, 4880], [7334, 4875], [7335, 4870], [7336, 4863], [7336, 4857], [7336, 4852], [7336, 4846], [7336, 4843], [7337, 4839], [7338, 4835], [7340, 4831], [7341, 4826], [7341, 4823], [7342, 4818], [7342, 4816], [7342, 4810], [7342, 4804], [7341, 4799], [7342, 4793], [7342, 4789], [7342, 4784], [7342, 4781], [7342, 4776], [7342, 4772], [7341, 4768], [7342, 4761], [7342, 4752], [7342, 4747], [7342, 4742], [7342, 4736], [7342, 4729], [7342, 4724], [7342, 4720], [7342, 4714], [7342, 4709], [7342, 4704], [7342, 4698], [7342, 4693], [7342, 4689], [7342, 4685], [7342, 4680], [7343, 4676], [7343, 4671], [7343, 4666], [7343, 4661], [7343, 4656], [7343, 4652], [7344, 4646], [7344, 4642], [7344, 4636], [7344, 4631], [7345, 4626], [7344, 4619], [7344, 4612], [7344, 4605], [7344, 4600]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto a la coancha A1",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N27', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area27.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 28",
    descripcion: "Área verde de y senderos para caminar.",
    coordenadas: [
    [6296, 6784], [5740, 6780], [5672, 6780], [5522, 6778], [5486, 6730], [5592, 6670], [5629, 6644], [5690, 6580], [5700, 6592], [5717, 6591], [5887, 6440], [5882, 6435], [5874, 6429], [5868, 6425], [5861, 6417], [5859, 6409], [5923, 6340], [5973, 6344], [6144, 6358], [6314, 6387]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "En medio del edifico aulas 2 y Coliseo 5 de Abril",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N28', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area28.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
   {
    nombre: "Area Verde 29",
    descripcion: "Área verde entre pileta. edificio aulas 2 y edificio aulas 4",
    coordenadas: [
    [5343, 6875], [5121, 7095], [5019, 7091], [4955, 7107], [4873, 7109], [4701, 6865], [4719, 6739], [4831, 6579], [4973, 6563], [5111, 6559], [5229, 6567], [5355, 6747]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "En medio del edificio aulas 2 y edificio aulas 4",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N29', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area29.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
    {
    nombre: "Area Verde 30",
    descripcion: "Área verde de forma triangular con vegetacion y arbol en el cento",
    coordenadas: [
    [4580, 6827], [4518, 6890], [4505, 6881], [4494, 6874], [4471, 6881], [4460, 6891], [4455, 6899], [4446, 6909], [4436, 6918], [4438, 6933], [4427, 6945], [4416, 6958], [4407, 6966], [4394, 6980], [4384, 6993], [4368, 7006], [4354, 7017], [4340, 7028], [4328, 7029], [4312, 7026], [4296, 7024], [4281, 7025], [4270, 7031], [4260, 7038], [4255, 7048], [4281, 6524], [4296, 6536], [4305, 6560], [4316, 6577], [4324, 6590], [4332, 6603], [4344, 6612], [4356, 6624], [4364, 6628], [4382, 6636], [4400, 6632], [4415, 6625], [4431, 6620], [4450, 6624], [4466, 6652], [4485, 6680], [4505, 6697], [4530, 6720], [4546, 6739], [4565, 6762], [4592, 6788]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto al edificio de aulas 2, edificio aulas 4 y parqueadero",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N30', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area7.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
   {
    nombre: "Area Verde 31",
    descripcion: "Área verde y senderos para caminar.",
    coordenadas: [
    [6090, 6873], [5990, 6869], [5995, 6874], [6001, 6881], [6007, 6885], [6011, 6890], [6016, 6895], [6021, 6900], [6024, 6905], [6030, 6908], [6036, 6911], [6042, 6912], [6048, 6912], [6054, 6911], [6059, 6907], [6064, 6903], [6068, 6899], [6073, 6895], [6078, 6891], [6083, 6886], [6088, 6880], [6091, 6875]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Frente al Coliseo 5 de Abril",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N31', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area31.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 32",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
    [5505, 6854], [5488, 6902], [6116, 7652], [6230, 7658], [6240, 7202], [6282, 7200], [6282, 6976], [6283, 6974], [6290, 6969], [6294, 6965], [6299, 6960], [6304, 6956], [6308, 6950], [6311, 6946], [6314, 6941], [6317, 6937], [6318, 6930], [6319, 6922], [6319, 6917], [6317, 6908], [6317, 6899], [6316, 6894], [6315, 6889], [6314, 6883], [6314, 6881], [6140, 6876], [6131, 6883], [6123, 6890], [6119, 6896], [6113, 6903], [6106, 6913], [6099, 6920], [6093, 6928], [6085, 6935], [6077, 6942], [6071, 6948], [6062, 6950], [6051, 6954], [6044, 6954], [6033, 6954], [6023, 6953], [6018, 6949], [6011, 6944], [6002, 6936], [5995, 6927], [5992, 6925], [5985, 6915], [5977, 6907], [5970, 6898], [5961, 6888], [5954, 6878], [5945, 6870], [5939, 6866]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "En medio del Coliseo 5 de Abril y Edifio de aulas 4",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N32', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area32.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 33",
    descripcion: "Área verde con vegetacion a su alrededor",
    coordenadas: [
     [4626, 7831], [4623, 7962], [4237, 7904], [4232, 7902], [4230, 7899], [4229, 7895], [4229, 7892], [4229, 7888], [4231, 7885], [4232, 7883], [4234, 7880], [4237, 7874], [4397, 7690], [4555, 7892], [4620, 7830]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto al edifico de aulas 4 y parqueadero",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N33', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area33.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 34",
    descripcion: "Área verde con senderos para caminar",
    coordenadas: [
     [5794, 7418], [6014, 7712], [5622, 7696], [5364, 7866], [5398, 7830], [5436, 7776], [5476, 7730], [5532, 7676], [5570, 7628], [5612, 7580], [5666, 7532], [5710, 7492], [5760, 7444], [5586, 7776], [5580, 8053], [5320, 8037], [5326, 7949]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "En medio de del edificoo de aulas 4 y parqueadero de buses",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N34', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area34.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 35",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
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
  ],
    color: {
fill: '#2e7d32',     // verde fuerte (relleno)
border: '#1b5e20'
    },
    ubicacion: "Junto a la concha acustica límites entre calle México y Avenida Universitaria",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area35.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 36",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
      [2123, 700],
      [2311, 880],
      [2595, 496],
      [2926, 784],
      [3037, 788],
      [3036, 415],
      [3053, 385],
      [3032, 318]
    ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto a la concha acustica límites entre calle México y Avenida Universitaria",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area36.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
    ]
  },
  {
    nombre: "Area Verde 37",
    descripcion: "Área rodeada de árboles y senderos para caminar.",
    coordenadas: [
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
  ],
    color: {
    fill: '#2e7d32', 
    border: '#1b5e20' 
    },
    ubicacion: "Junto a la concha acustica límites entre calle México y Avenida Universitaria",
    tipo: 'AREA VERDE ORNAMENTAL',
    instalaciones: [
      { nombre: 'Espacio verde N39', icono: '🌳' },
      { nombre: 'Acceso libre para estudiantes', icono: '👨‍🎓' }
    ],
    fotografia: "/assets/images/zonas/Area37.jpeg",
    imagenes: [
      "/assets/images/zonas/area12.jpg",
      "/assets/images/zonas/area12plantas.jpg"
      
    ]
  },
]

// Crear areas verdes con coordenadas transformadas
export const areasVerdesupec: AreaVerdeInfo[] = areasVerdes.map(area => ({
  ...area,
  coordenadas: transformPolygon(area.coordenadas)
<<<<<<< HEAD
}));
=======
}));
>>>>>>> 511f91944e2de8ab426137514e2417e547929c6f
