import React from 'react';
import { Image, ViewMode } from '../types';
import ImageCard from './ImageCard';

interface ImageGalleryProps {
  images: Image[];
  viewMode: ViewMode;
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, viewMode, onImageClick }) => {
  const getGridClasses = () => {
    switch (viewMode) {
      case 'grid':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      case 'masonry':
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6';
      case 'list':
        return 'space-y-6';
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    }
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-20 bg-black/25 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 hover:bg-black/35 transition-all duration-300">
        <div className="text-8xl mb-6 animate-bounce">🔍</div>
        <h3 className="text-2xl font-semibold text-white mb-2">Let's find something amazing!</h3>
        <p className="text-white/70 text-lg">Try a different search term or explore our categories</p>
        <div className="mt-6">
          <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
            Explore All Photos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={getGridClasses()}>
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`animate-fade-in ${viewMode === 'masonry' ? 'break-inside-avoid' : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ImageCard
            image={image}
            viewMode={viewMode}
            onClick={() => onImageClick(image)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;