// src/components/SliderContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SliderContextType {
  isOpen: boolean;
  activeItem: any;
  options: any;
  openSlider: (item: any, options?: any) => void;
  closeSlider: () => void;
}

const SliderContext = createContext<SliderContextType | undefined>(undefined);

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