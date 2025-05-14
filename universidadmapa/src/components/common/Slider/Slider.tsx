// src/components/common/Slider/Slider.tsx
import React, { useEffect, useRef } from 'react';
import './Slider.css';

interface SliderProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ isOpen, onClose, title, children }) => {
  const previousChildrenRef = useRef<React.ReactNode>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Guardar los children previos para comparar si han cambiado
  useEffect(() => {
    if (children) {
      previousChildrenRef.current = children;
    }
  }, [children]);
  
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
  
  // Efecto para scroll al inicio cuando cambia el contenido
  useEffect(() => {
    if (isOpen && sliderRef.current && children !== previousChildrenRef.current) {
      sliderRef.current.scrollTop = 0;
    }
  }, [isOpen, children]);

  return (
    <div 
      className={`slider-container ${isOpen ? 'open' : ''}`}
      aria-hidden={!isOpen}
      ref={sliderRef}
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