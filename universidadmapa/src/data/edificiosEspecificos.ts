// Archivo: src/data/edificiosEspecificos.ts

export interface AreaEspecifica {
  id: string;
  nombre: string;
  coordenadas: number[][];
  icono: string;
  color: {
    fill: string;
    border: string;
  };
  categoria: 'AULA' | 'LABORATORIO' | 'ADMINISTRATIVO' | 'SERVICIO' | 'BAÑOS';
  direccion?: string; // Para direcciones de carrera
}

export interface PisoEspecifico {
  numero: number;
  imagen: string;
  areas: AreaEspecifica[];
}

export interface EdificioEspecifico {
  id: string;
  nombre: string;
  pisos: PisoEspecifico[];
}

// Función para obtener icono según categoría
const getIconoCategoria = (categoria: string, nombre: string): string => {
  if (nombre.toLowerCase().includes('dirección') || nombre.toLowerCase().includes('direccion')) {
    return '🎓';
  }
  if (nombre.toLowerCase().includes('secretaria')) {
    return '📝';
  }
  
  switch (categoria) {
    case 'AULA':
      return '🏫';
    case 'LABORATORIO':
      return '🔬';
    case 'ADMINISTRATIVO':
      return '🏛️';
    case 'SERVICIO':
      return '🛎️';
    case 'BAÑOS':
      return '🚻';
    default:
      return '📍';
  }
};

// Función para obtener color según categoría
const getColorCategoria = (categoria: string) => {
  switch (categoria) {
    case 'AULA':
      return { fill: 'rgba(52, 73, 94, 0.3)', border: '#34495e' };
    case 'LABORATORIO':
      return { fill: 'rgba(231, 76, 60, 0.3)', border: '#e74c3c' };
    case 'ADMINISTRATIVO':
      return { fill: 'rgba(155, 89, 182, 0.3)', border: '#9b59b6' };
    case 'SERVICIO':
      return { fill: 'rgba(149, 165, 166, 0.3)', border: '#95a5a6' };
    case 'BAÑOS':
      return { fill: 'rgba(52, 152, 219, 0.3)', border: '#3498db' };
    default:
      return { fill: 'rgba(127, 140, 141, 0.3)', border: '#7f8c8d' };
  }
};

// EDIFICIO 4 - TODOS LOS PISOS
const edificio4: EdificioEspecifico = {
  id: 'edificio4',
  nombre: 'Edificio Aulas 4',
  pisos: [
    // PISO 0 - PLANTA BAJA
    {
      numero: 0,
      imagen: '/assets/images/edificio4-plantabaja.jpg',
      areas: [
        {
          id: 'sala-docentes-computacion',
          nombre: 'Sala Docentes Computación',
          coordenadas: [[4693, 7228], [4651, 7280], [4770, 7410], [4705, 7472], [4658, 7458], [4475, 7271], [4465, 7230], [4593, 7103]],
          icono: '👨‍💻',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'decanato',
          nombre: 'Decanato',
          coordenadas: [[4492, 6974], [4617, 7099], [4483, 7223], [4360, 7108]],
          icono: '🏛️',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'sala-docentes-turismo',
          nombre: 'Sala Docentes Turismo',
          coordenadas: [[4255, 7452], [4304, 7397], [4367, 7334], [4356, 7320], [4360, 7297], [4356, 7289], [4380, 7266], [4399, 7244], [4299, 7137], [4272, 7171], [4263, 7206], [4209, 7261], [4147, 7327]],
          icono: '🏖️',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'datalab',
          nombre: 'SMART DATA LAB',
          coordenadas: [[4429, 7307], [4371, 7323], [4273, 7428], [4377, 7547], [4519, 7408]],
          icono: '🔬',
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        },
        {
          id: 'laboratorio-redes',
          nombre: 'Laboratorio de Redes',
          coordenadas: [[4525, 7412], [4379, 7546], [4476, 7671], [4596, 7571], [4602, 7505]],
          icono: '🌐',
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        },
        {
          id: 'observatorio-turismo',
          nombre: 'Observatorio Turismo',
          coordenadas: [[4599, 7564], [4703, 7573], [4703, 7691], [4571, 7803], [4479, 7674]],
          icono: '🔭',
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        },
        {
          id: 'secretaria-planta-baja',
          nombre: 'Secretaría Planta Baja',
          coordenadas: [[5328, 7711], [5229, 7587], [5110, 7587], [5101, 7710], [5210, 7830]],
          icono: '📝',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'aula-1',
          nombre: 'Aula 1',
          coordenadas: [[5312, 7446], [5453, 7600], [5334, 7709], [5224, 7589], [5224, 7530]],
          icono: '🏫',
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-2',
          nombre: 'Aula 2',
          coordenadas: [[5437, 7362], [5402, 7363], [5309, 7448], [5452, 7607], [5564, 7493]],
          icono: '🏫',
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-3',
          nombre: 'Aula 3',
          coordenadas: [[5578, 7273], [5468, 7358], [5474, 7388], [5583, 7521], [5697, 7411]],
          icono: '🏫',
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'sala-docentes-agropecuaria',
          nombre: 'Sala Docentes Agropecuaria',
          coordenadas: [[5339, 7008], [5474, 7165], [5498, 7157], [5537, 7195], [5429, 7290], [5378, 7238], [5350, 7261], [5209, 7122]],
          icono: '🌾',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'aula-computacion',
          nombre: 'Aula Computación',
          coordenadas: [[5231, 7137], [5367, 7277], [5355, 7318], [5267, 7397], [5116, 7241]],
          icono: '💻',
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'oficina',
          nombre: 'Oficina',
          coordenadas: [[5117, 7243], [5257, 7400], [5170, 7483], [5112, 7483], [5052, 7414], [5047, 7243]],
          icono: '🏢',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        }
      ]
    },
    // PISO 1
    {
      numero: 1,
      imagen: '/assets/images/edificio4-piso1.jpg',
      areas: [
        {
          id: 'aula-107',
          nombre: 'Aula 107',
          coordenadas: [[5240, 7413], [5108, 7257], [4980, 7256], [4980, 7373], [5090, 7504], [5151, 7504]],
          icono: getIconoCategoria('AULA', 'Aula 107'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-108',
          nombre: 'Aula 108',
          coordenadas: [[5227, 7139], [5339, 7262], [5350, 7302], [5242, 7403], [5100, 7247]],
          icono: getIconoCategoria('AULA', 'Aula 108'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-109',
          nombre: 'Aula 109',
          coordenadas: [[5210, 7125], [5338, 6996], [5447, 7142], [5341, 7260]],
          icono: getIconoCategoria('AULA', 'Aula 109'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso1-1',
          nombre: 'Baños',
          coordenadas: [[5481, 7123], [5373, 7242], [5459, 7340], [5555, 7220]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-110',
          nombre: 'Aula 110',
          coordenadas: [[5543, 7262], [5441, 7376], [5578, 7550], [5695, 7415]],
          icono: getIconoCategoria('AULA', 'Aula 110'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-111',
          nombre: 'Aula 111',
          coordenadas: [[5446, 7398], [5402, 7363], [5294, 7473], [5445, 7648], [5563, 7519]],
          icono: getIconoCategoria('AULA', 'Aula 111'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-112',
          nombre: 'Aula 112',
          coordenadas: [[5301, 7474], [5210, 7562], [5213, 7627], [5321, 7759], [5444, 7646]],
          icono: getIconoCategoria('AULA', 'Aula 112'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'direccion-computacion',
          nombre: 'Dirección Computación',
          coordenadas: [[5202, 7628], [5095, 7617], [5092, 7737], [5201, 7875], [5322, 7757]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Dirección Computación'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'MSc. Jorge Miranda'
        },
        {
          id: 'direccion-alimentos',
          nombre: 'Dirección Alimentos',
          coordenadas: [[4707, 7591], [4593, 7589], [4479, 7696], [4585, 7811], [4703, 7701]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Dirección Alimentos'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'MSc. Jenny Yambay'
        },
        {
          id: 'aula-101',
          nombre: 'Aula 101',
          coordenadas: [[4531, 7432], [4593, 7517], [4595, 7587], [4488, 7695], [4385, 7575]],
          icono: getIconoCategoria('AULA', 'Aula 101'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-102',
          nombre: 'Aula 102',
          coordenadas: [[4417, 7321], [4385, 7325], [4281, 7451], [4387, 7573], [4512, 7430]],
          icono: getIconoCategoria('AULA', 'Aula 102'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-103',
          nombre: 'Aula 103',
          coordenadas: [[4383, 7319], [4269, 7190], [4163, 7342], [4268, 7476]],
          icono: getIconoCategoria('AULA', 'Aula 103'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso1-2',
          nombre: 'Baños',
          coordenadas: [[4343, 7101], [4260, 7179], [4370, 7280], [4431, 7203]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-104',
          nombre: 'Aula 104',
          coordenadas: [[4494, 6967], [4364, 7102], [4444, 7211], [4478, 7211], [4607, 7090]],
          icono: getIconoCategoria('AULA', 'Aula 104'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-105',
          nombre: 'Aula 105',
          coordenadas: [[4593, 7110], [4463, 7231], [4466, 7267], [4567, 7370], [4710, 7237]],
          icono: getIconoCategoria('AULA', 'Aula 105'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-106',
          nombre: 'Aula 106',
          coordenadas: [[4708, 7246], [4824, 7253], [4821, 7373], [4708, 7480], [4656, 7476], [4566, 7368]],
          icono: getIconoCategoria('AULA', 'Aula 106'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        }
      ]
    },
    // PISO 2
    {
      numero: 2,
      imagen: '/assets/images/edificio4-piso2.jpg',
      areas: [
        {
          id: 'direccion-agropecuaria',
          nombre: 'Dirección Agropecuaria',
          coordenadas: [[5240, 7647], [5124, 7643], [5117, 7772], [5226, 7910], [5348, 7777]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Dirección Agropecuaria'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'PhD. Hernán Benavides'
        },
        {
          id: 'aula-207',
          nombre: 'Aula 207',
          coordenadas: [[5140, 7247], [5006, 7245], [5005, 7382], [5118, 7514], [5176, 7515], [5274, 7405]],
          icono: getIconoCategoria('AULA', 'Aula 207'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-208',
          nombre: 'Aula 208',
          coordenadas: [[5250, 7116], [5131, 7245], [5282, 7409], [5381, 7296], [5383, 7255]],
          icono: getIconoCategoria('AULA', 'Aula 208'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-209',
          nombre: 'Aula 209',
          coordenadas: [[5357, 6953], [5230, 7087], [5379, 7257], [5494, 7135]],
          icono: getIconoCategoria('AULA', 'Aula 209'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso2-1',
          nombre: 'Baños',
          coordenadas: [[5505, 7126], [5595, 7224], [5491, 7334], [5418, 7237]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-210',
          nombre: 'Aula 210',
          coordenadas: [[5589, 7240], [5476, 7363], [5618, 7541], [5734, 7412]],
          icono: getIconoCategoria('AULA', 'Aula 210'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-211',
          nombre: 'Aula 211',
          coordenadas: [[5473, 7359], [5443, 7358], [5329, 7474], [5475, 7654], [5594, 7524]],
          icono: getIconoCategoria('AULA', 'Aula 211'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-212',
          nombre: 'Aula 212',
          coordenadas: [[5334, 7477], [5474, 7653], [5346, 7776], [5238, 7647], [5240, 7571]],
          icono: getIconoCategoria('AULA', 'Aula 212'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'direccion-turismo',
          nombre: 'Dirección Turismo',
          coordenadas: [[4585, 7642], [4705, 7626], [4694, 7754], [4585, 7882], [4466, 7748]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Dirección Turismo'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'PhD. Jaime Iturralde'
        },
        {
          id: 'aula-201',
          nombre: 'Aula 201',
          coordenadas: [[4505, 7454], [4583, 7560], [4584, 7626], [4465, 7752], [4354, 7610]],
          icono: getIconoCategoria('AULA', 'Aula 201'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-202',
          nombre: 'Aula 202',
          coordenadas: [[4389, 7326], [4495, 7450], [4346, 7620], [4229, 7478]],
          icono: getIconoCategoria('AULA', 'Aula 202'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-203',
          nombre: 'Aula 203',
          coordenadas: [[4257, 7196], [4353, 7330], [4216, 7492], [4109, 7356]],
          icono: getIconoCategoria('AULA', 'Aula 203'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso2-2',
          nombre: 'Baños',
          coordenadas: [[4351, 7092], [4425, 7200], [4342, 7282], [4249, 7196]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-204',
          nombre: 'Aula 204',
          coordenadas: [[4499, 6930], [4369, 7078], [4442, 7200], [4486, 7205], [4620, 7066]],
          icono: getIconoCategoria('AULA', 'Aula 204'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-205',
          nombre: 'Aula 205',
          coordenadas: [[4611, 7090], [4456, 7245], [4564, 7387], [4711, 7224]],
          icono: getIconoCategoria('AULA', 'Aula 205'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-206',
          nombre: 'Aula 206',
          coordenadas: [[4717, 7234], [4825, 7243], [4830, 7375], [4710, 7502], [4659, 7502], [4569, 7393]],
          icono: getIconoCategoria('AULA', 'Aula 206'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        }
      ]
    }
  ]
};

// EDIFICIO 3 - TODOS LOS PISOS
const edificio3: EdificioEspecifico = {
  id: 'edificio3',
  nombre: 'Edificio Aulas 3',
  pisos: [
    // PLANTA BAJA
    {
      numero: 0,
      imagen: '/assets/images/edificio3-plantabaja.jpg',
      areas: [
        {
          id: 'secretaria-centros-academicos',
          nombre: 'Secretaría Centros Académicos',
          coordenadas: [[5346, 2454], [5260, 2356], [5204, 2354], [5137, 2416], [5140, 2504], [5134, 2601], [5206, 2601]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Secretaría'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'aula-1-pb',
          nombre: 'Aula 1',
          coordenadas: [[5366, 2452], [5468, 2551], [5450, 2600], [5318, 2719], [5205, 2600]],
          icono: getIconoCategoria('AULA', 'Aula 1'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'sala-profesores-1',
          nombre: 'Sala de Profesores',
          coordenadas: [[5576, 2713], [5459, 2599], [5299, 2744], [5426, 2863]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Sala de Profesores'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'sala-profesores-2',
          nombre: 'Sala de Profesores 2',
          coordenadas: [[5707, 2341], [5830, 2463], [5691, 2606], [5562, 2486]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Sala de Profesores'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'aula-2-pb',
          nombre: 'Aula 2',
          coordenadas: [[5562, 2250], [5416, 2397], [5511, 2501], [5554, 2499], [5682, 2371]],
          icono: getIconoCategoria('AULA', 'Aula 2'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-tics-2',
          nombre: 'Aula TICS 2',
          coordenadas: [[5446, 2132], [5324, 2246], [5326, 2319], [5413, 2398], [5557, 2253]],
          icono: getIconoCategoria('LABORATORIO', 'Aula TICS'),
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        },
        {
          id: 'aula-tics-1',
          nombre: 'Aula TICS 1',
          coordenadas: [[5330, 2017], [5209, 2118], [5197, 2247], [5326, 2244], [5439, 2126]],
          icono: getIconoCategoria('LABORATORIO', 'Aula TICS'),
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        },
        {
          id: 'secretaria-pb',
          nombre: 'Secretaría',
          coordenadas: [[4659, 2013], [4778, 2121], [4783, 2245], [4665, 2241], [4543, 2127]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Secretaría'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'aula-3-pb',
          nombre: 'Aula 3',
          coordenadas: [[4660, 2317], [4573, 2400], [4424, 2245], [4547, 2129], [4661, 2248]],
          icono: getIconoCategoria('AULA', 'Aula 3'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-4-pb',
          nombre: 'Aula 4',
          coordenadas: [[4421, 2253], [4569, 2405], [4470, 2508], [4433, 2502], [4301, 2372]],
          icono: getIconoCategoria('AULA', 'Aula 4'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'sala-profesores-3',
          nombre: 'Sala Profesores',
          coordenadas: [[4282, 2342], [4406, 2466], [4318, 2586], [4155, 2465]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Sala Profesores'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'oficina-pb',
          nombre: 'Oficina',
          coordenadas: [[4679, 2736], [4539, 2609], [4418, 2725], [4557, 2857]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Oficina'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'sala-reuniones',
          nombre: 'Sala de Reuniones',
          coordenadas: [[4521, 2591], [4664, 2720], [4779, 2607], [4728, 2541], [4851, 2423], [4781, 2354], [4721, 2351], [4525, 2547]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Sala de Reuniones'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        }
      ]
    },
    // PISO 1
    {
      numero: 1,
      imagen: '/assets/images/edificio3-piso1.jpg',
      areas: [
        {
          id: 'secretaria-1-p1',
          nombre: 'Secretaría 1',
          coordenadas: [[4506, 2160], [4632, 2270], [4754, 2262], [4746, 2160], [4622, 2054]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Secretaría'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'secretaria-2-p1',
          nombre: 'Secretaría 2',
          coordenadas: [[5302, 2052], [5418, 2172], [5297, 2257], [5178, 2266], [5185, 2151]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Secretaría'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'aula-101-p1',
          nombre: 'Aula 101',
          coordenadas: [[4507, 2170], [4628, 2264], [4638, 2327], [4545, 2407], [4393, 2280]],
          icono: getIconoCategoria('AULA', 'Aula 101'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-102-p1',
          nombre: 'Aula 102',
          coordenadas: [[4398, 2287], [4531, 2382], [4524, 2424], [4441, 2495], [4405, 2493], [4276, 2382]],
          icono: getIconoCategoria('AULA', 'Aula 102'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-103-p1',
          nombre: 'Aula 103',
          coordenadas: [[4268, 2374], [4390, 2482], [4389, 2510], [4294, 2589], [4149, 2467]],
          icono: getIconoCategoria('AULA', 'Aula 103'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-p1-1',
          nombre: 'Baños',
          coordenadas: [[4391, 2514], [4465, 2586], [4373, 2671], [4280, 2592]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-105-p1',
          nombre: 'Aula 105',
          coordenadas: [[4507, 2574], [4395, 2669], [4539, 2777], [4652, 2687]],
          icono: getIconoCategoria('AULA', 'Aula 105'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-106-p1',
          nombre: 'Aula 106',
          coordenadas: [[4501, 2564], [4504, 2543], [4604, 2452], [4753, 2573], [4635, 2670]],
          icono: getIconoCategoria('AULA', 'Aula 106'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-107-p1',
          nombre: 'Aula 107',
          coordenadas: [[4612, 2455], [4764, 2574], [4887, 2565], [4884, 2472], [4760, 2367], [4704, 2364]],
          icono: getIconoCategoria('AULA', 'Aula 107'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-108-p1',
          nombre: 'Aula 108',
          coordenadas: [[5039, 2562], [5044, 2471], [5167, 2368], [5222, 2358], [5311, 2449], [5163, 2574], [5148, 2558]],
          icono: getIconoCategoria('AULA', 'Aula 108'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-109-p1',
          nombre: 'Aula 109',
          coordenadas: [[5325, 2455], [5418, 2538], [5404, 2576], [5265, 2674], [5163, 2573]],
          icono: getIconoCategoria('AULA', 'Aula 109'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-110-p1',
          nombre: 'Aula 110',
          coordenadas: [[5509, 2668], [5407, 2571], [5257, 2681], [5372, 2780]],
          icono: getIconoCategoria('AULA', 'Aula 110'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-p1-2',
          nombre: 'Baños',
          coordenadas: [[5445, 2589], [5529, 2674], [5623, 2601], [5527, 2518]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-111-p1',
          nombre: 'Aula 111',
          coordenadas: [[5522, 2489], [5611, 2585], [5759, 2476], [5659, 2362]],
          icono: getIconoCategoria('AULA', 'Aula 111'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-112-p1',
          nombre: 'Aula 112',
          coordenadas: [[5523, 2281], [5627, 2385], [5513, 2487], [5479, 2489], [5377, 2398]],
          icono: getIconoCategoria('AULA', 'Aula 112'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-113-p1',
          nombre: 'Aula 113',
          coordenadas: [[5426, 2174], [5534, 2291], [5376, 2405], [5297, 2325], [5299, 2263]],
          icono: getIconoCategoria('AULA', 'Aula 113'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        }
      ]
    },
    // PISO 2
    {
      numero: 2,
      imagen: '/assets/images/edificio3-piso2.jpg',
      areas: [
        {
          id: 'oficina-nivelacion-p2',
          nombre: 'Oficina Nivelación',
          coordenadas: [[4660, 1941], [4780, 2065], [4781, 2187], [4659, 2179], [4535, 2056]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Oficina Nivelación'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'aula-201-p2',
          nombre: 'Aula 201',
          coordenadas: [[4529, 2058], [4654, 2180], [4653, 2243], [4564, 2337], [4413, 2183]],
          icono: getIconoCategoria('AULA', 'Aula 201'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-202-p2',
          nombre: 'Aula 202',
          coordenadas: [[4408, 2178], [4287, 2300], [4419, 2447], [4455, 2446], [4559, 2336]],
          icono: getIconoCategoria('AULA', 'Aula 202'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-203-p2',
          nombre: 'Aula 203',
          coordenadas: [[4273, 2284], [4416, 2444], [4296, 2551], [4135, 2407]],
          icono: getIconoCategoria('AULA', 'Aula 203'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-p2-1',
          nombre: 'Baños',
          coordenadas: [[4394, 2461], [4490, 2566], [4376, 2678], [4283, 2578]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-204-p2',
          nombre: 'Aula 204',
          coordenadas: [[4523, 2550], [4399, 2676], [4550, 2822], [4680, 2696]],
          icono: getIconoCategoria('AULA', 'Aula 204'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-205-p2',
          nombre: 'Aula 205',
          coordenadas: [[4659, 2676], [4774, 2559], [4624, 2396], [4518, 2502], [4524, 2546]],
          icono: getIconoCategoria('AULA', 'Aula 205'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-206-p2',
          nombre: 'Aula 206',
          coordenadas: [[4628, 2394], [4783, 2553], [4905, 2546], [4902, 2428], [4780, 2299], [4725, 2294]],
          icono: getIconoCategoria('AULA', 'Aula 206'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-207-p2',
          nombre: 'Aula 207',
          coordenadas: [[5261, 2300], [5208, 2297], [5075, 2425], [5076, 2550], [5210, 2553], [5367, 2395]],
          icono: getIconoCategoria('AULA', 'Aula 207'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-208-p2',
          nombre: 'Aula 208',
          coordenadas: [[5367, 2403], [5473, 2510], [5474, 2548], [5334, 2672], [5209, 2554]],
          icono: getIconoCategoria('AULA', 'Aula 208'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-209-p2',
          nombre: 'Aula 209',
          coordenadas: [[5476, 2538], [5595, 2661], [5430, 2826], [5303, 2692]],
          icono: getIconoCategoria('AULA', 'Aula 209'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-p2-2',
          nombre: 'Baños',
          coordenadas: [[5596, 2475], [5507, 2560], [5607, 2675], [5698, 2581]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-210-p2',
          nombre: 'Aula 210',
          coordenadas: [[5572, 2441], [5690, 2554], [5843, 2411], [5712, 2284]],
          icono: getIconoCategoria('AULA', 'Aula 210'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-211-p2',
          nombre: 'Aula 211',
          coordenadas: [[5579, 2181], [5424, 2348], [5527, 2452], [5571, 2444], [5700, 2302]],
          icono: getIconoCategoria('AULA', 'Aula 211'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-212-p2',
          nombre: 'Aula 212',
          coordenadas: [[5462, 2049], [5567, 2171], [5417, 2333], [5343, 2248], [5334, 2190]],
          icono: getIconoCategoria('AULA', 'Aula 212'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-213-p2',
          nombre: 'Aula 213',
          coordenadas: [[5334, 1925], [5211, 2061], [5208, 2184], [5342, 2180], [5459, 2059]],
          icono: getIconoCategoria('AULA', 'Aula 213'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        }
      ]
    }
  ]
};

// EXPORTAR TODOS LOS EDIFICIOS ESPECÍFICOS
export const edificiosEspecificos: EdificioEspecifico[] = [
  edificio4,
  edificio3
];

// Función para obtener edificio por ID
export const getEdificioEspecifico = (id: string): EdificioEspecifico | undefined => {
  return edificiosEspecificos.find(edificio => edificio.id === id);
};

// Función para obtener piso específico
export const getPisoEspecifico = (edificioId: string, numeroPiso: number): PisoEspecifico | undefined => {
  const edificio = getEdificioEspecifico(edificioId);
  return edificio?.pisos.find(piso => piso.numero === numeroPiso);
};

// Función para obtener áreas de un piso específico
export const getAreasEspecificas = (edificioId: string, numeroPiso: number): AreaEspecifica[] => {
  const piso = getPisoEspecifico(edificioId, numeroPiso);
  return piso?.areas || [];
};