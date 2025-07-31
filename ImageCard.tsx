import React from 'react';
import { User, Tag, Heart, Eye, Download } from 'lucide-react';
import { Image } from '../types';

interface ImageCardProps {
  image: Image;
  viewMode: 'grid' | 'masonry' | 'list';
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, viewMode, onClick }) => {
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

  const handleCardClick = () => {
    onClick();
    console.log(`Opening image: ${image.title}`);
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden border border-white/30 group"
        onClick={handleCardClick}
      >
        <div className="flex">
          <div className="w-64 h-40 flex-shrink-0 relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">{image.title}</h3>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${getCategoryColor(image.category)}`}>
                  <Tag className="w-4 h-4 inline mr-2" />
                  {image.category}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <User className="w-5 h-5 mr-3" />
                <span className="text-lg font-medium">{image.photographer}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">1.2k</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">89</span>
                </div>
              </div>
              <button className="text-emerald-600 hover:text-emerald-700 font-semibold">View Details</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-black/40 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 overflow-hidden group border border-white/20"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg ${getCategoryColor(image.category)}`}>
            <Tag className="w-3 h-3 inline mr-1" />
            {image.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span className="text-sm">1.2k</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span className="text-sm">89</span>
              </div>
            </div>
            <Download className="w-5 h-5 hover:text-yellow-400 transition-colors duration-200" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">{image.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white/80">
            <User className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{image.photographer}</span>
          </div>
          <button className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm">View</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;