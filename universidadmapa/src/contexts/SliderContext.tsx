import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos de elementos que pueden mostrarse en el slider
export type ElementType = 'estacionamiento' | 'edificio' | 'deportivo';

// Tipo para la información que se muestra en el slider
export interface SliderInfo {
  type: ElementType;
  floorIndex?: number; // Solo para edificios
}

export interface SliderContextType {
  isOpen: boolean;
  activeElement: any | null;
  sliderInfo: SliderInfo | null;
  openSlider: (element: any, info: SliderInfo) => void;
  closeSlider: () => void;
  updateFloor: (floorIndex: number) => void;
}

const SliderContext = createContext<SliderContextType | undefined>(undefined);

export const SliderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeElement, setActiveElement] = useState<any | null>(null);
  const [sliderInfo, setSliderInfo] = useState<SliderInfo | null>(null);

  const openSlider = (element: any, info: SliderInfo) => {
    setActiveElement(element);
    setSliderInfo(info);
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
    // No limpiamos los datos inmediatamente para permitir una animación de cierre suave
    setTimeout(() => {
      if (!isOpen) {
        setActiveElement(null);
        setSliderInfo(null);
      }
    }, 300); // Ajustar según la duración de la transición CSS
  };

  const updateFloor = (floorIndex: number) => {
    if (sliderInfo && sliderInfo.type === 'edificio') {
      setSliderInfo({
        ...sliderInfo,
        floorIndex
      });
    }
  };

  return (
    <SliderContext.Provider
      value={{
        isOpen,
        activeElement,
        sliderInfo,
        openSlider,
        closeSlider,
        updateFloor
      }}
    >
      {children}
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