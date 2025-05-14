// src/components/common/Slider/PhotoModal.tsx
import React, { useEffect, useRef } from 'react';

interface PhotoModalProps {
  isOpen: boolean;
  photos: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ 
  isOpen, 
  photos, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  // Click fuera del modal para cerrar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen || photos.length === 0) return null;
  
  const currentPhoto = photos[currentIndex];
  
  return (
    <div className="photo-modal-overlay">
      <div 
        ref={modalRef}
        className="photo-modal-container"
      >
        <div className="photo-modal-header">
          <span className="photo-counter">{`${currentIndex + 1} / ${photos.length}`}</span>
          <button 
            onClick={onClose}
            className="modal-close-button"
          >
            ✕
          </button>
        </div>
        
        <div className="photo-display-container">
          <img 
            src={currentPhoto} 
            alt={`Imagen ${currentIndex + 1}`}
            className="full-size-photo"
          />
          
          {photos.length > 1 && (
            <>
              <button 
                onClick={onPrev}
                className="nav-button prev-button"
              >
                ‹
              </button>
              
              <button 
                onClick={onNext}
                className="nav-button next-button"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;