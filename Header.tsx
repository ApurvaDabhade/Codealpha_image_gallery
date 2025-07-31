import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4 animate-fade-in">
        📷 Photo Gallery
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Discover amazing <span className="text-purple-600 font-semibold">photography</span> from 
        <span className="text-pink-600 font-semibold"> talented artists</span>
      </p>
      
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search photos..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
        />
      </div>
    </div>
  );
};

export default Header;