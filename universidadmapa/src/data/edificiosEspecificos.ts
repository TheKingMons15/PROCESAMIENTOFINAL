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
//EDIFICIO 2 TODOS
// EDIFICIO 2 - TODOS LOS PISOS
const edificio2: EdificioEspecifico = {
  id: 'edificio2',
  nombre: 'Edificio Aulas 2',
  pisos: [
    // PISO 0 - PLANTA BAJA
    {
      numero: 0,
      imagen: '/assets/images/edificio2-plantabaja.jpg',
      areas: [
        {
          id: 'fcsce',
          nombre: `Facultad de Ciencias de la Salud y Ciencias de la Educación`,
          coordenadas: [[4668, 5896],[4664, 5886],[4527, 6014],[4657, 6163],[4792, 6169], [4796, 6020]],
          icono: '🏛️',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },

        {
          id: 'lab-cyberseguridad',
          nombre: 'Lab. cyber seguridad',
          coordenadas: [  [4527, 6020], [4653, 6165], [4651, 6235], [4566, 6314], [4404, 6135]],
          icono: '🧑🏻‍💻',
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        },
        {
          id: 'FAB',
          nombre: 'FAB LAB',
          coordenadas: [[4375, 6651],[4361, 6664],[4352, 6661],[4337, 6649],[4324, 6639],[4306, 6621],[4299, 6613],[4288, 6598],[4276, 6579],
                        [4264, 6554],[4275, 6537],[4124, 6370],[4260, 6237],[4279, 6257],[4399, 6141],[4771, 6557],[4652, 6672],[4667, 6692],[4530, 6824]],
          icono: '🖨️',
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        },
        {
          id: 'bodega-ed2-pb',
          nombre: 'Bodega',
          coordenadas: [  [4682, 6443],[4808, 6318],[4779, 6286],[4714, 6283],[4621, 6373]],
          icono: '📦',
          color: getColorCategoria('SERVICIO'),
          categoria: 'SERVICIO'
        },
        {
          id: 'guardiania-ed2-pb',
          nombre: 'Guardianía',
          coordenadas: [[4714, 6482],[4687, 6451],[4816, 6325],[4845, 6355],[4844, 6451],[4752, 6450]],
          icono: '👮🏻',
          color: getColorCategoria('SERVICIO'),
          categoria: 'SERVICIO'
        },
        {
          id: 'baños-ed2-pb',
          nombre: 'Baños',
          coordenadas: [  [4844, 6454], [4843, 6553], [4781, 6551], [4716, 6486], [4753, 6451] ],
          icono: '🚻',
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'baños2',
          nombre: 'Baños',
          coordenadas: [  [5137, 6561],[5140, 6412],[5157, 6398],[5258, 6507],[5199, 6569],[5191, 6561] ],
          icono: '🚻',
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
          
        {
          id: 'camara-de-transformacion',
          nombre: 'Cámara de transformación',
          coordenadas: [  [4908, 6430],[4968, 6432],[4969, 6492],[4909, 6493]],
          icono: '⚡',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'empresa-publica',
          nombre: 'Empresa Pública',
          coordenadas: [ [5206, 6578],[5271, 6508],[5146, 6374],[5213, 6307],[5281, 6305],[5473, 6519],[5473, 6555],[5363, 6662],[5339, 6633],
                        [5294, 6673]],
          icono: '🦉',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'sala-educacion-2-ed2-pb',
          nombre: 'Sala de docentes 2',
          coordenadas: [  [5301, 6718],[5317, 6701],[5299, 6681],[5336, 6645],[5361, 6676],[5461, 6579],[5578, 6714],[5430, 6864]],
          icono: '👨🏻‍🏫',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'sala-de-docentes-1-ed2-pb',
          nombre: 'Sala de docentes 1',
          coordenadas: [  [5554, 6550],[5669, 6676],[5709, 6621],[5697, 6605],[5864, 6445],[5735, 6305],[5582, 6461],[5610, 6491]],
          icono: '👨🏻‍🏫',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'laboratorio-de-informatica-5',
          nombre: 'Laboratorio de informática 5',
          coordenadas: [[5220, 6107],[5215, 6046],[5351, 5917],[5471, 6051],[5335, 6185],[5285, 6181],[5287, 6107]],
          icono: '💻',
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        },
        {
          id: 'laboratorios-de-informatica-6',
          nombre: 'Laboratorio de informática 6',
          coordenadas: [[5342, 6194],[5339, 6264],[5422, 6353],[5594, 6185],[5481, 6059]],
          icono: '💻',
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        },
        {
          id: 'laboratorios-de-informatica-7',
          nombre: 'Laboratorio de informática 7',
          coordenadas: [  [5530, 6474],[5570, 6475],[5725, 6329],[5602, 6194],[5428, 6360]],
          icono: '💻',
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        }

      ]
    },
    // PISO 1
    {
      numero: 1,
      imagen: '/assets/images/edificio2-piso1.jpg',
      areas: [
        {
          id: 'direccion-inicial',
          nombre: 'Dirección de Educación Inicial',
          coordenadas: [  [5331, 6181],[5280, 6168],[5281, 6108],[5331, 6058],[5266, 5990],[5343, 5905],[5467, 6045]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Dirección de Educación Inicial'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'MSc. Cecilia Yacelga'
        },
        {
          id: 'aula-104',
          nombre: 'Aula 104',
          coordenadas: [  [5338, 6245],[5332, 6183],[5469, 6051],[5589, 6178],[5426, 6342]],
          icono: getIconoCategoria('AULA', 'Aula 104'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-105',
          nombre: 'Aula 105',
          coordenadas: [[5427, 6347],[5594, 6186],[5705, 6309],[5564, 6460],[5533, 6461]],
          icono: getIconoCategoria('AULA', 'Aula 105'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-106',
          nombre: 'Sala de docentes educación inicial',
          coordenadas: [[5693, 6588],[5573, 6464],[5726, 6293],[5786, 6359],[5796, 6356],[5829, 6396],[5829, 6404],[5856, 6434]],
          icono: getIconoCategoria('AULA', 'Aula 106'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA',
        },
        {
          id: 'banos-ed2-piso1-1',
          nombre: 'Baños',
          coordenadas: [[5592, 6493],[5501, 6585],[5603, 6709],[5620, 6699],[5641, 6685],[5660, 6668],[5677, 6652],[5690, 6634],[5706, 6609]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-107',
          nombre: 'Aula 107',
          coordenadas: [[5297, 6710],[5312, 6695],[5323, 6703],[5473, 6560],[5587, 6692],[5427, 6853],[5400, 6826],[5395, 6826],[5356, 6786],[5359, 6781]],
          icono: getIconoCategoria('AULA', 'Aula 107'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-108',
          nombre: 'Aula 108',
          coordenadas: [[5472, 6555],[5473, 6523],[5367, 6405],[5203, 6569],[5324, 6701]],
          icono: getIconoCategoria('AULA', 'Aula 108'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-109',
          nombre: 'Aula 109',
          coordenadas: [[5070, 6552],[5071, 6417],[5208, 6288],[5264, 6289],[5363, 6400],[5196, 6563],[5189, 6556]],
          icono: getIconoCategoria('AULA', 'Aula 109'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-110',
          nombre: 'Aula 110',
          coordenadas: [[4610, 6376],[4780, 6546],[4903, 6547],[4904, 6408],[4777, 6272],[4722, 6264]],
          icono: getIconoCategoria('AULA', 'Aula 110'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA',
        },
        {
          id: 'aula-111',
          nombre: 'Aula 111',
          coordenadas: [[4500, 6525],[4496, 6488],[4607, 6377],[4771, 6554],[4641, 6679]],
          icono: getIconoCategoria('AULA', 'Aula 111'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-112',
          nombre: 'Aula 112',
          coordenadas: [[4377, 6646],[4498, 6526],[4641, 6684],[4654, 6673],[4669, 6689],[4603, 6748],[4604, 6757],[4568, 6797],[4560, 6794],[4530, 6822]],
          icono: getIconoCategoria('AULA', 'Aula 112'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso1-ed2-2',
          nombre: 'Baños',
          coordenadas: [[4361, 6663],[4469, 6546],[4382, 6453],[4267, 6556],[4281, 6585],[4293, 6606],[4306, 6622],[4321, 6637],[4348, 6653]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-113',
          nombre: 'Aula 113',
          coordenadas: [[4260, 6237],[4412, 6415],[4282, 6539],[4126, 6372],[4151, 6345],[4149, 6338],[4185, 6301],[4202, 6301]],
          icono: getIconoCategoria('AULA', 'Aula 113'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-114',
          nombre: 'Aula 114',
          coordenadas: [[4278, 6259],[4397, 6138],[4556, 6311],[4445, 6421],[4413, 6417]],
          icono: getIconoCategoria('AULA', 'Aula 114'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-115',
          nombre: 'Aula 115',
          coordenadas: [[4402, 6134],[4525, 6013],[4650, 6153],[4653, 6215],[4559, 6309]],
          icono: getIconoCategoria('AULA', 'Aula 115'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'direccion-básica',
          nombre: 'Dirección de Educación Básica',
          coordenadas: [[4593, 5948],[4659, 5880],[4783, 6020],[4786, 6153],[4720, 6151],[4717, 6080]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Dirección de Educación Básica'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'PhD. Duván Ávalos'
        },
        {
          id: 'sala-eb',
          nombre: 'Sala docentes Educación Básica',
          coordenadas: [  [4653, 6149],[4529, 6008],[4590, 5949],[4708, 6082],[4707, 6151]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Sala docentes Educación Básica'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'bodega-ed2-p1',
          nombre: 'Bodega',
          coordenadas: [[5275, 6100],[5323, 6055],[5262, 5990],[5212, 6036],[5214, 6098]],
          icono: '📦',
          color: getColorCategoria('SERVICIO'),
          categoria: 'SERVICIO'
        }    
      ]
    },
    // PISO 2
    {
      numero: 2,
      imagen: '/assets/images/edificio2-piso2.jpg',
      areas: [
        {
          id: 'direccion-enfermeria',
          nombre: 'Dirección Enfermería',
          coordenadas: [[5286, 6168],[5347, 6168],[5472, 6042],[5351, 5904],[5224, 6033],[5224, 6093],[5287, 6095]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Dirección Enfermería'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'MSc. Mayra Chapi'
        },
        {
          id: 'aula-202',
          nombre: 'Aula 202',
          coordenadas: [  [5475, 6048],[5348, 6177],[5347, 6248],[5426, 6341],[5590, 6174]],
          icono: getIconoCategoria('AULA', 'Aula 202'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-203',
          nombre: 'Aula 203',
          coordenadas: [  [5433, 6351],[5596, 6184],[5712, 6309],[5573, 6467],[5538, 6469]],
          icono: getIconoCategoria('AULA', 'Aula 203'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-204',
          nombre: 'Aula 204',
          coordenadas: [  [5801, 6362],[5832, 6399],[5831, 6406],[5859, 6437],[5695, 6595],[5575, 6471],[5722, 6321],[5714, 6310],[5732, 6293],[5793, 6363]],
          icono: getIconoCategoria('AULA', 'Aula 204'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso2-ed2-1',
          nombre: 'Baños',
          coordenadas: [ [5600, 6497],[5707, 6613],[5699, 6627],[5694, 6638],[5687, 6652],[5676, 6662],[5662, 6675],[5650, 6686],[5639, 6694],[5626, 6704],[5606, 6714],[5500, 6594]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-205',
          nombre: 'Aula 205',
          coordenadas: [  [5590, 6700],[5478, 6568],[5330, 6712],[5316, 6702],[5299, 6718],[5363, 6787],[5364, 6793],[5396, 6832],[5408, 6831],[5432, 6862]],
          icono: getIconoCategoria('AULA', 'Aula 205'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-206',
          nombre: 'Aula 206',
          coordenadas: [  [5317, 6699],[5328, 6710],[5476, 6566],[5479, 6526],[5373, 6408],[5207, 6576]],
          icono: getIconoCategoria('AULA', 'Aula 206'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'sala-en',
          nombre: 'Sala de docentes Enfermería',
          coordenadas: [ [5074, 6559],[5076, 6432],[5213, 6291],[5272, 6295],[5367, 6400],[5203, 6564]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Sala de docentes Enfermería'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
         
        {
          id: 'direccion-lab',
          nombre: 'Dirección Laboratorio Clínico',
          coordenadas: [  [4669, 5882],[4796, 6022],[4794, 6162],[4666, 6157],[4540, 6009]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Dirección Laboratorio Clínico'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'MSc. Liliana Chamorro'
        },
        {
          id: 'aula-208',
          nombre: 'Aula 208',
          coordenadas: [[4624, 6379],[4724, 6274],[4783, 6274],[4913, 6415],[4914, 6553],[4785, 6550]],
          icono: getIconoCategoria('AULA', 'Aula 208'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-209',
          nombre: 'Aula 209',
          coordenadas: [[4620, 6384],[4776, 6559],[4649, 6683],[4510, 6531],[4509, 6493]],
          icono: getIconoCategoria('AULA', 'Aula 209'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-210',
          nombre: 'Aula 210',
          coordenadas: [  [4394, 6664],[4509, 6535],[4648, 6686],[4660, 6677],[4678, 6694],[4611, 6759],[4614, 6764],[4576, 6800],[4569, 6799],[4541, 6832]],
          icono: getIconoCategoria('AULA', 'Aula 210'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso2-ed2-2',
          nombre: 'Baños',
          coordenadas: [  [4477, 6551],[4372, 6668],[4362, 6663],[4352, 6657],[4341, 6648],[4330, 6639],[4320, 6629],[4310, 6616],[4299, 6604],[4291, 6592],[4284, 6580],[4276, 6561],[4391, 6454]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-211',
          nombre: 'Aula 211',
          coordenadas: [[4290, 6545],[4414, 6428],[4274, 6269],[4286, 6257],[4270, 6239],[4206, 6304],[4198, 6303],[4162, 6338],[4163, 6344],[4133, 6373]],
          icono: getIconoCategoria('AULA', 'Aula 211'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-212',
          nombre: 'Aula 212',
          coordenadas: [[4414, 6426],[4276, 6268],[4406, 6141],[4561, 6317],[4454, 6429]],
          icono: getIconoCategoria('AULA', 'Aula 212'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-213',
          nombre: 'Aula 213',
          coordenadas: [  [4568, 6311],[4411, 6136],[4537, 6008],[4665, 6155],[4662, 6219]],
          icono: getIconoCategoria('AULA', 'Aula 213'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        }
      ]
    }
  ]
};
/////////////////////////////////
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

// EDIFICIO 1 - TODOS LOS PISOS
const edificio1: EdificioEspecifico = {
  id: 'edificio1',
  nombre: 'Edificio Aulas 1',
  pisos: [
    // PISO 0 - PLANTA BAJA
    {
      numero: 0,
      imagen: '/assets/images/edificio1-plantabaja.jpg',
      areas: [
        {
          id: 'sala-docentes-administracion',
          nombre: 'Sala Docentes Adm. Empresas',
          coordenadas: [[5667, 3324],[5547, 3448],[5702, 3604],[5807, 3460]],
          icono: '👨‍💻',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'Dependencia',
          nombre: 'Dependencia',
          coordenadas: [[5665, 3590],[5541, 3731],[5376, 3558],[5477, 3438],[5520, 3438],[5543, 3456]],
          icono: '🏛️',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'sala-docentes-comercio esteriror',
          nombre: 'Sala Docentes Comercio Exterior',
          coordenadas: [[5537, 3732],[5415, 3870],[5289, 3735],[5295, 3650],[5378, 3554]],
          icono: '👨‍💻',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'Direcion de Comercio Exterior',
          nombre: 'Dirección de Comercio Exterior',
          coordenadas: [[5416, 3869],[5293, 4006],[5165, 3876],[5161, 3737],[5291, 3735]],
          icono: '🎓',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'MSc. Gerardo Mera'
        },
        {
          id: 'direccion-administracion-empresas',
          nombre: 'Dirección Administración de Empresas',
          coordenadas: [[5385, 3022],[5536, 3178],[5406, 3323],[5259, 3167]],
          icono: '🎓',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'MSc. Freddy Quinde  '
        },
        {
          id: 'Secretaria Administracion de empresas',
          nombre: 'Secretaria Adm. Empresas',
          coordenadas: [[5449, 3291],[5505, 3343],[5611, 3221],[5565, 3182],[5533, 3207],[5515, 3199]],
          icono: '📝',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'secretaria-planta-baja',
          nombre: 'Salada de docentes Adoministración de Empresas',
          coordenadas: [[5409, 3320],[5424, 3343],[5428, 3384],[5346, 3470],[5325, 3495],[5160, 3324],[5276, 3185]],
          icono: '👨‍💻',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'Archivero FCIIAEE',
          nombre: 'Archivero FCIIAEE',
          coordenadas: [[5321, 3496],[5226, 3606],[5162, 3609],[5123, 3564],[5086, 3536],[5085, 3432],[5181, 3427],[5211, 3390]],
          icono: '📁',
          color: getColorCategoria('SERVICIO'),
          categoria: 'SERVICIO'
        },
        {
          id: 'Bodega',
          nombre: 'Bodega',
          coordenadas: [[4786, 3536],[4720, 3614],[4659, 3617],[4443, 3402],[4445, 3354],[4587, 3194],[4715, 3331],[4659, 3399]],
          icono: '📦',
          color: getColorCategoria('SERVICIO'),
          categoria: 'SERVICIO'
        },
        {
          id: 'Decanato FCIIAEE',
          nombre: 'Decanato FCIIAEE',
          coordenadas: [[4462, 3338],[4605, 3175],[4477, 3042],[4333, 3203]],
          icono: '🏢',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'MSc. Marcelo Cahuasqui'
        },
        {
          id: 'secretaria de comercio exterior',
          nombre: 'Secretaría de Comercio Exterior',
          coordenadas: [[4361, 3373],[4309, 3436],[4210, 3340],[4242, 3255]],
          icono: '📝',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'Sala de docentes Comercio Exterior',
          nombre: 'Sala de docentes Comercio Exterior',
          coordenadas: [[4211, 3342],[4070, 3499],[4198, 3631],[4340, 3473]],
          icono: '👨‍💻',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        },
        {
          id: 'Aula Virtual',
          nombre: 'Aula Virtual',
          coordenadas: [[4222, 3610],[4346, 3743],[4502, 3567],[4398, 3456],[4358, 3455]],
          icono: '🏫',
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'Laboratorio 04',
          nombre: 'Laboratorio 04',
          coordenadas: [[4501, 3569],[4348, 3748],[4473, 3884],[4593, 3749],[4593, 3662]],
          icono: '🖥️',
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        },
        {
          id: 'Laboratorio LAB GO',
          nombre: 'Laboratorio LAB GO',
          coordenadas: [[4598, 3749],[4475, 3891],[4599, 4022],[4726, 3887],[4698, 3825],[4657, 3819],[4659, 3752]],
          icono: '🖥️',
          color: getColorCategoria('LABORATORIO'),
          categoria: 'LABORATORIO'
        }
      ]
    },
    // PISO 1
    {
      numero: 1,
      imagen: '/assets/images/edificio1-piso1.jpg',
      areas: [
        {
          id: 'aula-107',
          nombre: 'Aula 107',
          coordenadas: [[5037, 3341],[5031, 3468],[5158, 3613],[5212, 3619],[5320, 3505],[5166, 3335]],
          icono: getIconoCategoria('AULA', 'Aula 107'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-108',
          nombre: 'Aula 108',
          coordenadas: [[5167, 3334],[5317, 3507],[5432, 3391],[5434, 3352],[5293, 3200]],
          icono: getIconoCategoria('AULA', 'Aula 108'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-109',
          nombre: 'Aula 109',
          coordenadas: [[5275, 3181],[5436, 3353],[5556, 3220],[5396, 3052]],
          icono: getIconoCategoria('AULA', 'Aula 109'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso1-1',
          nombre: 'Baños',
          coordenadas: [[5471, 3324],[5558, 3425],[5670, 3311],[5639, 3252],[5578, 3207]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-110',
          nombre: 'Aula 110',
          coordenadas: [[5530, 3461],[5678, 3635],[5806, 3504],[5652, 3334]],
          icono: getIconoCategoria('AULA', 'Aula 110'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-111',
          nombre: 'Aula 111',
          coordenadas: [[5663, 3621],[5532, 3460],[5492, 3460],[5382, 3577],[5529, 3747]],
          icono: getIconoCategoria('AULA', 'Aula 111'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-112',
          nombre: 'Aula 112',
          coordenadas: [[5291, 3671],[5285, 3745],[5407, 3881],[5531, 3749],[5381, 3573]],
          icono: getIconoCategoria('AULA', 'Aula 112'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'sala-adupec',
          nombre: 'Sala ADUPEC',
          coordenadas: [[5404, 3880],[5275, 4014],[5152, 3879],[5159, 3743],[5284, 3745]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Sala AUPEC'),
          color: getColorCategoria('SERVICIO'),
          categoria: 'SERVICIO',
        },
        {
          id: 'archivero-comercio-exterior',
          nombre: 'Archivero Comercio Exterior',
          coordenadas: [[4719, 3866],[4587, 4000],[4467, 3860],[4597, 3727],[4716, 3734]],
          icono: '📁',
          color: getColorCategoria('SERVICIO'),
          categoria: 'SERVICIO',
        },
        {
          id: 'aula-101',
          nombre: 'Aula 101',
          coordenadas: [[4592, 3726],[4595, 3662],[4504, 3554],[4345, 3721],[4467, 3860]],
          icono: getIconoCategoria('AULA', 'Aula 101'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-102',
          nombre: 'Aula 102',
          coordenadas: [[4396, 3431],[4503, 3554],[4341, 3723],[4218, 3583],[4357, 3430]],
          icono: getIconoCategoria('AULA', 'Aula 102'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-103',
          nombre: 'Aula 103',
          coordenadas: [[4356, 3430],[4199, 3599],[4077, 3465],[4236, 3299]],
          icono: getIconoCategoria('AULA', 'Aula 103'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso1-2',
          nombre: 'Baños',
          coordenadas: [[4268, 3219],[4328, 3179],[4430, 3295],[4333, 3398],[4228, 3280]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-104',
          nombre: 'Aula 104',
          coordenadas: [[4343, 3193],[4506, 3029],[4624, 3168],[4461, 3329]],
          icono: getIconoCategoria('AULA', 'Aula 104'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-105',
          nombre: 'Aula 105',
          coordenadas: [[4607, 3185],[4730, 3323],[4564, 3490],[4460, 3369],[4457, 3325]],
          icono: getIconoCategoria('AULA', 'Aula 105'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-106',
          nombre: 'Aula 106',
          coordenadas: [[4729, 3328],[4565, 3493],[4666, 3607],[4726, 3606],[4859, 3468],[4862, 3333]],
          icono: getIconoCategoria('AULA', 'Aula 106'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        }
      ]
    },
    // PISO 2
    {
      numero: 2,
      imagen: '/assets/images/edificio1-piso2.jpg',
      areas: [
        {
          id: 'coordinacion-de-area',
          nombre: 'Coordinacion de Area',
          coordenadas: [[5148, 3708],[5282, 3709],[5413, 3838],[5274, 3972],[5146, 3838]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Coordinacion de Area'),
          color: getColorCategoria('SERVICIO'),
          categoria: 'SERVICIO',
        },
        {
          id: 'aula-207',
          nombre: 'Aula 207',
          coordenadas: [[5151, 3588],[5019, 3455],[5016, 3334],[5149, 3321],[5313, 3479],[5216, 3586]],
          icono: getIconoCategoria('AULA', 'Aula 207'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-208',
          nombre: 'Aula 208',
          coordenadas: [[5151, 3323],[5314, 3479],[5430, 3368],[5430, 3332],[5281, 3191]],
          icono: getIconoCategoria('AULA', 'Aula 208'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-209',
          nombre: 'Aula 209',
          coordenadas: [[5429, 3329],[5260, 3180],[5385, 3047],[5550, 3208]],
          icono: getIconoCategoria('AULA', 'Aula 209'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso2-1',
          nombre: 'Baños',
          coordenadas: [[5458, 3306],[5567, 3197],[5631, 3237],[5665, 3292],[5556, 3404]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-210',
          nombre: 'Aula 210',
          coordenadas: [[5528, 3436],[5659, 3305],[5814, 3466],[5686, 3597]],
          icono: getIconoCategoria('AULA', 'Aula 210'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-211',
          nombre: 'Aula 211',
          coordenadas: [[5669, 3582],[5538, 3709],[5381, 3548],[5490, 3433],[5536, 3434]],
          icono: getIconoCategoria('AULA', 'Aula 211'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-212',
          nombre: 'Aula 212',
          coordenadas: [[5379, 3550],[5284, 3643],[5282, 3714],[5414, 3833],[5535, 3704]],
          icono: getIconoCategoria('AULA', 'Aula 212'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'direccion-administracionpublica',
          nombre: 'Direccion Administracion Publica',
          coordenadas: [[4703, 3709],[4701, 3839],[4573, 3971],[4443, 3843],[4571, 3709]],
          icono: getIconoCategoria('ADMINISTRATIVO', 'Direccion Administracion Publica'),
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO',
          direccion: 'PhD. Wladimir Pérez'
        },
        {
          id: 'aula-201',
          nombre: 'Aula 201',
          coordenadas: [[4570, 3644],[4468, 3544],[4313, 3709],[4443, 3834],[4570, 3708]],
          icono: getIconoCategoria('AULA', 'Aula 201'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-202',
          nombre: 'Aula 202',
          coordenadas: [[4467, 3543],[4311, 3706],[4183, 3575],[4319, 3433],[4363, 3431]],
          icono: getIconoCategoria('AULA', 'Aula 202'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-203',
          nombre: 'Aula 203',
          coordenadas: [[4319, 3429],[4166, 3593],[4035, 3471],[4192, 3308]],
          icono: getIconoCategoria('AULA', 'Aula 203'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'banos-piso2-2',
          nombre: 'Baños',
          coordenadas: [[4187, 3292],[4222, 3230],[4286, 3197],[4389, 3300],[4301, 3399]],
          icono: getIconoCategoria('BAÑOS', 'Baños'),
          color: getColorCategoria('BAÑOS'),
          categoria: 'BAÑOS'
        },
        {
          id: 'aula-204',
          nombre: 'Aula 204',
          coordenadas: [[4302, 3203],[4394, 3304],[4441, 3315],[4597, 3171],[4462, 3040]],
          icono: getIconoCategoria('AULA', 'Aula 204'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'aula-205',
          nombre: 'Aula 205',
          coordenadas: [[4575, 3190],[4420, 3333],[4422, 3367],[4540, 3483],[4705, 3324]],
          icono: getIconoCategoria('AULA', 'Aula 205'),
          color: getColorCategoria('AULA'),
          categoria: 'AULA'
        },
        {
          id: 'Sala-docentes-Administracion-Publica',
          nombre: 'Sala docentes Administracion Publica',
          coordenadas: [[4543, 3487],[4704, 3325],[4836, 3332],[4834, 3452],[4698, 3587],[4642, 3594]],
          icono: '👨‍💻',
          color: getColorCategoria('ADMINISTRATIVO'),
          categoria: 'ADMINISTRATIVO'
        }
      ]
    }
  ]
};
// EXPORTAR TODOS LOS EDIFICIOS ESPECÍFICOS
export const edificiosEspecificos: EdificioEspecifico[] = [
  edificio4,
  edificio3,
  edificio2,
  edificio1
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
