import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Building, SliderInfo } from '@/types';

interface SliderContextType {
  isOpen: boolean;
  activeBuilding: Building | null;
  sliderInfo: SliderInfo | null;
  openSlider: (building: Building, info: SliderInfo) => void;
  closeSlider: () => void;
  updateSliderInfo: (info: SliderInfo) => void;
}

const SliderContext = createContext<SliderContextType | undefined>(undefined);

export const SliderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBuilding, setActiveBuilding] = useState<Building | null>(null);
  const [sliderInfo, setSliderInfo] = useState<SliderInfo | null>(null);

  const openSlider = (building: Building, info: SliderInfo) => {
    setActiveBuilding(building);
    setSliderInfo(info);
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
    // No limpiamos los datos inmediatamente para permitir una animación de cierre suave
    setTimeout(() => {
      if (!isOpen) {
        setActiveBuilding(null);
        setSliderInfo(null);
      }
    }, 300); // Ajustar según la duración de la transición CSS
  };

  const updateSliderInfo = (info: SliderInfo) => {
    setSliderInfo(info);
  };

  return (
    <SliderContext.Provider
      value={{
        isOpen,
        activeBuilding,
        sliderInfo,
        openSlider,
        closeSlider,
        updateSliderInfo,
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