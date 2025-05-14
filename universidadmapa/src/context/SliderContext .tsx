import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SliderContextType {
  isOpen: boolean;
  activeItem: any; // Puedes tiparlo más específicamente
  activeItemType: string;
  activeFloor: number;
  isPhotoModalOpen: boolean;
  currentPhotoIndex: number;
  photosList: string[];
  
  openSlider: (item: any, type: string) => void;
  closeSlider: () => void;
  changeFloor: (floorIndex: number) => void;
  openPhotoModal: (index: number, photos: string[]) => void;
  closePhotoModal: () => void;
  nextPhoto: () => void;
  prevPhoto: () => void;
}

const SliderContext = createContext<SliderContextType | undefined>(undefined);

export const SliderContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<any>(null);
  const [activeItemType, setActiveItemType] = useState<string>('');
  const [activeFloor, setActiveFloor] = useState(0);
  
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [photosList, setPhotosList] = useState<string[]>([]);

  const openSlider = (item: any, type: string) => {
    setActiveItem(item);
    setActiveItemType(type);
    setActiveFloor(0); // Reset floor when opening a new item
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
    // Opcional: reset data después de cerrar
    // setTimeout(() => {
    //   if (!isOpen) {
    //     setActiveItem(null);
    //     setActiveItemType('');
    //   }
    // }, 300);
  };

  const changeFloor = (floorIndex: number) => {
    setActiveFloor(floorIndex);
  };

  const openPhotoModal = (index: number, photos: string[]) => {
    setCurrentPhotoIndex(index);
    setPhotosList(photos);
    setIsPhotoModalOpen(true);
  };

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
  };

  const nextPhoto = () => {
    if (photosList.length > 0) {
      setCurrentPhotoIndex((prev) => (prev + 1) % photosList.length);
    }
  };

  const prevPhoto = () => {
    if (photosList.length > 0) {
      setCurrentPhotoIndex((prev) => (prev - 1 + photosList.length) % photosList.length);
    }
  };

  return (
    <SliderContext.Provider
      value={{
        isOpen,
        activeItem,
        activeItemType,
        activeFloor,
        isPhotoModalOpen,
        currentPhotoIndex,
        photosList,
        openSlider,
        closeSlider,
        changeFloor,
        openPhotoModal,
        closePhotoModal,
        nextPhoto,
        prevPhoto
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSliderContext = () => {
  const context = useContext(SliderContext);
  if (context === undefined) {
    throw new Error('useSliderContext must be used within a SliderContextProvider');
  }
  return context;
};