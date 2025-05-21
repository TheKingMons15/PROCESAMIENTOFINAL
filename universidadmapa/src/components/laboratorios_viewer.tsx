import React, { useState } from 'react';
// Componentes de íconos personalizados
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// Datos específicos de laboratorios
const LABORATORIOS_DATA = {
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
      imagen: '/assets/images/laboratorios_piso_0.png',
      instalaciones: [
        { nombre: 'Agropecuaria', icono: '🏢' },
        { nombre: 'Alimentos', icono: '🧰' },
        { nombre: 'Turismo', icono: '⚗' },
        { nombre: 'Logistica', icono: '' },
        { nombre: 'Enfermeria', icono: '⚗' },
        { nombre: 'Laboratorio Clinico', icono: '⚗' },
        { nombre: 'Educacion Basica', icono: '⚗' },
      ]
    },
    {
      numero: 1,
      nombre: 'Primer Piso',
      imagen: '/assets/images/laboratorios_piso_1.png',
      instalaciones: [
        { nombre: 'Laboratorio de Enfermeria', icono: '🔬' },
        { nombre: 'Laboratorio de Alimentos', icono: '🧪' },
        { nombre: 'Parque Softs', icono: '⚗' }
      ]
    },
    {
      numero: 2,
      nombre: 'Segundo Piso',
      imagen: '/assets/images/laboratorios_piso_2.png',
      instalaciones: [
        { nombre: 'Laboratorio Clinico', icono: '🧬' },
        { nombre: 'Enfemeria', icono: '📋' }
      ]
    }
  ]
};

// Para cada piso, crearemos un array de imágenes (una principal y dos vacías para el carrusel)
const pisosConImagenes = LABORATORIOS_DATA.pisos.map(piso => ({
  ...piso,
  imagenes: [
    piso.imagen, 
    '/api/placeholder/600/360', 
    '/api/placeholder/600/360'
  ]
}));

// Componente simple de laboratorios
const LaboratoriosViewerSimple: React.FC = () => {
  const [activePiso, setActivePiso] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Encontrar el piso activo
  const currentPiso = pisosConImagenes.find(piso => piso.numero === activePiso) || pisosConImagenes[0];

  // Navegar entre imágenes
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Asumimos 3 imágenes por piso
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Asumimos 3 imágenes por piso
  };

  return (
    <div className="max-w-md bg-white">
      {/* Encabezado */}
      <div className="mb-3">
        <h2 className="text-xl text-green-800 font-medium">{LABORATORIOS_DATA.nombre}</h2>
        <div className="flex items-center mb-2">
          <div className="px-3 py-1 text-xs font-bold rounded-full" style={{backgroundColor: LABORATORIOS_DATA.color}}>
            Edificio {LABORATORIOS_DATA.tipo}
          </div>
        </div>
        <p className="text-sm text-gray-600">{LABORATORIOS_DATA.descripcion}</p>
      </div>
      
      {/* Navegación entre pisos */}
      <div className="flex space-x-2 mb-3">
        {LABORATORIOS_DATA.pisos.map(piso => (
          <button
            key={piso.numero}
            onClick={() => {
              setActivePiso(piso.numero);
              setCurrentImageIndex(0); // Resetea el índice de imagen al cambiar de piso
            }}
            className={`w-8 h-8 text-center ${
              activePiso === piso.numero 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } rounded`}
          >
            {piso.numero}
          </button>
        ))}
      </div>
      
      {/* Carrusel de imágenes */}
      <div className="relative h-48 rounded overflow-hidden bg-gray-200">
        <img 
          src={currentPiso.imagenes[currentImageIndex]} 
          alt={`Vista del ${currentPiso.nombre}`} 
          className="w-full h-full object-cover"
        />
        
        {/* Controles de navegación */}
        <div className="absolute inset-0 flex justify-between items-center px-2">
          <button 
            onClick={goToPreviousImage}
            className="bg-black bg-opacity-40 text-white p-1 rounded-full hover:bg-opacity-60"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={goToNextImage}
            className="bg-black bg-opacity-40 text-white p-1 rounded-full hover:bg-opacity-60"
          >
            <ChevronRight />
          </button>
        </div>
        
        {/* Indicador de imágenes (puntos) */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
          {[0, 1, 2].map((index) => (
            <button 
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
        
        {/* Etiqueta del piso */}
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white px-4 py-1 text-sm">
          Piso {currentPiso.numero}
        </div>
      </div>
      
      {/* Miniaturas */}
      <div className="flex mt-1 space-x-1 overflow-x-auto py-1">
        {currentPiso.imagenes.map((image, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentImageIndex(index)}
            className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden ${
              index === currentImageIndex ? 'ring-1 ring-green-500' : 'opacity-80'
            }`}
          >
            <img 
              src={image} 
              alt={`Miniatura ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Información del piso */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-green-700 mb-2">{currentPiso.nombre}</h3>
        
        {/* Instalaciones */}
        <div className="mt-2">
          {currentPiso.instalaciones.map((instalacion, index) => (
            <div key={index} className="flex items-center py-2">
              <span className="text-xl mr-3">{instalacion.icono || '🔹'}</span>
              <span className="text-sm">{instalacion.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaboratoriosViewerSimple;