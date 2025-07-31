import React from 'react';
import { Search, Sparkles, Image, Palette, Award } from 'lucide-react';

interface HeroSectionProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ searchTerm, onSearchChange }) => {
  const handleSuggestionClick = (suggestion: string) => {
    onSearchChange(suggestion);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/25 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-lime-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-emerald-400/15 rounded-full blur-xl animate-float"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Title */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl mr-4 hover:shadow-emerald-500/40 transition-all duration-300">
              <Image className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                PixelCanvas
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
            Where every moment becomes a <span className="text-emerald-300 font-semibold">masterpiece</span> - 
            Discover breathtaking <span className="text-green-200 font-semibold">visual stories</span> that inspire, 
            connect, and celebrate the beauty around us
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-white/80 mb-12">
            <Sparkles className="w-6 h-6 text-emerald-300" />
            <span className="text-lg font-medium drop-shadow-sm">Inspiring • Diverse • Accessible to All</span>
            <Sparkles className="w-6 h-6 text-emerald-300" />
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Find your next inspiration - search photos, artists, or themes..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-16 pr-6 py-6 bg-black/30 backdrop-blur-lg border border-white/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-400/50 focus:border-emerald-300/70 transition-all duration-300 text-white placeholder-white/70 text-lg shadow-2xl hover:bg-black/40"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/10 to-green-400/10 pointer-events-none"></div>
          </div>
          
          {/* Search Suggestions */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {['Nature', 'People', 'Urban Life', 'Animals', 'Buildings'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-6 py-3 bg-black/25 backdrop-blur-sm border border-white/30 rounded-xl text-white hover:text-emerald-200 hover:bg-black/40 hover:border-emerald-300/50 transition-all duration-300 font-medium hover:scale-105 shadow-lg"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center bg-black/25 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-black/35 hover:border-emerald-300/40 transition-all duration-300 group shadow-xl">
            <Image className="w-10 h-10 text-emerald-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-4xl font-bold text-white mb-3 drop-shadow-sm">50,000+</div>
            <div className="text-white/80 text-lg">Amazing Photos</div>
          </div>
          <div className="text-center bg-black/25 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-black/35 hover:border-green-300/40 transition-all duration-300 group shadow-xl">
            <Palette className="w-10 h-10 text-green-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-4xl font-bold text-white mb-3 drop-shadow-sm">2,500+</div>
            <div className="text-white/80 text-lg">Talented Creators</div>
          </div>
          <div className="text-center bg-black/25 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-black/35 hover:border-lime-300/40 transition-all duration-300 group shadow-xl">
            <Award className="w-10 h-10 text-lime-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-4xl font-bold text-white mb-3 drop-shadow-sm">4.8★</div>
            <div className="text-white/80 text-lg">Community Love</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;