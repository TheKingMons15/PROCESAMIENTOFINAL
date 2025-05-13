import React, { useEffect } from 'react';

interface SliderProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ isOpen, onClose, title, children }) => {
  // Manejar teclas (esc para cerrar)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Evitar scroll cuando el slider está abierto
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <div 
      className={`slider-container ${isOpen ? 'open' : ''}`}
      aria-hidden={!isOpen}
    >
      <div className="slider-header">
        <h2 className="slider-title">{title}</h2>
        <button 
          className="slider-close" 
          onClick={onClose} 
          aria-label="Cerrar panel"
          type="button"
        >
          &times;
        </button>
      </div>
      <div className="slider-content">
        {children}
      </div>
      

    </div>
  );
};

export default Slider;