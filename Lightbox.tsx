import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, User, Tag, Download, Heart, Share2 } from 'lucide-react';
import { Image } from '../types';

interface LightboxProps {
  image: Image | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (image) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [image, onClose, onNext, onPrev]);

  if (!image) return null;

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Nature: 'bg-gradient-to-r from-green-600 to-emerald-700 text-white',
      Urban: 'bg-gradient-to-r from-slate-600 to-gray-700 text-white',
      Architecture: 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white',
      Art: 'bg-gradient-to-r from-purple-600 to-violet-700 text-white',
      Portrait: 'bg-gradient-to-r from-orange-600 to-red-700 text-white'
    };
    return colors[category] || 'bg-gradient-to-r from-slate-500 to-slate-600 text-white';
  };

  const handleDownload = () => {
    console.log(`Downloading image: ${image.title}`);
    // In a real app, this would trigger the download
  };

  const handleLike = () => {
    console.log(`Liking image: ${image.title}`);
    // In a real app, this would update the like status
  };

  const handleShare = () => {
    console.log(`Sharing image: ${image.title}`);
    // In a real app, this would open share options
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative max-w-6xl max-h-full w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
          {/* Image */}
          <div className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full max-h-[70vh] object-contain bg-gray-100"
            />
          </div>
          
          {/* Image Details */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{image.title}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <User className="w-5 h-5 mr-3" />
                  <span className="text-lg font-medium">{image.photographer}</span>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${getCategoryColor(image.category)}`}>
                <Tag className="w-4 h-4 inline mr-2" />
                {image.category}
              </span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleDownload}
                  className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 font-semibold"
                >
                  <Download className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button 
                  onClick={handleLike}
                  className="flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full hover:bg-emerald-200 hover:text-emerald-800 transition-all duration-300 font-semibold"
                >
                  <Heart className="w-4 h-4" />
                  <span>Love</span>
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center space-x-2 bg-green-100 text-green-700 px-6 py-3 rounded-full hover:bg-green-200 hover:text-green-800 transition-all duration-300 font-semibold"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
              
              <div className="text-gray-500 text-sm">
                Press <kbd className="px-2 py-1 bg-gray-100 rounded">ESC</kbd> to close
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;