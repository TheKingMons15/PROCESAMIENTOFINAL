// src/components/SliderContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Definiciones de tipos para laboratorios
export interface Instalacion {
  nombre: string;
  icono: string;
}

export interface Piso {
  numero: number;
  nombre: string;
  imagen: string;
  instalaciones: Instalacion[];
  imagenes?: string[];
}

export interface Edificio {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  color: string;
  coordenadas: number[][];
  pisos: Piso[];
}

// Contexto para el slider
interface SliderContextType {
  isOpen: boolean;
  activeItem: any;
  options: any;
  openSlider: (item: any, options?: any) => void;
  closeSlider: () => void;
}

const SliderContext = createContext<SliderContextType | undefined>(undefined);

// Componentes de íconos personalizados para el visualizador
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

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Componente para manejar el Slider
export const SliderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<any>(null);
  const [options, setOptions] = useState<any>(null);

  const openSlider = (item: any, options?: any) => {
    setActiveItem(item);
    setOptions(options);
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
    // Opcional: Limpiar datos al cerrar con un pequeño retraso
    setTimeout(() => {
      if (!isOpen) {
        setActiveItem(null);
        setOptions(null);
      }
    }, 300);
  };

  return (
    <SliderContext.Provider
      value={{
        isOpen,
        activeItem,
        options,
        openSlider,
        closeSlider
      }}
    >
      {children}
      <LaboratoriosSlider />
    </SliderContext.Provider>
  );
};

export const useSlider = (): SliderContextType => {
  const context = useContext(SliderContext);
  if (context === undefined) {
    throw new Error('useSlider must be used within a SliderProvider');
  }
  return context;
};

// Componente LaboratoriosSlider integrado
export const LaboratoriosSlider: React.FC = () => {
  const { isOpen, activeItem, closeSlider } = useSlider();
  
  const [activePiso, setActivePiso] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Restablecer el estado cuando cambia el elemento activo
  useEffect(() => {
    if (activeItem) {
      setActivePiso(0);
      setCurrentImageIndex(0);
    }
  }, [activeItem]);
  
  // Si el slider no está abierto o el item activo no es un laboratorio, no mostramos nada
  if (!isOpen || !activeItem || activeItem.id !== 'laboratorios') {
    return null;
  }

  // Encontrar el piso activo
  const currentPiso = activeItem.pisos.find((piso: Piso) => piso.numero === activePiso) || activeItem.pisos[0];
  
  // Para cada piso, aseguramos que tenga un array de imágenes
  const getImages = (piso: Piso): string[] => {
    if (piso.imagenes && piso.imagenes.length > 0) {
      return piso.imagenes;
    }
    // Si no tiene imágenes, crear un array con la imagen principal y placeholders
    return [
      piso.imagen,
      '/api/placeholder/600/360',
      '/api/placeholder/600/360'
    ];
  };

  const images = getImages(currentPiso);

  // Navegar entre imágenes
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
      {/* Overlay/background oscuro */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={closeSlider}
      ></div>
      
      {/* Panel del slider */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300">
        {/* Cabecera del slider */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-medium text-gray-800">{activeItem.nombre}</h2>
          <button 
            onClick={closeSlider}
            className="p-1 rounded-full hover:bg-gray-100 focus:outline-none"
          >
            <CloseIcon />
          </button>
        </div>
        
        {/* Contenido del slider */}
        <div className="p-4">
          {/* Encabezado */}
          <div className="mb-3">
            <div className="flex items-center mb-2">
              <div className="px-3 py-1 text-xs font-bold rounded-full" style={{backgroundColor: activeItem.color}}>
                Edificio {activeItem.tipo}
              </div>
            </div>
            <p className="text-sm text-gray-600">{activeItem.descripcion}</p>
          </div>
          
          {/* Navegación entre pisos */}
          <div className="flex space-x-2 mb-3">
            {activeItem.pisos.map((piso: Piso) => (
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
              src={images[currentImageIndex]} 
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
              {images.map((_, index) => (
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
            {images.map((image, index) => (
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
                {currentPiso.instalaciones.map((instalacion: Instalacion, index: number) => (
                   <div key={index} className="flex items-center py-2">
                   <span className="text-xl mr-3">{instalacion.icono || '🔹'}</span>
                   <span className="text-sm">{instalacion.nombre}</span>
                   </div>
                ))} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};