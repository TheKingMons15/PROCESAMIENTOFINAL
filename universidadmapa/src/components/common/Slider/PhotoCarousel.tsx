// src/components/common/Slider/PhotoCarousel.tsx
import React from 'react';

interface PhotoCarouselProps {
  photos: string[];
  onPhotoClick: (index: number) => void;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos, onPhotoClick }) => {
  if (!photos || photos.length === 0) return null;
  
  return (
    <div className="photo-carousel-container">
      <h3 className="carousel-title">Fotografías</h3>
      
      <div className="photo-grid">
        {photos.slice(0, 9).map((photo, index) => (
          <div 
            key={index}
            onClick={() => onPhotoClick(index)}
            className="photo-thumbnail"
          >
            <img 
              src={photo} 
              alt={`Imagen ${index + 1}`}
              className="thumbnail-image"
            />
            {index === 8 && photos.length > 9 && (
              <div className="more-photos-overlay">
                +{photos.length - 9}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;